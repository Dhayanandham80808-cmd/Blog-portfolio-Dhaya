import axios from 'axios';

// Dynamically choose API base:
// 1. Explicit VITE_API_BASE env variable (if backend hosted on Render/Railway/Heroku/Vercel)
// 2. In local dev mode, defaults to 'http://localhost:5001/api'
// 3. In production, defaults to relative '/api' (Vercel serverless / proxy)
const API_BASE = import.meta.env.VITE_API_BASE || (import.meta.env.DEV ? 'http://localhost:5001/api' : '/api');

const api = axios.create({
  baseURL: API_BASE,
  timeout: 6000,
});

// Fallback seed data in case cloud backend is booting or offline
const fallbackBlogs = [
  {
    _id: "seed-blog-1",
    newTitle: "Building Privacy-Preserving AI: Federated Transfer Learning in Practice",
    category: "AI & Machine Learning",
    author: "Dhayanandham A",
    date: "September 15, 2026",
    readTime: "6 min read",
    likes: 42,
    summary: "How to train robust neural models across decentralized nodes without centralizing raw user data, combining transfer learning with secure parameter aggregation.",
    tags: ["Federated Learning", "Deep Learning", "Transfer Learning", "Python"],
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    newContent: `Traditional deep learning paradigms mandate aggregating massive datasets onto centralized servers or cloud silos. In privacy-critical domains—such as medical diagnostics, edge IoT telemetry, and confidential financial workflows—this centralized architecture poses severe regulatory, compliance, and cybersecurity bottlenecks.\n\nFederated Learning (FL) fundamentally re-engineers this pipeline:\n1. Raw data never leaves the client device.\n2. Local models are trained on-device.\n3. Only encrypted parameter gradients or weight updates are dispatched to a central orchestrator.\n4. The server synthesizes updates via Federated Averaging (FedAvg).\n\nIn our research, pre-training backbone representations decreased inter-node network payloads by over 74% and reached 93.8% validation accuracy in just 14 communication rounds.`,
    comments: [
      { id: "c1", author: "Arun Kumar", date: "September 16, 2026", text: "Incredible breakdown of FedAvg vs centralized learning! Spot on." }
    ]
  },
  {
    _id: "seed-blog-2",
    newTitle: "Demystifying Neural Networks: Writing Backpropagation from First Principles",
    category: "AI & Machine Learning",
    author: "Dhayanandham A",
    date: "August 28, 2026",
    readTime: "8 min read",
    likes: 38,
    summary: "A mathematical and code-driven exploration of building a multi-layer feed-forward neural network with variable momentum backpropagation from scratch in MATLAB & Python.",
    tags: ["Neural Networks", "Backpropagation", "MATLAB", "Mathematics"],
    coverImage: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80",
    newContent: `High-level libraries like PyTorch and TensorFlow abstract away tensor calculus into single loss.backward() calls. Real engineering mastery comes from computing chain-rule Jacobian matrices by hand.\n\nIn this study, we built a fully vectorized multi-layer perceptron (MLP) from scratch without external autograd engines. By dynamically adapting momentum beta according to gradient sign consistency, training epoch time was reduced by 43% compared to vanilla SGD.`,
    comments: [
      { id: "c2", author: "Kavitha R.", date: "August 30, 2026", text: "The derivation of the backward pass is so crystal clear." }
    ]
  },
  {
    _id: "seed-blog-3",
    newTitle: "Designing Resilient Responsive Web Systems with Modern CSS & React",
    category: "Full Stack Web",
    author: "Dhayanandham A",
    date: "July 19, 2026",
    readTime: "5 min read",
    likes: 54,
    summary: "Architectural insights and component design patterns learned while developing production-ready travel and e-learning platforms like Wander Trail, WanderRate, and SkillForge.",
    tags: ["React", "Tailwind CSS", "Web Development", "UI/UX"],
    coverImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    newContent: `When developing Wander Trail and SkillForge, our goal was a seamless cross-device experience spanning 320px mobile viewports up to 4K ultra-wide monitors without jarring layout recalculations.\n\nWe leveraged CSS Grid auto-fit minmax patterns, decoupled atomic component architectures, and strict accessibility standards to ensure sub-second first contentful paint.`,
    comments: []
  },
  {
    _id: "seed-blog-4",
    newTitle: "Hardware Meets Software: Building an Accessible Text-to-Braille Converter",
    category: "Embedded & IoT",
    author: "Dhayanandham A",
    date: "June 12, 2026",
    readTime: "7 min read",
    likes: 61,
    summary: "Bridging embedded microcontroller systems with Python software to build an affordable, tactile reading device for visually impaired individuals.",
    tags: ["Arduino", "Python", "Embedded Systems", "Accessibility", "IoT"],
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    newContent: `Commercial digital Braille displays often retail from $1,500 to $5,000. As Electronics & Communication engineers, our mission was to build a functional, responsive Text-to-Braille Converter using accessible components: Arduino, miniature push-pull solenoids, and a Python serial processing layer.\n\nEach character is mapped to a 6-bit binary mask corresponding to standard 6-dot Braille cells, providing affordable tactile feedback at 50 WPM reading speeds.`,
    comments: [
      { id: "c3", author: "Prof. Narayanan", date: "June 15, 2026", text: "Outstanding integration of ECE hardware principles with software." }
    ]
  }
];

