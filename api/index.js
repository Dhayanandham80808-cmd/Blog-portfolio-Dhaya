const nodemailer = require('nodemailer');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const initialSeedBlogs = require('../backend/data/seedBlogs');

const app = express();
app.use(cors());
app.use(express.json());

// In-memory fallback
let inMemoryBlogs = JSON.parse(JSON.stringify(initialSeedBlogs));
let isMongoConnected = false;

// Connect to MongoDB if MONGO_URI is provided in Vercel Environment Variables
const MONGO_URI = process.env.MONGO_URI;
if (MONGO_URI) {
  mongoose.connect(MONGO_URI, {
    serverSelectionTimeoutMS: 2500
  })
  .then(() => {
    isMongoConnected = true;
    console.log('✅ Connected to MongoDB Atlas on Vercel.');
  })
  .catch((err) => {
    isMongoConnected = false;
    console.warn('⚠️ MongoDB Atlas deferred. Using resilient in-memory store:', err.message);
  });
}

// Routes for Vercel Serverless
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    environment: 'Vercel Serverless Function',
    database: isMongoConnected ? 'MongoDB Atlas' : 'Resilient In-Memory Store',
    author: 'Dhayanandham A',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/blogs', (req, res) => {
  const { search, category } = req.query;
  let results = [...inMemoryBlogs];

  if (category && category !== 'All') {
    results = results.filter(b => b.category?.toLowerCase() === category.toLowerCase());
  }
  if (search) {
    const term = search.toLowerCase();
    results = results.filter(b =>
      (b.newTitle && b.newTitle.toLowerCase().includes(term)) ||
      (b.summary && b.summary.toLowerCase().includes(term)) ||
      (b.newContent && b.newContent.toLowerCase().includes(term)) ||
      (b.tags && b.tags.some(t => t.toLowerCase().includes(term)))
    );
  }

  res.json(results);
});

app.patch('/api/blogs/like/:id', (req, res) => {
  const item = inMemoryBlogs.find(b => b._id === req.params.id);
  if (item) {
    item.likes = (item.likes || 0) + 1;
    return res.json(item);
  }
  res.json({ likes: 1 });
});

app.post('/api/blogs/comment/:id', (req, res) => {
  const { author, text } = req.body;
  const item = inMemoryBlogs.find(b => b._id === req.params.id);
  if (item) {
    if (!item.comments) item.comments = [];
    const comment = {
      id: Math.random().toString(36).substring(2, 9),
      author: author?.trim() || 'Tech Reader',
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
      text: text?.trim() || ''
    };
    item.comments.push(comment);
    return res.json(item);
  }
  res.status(404).json({ message: 'Blog not found' });
});

app.post('/api/blogs', (req, res) => {
  const words = (req.body.newContent || '').trim().split(/\s+/).length;
  const computedReadTime = `${Math.max(1, Math.ceil(words / 180))} min read`;

  const newPost = {
    _id: 'v_' + Date.now(),
    newTitle: req.body.newTitle,
    newContent: req.body.newContent,
    category: req.body.category || 'Full Stack Web',
    author: req.body.author || 'Dhayanandham A',
    summary: req.body.summary || (req.body.newContent?.slice(0, 140) + '...'),
    readTime: computedReadTime,
    coverImage: req.body.coverImage || 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    tags: req.body.tags || ['Tech'],
    date: req.body.date || new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    likes: 0,
    comments: []
  };
  inMemoryBlogs.unshift(newPost);
  res.status(201).json(newPost);
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email and message are required' });
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
      return res.status(500).json({
        message: 'Email service is not configured. Add EMAIL_USER and EMAIL_APP_PASSWORD in Vercel.'
      });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD
      }
    });

    const recipient = process.env.CONTACT_TO_EMAIL || 'dhayanandham80808@gmail.com';

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: recipient,
      replyTo: email,
      subject: subject?.trim() || `Portfolio message from ${name}`,
      text: `You received a new message from your portfolio.

Name: ${name}
Email: ${email}
Subject: ${subject || 'Portfolio Inquiry'}

Message:
${message}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6">
          <h2>New Portfolio Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || 'Portfolio Inquiry'}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${String(message).replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br />')}</p>
        </div>
      `
    });

    // Send an automatic thank-you reply to the visitor
    await transporter.sendMail({
      from: `"Dhayanandham A" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank you for contacting me',
      text: `Hi ${name},

Thank you for reaching out through my portfolio. I have received your message and will get back to you as soon as possible.

I appreciate your interest and will contact you shortly.

Best regards,
Dhayanandham A`
    });

    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully!'
    });
  } catch (err) {
    console.error('❌ Contact email error:', err);
    return res.status(500).json({
      success: false,
      message: 'Unable to send the message right now. Please try again.'
    });
  }
});

module.exports = app;
