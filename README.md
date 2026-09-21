# Premium Developer Portfolio & Tech Blog Platform — Dhayanandham A

An upgraded, production-ready Full Stack & AI/ML Portfolio and Tech Blog application built specifically for **Dhayanandham A**, featuring real resume credentials, live project demos, an interactive Text-to-Braille simulator, dark/light theme switching, and a full-featured blog management studio connected to MongoDB.

---

## 🌟 What Was Upgraded & Built

| Feature / Area | Original Starter Project | Upgraded Premium Platform |
|---|---|---|
| **Identity & Branding** | Placeholder ("Jacky Thomas") | **Dhayanandham A** with real portrait photo, B.Tech ECE credentials, social links & location (Puducherry, India). |
| **Resume Integration** | Static "Download CV" placeholder | **Interactive Printable CV Modal** matching every section of Dhayanandham's PDF resume with one-click print/PDF export. |
| **Project Showcase** | Generic image placeholders (p1, p2, p3) | **All 6 Real Projects** from resume with filter tabs, tech pills, problem/solution breakdown, GitHub links, and architectural modals. |
| **Interactive Hardware Demo** | None | **Live Text-to-Braille Simulator** directly demonstrating his assistive technology project with real-time 6-dot solenoid actuation and 6-bit binary masks! |
| **Technical Blog** | Basic list with hardcoded admin UID | **Production Tech Blog Engine** with search, category filtering, reading time, like counters, reader comments, and full authoring studio. |
| **Technical Articles** | Generic sample posts | Pre-loaded with **4 comprehensive technical deep dives** written around his specific projects (Federated Learning, Backpropagation from first principles, CSS systems, and Embedded Braille systems). |
| **Skills & Leadership** | Basic 5-icon static bar | **Interactive Skills Matrix** with proficiency meters across Frontend, Backend, AI/ML, Embedded Hardware, and ISF Council Secretary leadership timeline. |
| **Design & UX** | Fixed light styling | **Glassmorphism Design System**, Tailwind CSS, dark & light mode toggle with localStorage persistence, fully responsive across mobile, tablet, and 4K displays. |
| **Backend & Database** | Basic Express listening on 5000 | **Robust REST API** on port 5001 with Mongoose, CRUD routes, contact form handler, and **automatic in-memory fallback** to ensure zero downtime. |
| **Existing Code Preservation** | — | **100% Intact**: Original `blog-project-starter-frontend/` and `blog-project-starter-backend/` remain completely untouched! |

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v18+)
- MongoDB (Running locally on default port `27017` - *Optional*, backend includes automatic in-memory fallback)

---

### Step 1: Start the Backend REST API
Open a terminal in the project directory:

```bash
cd premium-portfolio-blog/backend
npm start
```
*The API will start on `http://localhost:5001` and connect to MongoDB.*

---

### Step 2: Start the Frontend Application
Open a second terminal:

```bash
cd premium-portfolio-blog/frontend
npm run dev
```
*The web application will open on `http://localhost:3000` (or the port indicated by Vite).*

---

## 📁 Project Architecture

```
BLOG-PROJECT-WORK/
├── blog-project-starter-backend/      # [ORIGINAL - PRESERVED UNTOUCHED]
├── blog-project-starter-frontend/     # [ORIGINAL - PRESERVED UNTOUCHED]
└── premium-portfolio-blog/            # [UPGRADED PREMIUM PROJECT]
    ├── backend/
    │   ├── data/
    │   │   └── seedBlogs.js           # Dhayanandham's technical articles
    │   ├── index.js                   # Express REST API + MongoDB + Fallback
    │   └── package.json
    ├── frontend/
    │   ├── public/
    │   ├── src/
    │   │   ├── assets/
    │   │   │   └── dhayanandham.jpg   # High-resolution uploaded portrait
    │   │   ├── components/
    │   │   │   ├── common/
    │   │   │   │   ├── Navbar.jsx     # Glass sticky header, drawer, theme toggle
    │   │   │   │   └── Footer.jsx     # Modern footer & navigation
    │   │   │   ├── Hero.jsx           # Portrait, availability badge, quick stats
    │   │   │   ├── About.jsx          # Bio, ECE background, ISF leadership
    │   │   │   ├── Skills.jsx         # Categorized skills matrix & proficiency
    │   │   │   ├── Projects.jsx       # 6 resume projects with modals & filters
    │   │   │   ├── BrailleDemo.jsx    # Live interactive Text-to-Braille simulator
    │   │   │   ├── Blogs.jsx          # Tech blog feed, search & category filters
    │   │   │   ├── BlogModal.jsx      # Article reader with like/comment engine
    │   │   │   ├── BlogCreateModal.jsx# Article authoring studio
    │   │   │   ├── ResumeModal.jsx    # Formatted printable CV viewer
    │   │   │   └── Contact.jsx        # Direct message form & contact cards
    │   │   ├── context/
    │   │   │   └── ThemeContext.jsx   # Light/Dark mode state
    │   │   ├── data/
    │   │   │   └── portfolioData.js   # Structured data from resume
    │   │   ├── services/
    │   │   │   └── api.js             # Axios API client with error handling
    │   │   ├── App.jsx
    │   │   ├── main.jsx
    │   │   └── index.css
    │   ├── index.html
    │   ├── vite.config.js
    │   ├── tailwind.config.js
    │   └── package.json
    └── README.md
```

---

## 🎯 Author & Candidate Profile

- **Name:** DHAYANANDHAM A
- **Role:** Full Stack Developer & AI/ML Engineer
- **Education:** B.Tech in Electronics & Communication Engineering, Sri Manakula Vinayagar Engineering College, Puducherry (2022–2026)
- **Email:** [dhayanandham80808@gmail.com](mailto:dhayanandham80808@gmail.com)
- **Phone:** +91 6383275813
- **LinkedIn:** [linkedin.com/in/dhayanandham-a-a39505323](https://linkedin.com/in/dhayanandham-a-a39505323)
- **GitHub:** [github.com/dhayanandham80808-cmd](https://github.com/dhayanandham80808-cmd)
- **Location:** Puducherry, India
