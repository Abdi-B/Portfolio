// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { first, last, email, phone, message } = req.body;
    // console.log(req.body)

    if (!first || !last || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const name = `${first} ${last}`;

    try {
      // Create a Nodemailer transporter using Gmail
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
        tls: {
          rejectUnauthorized: false, // This disables certificate chain validation
        },
      });

      const mailOptions = {
        from: `"${name}" <${email}>`,
        to: process.env.GMAIL_USER,
        subject: `Contact Form Submission from ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Message: ${message}
        `,
        html: `
          <h2>Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      };

      // Send email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Message sent successfully' });
      // console.log(success)
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send message' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
