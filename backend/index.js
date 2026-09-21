require('dotenv').config();
const nodemailer = require('nodemailer');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const initialSeedBlogs = require('./data/seedBlogs');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory fallback store in case MongoDB is temporarily unreachable
let inMemoryBlogs = JSON.parse(JSON.stringify(initialSeedBlogs));
let inMemoryContacts = [];
let isMongoConnected = false;

// Define Extended Mongoose Schema
const blogSchema = new mongoose.Schema({
  newTitle: { type: String, required: true },
  newContent: { type: String, required: true },
  date: { type: String, default: () => new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) },
  likes: { type: Number, default: 0 },
  category: { type: String, default: 'General Tech' },
  author: { type: String, default: 'Dhayanandham A' },
  summary: { type: String, default: '' },
  readTime: { type: String, default: '4 min read' },
  coverImage: { type: String, default: '' },
  tags: { type: [String], default: [] },
  comments: [
    {
      id: { type: String, default: () => Math.random().toString(36).substring(2, 9) },
      author: { type: String, default: 'Anonymous Reader' },
      date: { type: String, default: () => new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) },
      text: { type: String, required: true }
    }
  ]
}, { timestamps: true });

const Blog = mongoose.model('PremiumBlog', blogSchema);

// MongoDB Connection with seamless fallback
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/premiumBlogDB';

mongoose.connect(MONGO_URI, {
  serverSelectionTimeoutMS: 2500
})
.then(async () => {
  isMongoConnected = true;
  console.log('✅ Connected to MongoDB successfully.');
  
  // Auto-seed if database is empty
  const count = await Blog.countDocuments();
  if (count === 0) {
    console.log('🌱 Seeding database with Dhayanandham\'s articles...');
    const seedDocs = initialSeedBlogs.map(b => {
      const { _id, ...rest } = b;
      return rest;
    });
    await Blog.insertMany(seedDocs);
    console.log('✅ Seeding completed.');
  }
})
.catch((err) => {
  isMongoConnected = false;
  console.warn('⚠️ MongoDB connection deferred or offline. Running seamlessly on resilient In-Memory Store.', err.message);
});

// --- API ROUTES ---

// Health & Status Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    database: isMongoConnected ? 'MongoDB (Connected)' : 'Resilient In-Memory Store',
    author: 'Dhayanandham A',
    timestamp: new Date().toISOString()
  });
});

