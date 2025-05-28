import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, projectType, message } = body;

    // Validate required fields
    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email to your business email
    const { error } = await resend.emails.send({
      from: 'Kiiro Contact Form <noreply@resend.abdullahsaeed.me>',
      to: ['abdullah.saeed1724@gmail.com'], // Replace with your business email
      subject: `New Contact Form Submission - ${projectType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FFEC00; background: #000; padding: 20px; margin: 0;">
            New Contact Form Submission
          </h2>
          
          <div style="padding: 20px; background: #f9f9f9;">
            <h3 style="color: #333; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            
            <h3 style="color: #333;">Project Information</h3>
            <p><strong>Project Type:</strong> ${projectType}</p>
            
            <h3 style="color: #333;">Message</h3>
            <div style="background: white; padding: 15px; border-left: 4px solid #FFEC00;">
              ${message.replace(/\n/g, '<br>')}
            </div>
            
            <div style="margin-top: 30px; padding: 15px; background: #e8f4f8; border-radius: 5px;">
              <p style="margin: 0; color: #666;">
                <strong>Next Steps:</strong> Reply to this email or call ${name} at their provided contact information to discuss their project requirements.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Send confirmation email to the user
    await resend.emails.send({
      from: 'Kiiro Team <noreply@resend.abdullahsaeed.me>',
      to: [email],
      subject: 'Thanks for reaching out to Kiiro!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FFEC00; background: #000; padding: 20px; margin: 0;">
            Thanks for reaching out!
          </h2>
          
          <div style="padding: 20px;">
            <p>Hi ${name},</p>
            
            <p>Thanks for your interest in working with Kiiro! We've received your message about your <strong>${projectType}</strong> project and we're excited to learn more.</p>
            
            <p><strong>What happens next?</strong></p>
            <ul>
              <li>We'll review your project details within 24 hours</li>
              <li>Our team will prepare a custom proposal based on your requirements</li>
              <li>We'll reach out to schedule a brief call to discuss your vision</li>
            </ul>
            
            <p>In the meantime, feel free to check out our recent work and client results on our website.</p>
            
            <div style="margin: 30px 0; padding: 20px; background: #f9f9f9; border-radius: 5px;">
              <p style="margin: 0;"><strong>Your submission details:</strong></p>
              <p style="margin: 5px 0;"><strong>Project Type:</strong> ${projectType}</p>
              <p style="margin: 5px 0;"><strong>Message:</strong> ${message}</p>
            </div>
            
            <p>Best regards,<br>
            The Kiiro Team</p>
            
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
            <p style="font-size: 12px; color: #666;">
              If you have any urgent questions, feel free to reply to this email or reach out to us directly at abdullah.saeed1724@gmail.com
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 