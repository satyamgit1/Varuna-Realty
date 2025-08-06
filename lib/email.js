import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail', // or your email provider
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendEmail({ to, subject, text }) {
  return transporter.sendMail({
    from: `"Varuna Realty" <${process.env.EMAIL_FROM}>`,
    to,
    subject,
    text,
    // html: `<div>${text}</div>` // optional HTML version
  });
}

export function formatContactMessage(contactInfo) {
  return `
    New contact form submission:
    
    Name: ${contactInfo.name}
    Phone: ${contactInfo.phone}
    Inquiry Type: ${contactInfo.category}
    
    Message:
    ${contactInfo.message}
    
    Received at: ${new Date().toISOString()}
  `;
}