// System Stats
app.get('/api/stats', async (req, res) => {
  try {
    let blogsCount = 0;
    let totalLikes = 0;

    if (isMongoConnected) {
      const blogs = await Blog.find({});
      blogsCount = blogs.length;
      totalLikes = blogs.reduce((acc, b) => acc + (b.likes || 0), 0);
    } else {
      blogsCount = inMemoryBlogs.length;
      totalLikes = inMemoryBlogs.reduce((acc, b) => acc + (b.likes || 0), 0);
    }

    res.json({
      projectsCount: 6,
      monthsExperience: 12,
      certificationsCount: 5,
      blogsCount,
      totalLikes,
      codeCommits: 520
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all blogs with search & category filtering
app.get('/api/blogs', async (req, res) => {
  try {
    const { search, category } = req.query;

    if (isMongoConnected) {
      let query = {};
      if (category && category !== 'All') {
        query.category = category;
      }
      if (search) {
        query.$or = [
          { newTitle: { $regex: search, $options: 'i' } },
          { newContent: { $regex: search, $options: 'i' } },
          { summary: { $regex: search, $options: 'i' } },
          { tags: { $in: [new RegExp(search, 'i')] } }
        ];
      }
      const blogs = await Blog.find(query).sort({ createdAt: -1, _id: -1 });
      return res.json(blogs);
    }

    // In-memory filter fallback
    let results = [...inMemoryBlogs];
    if (category && category !== 'All') {
      results = results.filter(b => b.category?.toLowerCase() === category.toLowerCase());
    }
    if (search) {
      const term = search.toLowerCase();
      results = results.filter(b => 
        (b.newTitle && b.newTitle.toLowerCase().includes(term)) ||
        (b.newContent && b.newContent.toLowerCase().includes(term)) ||
        (b.summary && b.summary.toLowerCase().includes(term)) ||
        (b.tags && b.tags.some(t => t.toLowerCase().includes(term)))
      );
    }

    res.json(results);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get single blog
app.get('/api/blogs/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (isMongoConnected && mongoose.Types.ObjectId.isValid(id)) {
      const blog = await Blog.findById(id);
      if (blog) return res.json(blog);
    }

    const memoryBlog = inMemoryBlogs.find(b => b._id === id || b.id === id);
    if (memoryBlog) return res.json(memoryBlog);

    return res.status(404).json({ message: 'Blog post not found' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create new blog
app.post('/api/blogs', async (req, res) => {
  try {
    const {
      newTitle,
      newContent,
      date,
      likes,
      category,
      author,
      summary,
      readTime,
      coverImage,
      tags
    } = req.body;

    if (!newTitle || !newContent) {
      return res.status(400).json({ message: 'Title and content are required' });
    }

    const todayDate = date || new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const words = newContent.trim().split(/\s+/).length;
    const computedReadTime = readTime || `${Math.max(1, Math.ceil(words / 180))} min read`;

    const newBlogPayload = {
      newTitle,
      newContent,
      date: todayDate,
      likes: likes || 0,
      category: category || 'Full Stack Web',
      author: author || 'Dhayanandham A',
      summary: summary || (newContent.slice(0, 140) + '...'),
      readTime: computedReadTime,
      coverImage: coverImage || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
      tags: tags || ['Tech', 'Engineering'],
      comments: []
    };

    if (isMongoConnected) {
      const createdBlog = await Blog.create(newBlogPayload);
      return res.status(201).json(createdBlog);
    }

    const memoryDoc = {
      _id: 'blog_' + Date.now(),
      ...newBlogPayload,
      createdAt: new Date().toISOString()
    };
    inMemoryBlogs.unshift(memoryDoc);
    res.status(201).json(memoryDoc);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Like a blog post
app.patch('/api/blogs/like/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (isMongoConnected && mongoose.Types.ObjectId.isValid(id)) {
      const updated = await Blog.findByIdAndUpdate(
        id,
        { $inc: { likes: 1 } },
        { new: true }
      );
      if (updated) return res.json(updated);
    }

    const idx = inMemoryBlogs.findIndex(b => b._id === id || b.id === id);
    if (idx !== -1) {
      inMemoryBlogs[idx].likes = (inMemoryBlogs[idx].likes || 0) + 1;
      return res.json(inMemoryBlogs[idx]);
    }

    res.status(404).json({ message: 'Blog post not found' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add comment to a blog post
app.post('/api/blogs/comment/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { author, text } = req.body;

    if (!text) {
      return res.status(400).json({ message: 'Comment text is required' });
    }

    const commentObj = {
      id: Math.random().toString(36).substring(2, 9),
      author: author?.trim() || 'Tech Reader',
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
      text: text.trim()
    };

    if (isMongoConnected && mongoose.Types.ObjectId.isValid(id)) {
      const updated = await Blog.findByIdAndUpdate(
        id,
        { $push: { comments: commentObj } },
        { new: true }
      );
      if (updated) return res.json(updated);
    }

    const idx = inMemoryBlogs.findIndex(b => b._id === id || b.id === id);
    if (idx !== -1) {
      if (!inMemoryBlogs[idx].comments) inMemoryBlogs[idx].comments = [];
      inMemoryBlogs[idx].comments.push(commentObj);
      return res.json(inMemoryBlogs[idx]);
    }

    res.status(404).json({ message: 'Blog not found' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete blog post
app.delete('/api/blogs/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (isMongoConnected && mongoose.Types.ObjectId.isValid(id)) {
      await Blog.findByIdAndDelete(id);
      return res.json({ message: 'Blog deleted successfully' });
    }

    inMemoryBlogs = inMemoryBlogs.filter(b => b._id !== id && b.id !== id);
    res.json({ message: 'Blog deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Contact Form Endpoint - sends visitor message to Dhayanandham's email
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email and message are required' });
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
      return res.status(500).json({
        message: 'Email service is not configured. Please add EMAIL_USER and EMAIL_APP_PASSWORD.'
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

    inMemoryContacts.push({
      id: Date.now(),
      name,
      email,
      subject: subject || 'Portfolio Inquiry',
      message,
      receivedAt: new Date().toISOString()
    });

    console.log('📨 Contact email sent:', { name, email, subject });

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

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Premium Portfolio & Blog API running on http://localhost:${PORT}`);
});