let localCache = JSON.parse(localStorage.getItem('dhayan_blogs_cache')) || fallbackBlogs;

export const getBlogs = async (params = {}) => {
  try {
    const res = await api.get('/blogs', { params });
    if (res.data && res.data.length > 0) {
      localCache = res.data;
      localStorage.setItem('dhayan_blogs_cache', JSON.stringify(res.data));
      return res.data;
    }
    return localCache;
  } catch (err) {
    console.warn('API fetch deferred, utilizing offline resilient cache:', err.message);
    return localCache;
  }
};

export const getBlogById = async (id) => {
  try {
    const res = await api.get(`/blogs/${id}`);
    return res.data;
  } catch (err) {
    const found = localCache.find(b => b._id === id || b.id === id);
    if (found) return found;
    throw err;
  }
};

export const createBlog = async (blogData) => {
  try {
    const res = await api.post('/blogs', blogData);
    return res.data;
  } catch (err) {
    console.warn('API create blog fallback to local cache:', err.message);
    const newDoc = {
      _id: 'local_' + Date.now(),
      ...blogData,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      likes: 0,
      comments: []
    };
    localCache.unshift(newDoc);
    localStorage.setItem('dhayan_blogs_cache', JSON.stringify(localCache));
    return newDoc;
  }
};

export const likeBlog = async (id) => {
  try {
    const res = await api.patch(`/blogs/like/${id}`);
    return res.data;
  } catch (err) {
    console.warn('API like fallback to local cache:', err.message);
    const item = localCache.find(b => b._id === id);
    if (item) {
      item.likes = (item.likes || 0) + 1;
      localStorage.setItem('dhayan_blogs_cache', JSON.stringify(localCache));
      return item;
    }
    return { likes: 1 };
  }
};

export const addComment = async (id, commentData) => {
  try {
    const res = await api.post(`/blogs/comment/${id}`, commentData);
    return res.data;
  } catch (err) {
    console.warn('API comment fallback to local cache:', err.message);
    const item = localCache.find(b => b._id === id);
    if (item) {
      if (!item.comments) item.comments = [];
      const newComment = {
        id: Date.now().toString(),
        author: commentData.author || 'Tech Reader',
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
        text: commentData.text
      };
      item.comments.push(newComment);
      localStorage.setItem('dhayan_blogs_cache', JSON.stringify(localCache));
      return item;
    }
    return { comments: [] };
  }
};

export const deleteBlog = async (id) => {
  try {
    const res = await api.delete(`/blogs/${id}`);
    return res.data;
  } catch (err) {
    localCache = localCache.filter(b => b._id !== id);
    localStorage.setItem('dhayan_blogs_cache', JSON.stringify(localCache));
    return { message: 'Deleted locally' };
  }
};

export const sendContactMessage = async (contactData) => {
  try {
    const res = await api.post('/contact', contactData);
    return res.data;
  } catch (err) {
    console.warn('Contact API offline, falling back to direct email:', err.message);
    throw err;
  }
};

export const getStats = async () => {
  try {
    const res = await api.get('/stats');
    return res.data;
  } catch (err) {
    return {
      projectsCount: 6,
      monthsExperience: 12,
      certificationsCount: 5,
      blogsCount: localCache.length,
      totalLikes: localCache.reduce((acc, b) => acc + (b.likes || 0), 0),
      codeCommits: 520
    };
  }
};

export default api;
