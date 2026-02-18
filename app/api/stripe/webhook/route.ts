import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import prisma from '@/lib/prisma'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2026-01-28.clover',
})

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || ''

export async function POST(req: NextRequest) {
  const body = await req.text()
  const signature = req.headers.get('stripe-signature') || ''

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (error) {
    console.error('Webhook signature verification failed:', error)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        const customerId = session.customer as string
        const customerEmail = session.customer_email || session.customer_details?.email
        const customerName = session.customer_details?.name
        const plan = session.metadata?.plan || 'pro'
        
        if (!customerEmail) break

        const existingClient = await prisma.client.findUnique({
          where: { email: customerEmail }
        })

        if (existingClient) {
          await prisma.client.update({
            where: { id: existingClient.id },
            data: { stripeCustomerId: customerId }
          })
          
          await prisma.subscription.create({
            data: {
              clientId: existingClient.id,
              stripeSubscriptionId: session.subscription as string,
              stripePriceId: session.line_items?.data[0]?.price?.id,
              plan,
              status: 'active',
              currentPeriodStart: new Date(),
            }
          })
        } else {
          const newClient = await prisma.client.create({
            data: {
              email: customerEmail,
              name: customerName || customerEmail.split('@')[0],
              stripeCustomerId: customerId,
            }
          })

          await prisma.subscription.create({
            data: {
              clientId: newClient.id,
              stripeSubscriptionId: session.subscription as string,
              stripePriceId: session.line_items?.data[0]?.price?.id,
              plan,
              status: 'active',
              currentPeriodStart: new Date(),
            }
          })
        }
        break
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription
        const subData = subscription as unknown as { current_period_start?: number; current_period_end?: number }
        
        await prisma.subscription.updateMany({
          where: { stripeSubscriptionId: subscription.id },
          data: {
            status: subscription.status === 'active' ? 'active' : 
                    subscription.status === 'past_due' ? 'past_due' :
                    subscription.status === 'canceled' ? 'cancelled' : 'active',
            currentPeriodStart: subData.current_period_start ? new Date(subData.current_period_start * 1000) : null,
            currentPeriodEnd: subData.current_period_end ? new Date(subData.current_period_end * 1000) : null,
          }
        })
        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription
        
        await prisma.subscription.updateMany({
          where: { stripeSubscriptionId: subscription.id },
          data: { status: 'cancelled' }
        })
        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice
        const invoiceData = invoice as unknown as { subscription?: string }
        
        if (invoiceData.subscription) {
          await prisma.subscription.updateMany({
            where: { stripeSubscriptionId: invoiceData.subscription },
            data: { status: 'past_due' }
          })
        }
        break
      }
    }
  } catch (error) {
    console.error('Webhook handler error:', error)
  }

  return NextResponse.json({ received: true })
}
