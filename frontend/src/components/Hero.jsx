import React from 'react';
import profilePhoto from '../assets/dhayanandham.jpg';
import { personalInfo, stats } from '../data/portfolioData';
import {
  ArrowRight,
  Download,
  MapPin,
  Mail,
  Github,
  Linkedin,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

function Hero({ onOpenResume }) {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background glowing gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-orange-400/20 via-pink-400/10 to-indigo-500/15 blur-3xl -z-10 rounded-full pointer-events-none" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-amber-400/15 blur-3xl -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Information & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-semibold mb-5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Hire & Engineering Roles</span>
            </div>

            {/* Greeting & Name */}
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Hy! I Am
            </h2>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Dynamic Title Subtitle */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-lg sm:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-5">
              <span>Full Stack Developer</span>
              <span className="text-orange-500">&amp;</span>
              <span className="text-amber-500">AI/ML Engineer</span>
            </div>

            {/* Location & College Tag */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
              <div className="flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-amber-500 shrink-0" />
                <span>B.Tech ECE (2022–2026)</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mb-8 leading-relaxed">
              Results-driven engineer specializing in production-quality web platforms, 
              decentralized <span className="font-semibold text-orange-600 dark:text-orange-400">Federated Transfer Learning</span>, 
              neural backpropagation from first principles, and embedded IoT accessibility systems.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 transition-all w-full sm:w-auto"
              >
                <span>Hire Me / Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm sm:text-base transition-all w-full sm:w-auto"
              >
                <Layers className="w-4 h-4 text-orange-500" />
                <span>Explore Projects</span>
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-orange-200 dark:border-orange-500/30 bg-orange-50/50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 font-bold text-sm sm:text-base hover:bg-orange-100 dark:hover:bg-orange-500/20 transition-all w-full sm:w-auto"
              >
                <Download className="w-4 h-4" />
                <span>View CV</span>
              </button>
            </div>

            {/* Social & Contact Pills */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-orange-500 hover:border-orange-400 transition-all shadow-sm"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-orange-500 hover:border-orange-400 transition-all shadow-sm"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-orange-500 hover:border-orange-400 transition-all shadow-sm"
              >
                <Mail className="w-5 h-5" />
              </a>
              <span className="text-xs text-slate-500 dark:text-slate-400 ml-2">
                dhayanandham80808@gmail.com
              </span>
            </div>
          </div>

          {/* Right Column: User Portrait & Floating Interactive Badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[340px] sm:max-w-[420px]">
              
              {/* Outer Glow Ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-orange-500 via-amber-400 to-pink-500 rounded-3xl blur-xl opacity-40 dark:opacity-50 animate-pulse-slow"></div>

              {/* Main Card Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 dark:border-slate-800/80 bg-gradient-to-b from-orange-100/50 to-amber-50/20 dark:from-slate-800 dark:to-navy-900">
                <img
                  src={profilePhoto}
                  alt={personalInfo.name}
                  className="w-full h-auto object-cover object-center hover:scale-105 transition-transform duration-500"
                />

                {/* Bottom Overlay Pill on Photo */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/90 dark:bg-navy-900/90 backdrop-blur-md border border-white/50 dark:border-slate-700/50 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        Dhayanandham A
                      </h4>
                      <p className="text-xs text-orange-600 dark:text-orange-400 font-medium">
                        Sri Manakula Vinayagar Eng. College
                      </p>
                    </div>
                    <span className="flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      ECE 2026
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: AI / Deep Learning */}
              <div className="hidden sm:flex items-center gap-2.5 absolute -top-5 -left-6 px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl backdrop-blur-sm animate-float">
                <div className="w-8 h-8 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-600 dark:text-orange-400">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Research</p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">Federated Transfer AI</p>
                </div>
              </div>

              {/* Floating Badge 2: Full Stack Web */}
              <div className="hidden sm:flex items-center gap-2.5 absolute -bottom-5 -right-4 px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl backdrop-blur-sm animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Architecture</p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">Full Stack MERN & Python</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Grid Banner */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="glass-card p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold gradient-text mb-1 group-hover:scale-105 transition-transform origin-left">
                {item.value}
              </div>
              <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
                {item.label}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {item.highlight}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Hero;
