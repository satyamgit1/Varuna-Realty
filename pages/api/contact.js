import nodemailer from 'nodemailer';

const createEmailTemplate = (contactInfo) => {
  const inquiryTypes = {
    general: '📋 General Inquiry',
    property: '🏠 Property Inquiry', 
    sale: '💰 Selling Inquiry',
    rent: '🔑 Rental Inquiry',
    investment: '📈 Investment Opportunity',
    feedback: '💬 Feedback',
    other: '❓ Other Question'
  };

  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Submission</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #f59e0b, #ef4444); padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .header h1 { color: white; margin: 0; font-size: 24px; }
        .content { padding: 30px; background: #ffffff; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px; }
        .details-grid { display: grid; grid-template-columns: 120px 1fr; gap: 15px; margin-bottom: 25px; }
        .detail-label { font-weight: 600; color: #6b7280; }
        .message-box { background: #f9fafb; padding: 20px; border-radius: 6px; border-left: 4px solid #f59e0b; margin-top: 20px; }
        .footer { margin-top: 30px; text-align: center; font-size: 12px; color: #9ca3af; }
        .logo { max-width: 180px; margin-bottom: 15px; }
        .urgency-tag { 
            display: inline-block; 
            padding: 4px 10px; 
            background: ${contactInfo.category === 'investment' ? '#dcfce7' : '#e0f2fe'}; 
            color: ${contactInfo.category === 'investment' ? '#166534' : '#075985'};
            border-radius: 20px; 
            font-size: 12px; 
            font-weight: 600;
            margin-left: 10px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>New Contact Submission</h1>
    </div>
    
    <div class="content">
        <div style="text-align: center; margin-bottom: 20px;">
            <img src="https://www.varunarealty.com/_next/image?url=%2Ffavicon4.ico&w=128&q=75" alt="Varuna Realty Logo" class="logo">
        </div>
        
        <div class="details-grid">
            <div class="detail-label">Client Name:</div>
            <div><strong>${contactInfo.name}</strong></div>
            
            <div class="detail-label">Contact Number:</div>
            <div><a href="tel:${contactInfo.phone}">${contactInfo.phone}</a></div>
            
            <div class="detail-label">Inquiry Type:</div>
            <div>
                ${inquiryTypes[contactInfo.category] || inquiryTypes.general}
                ${contactInfo.category === 'investment' ? '<span class="urgency-tag">HIGH PRIORITY</span>' : ''}
            </div>
            
            <div class="detail-label">Received At:</div>
            <div>${new Date().toLocaleString('en-US', { 
                weekday: 'short', 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })}</div>
        </div>
        
        <div>
            <div style="font-weight: 600; margin-bottom: 8px; color: #4b5563;">Client Message:</div>
            <div class="message-box">${contactInfo.message.replace(/\n/g, '<br>')}</div>
        </div>
        
        <div class="footer">
            <p>This email was generated automatically from the Varuna Realty contact form.</p>
            <p>© ${new Date().getFullYear()} Varuna Realty. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
  `;
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { contactInfo } = req.body;

    // Validation
    if (!contactInfo.name || !contactInfo.phone || !contactInfo.message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const htmlContent = createEmailTemplate(contactInfo);

    const mailOptions = {
      from: `"Varuna Realty" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: `"${contactInfo.name}" <no-reply@varunarealty.com>`,
      subject: `New ${contactInfo.category} inquiry from ${contactInfo.name}`,
      text: `
        Name: ${contactInfo.name}
        Phone: ${contactInfo.phone}
        Inquiry: ${contactInfo.category}
        Message: ${contactInfo.message}
      `,
      html: htmlContent,
      priority: contactInfo.category === 'investment' ? 'high' : 'normal'
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ 
      success: true,
      message: 'Contact form submitted successfully'
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    return res.status(500).json({ 
      message: 'Internal server error',
      error: error.message 
    });
  }
}