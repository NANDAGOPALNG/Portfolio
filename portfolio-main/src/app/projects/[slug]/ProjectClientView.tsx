"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, CheckCircle2, AlertTriangle, Rocket, Camera, Cpu, Clock, HelpCircle, ChevronDown } from 'lucide-react';
import PageTransition from '@/components/shared/PageTransition';
import { Project } from '@/data/projects';

interface ProjectClientViewProps {
  project: Project;
  prevProject: Project;
  nextProject: Project;
}

function ScreenshotSlot({
  title,
  description,
  placeholderText,
}: {
  title: string;
  description: string;
  placeholderText: string;
}) {
  return (
    <div className="relative p-5 sm:p-6 bg-[#faf7ee] border-2 border-dashed border-[#18181b]/40 rounded-xl shadow-[3px_3px_0px_#18181b] flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Washi tape stamp */}
      <div className="absolute -top-2.5 right-6 w-28 h-5 bg-[#fde047] border border-[#18181b]/40 -rotate-2 z-10 pointer-events-none shadow-xs text-[9px] font-mono font-bold text-[#18181b] flex items-center justify-center">
        SCREENSHOT SLOT
      </div>

      <div className="w-12 h-12 rounded-xl bg-white border-2 border-[#18181b] flex items-center justify-center mb-3 shadow-[2px_2px_0px_#18181b]">
        <Camera className="w-5 h-5 text-stone-700" />
      </div>

      <h4 className="text-sm font-display font-black text-[#18181b] mb-1">
        {title}
      </h4>

      <p className="text-xs text-stone-600 max-w-sm mb-3">
        {description}
      </p>

      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#fef08a] text-[#854d0e] border border-[#ca8a04] rounded-md text-xs font-mono font-bold">
        <span>📌</span>
        <span>{placeholderText}</span>
      </span>
    </div>
  );
}

