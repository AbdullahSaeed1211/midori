import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@/lib/supabase/server'
import prisma from '@/lib/prisma'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2026-01-28.clover',
})

const PRICES = {
  starter: process.env.STRIPE_PRICE_STARTER || 'price_starter',
  pro: process.env.STRIPE_PRICE_PRO || 'price_pro',
  premium: process.env.STRIPE_PRICE_PREMIUM || 'price_premium',
}

const PLAN_DETAILS = {
  starter: {
    name: 'Starter Care',
    price: 29,
    description: 'Perfect for simple websites that need basic maintenance',
  },
  pro: {
    name: 'Pro Care',
    price: 49,
    description: 'Most popular. Complete peace of mind for growing businesses',
  },
  premium: {
    name: 'Premium Care',
    price: 99,
    description: 'For businesses that need dedicated attention',
  },
}

export async function POST(req: NextRequest) {
  try {
    // Verify authentication
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }

    // Get client from database
    const client = await prisma.client.findUnique({
      where: { userId: user.id },
    })

    if (!client) {
      return NextResponse.json({ error: 'Client not found' }, { status: 404 })
    }

    // Check for existing active subscription
    const existingSub = await prisma.subscription.findFirst({
      where: {
        clientId: client.id,
        status: 'active',
      },
    })

    if (existingSub) {
      return NextResponse.json({ 
        error: 'Active subscription already exists',
        currentPlan: existingSub.plan 
      }, { status: 400 })
    }

    const { plan } = await req.json()
    
    const priceId = PRICES[plan as keyof typeof PRICES]
    const planDetails = PLAN_DETAILS[plan as keyof typeof PLAN_DETAILS]!
    
    if (!priceId || !planDetails) {
      return NextResponse.json({ error: 'Invalid plan selected' }, { status: 400 })
    }

    // Get or create Stripe customer
    let customerId = client.stripeCustomerId
    
    if (!customerId) {
      const customer = await stripe.customers.create({
        email: client.email,
        name: client.name || undefined,
        metadata: {
          clientId: client.id,
          userId: user.id,
        },
      })
      customerId = customer.id
      
      await prisma.client.update({
        where: { id: client.id },
        data: { stripeCustomerId: customerId },
      })
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      customer: customerId,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://kiiro.cx'}/hosting/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://kiiro.cx'}/hosting`,
      metadata: {
        plan,
        clientId: client.id,
        userId: user.id,
        planName: planDetails.name,
        planPrice: String(planDetails.price),
      },
      subscription_data: {
        metadata: {
          clientId: client.id,
          userId: user.id,
          plan,
        },
      },
      allow_promotion_codes: true,
      billing_address_collection: 'required',
      phone_number_collection: {
        enabled: true,
      },
    })

    return NextResponse.json({ 
      url: session.url,
      plan: planDetails,
    })
  } catch (error) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 })
  }
}
