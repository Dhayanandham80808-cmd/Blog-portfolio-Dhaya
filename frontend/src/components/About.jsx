import React from 'react';
import {
  GraduationCap,
  Award,
  Users,
  Compass,
  CheckCircle,
  Calendar,
  MapPin,
  Languages,
  BookOpen
} from 'lucide-react';
import {
  personalInfo,
  educationData,
  certificationsData,
  leadershipData
} from '../data/portfolioData';

function About() {
  return (
    <section id="about" className="py-20 bg-slate-100/60 dark:bg-navy-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            Background &amp; Profile
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            About <span className="gradient-text">Dhayanandham</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A blend of rigorous electronics engineering foundations and modern software craftsmanship, 
            driven by building accessible and intelligent systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Story & Leadership */}
          <div className="lg:col-span-7 space-y-8">
            {/* Story Card */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-xl bg-orange-500 text-white flex items-center justify-center text-sm font-black">
                  DA
                </span>
                Professional Summary
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                I am an aspiring Full Stack Developer and AI/ML Engineer pursuing my B.Tech in Electronics &amp; Communication Engineering at 
                <strong className="text-slate-900 dark:text-white font-semibold"> Sri Manakula Vinayagar Engineering College, Puducherry</strong>.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                My passion lies at the intersection of high-performance frontend interfaces, scalable backend microservices, and practical machine learning architectures. Whether engineering privacy-preserving federated models, coding backpropagation algorithms from scratch in MATLAB, or designing responsive web platforms with modern design tokens, I focus on delivering clean, accessible, and robust user solutions.
              </p>

              {/* Languages & Core Traits */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-700/60 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 mt-0.5">
                    <Languages className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Languages</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Tamil (Native) • English (Intermediate)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Base Location</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Puducherry, India (Open to Remote &amp; Relocation)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Leadership Card: ISF Council Secretary */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-500/5 to-orange-500/5 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-md shadow-amber-500/30">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {leadershipData.role}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-amber-600 dark:text-amber-400">
                    {leadershipData.organization} • Engineering College
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 mt-4">
                {leadershipData.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                    <span className="text-sm text-slate-600 dark:text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Quick List */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-orange-500" />
                Key Industry Certifications &amp; Training
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {certificationsData.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-800/40 hover:border-orange-300 dark:hover:border-orange-500/40 transition-colors"
                  >
                    <div className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">
                      {cert.title}
                    </div>
                    <div className="text-xs text-orange-600 dark:text-orange-400 font-medium mt-1">
                      {cert.issuer}
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {cert.skills.map((s, i) => (
                        <span key={i} className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Education Timeline */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2.5">
                <GraduationCap className="w-6 h-6 text-orange-500" />
                Education Journey
              </h3>

              <div className="relative pl-6 space-y-8 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-orange-500 before:via-amber-400 before:to-slate-300 dark:before:to-slate-700">
                {educationData.map((edu, idx) => (
                  <div key={idx} className="relative group">
                    {/* Dot on timeline */}
                    <div className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-navy-900 bg-orange-500 group-hover:scale-125 transition-transform" />

                    <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 shadow-xs hover:border-orange-300 transition-all">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400">
                          {edu.period}
                        </span>
                        {edu.score && (
                          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded">
                            Score: {edu.score}
                          </span>
                        )}
                      </div>

                      <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-1.5">
                        {edu.degree}
                      </h4>

                      <div className="text-xs font-medium text-slate-700 dark:text-slate-300 mt-1">
                        {edu.institution}
                      </div>

                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Areas of Interest Card */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-amber-500" />
                Areas of Interest
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Full Stack Web Development",
                  "Artificial Intelligence & ML",
                  "IoT Application Development",
                  "Automation & Python Scripting",
                  "Deep Learning & Neural Systems",
                  "Embedded Hardware Integration",
                  "Accessible Assistive Technology"
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-orange-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
