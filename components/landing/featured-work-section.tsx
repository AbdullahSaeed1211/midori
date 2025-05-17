"use client";

import Image from "next/image";
import { Check, Filter } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { ProjectProps } from "@/types/project";
import { ProjectDetailsModal } from "./project-details-modal";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";

const projects: ProjectProps[] = [
    {
      title: "BlogSquirrel",
    description: "A complete redesign of this blogging platform's marketing site led to a 137% increase in sign-ups and dramatically improved user engagement metrics.",
    results: [
      "137% increase in sign-up conversion rate",
      "42% decrease in bounce rate",
      "3.2x improvement in average session duration",
      "Seamless mobile experience with sub-1s load times"
    ],
    image: "/projects/blogport.webp",
    liveSiteUrl: "#",
    industry: "saas"
    },
    {
      title: "BrainWise",
    description: "Transformed an early-stage AI learning platform into a premium educational experience with intuitive UX and strategic information architecture.",
    results: [
      "89% increase in trial-to-paid conversions",
      "Customer acquisition cost reduced by 37%",
      "Improved user retention by 28%",
      "Enhanced visual identity and brand perception"
    ],
    image: "/projects/brainwise.webp",
    liveSiteUrl: "#",
    industry: "education"
    },
    {
      title: "Dubbby",
    description: "Crafted a high-conversion landing page for this AI dubbing service that effectively communicates complex technology in an accessible way.",
    results: [
      "215% increase in demo requests",
      "52% improvement in qualified lead generation",
      "Reduced explained needed in sales calls by 35%",
      "Established market-leading brand perception"
    ],
    image: "/projects/dubbby.webp",
    liveSiteUrl: "#",
    industry: "technology"
  }
];

const industryTypes = [
  { label: "All", value: "all" },
  { label: "E-commerce", value: "ecommerce" },
  { label: "SaaS", value: "saas" },
  { label: "Education", value: "education" },
  { label: "Technology", value: "technology" }
];

export function FeaturedWorkSection() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const filteredProjects = selectedIndustry === "all" 
    ? projects 
    : projects.filter(project => project.industry === selectedIndustry);

  const openProjectModal = (project: ProjectProps) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
  };

  return (
    <motion.section 
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="py-28 bg-charcoal-black text-off-white" 
      id="featured-work"
    >
        <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center mb-16 max-w-3xl mx-auto text-center">
          <motion.div 
            className="px-4 py-1.5 rounded-full bg-kiiro-yellow/10 text-kiiro-yellow text-sm font-medium mb-6 border border-kiiro-yellow/20"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Case Studies
          </motion.div>
          <motion.h2 
            className="text-4xl font-bold md:text-5xl mb-6 text-off-white"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Real Results for Real Businesses
          </motion.h2>
          <motion.p 
            className="text-xl text-off-white/80 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            We don&apos;t just make websites look good — we deliver measurable improvements in the metrics that matter to your business.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center p-1 bg-deep-gray/50 rounded-lg">
            <Filter className="h-4 w-4 text-kiiro-yellow mx-2" />
            {industryTypes.map((type) => (
              <button
                key={type.value}
                onClick={() => setSelectedIndustry(type.value)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  selectedIndustry === type.value
                    ? "bg-kiiro-yellow text-off-white"
                    : "text-off-white/70 hover:text-off-white hover:bg-deep-gray/70"
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="group"
              >
                <div className="h-full bg-deep-gray/30 rounded-xl border border-kiiro-yellow/10 overflow-hidden transition-all duration-300 hover:shadow-[0_10px_40px_-15px_rgba(76,175,80,0.2)] hover:border-kiiro-yellow/30">
                  <div className="relative aspect-video overflow-hidden">
                    <Image 
                      src={project.image} 
                      alt={`${project.title} showcase`} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105" 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-black to-transparent opacity-40" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-bold text-off-white">{project.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {project.results.slice(0, 2).map((result, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <Check className="h-4 w-4 text-kiiro-yellow shrink-0 mt-0.5" />
                            <span className="text-off-white/90">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button 
                      className="w-full py-2 px-4 bg-kiiro-yellow/10 rounded-md text-kiiro-yellow text-sm font-medium transition-colors hover:bg-kiiro-yellow/20 mt-2"
                      onClick={() => openProjectModal(project)}
                    >
                      View Full Case Study
                    </button>
                  </div>
                </div>
              </motion.div>
              ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex justify-center mt-12"
        >
          <Link
            href="/portfolio"
            className="px-6 py-3 bg-kiiro-yellow/10 text-kiiro-yellow border border-kiiro-yellow/20 rounded-lg hover:bg-kiiro-yellow/20 transition-colors duration-300"
          >
            View All Projects
          </Link>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center mt-20"
        >
          <ScrollIndicator 
            text="See Our Pricing" 
            onClick={() => {
              const nextSection = document.getElementById('pricing');
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          />
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </motion.section>
  );
} 