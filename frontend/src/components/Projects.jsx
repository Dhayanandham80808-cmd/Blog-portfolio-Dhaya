import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import {
  ExternalLink,
  Github,
  Layers,
  Sparkles,
  Calendar,
  CheckCircle2,
  Maximize2,
  X
} from 'lucide-react';

function Projects({ onOpenBrailleDemo }) {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Full Stack Web', 'AI & Machine Learning', 'Embedded & IoT'];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-slate-100/50 dark:bg-navy-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            Resume Portfolio
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Featured <span className="gradient-text">Live Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Real-world systems spanning production responsive web applications, 
            mathematical neural networks built from scratch, and embedded assistive hardware.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                filter === cat
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/25'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80 hover:border-orange-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container with overlays */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-lg bg-orange-500 text-white shadow-md">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-lg bg-black/60 text-white backdrop-blur-xs flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {project.year}
                    </span>
                  </div>

                  {/* Quick Expand Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="absolute top-3 right-3 p-2 rounded-xl bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 hover:text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs shadow-md"
                    title="View Architectural Breakdown"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>

                  {/* Title on Image overlay */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-xl font-extrabold text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-orange-300 font-medium line-clamp-1">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-orange-50 dark:bg-slate-800 text-orange-700 dark:text-orange-400 border border-orange-200/50 dark:border-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key highlight bullet */}
                  <div className="space-y-1.5 mb-2">
                    {project.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-bold text-orange-600 dark:text-orange-400 hover:text-orange-700 flex items-center gap-1"
                >
                  Architectural Details &rarr;
                </button>

                <div className="flex items-center gap-2">
                  {project.id === 'braille-converter' ? (
                    <a
                      href="#braille-demo"
                      className="p-2 rounded-xl bg-orange-500 text-white hover:bg-orange-600 shadow-md shadow-orange-500/20 transition-all flex items-center gap-1 text-xs font-bold px-3"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Live Tool</span>
                    </a>
                  ) : (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-orange-500 hover:border-orange-300 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-orange-500 hover:border-orange-300 transition-colors"
                    title="Source Code"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-700 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-extrabold px-2.5 py-1 rounded-lg bg-orange-500 text-white">
                {selectedProject.category}
              </span>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                Year {selectedProject.year}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
              {selectedProject.title}
            </h3>
            <p className="text-sm font-semibold text-orange-600 dark:text-orange-400 mb-6">
              {selectedProject.subtitle}
            </p>

            <div className="mb-6 rounded-2xl overflow-hidden max-h-64">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
              Project Overview
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
              Engineering Achievements &amp; Highlights
            </h4>
            <div className="space-y-2 mb-6">
              {selectedProject.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
              Technologies Utilized
            </h4>
            <div className="flex flex-wrap gap-2 mb-8">
              {selectedProject.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400 font-bold text-xs"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 font-bold text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Code</span>
              </a>

              {selectedProject.id === 'braille-converter' ? (
                <a
                  href="#braille-demo"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-sm shadow-md flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Launch Live Simulator</span>
                </a>
              ) : (
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-sm shadow-md flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
