import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import {
  Code,
  Server,
  Brain,
  Wrench,
  HeartHandshake,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Skills', icon: Sparkles },
    { id: 'frontend', label: 'Frontend', icon: Code },
    { id: 'backend', label: 'Backend & DB', icon: Server },
    { id: 'aiml', label: 'AI & Machine Learning', icon: Brain },
    { id: 'tools', label: 'Tools & Embedded', icon: Wrench },
    { id: 'soft', label: 'Soft Skills & Leadership', icon: HeartHandshake },
  ];

  // Tech stack logo pills
  const featuredStack = [
    { name: 'React.js', color: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30' },
    { name: 'Node.js', color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30' },
    { name: 'Python', color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30' },
    { name: 'Tailwind CSS', color: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30' },
    { name: 'MongoDB', color: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/30' },
    { name: 'MATLAB DL', color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30' },
    { name: 'Arduino IDE', color: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/30' },
    { name: 'JavaScript ES6+', color: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/30' },
    { name: 'Git & GitHub', color: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/30' },
    { name: 'Firebase', color: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/30' },
  ];

  const getFilteredSkills = () => {
    if (activeTab === 'all') {
      return [
        { category: 'Frontend Development', items: skillsData.frontend, icon: Code },
        { category: 'Backend & Databases', items: skillsData.backend, icon: Server },
        { category: 'AI & Machine Learning', items: skillsData.aiml, icon: Brain },
        { category: 'Tools & Embedded Hardware', items: skillsData.tools, icon: Wrench },
        { category: 'Soft Skills & Leadership', items: skillsData.soft, icon: HeartHandshake },
      ];
    }
    const catMap = {
      frontend: { category: 'Frontend Development', items: skillsData.frontend, icon: Code },
      backend: { category: 'Backend & Databases', items: skillsData.backend, icon: Server },
      aiml: { category: 'AI & Machine Learning', items: skillsData.aiml, icon: Brain },
      tools: { category: 'Tools & Embedded Hardware', items: skillsData.tools, icon: Wrench },
      soft: { category: 'Soft Skills & Leadership', items: skillsData.soft, icon: HeartHandshake },
    };
    return [catMap[activeTab]];
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            Capabilities &amp; Stack
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Technical <span className="gradient-text">Skills Matrix</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A comprehensive overview of programming languages, modern frameworks, machine learning models, 
            and hardware engineering tools in my daily workflow.
          </p>
        </div>

        {/* Featured Stack Marquee Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {featuredStack.map((tech, idx) => (
            <span
              key={idx}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold border backdrop-blur-sm shadow-xs ${tech.color}`}
            >
              {tech.name}
            </span>
          ))}
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/25 scale-105'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80 hover:border-orange-300 dark:hover:border-orange-500/40'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredSkills().map((section, idx) => {
            const SectionIcon = section.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-2xl bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                      <SectionIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {section.category}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {section.items.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-800 dark:text-slate-200">
                            {skill.name}
                          </span>
                          <div className="flex items-center gap-2">
                            {skill.tag && (
                              <span className="px-1.5 py-0.5 rounded text-[10px] bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400">
                                {skill.tag}
                              </span>
                            )}
                            <span className="font-bold text-orange-600 dark:text-orange-400">
                              {skill.level}%
                            </span>
                          </div>
                        </div>

                        {/* Progress bar */}
                        <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    Production Ready
                  </span>
                  <span>{section.items.length} Competencies</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Skills;
