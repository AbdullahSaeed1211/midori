import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy_key_for_build');

export async function POST(request: NextRequest) {
  try {
    // Check if API key is properly configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'dummy_key_for_build') {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 503 }
      );
    }

    const { name, email, company, projectType, rating, testimonial, permission } = await request.json();

    // Validate required fields
    if (!name || !email || !testimonial || !rating) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send notification email to Abdullah
    await resend.emails.send({
      from: 'testimonials@resend.abdullahsaeed.me',
      to: 'abdullah.saeed1724@gmail.com',
      subject: `New Testimonial Submission - ${rating} stars from ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8f9fa; padding: 20px;">
          <div style="background-color: #1a1a1a; color: #ffffff; padding: 30px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: #ffd100; margin: 0 0 10px 0; font-size: 24px;">New Testimonial Received</h1>
            <p style="color: #e0e0e0; margin: 0; font-size: 16px;">A new client testimonial has been submitted for kiiro.cx</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 25px;">
              <h2 style="color: #1a1a1a; margin: 0 0 15px 0; font-size: 20px; border-bottom: 2px solid #ffd100; padding-bottom: 10px;">Client Information</h2>
              <p style="margin: 8px 0; color: #333;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 8px 0; color: #333;"><strong>Email:</strong> ${email}</p>
              ${company ? `<p style="margin: 8px 0; color: #333;"><strong>Company:</strong> ${company}</p>` : ''}
              ${projectType ? `<p style="margin: 8px 0; color: #333;"><strong>Project Type:</strong> ${projectType}</p>` : ''}
            </div>

            <div style="margin-bottom: 25px;">
              <h2 style="color: #1a1a1a; margin: 0 0 15px 0; font-size: 20px; border-bottom: 2px solid #ffd100; padding-bottom: 10px;">Rating & Testimonial</h2>
              <div style="margin: 15px 0;">
                <strong style="color: #333;">Rating:</strong> 
                <span style="color: #ffd100; font-size: 20px; margin-left: 10px;">
                  ${'★'.repeat(parseInt(rating))}${'☆'.repeat(5 - parseInt(rating))}
                </span>
                <span style="color: #666; margin-left: 10px;">(${rating}/5)</span>
              </div>
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #ffd100;">
                <p style="margin: 0; color: #333; line-height: 1.6; font-style: italic;">"${testimonial}"</p>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <h2 style="color: #1a1a1a; margin: 0 0 15px 0; font-size: 20px; border-bottom: 2px solid #ffd100; padding-bottom: 10px;">Permissions</h2>
              <p style="margin: 8px 0; color: #333;">
                <strong>Public Use Permission:</strong> 
                <span style="color: ${permission ? '#28a745' : '#dc3545'}; font-weight: bold;">
                  ${permission ? 'YES - Can use publicly' : 'NO - Private testimonial only'}
                </span>
              </p>
            </div>

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
              <p style="margin: 0; color: #666; font-size: 14px;">Submitted on ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>
      `,
    });

    // Send thank you email to the client
    await resend.emails.send({
      from: 'hello@resend.abdullahsaeed.me',
      to: email,
      subject: 'Thank you for your testimonial! - kiiro.cx',
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8f9fa; padding: 20px;">
          <div style="background-color: #1a1a1a; color: #ffffff; padding: 30px; border-radius: 10px; margin-bottom: 20px; text-align: center;">
            <h1 style="color: #ffd100; margin: 0 0 10px 0; font-size: 28px;">Thank You, ${name}!</h1>
            <p style="color: #e0e0e0; margin: 0; font-size: 18px;">Your testimonial means the world to us</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              Hi ${name},
            </p>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              Thank you so much for taking the time to share your experience with kiiro.cx! Your feedback helps us continue delivering exceptional results for our clients.
            </p>

            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #ffd100; margin: 25px 0;">
              <p style="margin: 0; color: #333; line-height: 1.6; font-style: italic;">"${testimonial}"</p>
              <p style="margin: 15px 0 0 0; color: #666; font-size: 14px;">- ${name}${company ? `, ${company}` : ''}</p>
            </div>

            <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              Your ${rating}-star review helps other businesses discover how we can help them achieve similar results. We're thrilled that we could deliver value for your project!
            </p>

            <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              If you ever need any updates, additional features, or have another project in mind, please don't hesitate to reach out. We'd love to work with you again!
            </p>

            <div style="text-align: center; margin: 30px 0;">
              <a href="https://kiiro.cx" style="display: inline-block; background-color: #ffd100; color: #1a1a1a; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
                Visit kiiro.cx
              </a>
            </div>

            <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 10px;">
              Best regards,<br>
              <strong>The kiiro.cx Team</strong>
            </p>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center;">
              <p style="margin: 5px 0; color: #666; font-size: 14px;">
                <strong>kiiro.cx</strong> - Professional websites that convert
              </p>
              <p style="margin: 5px 0; color: #666; font-size: 14px;">
                Building success, one website at a time
              </p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Testimonial submitted successfully! Thank you for your feedback.' 
    });

  } catch (error) {
    console.error('Error processing testimonial:', error);
    return NextResponse.json(
      { error: 'Failed to process testimonial. Please try again.' },
      { status: 500 }
    );
  }
} 