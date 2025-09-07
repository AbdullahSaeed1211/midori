"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Check, X, ExternalLink } from "lucide-react";
import Link from "next/link";
import { ProjectProps } from "@/types/project";

interface ProjectDetailsModalProps {
  project: ProjectProps | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetailsModal({ project, isOpen, onClose }: ProjectDetailsModalProps) {
  // Close modal with escape key
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [isOpen, onClose]);

  // Prevent scrolling of body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            className="fixed inset-0 bg-charcoal-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-deep-gray rounded-xl shadow-xl"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-charcoal-black/50 text-off-white hover:bg-charcoal-black transition-colors duration-200"
              onClick={onClose}
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="relative w-full aspect-video">
              <Image
                src={project.image}
                alt={`${project.title} showcase`}
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-gray via-transparent to-transparent" />
            </div>
            
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="px-3 py-1 text-xs font-medium text-kiiro-yellow bg-kiiro-yellow/10 rounded-full border border-kiiro-yellow/20">
                  {project.industry}
                </div>
                {project.liveSiteUrl && (
                  <a
                    href={project.liveSiteUrl}
                    className="inline-flex items-center gap-1 text-xs font-medium text-off-white/70 hover:text-off-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Visit Site</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-off-white">{project.title}</h2>
              <p className="text-lg text-off-white/80 mb-8">{project.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-kiiro-yellow">Key Results</h3>
                  <ul className="space-y-3">
                    {project.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-kiiro-yellow shrink-0 mt-1" />
                        <span className="text-base text-off-white/90">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-kiiro-yellow">Project Scope</h3>
                  <p className="text-base text-off-white/80 mb-4">
                    We delivered a comprehensive solution including strategy, design, development, and optimization to achieve the client&apos;s business objectives.
                  </p>
                  
                  <h4 className="text-lg font-medium mb-2 text-off-white">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs font-medium bg-deep-gray/50 rounded border border-off-white/10 text-off-white/80">Next.js</span>
                    <span className="px-2 py-1 text-xs font-medium bg-deep-gray/50 rounded border border-off-white/10 text-off-white/80">React</span>
                    <span className="px-2 py-1 text-xs font-medium bg-deep-gray/50 rounded border border-off-white/10 text-off-white/80">TypeScript</span>
                    <span className="px-2 py-1 text-xs font-medium bg-deep-gray/50 rounded border border-off-white/10 text-off-white/80">TailwindCSS</span>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-off-white/10 pt-6">
                <Link 
                  href="#booking" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-kiiro-yellow text-off-white rounded-lg font-medium transition-all duration-300 hover:bg-kiiro-yellow/90 hover:shadow-[0_0_15px_rgba(76,175,80,0.3)]"
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Want Results Like These? Let&apos;s Talk
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
} 