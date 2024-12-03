const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config(); // Load environment variables from .env

const app = express();

// Middleware
app.use(cors()); // To allow requests from the frontend
app.use(bodyParser.json()); // Parse JSON request body

// SMTP Configuration (Gmail as an example)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL, // Use environment variable for email
    pass: process.env.PASS,  // Use environment variable for password
  },
});

// Function to send email
const sendContactUsEmail = (userEmail, contactInfo) => {
  const mailOptions = {
    from: process.env.EMAIL,  // Use environment variable for sender email
    to: userEmail,            // Recipient email
    subject: 'Contact Us Form Submission',
    text: `Name: ${contactInfo.name}\nEmail: ${contactInfo.email}\nPhone: ${contactInfo.phone}\nMessage: ${contactInfo.message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

// Handle the form submission
app.post('/contact', (req, res) => {
  const { userEmail, contactInfo } = req.body;

  // Send email to the user
  sendContactUsEmail(userEmail, contactInfo);

  res.json({ message: 'Form submitted successfully!' });
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
