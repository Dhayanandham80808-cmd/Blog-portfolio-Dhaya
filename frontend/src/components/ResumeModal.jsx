import React from 'react';
import {
  X,
  Printer,
  Download,
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

function ResumeModal({ onClose }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-4xl w-full max-h-[94vh] overflow-y-auto shadow-2xl relative flex flex-col">
        
        {/* Sticky Action Bar */}
        <div className="sticky top-0 z-10 px-6 py-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400">
              Curriculum Vitae
            </span>
            <span className="text-xs text-slate-500 font-medium hidden sm:inline">
              Dhayanandham A • ECE &amp; AI/ML
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold shadow-md shadow-orange-500/20 transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Canvas */}
        <div id="printable-resume" className="p-6 sm:p-12 text-slate-900 dark:text-slate-100 font-sans space-y-6 bg-white dark:bg-slate-900">
          
          {/* Header */}
          <div className="border-b-2 border-slate-900 dark:border-slate-100 pb-4">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2 uppercase">
              DHAYANANDHAM A
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                dhayanandham80808@gmail.com
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" />
                +91 6383275813
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5" />
                linkedin.com/in/dhayanandham-a-a39505323
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Github className="w-3.5 h-3.5" />
                github.com/dhayanandham80808-cmd
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                Puducherry, India
              </span>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <div>
            <h2 className="text-xs sm:text-sm font-extrabold tracking-widest text-slate-900 dark:text-white uppercase bg-slate-100 dark:bg-slate-800 px-2.5 py-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
              Results-driven Full Stack Developer and AI/ML Engineer with hands-on experience building production-quality responsive web applications and machine learning systems from scratch. Proficient in HTML5, CSS3, JavaScript, Python and skilled in neural network architectures, federated learning, and IoT development. Successfully deployed multiple web projects on GitHub Pages with real-world design systems, responsive layouts, and accessibility features. A quick learner with strong problem-solving skills, actively seeking an entry-level role in web development, full stack engineering, or AI/ML.
            </p>
          </div>

          {/* Section: Technical Skills */}
          <div>
            <h2 className="text-xs sm:text-sm font-extrabold tracking-widest text-slate-900 dark:text-white uppercase bg-slate-100 dark:bg-slate-800 px-2.5 py-1 mb-2">
              Technical Skills
            </h2>
            <div className="text-xs sm:text-sm space-y-1 text-slate-800 dark:text-slate-200">
              <p>
                <strong className="font-bold">Frontend:</strong> HTML5, CSS3, JavaScript (ES6+), React.js, Responsive Design, Flexbox, CSS Grid, Bootstrap, Tailwind CSS, Animations
              </p>
              <p>
                <strong className="font-bold">Backend / PLs:</strong> Python, Node.js, Express.js, Java, MATLAB, Basic C, REST APIs, JSON, Basic SQL, MongoDB
              </p>
              <p>
                <strong className="font-bold">AI / ML:</strong> Federated Transfer Learning, Feed-Forward Neural Networks, Backpropagation, Deep Learning, MATLAB DL Toolbox
              </p>
              <p>
                <strong className="font-bold">Tools &amp; IDEs:</strong> VS Code, Git, GitHub, GitHub Pages, Arduino IDE, MATLAB, Firebase
              </p>
              <p>
                <strong className="font-bold">Soft Skills:</strong> Problem Solving, Technical Documentation, Quick Learner, Team Collaboration, Leadership, Event Management
              </p>
            </div>
          </div>

          {/* Section: Projects & Portfolio */}
          <div>
            <h2 className="text-xs sm:text-sm font-extrabold tracking-widest text-slate-900 dark:text-white uppercase bg-slate-100 dark:bg-slate-800 px-2.5 py-1 mb-3">
              Projects &amp; Portfolio
            </h2>
            <div className="space-y-3.5 text-xs sm:text-sm">
              
              {/* Project 1 */}
              <div>
                <div className="flex justify-between items-baseline font-bold">
                  <span>Wander Trail — Travel Landing Page <span className="font-normal text-xs text-slate-500">[HTML5, CSS3, Flexbox, Grid, GitHub Pages]</span></span>
                  <span className="text-xs text-slate-500">2024</span>
                </div>
                <ul className="list-disc list-inside space-y-0.5 text-slate-700 dark:text-slate-300 mt-1 pl-1">
                  <li>Built a fully responsive travel-themed landing page with Indian destinations, sticky navbar, hover animations, and INR pricing; deployed on GitHub Pages.</li>
                  <li>Implemented CSS Grid &amp; Flexbox with breakpoints at 480px/768px/1024px; integrated Font Awesome &amp; Google Fonts via CDN.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div>
                <div className="flex justify-between items-baseline font-bold">
                  <span>WanderRate — TripAdvisor-Style Travel Platform <span className="font-normal text-xs text-slate-500">[HTML5, CSS3, Google Fonts, Font Awesome]</span></span>
                  <span className="text-xs text-slate-500">2024</span>
                </div>
                <ul className="list-disc list-inside space-y-0.5 text-slate-700 dark:text-slate-300 mt-1 pl-1">
                  <li>Developed a full travel review platform with destination cards, star ratings, hero sections, and testimonials using pure HTML/CSS.</li>
                  <li>Resolved Google Safe Browsing deployment issue by rebranding — demonstrating real-world GitHub Pages problem-solving.</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div>
                <div className="flex justify-between items-baseline font-bold">
                  <span>SkillForge / LearnHub — E-Learning Platform <span className="font-normal text-xs text-slate-500">[HTML5, CSS3, Responsive Design]</span></span>
                  <span className="text-xs text-slate-500">2024</span>
                </div>
                <ul className="list-disc list-inside space-y-0.5 text-slate-700 dark:text-slate-300 mt-1 pl-1">
                  <li>Created a Udemy/Coursera-inspired UI with course cards, pricing tiers, instructor profiles using component-based CSS architecture.</li>
                </ul>
              </div>

              {/* Project 4 */}
              <div>
                <div className="flex justify-between items-baseline font-bold">
                  <span>Privacy-Preserving Federated Transfer Learning <span className="font-normal text-xs text-slate-500">[Python, MATLAB, Deep Learning]</span></span>
                  <span className="text-xs text-slate-500">2026</span>
                </div>
                <ul className="list-disc list-inside space-y-0.5 text-slate-700 dark:text-slate-300 mt-1 pl-1">
                  <li>Designed a decentralized simulation environment enabling safe model updates without centralizing user data.</li>
                  <li>Integrated transfer learning to reuse pre-trained weights, improving generalization across federated nodes.</li>
                </ul>
              </div>

              {/* Project 5 */}
              <div>
                <div className="flex justify-between items-baseline font-bold">
                  <span>Optimized Feed-Forward Neural Network <span className="font-normal text-xs text-slate-500">[MATLAB, Backpropagation]</span></span>
                  <span className="text-xs text-slate-500">2026</span>
                </div>
                <ul className="list-disc list-inside space-y-0.5 text-slate-700 dark:text-slate-300 mt-1 pl-1">
                  <li>Built multi-layer neural network from first principles with variable momentum backpropagation in MATLAB.</li>
                </ul>
              </div>

              {/* Project 6 */}
              <div>
                <div className="flex justify-between items-baseline font-bold">
                  <span>Text-to-Braille Converter <span className="font-normal text-xs text-slate-500">[Python, Arduino, Embedded Systems]</span></span>
                  <span className="text-xs text-slate-500">2023</span>
                </div>
                <ul className="list-disc list-inside space-y-0.5 text-slate-700 dark:text-slate-300 mt-1 pl-1">
                  <li>Built an accessibility converter for visually impaired users using Python, electronics, and embedded system concepts.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Section: Education & Certifications Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            {/* Education */}
            <div>
              <h2 className="text-xs sm:text-sm font-extrabold tracking-widest text-slate-900 dark:text-white uppercase bg-slate-100 dark:bg-slate-800 px-2.5 py-1 mb-2">
                Education
              </h2>
              <div className="text-xs sm:text-sm space-y-2 text-slate-800 dark:text-slate-200">
                <div>
                  <div className="font-bold flex justify-between">
                    <span>B.Tech — Electronics &amp; Communication</span>
                    <span className="text-slate-500">2022–2026</span>
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 text-xs">
                    Sri Manakula Vinayagar Engineering College, Puducherry
                  </div>
                </div>

                <div>
                  <div className="font-bold flex justify-between">
                    <span>HSC (12th) — 65.4%</span>
                    <span className="text-slate-500">2022</span>
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 text-xs">
                    Amlorpavam Higher Secondary School
                  </div>
                </div>

                <div>
                  <div className="font-bold flex justify-between">
                    <span>SSLC (10th) — 72.5%</span>
                    <span className="text-slate-500">2020</span>
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 text-xs">
                    Amlorpavam Higher Secondary School
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-xs sm:text-sm font-extrabold tracking-widest text-slate-900 dark:text-white uppercase bg-slate-100 dark:bg-slate-800 px-2.5 py-1 mb-2">
                Certifications &amp; Achievements
              </h2>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-700 dark:text-slate-300">
                <li>Certified — AI &amp; Machine Learning Fundamentals</li>
                <li>NPTEL Certified — Internet of Things (IoT)</li>
                <li>Industrial Training — Embedded Systems at CodeBind</li>
                <li>Electronics Workshop — Raja Electronics Institute</li>
                <li>PCB Design, Hardware-Software Integration (Practical)</li>
              </ul>
            </div>

          </div>

          {/* Section: Leadership & Interests */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-slate-100 dark:border-slate-800">
            <div>
              <h2 className="text-xs sm:text-sm font-extrabold tracking-widest text-slate-900 dark:text-white uppercase bg-slate-100 dark:bg-slate-800 px-2.5 py-1 mb-2">
                Leadership
              </h2>
              <div className="text-xs text-slate-700 dark:text-slate-300">
                <div className="font-bold text-slate-900 dark:text-white mb-0.5">
                  ISF Council Secretary — Engineering College
                </div>
                <p>• Managed and coordinated college-wide events and student activities.</p>
                <p>• Led team communication, logistics, and inter-department programs.</p>
                <p>• Developed leadership, delegation, and stakeholder management skills.</p>
              </div>
            </div>

            <div>
              <h2 className="text-xs sm:text-sm font-extrabold tracking-widest text-slate-900 dark:text-white uppercase bg-slate-100 dark:bg-slate-800 px-2.5 py-1 mb-2">
                Areas of Interest &amp; Languages
              </h2>
              <div className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                <p>• Full Stack Web Development • Artificial Intelligence &amp; ML</p>
                <p>• IoT Application Development • Automation &amp; Python Scripting</p>
                <p className="font-bold text-slate-900 dark:text-white pt-1">
                  Languages: Tamil (Native) | English (Intermediate)
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default ResumeModal;
