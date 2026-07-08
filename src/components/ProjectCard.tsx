"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import type { Project, ProjectCategory } from "@/data/projects";

const categoryStyles: Record<
  ProjectCategory,
  { thumbBg: string; thumbFg: string; tagBg: string; tagFg: string; accent: string }
> = {
  coordination: {
    thumbBg: "bg-ink/5",
    thumbFg: "text-ink/50",
    tagBg: "bg-ink/10",
    tagFg: "text-ink/70",
    accent: "border-ink/20",
  },
  partnerships: {
    thumbBg: "bg-lavender-tint",
    thumbFg: "text-lavender-deep",
    tagBg: "bg-lavender-tint",
    tagFg: "text-lavender-deep",
    accent: "border-lavender-deep/30",
  },
  implementation: {
    thumbBg: "bg-terracotta-tint",
    thumbFg: "text-terracotta",
    tagBg: "bg-terracotta-tint",
    tagFg: "text-terracotta",
    accent: "border-terracotta/30",
  },
  data: {
    thumbBg: "bg-teal-tint",
    thumbFg: "text-teal",
    tagBg: "bg-teal-tint",
    tagFg: "text-teal",
    accent: "border-teal/30",
  },
  freelance: {
    thumbBg: "bg-ink/5",
    thumbFg: "text-ink/50",
    tagBg: "bg-ink/5",
    tagFg: "text-ink/60",
    accent: "border-ink/20",
  },
};

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const styles = categoryStyles[project.category];

  // Lock body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* ── Card ── */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => e.key === "Enter" && setOpen(true)}
        className="group cursor-pointer border border-border hover:border-border-strong rounded-md overflow-hidden h-full flex flex-col bg-white/60 transition-all hover:-translate-y-1 hover:shadow-lg"
      >
        {/* Thumbnail */}
        <div className={`relative h-52 flex items-center justify-center overflow-hidden ${styles.thumbBg} ${styles.thumbFg}`}>
          {project.image ? (
            <>
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
                style={{ objectPosition: project.imagePosition ?? "50% 40%" }}
              />
              <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            </>
          ) : (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
              <rect x="5" y="2" width="14" height="20" rx="2" />
              <path d="M9 7h6M9 11h6M9 15h4" />
            </svg>
          )}
        </div>

        {/* Body */}
        <div className="p-5 md:p-6 flex flex-col flex-1">
          <p className="font-script text-lg text-terracotta mb-1">{project.context}</p>
          <h3 className="font-display uppercase text-xl md:text-2xl leading-tight mb-3 group-hover:text-terracotta transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-ink-muted leading-relaxed flex-1 line-clamp-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <span key={tag} className={`text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full ${styles.tagBg} ${styles.tagFg}`}>
                {tag}
              </span>
            ))}
          </div>
          {/* Click for more prompt */}
          <div className="mt-5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-terracotta">
            <span>Click for more</span>
            <span className="text-base leading-none">↗</span>
          </div>
        </div>
      </div>

      {/* ── Modal ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="modal-overlay"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
          >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" />

          {/* Panel */}
          <motion.div
            className="relative z-10 bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-ink/10 hover:bg-ink/20 transition-colors text-ink"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Full image */}
            {project.image && (
              <div className="relative w-full h-72 md:h-96 overflow-hidden rounded-t-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 672px) 672px, 100vw"
                  className="object-cover"
                  style={{ objectPosition: project.imagePosition ?? "50% 40%" }}
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-paper to-transparent" />
              </div>
            )}

            {/* Content */}
            <div className="px-6 pb-6 pt-4">
              <p className="font-script text-xl text-terracotta mb-1">{project.context}</p>
              <h2 className="font-display uppercase text-2xl md:text-3xl leading-tight mb-4">
                {project.title}
              </h2>
              <p className="text-sm text-ink-muted leading-relaxed mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className={`text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full ${styles.tagBg} ${styles.tagFg}`}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* External link if present */}
              {(project.link ?? project.fileUrl) && (
                <a
                  href={project.link ?? project.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-terracotta border border-terracotta/40 rounded px-4 py-2 hover:bg-terracotta hover:text-white transition-colors mb-6"
                >
                  View project ↗
                </a>
              )}

              {/* Additional files & images */}
              <div className="border-t border-border pt-5">
                <p className="text-xs font-bold uppercase tracking-widest text-ink/40 mb-3">Additional Media</p>
                {project.extraFiles?.length || project.extraImages?.length || project.extraLinks?.length ? (
                  <div className="flex flex-col gap-3">
                    {project.extraLinks?.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 group/file"
                      >
                        <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded bg-ink/5 text-ink/40 group-hover/file:bg-terracotta group-hover/file:text-white transition-colors">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            <polyline points="15 3 21 3 21 9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                          </svg>
                        </span>
                        <span className="text-sm text-ink-muted group-hover/file:text-terracotta transition-colors leading-tight">
                          {link.label}
                        </span>
                      </a>
                    ))}
                    {project.extraFiles?.map((file) => (
                      <a
                        key={file.url}
                        href={file.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 group/file"
                      >
                        <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded bg-ink/5 text-ink/40 group-hover/file:bg-terracotta group-hover/file:text-white transition-colors">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <polyline points="14 2 14 8 20 8"/>
                          </svg>
                        </span>
                        <span className="text-sm text-ink-muted group-hover/file:text-terracotta transition-colors leading-tight">
                          {file.label}
                        </span>
                      </a>
                    ))}
                    {project.extraImages?.map((img, i) => (
                      <a
                        key={img.src}
                        href={img.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 group/file"
                      >
                        <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded bg-ink/5 text-ink/40 group-hover/file:bg-terracotta group-hover/file:text-white transition-colors">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <path d="m21 15-5-5L5 21" />
                          </svg>
                        </span>
                        <span className="text-sm text-ink-muted group-hover/file:text-terracotta transition-colors leading-tight">
                          {img.label ?? `Media ${i + 1}`}
                        </span>
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-ink/30 italic">More content coming soon.</p>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
}