function InterviewQAItem({ question, answer, defaultOpen = false }: { question: string; answer: string; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="p-4 bg-white border-2 border-[#18181b] rounded-xl shadow-[3px_3px_0px_#18181b] transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left gap-3 group"
        aria-expanded={isOpen}
      >
        <span className="font-display font-black text-sm sm:text-base text-[#18181b] group-hover:text-[#ef4444] transition-colors flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-[#ef4444] shrink-0" />
          <span>{question}</span>
        </span>
        <ChevronDown
          className={`w-4 h-4 text-stone-500 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.2 }}
          className="mt-3 pt-3 border-t border-stone-200 text-xs sm:text-sm text-stone-700 leading-relaxed font-sans"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
}

export default function ProjectClientView({
  project,
  prevProject,
  nextProject,
}: ProjectClientViewProps) {

  return (
    <PageTransition>
      <div className="py-8 sm:py-12 max-w-4xl mx-auto">
        
        {/* Navigation Breadcrumb with Spring Entrance */}
        <div className="mb-8 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white text-[#18181b] border-2 border-[#18181b] rounded-xl text-xs font-bold shadow-[2px_2px_0px_#18181b] hover:bg-[#fde047] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Projects</span>
            </Link>
          </motion.div>

          <span className="text-xs font-mono font-bold text-stone-500 uppercase">
            CASE STUDY // {project.category}
          </span>
        </div>

        {/* Notebook Lab Binder Article */}
        <motion.article
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className="bg-white border-2 border-[#18181b] rounded-2xl p-6 sm:p-10 md:p-12 shadow-[8px_8px_0px_#18181b] relative"
        >
          {/* Top Washi Tape Corner */}
          <div className="absolute -top-3 left-16 w-32 h-6 bg-[#fde047]/90 border border-[#18181b]/30 rotate-1 z-20 pointer-events-none shadow-xs flex items-center justify-center text-[10px] font-mono font-bold text-stone-700">
            ENGINEERING LAB NOTE
          </div>

          {/* Header */}
          <div className="border-b-2 border-[#18181b]/15 pb-8 mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="rubber-stamp text-xs py-0.5 px-2">
                {project.category}
              </span>
              <span className="text-xs font-mono font-bold text-stone-500">
                {project.date} · {project.timeline}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-[#18181b] mb-3">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg font-medium text-stone-700 max-w-2xl">
              {project.tagline}
            </p>

            {/* Meta Strip: Role, Timeline, Status */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-stone-100 text-xs font-mono">
              <div className="p-2.5 bg-[#faf7ee] border border-[#18181b] rounded-lg">
                <span className="text-stone-500 block text-[10px] uppercase font-bold">Role</span>
                <span className="font-bold text-[#18181b]">{project.role}</span>
              </div>

              <div className="p-2.5 bg-[#faf7ee] border border-[#18181b] rounded-lg">
                <span className="text-stone-500 block text-[10px] uppercase font-bold">Timeline</span>
                <span className="font-bold text-[#18181b]">{project.timeline}</span>
              </div>

              <div className="p-2.5 bg-[#faf7ee] border border-[#18181b] rounded-lg col-span-2 sm:col-span-1">
                <span className="text-stone-500 block text-[10px] uppercase font-bold">Status</span>
                <span className="font-bold text-[#22c55e]">Shipped &amp; Verified</span>
              </div>
            </div>

            {/* Action Links with Wobble & Collapse Press */}
            <div className="flex flex-wrap items-center gap-3 mt-6">
              {project.demo ? (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  whileTap={{ scale: 0.95, x: 2, y: 2 }}
                  className="btn-scrapbook-primary py-2 px-4 text-xs"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{project.demoLabel || 'Open Live Demo'}</span>
                </motion.a>
              ) : project.demoLabel ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-stone-600 bg-[#faf7ee] border-2 border-[#18181b]/30 rounded-lg">
                  <Clock className="w-3.5 h-3.5 text-stone-500" />
                  <span>{project.demoLabel}</span>
                </span>
              ) : null}

              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  whileTap={{ scale: 0.95, x: 2, y: 2 }}
                  className="btn-scrapbook-secondary py-2 px-4 text-xs"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>{project.githubLabel || 'View Source Code'}</span>
                </motion.a>
              )}
            </div>

            {/* Tech Chips */}
            <div className="flex flex-wrap gap-1.5 mt-5 pt-5 border-t border-stone-100">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-white border border-[#18181b] rounded-lg text-xs font-mono font-bold text-[#18181b] shadow-[1px_1px_0px_#18181b]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Hero Screenshot Frame or Architectural Blueprint */}
          {project.image ? (
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden border-2 border-[#18181b] bg-stone-100 shadow-[4px_4px_0px_#18181b] mb-10">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>
          ) : (
            <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden border-2 border-[#18181b] bg-[#faf7ee] shadow-[4px_4px_0px_#18181b] mb-10 p-6 flex flex-col justify-between">
              {/* Tape */}
              <div className="absolute -top-3 right-10 w-48 h-6 bg-[#fde047] border border-[#18181b]/30 -rotate-1 z-20 pointer-events-none shadow-xs text-[10px] font-mono font-bold text-[#18181b] flex items-center justify-center">
                SCREENSHOT PLACEHOLDER
              </div>
              <div className="flex items-center justify-between z-10">
                <span className="px-2.5 py-1 bg-white border border-[#18181b] rounded text-[10px] font-mono font-bold shadow-[1px_1px_0px_#18181b]">
                  PROJECT PREVIEW
                </span>
                <span className="px-2.5 py-1 bg-[#22c55e] text-white font-mono font-bold text-[10px] rounded shadow-[1px_1px_0px_#18181b]">
                  SCREENSHOT TODO
                </span>
              </div>
              <div className="my-auto py-4 text-center z-10">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-white border-2 border-[#18181b] flex items-center justify-center mb-3 shadow-[3px_3px_0px_#18181b]">
                  <Cpu className="w-7 h-7 text-[#ef4444]" />
                </div>
                <h3 className="font-display font-black text-xl sm:text-2xl text-[#18181b]">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-mono mt-1 max-w-lg mx-auto">
                  {project.tagline}
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-[#18181b]/20 text-[11px] font-mono text-stone-600 z-10">
                <span>⚡ Add a screenshot</span>
                <span>🛡️ in /public</span>
                <span>🚫 set image in projects.ts</span>
                <span className="text-[#854d0e] font-bold">📌 Cover image slot</span>
              </div>
            </div>
          )}

          {/* Structured Deep-Dive Sections */}
          <div className="space-y-8 text-stone-800 text-sm sm:text-base leading-relaxed">
            
            {/* 1. Problem & Context */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#faf7ee] p-5 sm:p-6 rounded-2xl border-2 border-[#18181b]/30"
            >
              <h2 className="text-lg font-display font-black text-[#18181b] flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-[#ef4444] text-white text-xs rounded font-mono">01</span>
                Problem &amp; Real-World Context
              </h2>
              <p className="text-stone-700">
                {project.problem}
              </p>
            </motion.section>

            <>
                {/* 2. Technical Approach */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-[#faf7ee] p-5 sm:p-6 rounded-2xl border-2 border-[#18181b]/30"
                >
                  <h2 className="text-lg font-display font-black text-[#18181b] flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-[#fde047] text-[#18181b] text-xs rounded font-mono">02</span>
                    Technical Approach &amp; Solution
                  </h2>
                  <p className="text-stone-700">{project.built}</p>
                </motion.section>

                {/* 3. System Architecture */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-[#faf7ee] p-5 sm:p-6 rounded-2xl border-2 border-[#18181b]/30"
                >
                  <h2 className="text-lg font-display font-black text-[#18181b] flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-[#38bdf8] text-[#18181b] text-xs rounded font-mono">03</span>
                    System Architecture
                  </h2>
                  <p className="text-stone-700">{project.architecture}</p>
                </motion.section>

                {/* 4. Key Implementation Features */}
                {project.keyFeatures && project.keyFeatures.length > 0 && (
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white p-5 sm:p-6 rounded-2xl border-2 border-[#18181b]"
                  >
                    <h2 className="text-lg font-display font-black text-[#18181b] flex items-center gap-2 mb-4">
                      <span className="px-2 py-0.5 bg-[#22c55e] text-white text-xs rounded font-mono">04</span>
                      Key Features &amp; Engineering Highlights
                    </h2>
                    <ul className="space-y-2.5">
                      {project.keyFeatures.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                          <CheckCircle2 className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.section>
                )}

                {/* 5. Challenges Overcome & What Broke */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-[#fff1f2] p-5 sm:p-6 rounded-2xl border-2 border-[#ef4444]"
                >
                  <h2 className="text-lg font-display font-black text-[#ef4444] flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-5 h-5 text-[#ef4444]" />
                    Challenges Overcome &amp; Edge Cases
                  </h2>
                  <p className="text-stone-800 text-xs sm:text-sm">{project.challenges}</p>
                </motion.section>

                {/* 6. Outcome & What I Learned */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-[#f0fdf4] p-5 sm:p-6 rounded-2xl border-2 border-[#22c55e]">
                  <h2 className="text-lg font-display font-black text-[#15803d] flex items-center gap-2 mb-2">
                    <Rocket className="w-5 h-5 text-[#15803d]" />
                    Outcome &amp; Production Status
                  </h2>
                  <p className="text-stone-800 text-xs sm:text-sm">{project.outcome}</p>
                </motion.section>
            </>

            {/* Tech Stack Chips at bottom with Hover Wiggle */}
            <div className="pt-4">
              <span className="block text-xs font-mono font-bold text-stone-500 uppercase mb-2">
                Technologies Used:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.08, rotate: 2, backgroundColor: "#fde047" }}
                    className="px-2.5 py-1 bg-white border border-[#18181b] rounded-lg text-xs font-mono font-bold text-[#18181b] shadow-[1px_1px_0px_#18181b] cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

          </div>

          {/* Next / Previous Project Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t-2 border-[#18181b]/15">
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href={`/projects/${prevProject.slug}`}
                className="p-4 bg-[#faf7ee] border-2 border-[#18181b] rounded-xl shadow-[3px_3px_0px_#18181b] block text-left group"
              >
                <span className="text-[10px] font-mono text-stone-500 uppercase block">← Previous Project</span>
                <span className="text-sm font-display font-black text-[#18181b] group-hover:text-[#ef4444] transition-colors">
                  {prevProject.title}
                </span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href={`/projects/${nextProject.slug}`}
                className="p-4 bg-[#faf7ee] border-2 border-[#18181b] rounded-xl shadow-[3px_3px_0px_#18181b] block text-right group"
              >
                <span className="text-[10px] font-mono text-stone-500 uppercase block">Next Project →</span>
                <span className="text-sm font-display font-black text-[#18181b] group-hover:text-[#ef4444] transition-colors">
                  {nextProject.title}
                </span>
              </Link>
            </motion.div>
          </div>

        </motion.article>

      </div>
    </PageTransition>
  );
}
