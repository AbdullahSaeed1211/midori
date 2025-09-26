"use client";

import React, { useMemo, useCallback, useState, useEffect, Suspense } from "react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ChevronRight, Trophy, Clock, Users } from "lucide-react";

// Types
interface CaseStudySectionProps {
  className?: string;
  maxItems?: number;
  showStats?: boolean;
  variant?: 'default' | 'compact';
}

interface CaseStudyProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  accentColor: string;
  featured?: boolean;
}

interface StatItem {
  value: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

// Constants
const CASE_STUDIES: CaseStudyProps[] = [
  {
    title: "Guidance Welfare Foundation",
    description: "A comprehensive Islamic Educational Platform built as a full-stack Learning Management System serving over 100 active learners with enterprise-grade architecture.",
    image: "/projects/guidancewelfare.webp",
    link: "/case-studies/guidance-welfare",
    tags: ["EdTech", "LMS", "Enterprise Application"],
    accentColor: "purple",
    featured: true
  },
  {
    title: "Simply Mortgage",
    description: "UAE's premier mortgage consultancy needed a digital transformation. We built a conversion-focused website with interactive calculators and streamlined booking. Results: significant increase in qualified leads and improved conversion rates.",
    image: "/projects/simply.webp",
    link: "/case-studies/simply-mortgage",
    tags: ["Lead Generation", "Conversion Optimization", "UAE Market"],
    accentColor: "yellow",
    featured: true
  },
  {
    title: "Nishoo Mittal",
    description: "Comprehensive financial planning website for MDRT Galaxy Club member Nishoo Mittal, featuring interactive calculators and trust-building design that serves Indian families with personalized wealth management solutions.",
    image: "/projects/mittal.webp",
    link: "/case-studies/nishoo-mittal",
    tags: ["Financial Planning", "Wealth Management", "Interactive Calculators", "Family-Centric"],
    accentColor: "yellow",
    featured: true
  },
  {
    title: "Lotus Pro Services",
    description: "Document services company in Dubai needed premium positioning. We created a sophisticated brand identity and conversion-optimized website. Established them as a premium provider in UAE's competitive market.",
    image: "/projects/lotus.webp",
    link: "/case-studies/lotus-pro-services",
    tags: ["Premium Positioning", "Brand Identity", "Professional Services"],
    accentColor: "teal",
  },
  {
    title: "BrainWise",
    description: "Professional learning platform struggled with course completion. We redesigned the user journey with personalized paths and mobile optimization. Improved completion rates and subscription renewals.",
    image: "/projects/brainwise.webp",
    link: "/case-studies/brain-wise",
    tags: ["Learning Platform", "Mobile Optimization", "User Journey"],
    accentColor: "purple",
  },
  {
    title: "Sproutly",
    description: "Urban gardening education platform needed better user engagement. We designed an intuitive learning experience with community features. Improved course completion rates and user retention significantly.",
    image: "/projects/sproutly.webp",
    link: "/case-studies/sproutly",
    tags: ["EdTech Platform", "User Experience", "Community Features"],
    accentColor: "teal",
  },
  {
    title: "Dubbby",
    description: "AI content creation platform needed trial conversions. Our sleek, benefit-focused design showcased the technology's value. Achieved notable increase in trial signups and improved engagement.",
    image: "/projects/dubbby.webp",
    link: "/case-studies/dubbby",
    tags: ["SaaS Platform", "Trial Optimization", "AI Technology"],
    accentColor: "magenta",
    featured: true
  },
  {
    title: "BlogSquirrel",
    description: "Content management platform needed better user engagement. We created an intuitive dashboard with enhanced analytics and streamlined workflows. Increased user retention and daily activity.",
    image: "/projects/blogport.webp",
    link: "/case-studies/blog-squirrel",
    tags: ["Content Management", "Dashboard Design", "Analytics"],
    accentColor: "teal",
  },
  {
    title: "Midori Agency",
    description: "Our own website showcasing our design and development expertise. Built with Next.js, TypeScript, and Tailwind CSS, featuring interactive elements and optimized performance. A demonstration of our approach to creating engaging, high-performance web experiences.",
    image: "/projects/midori.webp",
    link: "/",
    tags: ["Agency Website", "Portfolio", "UI/UX", "Next.js"],
    accentColor: "yellow",
  },
  {
    title: "Coming Soon 1",
    description: "Coming Soon - An innovative web solution currently in development. Stay tuned for the launch of this exciting new project that will push the boundaries of modern web design and user experience.",
    image: "/projects/alpha.webp",
    link: "#",
    tags: ["Coming Soon", "Innovation", "Next-Gen"],
    accentColor: "yellow",
  },
  {
    title: "Coming Soon 2",
    description: "Coming Soon - A transformative wellness platform designed to enhance mindfulness and well-being through innovative digital experiences. An exciting new venture that will revolutionize the wellness industry.",
    image: "/projects/zen.webp",
    link: "#",
    tags: ["Coming Soon", "Wellness", "Mindfulness"],
    accentColor: "teal",
  },

];

const STATS: StatItem[] = [
  {
    value: "Better Results",
    label: "For Every Client",
    description: "Improved metrics across all projects",
    icon: Trophy,
    color: "text-amber-400"
  },
  {
    value: "15+",
    label: "Successful Projects",
    description: "Completed projects with positive outcomes",
    icon: Users,
    color: "text-emerald-400"
  },
  {
    value: "1-2 weeks",
    label: "Average Delivery",
    description: "From concept to launch",
    icon: Clock,
    color: "text-blue-400"
  }
];

// Optimized animation variants for better performance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20, 
    scale: 0.98 
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const
    }
  }
};

const headerVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  }
};

// Enhanced Case Study Card Component with performance optimizations
const EnhancedCaseStudyCard: React.FC<CaseStudyProps & { className?: string }> = React.memo(({
  title,
  description,
  image,
  link,
  tags,
  accentColor,  
  featured = false,
  className
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const getAccentColorClass = useCallback((color: string) => {
    const colorMap: Record<string, string> = {
      yellow: "from-yellow-400/20 to-yellow-600/10",
      teal: "from-teal-400/20 to-teal-600/10",
      magenta: "from-purple-400/20 to-pink-600/10",
      purple: "from-purple-400/20 to-purple-600/10"
    };
    return colorMap[color] || colorMap.yellow;
  }, []);

  const handleCardClick = useCallback(() => {
    window.open(link, '_blank');
  }, [link]);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  // Optimized animation configs with reduced motion for better performance
  const hoverAnimation = useMemo(() => shouldReduceMotion ? {} : {
    y: -2,
  }, [shouldReduceMotion]);

  const hoverTransition = useMemo(() => ({
    type: "spring" as const,
    stiffness: shouldReduceMotion ? 100 : 150,
    damping: shouldReduceMotion ? 25 : 20,
    mass: 0.6
  }), [shouldReduceMotion]);

  return (
    <motion.article
      className={cn(
        "group relative h-full cursor-pointer will-change-transform",
        featured && "md:col-span-2 lg:col-span-1",
        className
      )}

      whileHover={hoverAnimation}
      transition={hoverTransition}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      aria-label={`View ${title} case study`}
    >
      {/* Animated border gradient */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-kiiro-yellow/50 via-blue-500/30 to-purple-500/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      
      {/* Main card */}
      <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 group-hover:border-white/20 rounded-2xl overflow-hidden transition-all duration-300 will-change-transform">
        
        {/* Image section */}
        <div className="relative overflow-hidden h-64 md:h-72">
          {!imageLoaded && (
            <div className="animate-pulse bg-white/10 w-full h-full" />
          )}
          <motion.div
            className="w-full h-full relative"
            whileHover={shouldReduceMotion ? {} : { y: -1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: "easeOut" }}
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              onLoad={handleImageLoad}
              priority={featured}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
          
          {/* Dynamic color overlay */}
          <div 
            className={cn(
              "absolute inset-0 mix-blend-multiply opacity-20 group-hover:opacity-10 transition-opacity duration-500",
              `bg-gradient-to-br ${getAccentColorClass(accentColor)}`
            )}
          />
          
          {/* Main overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
          
          {/* Floating elements for depth */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-white/60 rounded-full animate-pulse" />
          <div className="absolute bottom-6 left-6 w-1 h-1 bg-kiiro-yellow/80 rounded-full animate-ping" />
          
          {/* Optimized background shapes */}
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-kiiro-yellow/20 to-transparent rounded-full blur-lg group-hover:scale-125 transition-transform duration-500" />
          <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-xl group-hover:scale-110 transition-transform duration-500" />
        </div>

        {/* Content section */}
        <div className="relative p-8 space-y-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 hover:bg-white/20 transition-colors duration-300"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Title */}
          <motion.h3
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent leading-tight"
            whileHover={shouldReduceMotion ? {} : {}}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          >
            {title}
          </motion.h3>

          {/* Description */}
          <p className="text-white/80 leading-relaxed text-base font-light line-clamp-3">
            {description}
          </p>

         

          {/* CTA */}
          <motion.div
            className="flex items-center gap-2 text-kiiro-yellow font-semibold group-hover:gap-4 transition-all duration-300 pt-2"
            whileHover={shouldReduceMotion ? {} : {}}
          >
            <span>View Case Study</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
});

EnhancedCaseStudyCard.displayName = 'EnhancedCaseStudyCard';

// Loading skeleton component
const CaseStudySkeleton = () => (
  <div className="animate-pulse">
    <div className="relative bg-white/5 rounded-2xl overflow-hidden">
      <div className="h-64 bg-gradient-to-r from-white/5 via-white/10 to-white/5" />
      <div className="p-6 space-y-4">
        <div className="h-4 bg-white/10 rounded w-3/4" />
        <div className="h-3 bg-white/10 rounded w-1/2" />
        <div className="space-y-2">
          <div className="h-2 bg-white/5 rounded" />
          <div className="h-2 bg-white/5 rounded w-5/6" />
        </div>
      </div>
    </div>
  </div>
);

// Enhanced Stats Component
const StatsSection = React.memo(() => (
  <motion.div
    className="grid grid-cols-3 gap-4 mt-12 sm:flex sm:flex-wrap sm:justify-center sm:gap-8"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
  >
    {STATS.map((stat) => (
      <motion.div
        key={stat.label}
        variants={itemVariants}
        className="group text-center p-2 sm:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-kiiro-yellow/30 transition-all duration-300"
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex justify-center mb-2 sm:mb-3">
          <stat.icon className={cn("w-6 h-6 sm:w-8 sm:h-8", stat.color, "group-hover:scale-110 transition-transform duration-300")} />
        </div>
        <div className="text-xl sm:text-2xl font-bold text-kiiro-yellow mb-1">{stat.value}</div>
        <div className="text-sm text-off-white/70 mb-1 sm:mb-2">{stat.label}</div>
        <div className="text-xs text-off-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {stat.description}
        </div>
      </motion.div>
    ))}
  </motion.div>
));

StatsSection.displayName = 'StatsSection';

// Main component
export function CaseStudiesSection({
  className,
  maxItems = CASE_STUDIES.length,
  showStats = true,
  variant = 'default'
}: CaseStudySectionProps) {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Hydration-safe effect
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const displayedStudies = useMemo(() => {
    if (showAllProjects) {
      return CASE_STUDIES.slice(0, maxItems); // Show all projects (respecting maxItems limit)
    } else {
      return CASE_STUDIES.slice(0, 3); // Show only first 3 projects
    }
  }, [showAllProjects, maxItems]);

  const hasMoreProjects = CASE_STUDIES.length > 3 && maxItems > 3;
  const remainingCount = CASE_STUDIES.length - 3;

  const handleShowMore = useCallback(() => {
    setShowAllProjects(!showAllProjects);
  }, [showAllProjects]);

  // Optimized scroll handler
  const handleScrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: shouldReduceMotion ? 'auto' : 'smooth',
        block: 'start'
      });
    }
  }, [shouldReduceMotion]);

  // Image preloading effect
  useEffect(() => {
    const preloadImages = async () => {
      const criticalImages = displayedStudies.slice(0, 3);
      const imagePromises = criticalImages.map(study =>
        new Promise<void>((resolve) => {
          const img = new window.Image();
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = study.image;
        })
      );

      try {
        await Promise.allSettled(imagePromises);
      } finally {
        setImagesLoaded(true);
      }
    };

    preloadImages();
  }, [displayedStudies]);



  // Structured data for SEO - memoized to prevent recalculation
  const structuredData = useMemo(() => {
    if (typeof window === 'undefined') return null;

    return {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Case Studies - Midori Agency",
      "description": "Real projects and results from our web design and development work",
      "url": `${window.location.origin}${window.location.pathname}#case-studies`,
      "hasPart": displayedStudies.map(study => ({
        "@type": "CreativeWork",
        "name": study.title,
        "description": study.description,
        "keywords": study.tags.join(", "),
        "url": study.link
      }))
    };
  }, [displayedStudies]);

  useEffect(() => {
    if (!structuredData) return;

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    script.id = 'case-studies-structured-data';
    
    // Remove existing script if it exists
    const existingScript = document.getElementById('case-studies-structured-data');
    if (existingScript) {
      document.head.removeChild(existingScript);
    }
    
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('case-studies-structured-data');
      if (scriptToRemove && document.head.contains(scriptToRemove)) {
        document.head.removeChild(scriptToRemove);
      }
    };
  }, [structuredData]);

  return (
    <section
      className={cn(
        "py-20 bg-charcoal-black relative overflow-hidden",
        variant === 'compact' && "pb-16",
        className
      )}
      id="case-studies"
      aria-labelledby="case-studies-heading"
    >
      {/* Background */}
      <BackgroundBeams className="z-0 opacity-40" />

      {/* Skip link for accessibility */}
      <a
        href="#contact"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-kiiro-yellow text-charcoal-black px-4 py-2 rounded-md font-medium"
      >
        Skip to contact form
      </a>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span
            className="inline-flex items-center gap-2 text-kiiro-yellow font-semibold tracking-wider uppercase text-sm mb-6 px-4 py-2 rounded-full bg-kiiro-yellow/10 border border-kiiro-yellow/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Trophy className="w-4 h-4" />
            CASE STUDIES
          </motion.span>

          <h2
            id="case-studies-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text"
          >
            Real Projects, Real {' '}
            <span className="text-kiiro-yellow"> Results</span>
          </h2>

          <p className="text-white/70 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            See how we&apos;ve helped businesses like yours achieve measurable growth with strategic design and development.
          </p>

          {/* Stats */}
          {showStats && <StatsSection />}
        </motion.div>

        {/* Case Studies Grid */}
        <AnimatePresence mode="wait">
          {!imagesLoaded ? (
            <motion.div
              className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <CaseStudySkeleton key={index} />
              ))}
            </motion.div>
          ) : (
            <Suspense fallback={<div>Loading case studies...</div>}>
              <motion.div
                className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                key={showAllProjects ? 'all' : 'preview'} // Force re-animation when expanding
                transition={{
                  staggerChildren: 0.08,
                  delayChildren: 0.1,
                  duration: 0.4
                }}
                layout
              >
                <AnimatePresence mode="popLayout" initial={false}>
                  {displayedStudies.map((caseStudy, index) => (
                    <motion.div
                      key={`${caseStudy.title}-${showAllProjects ? 'expanded' : 'collapsed'}`}
                      variants={itemVariants}
                      className={cn(
                        "group",
                        index === 0 && "md:col-span-2 lg:col-span-1",
                        index === 4 && "md:col-span-2 lg:col-span-1"
                      )}
                      whileHover={{}}
                      layout
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                          duration: 0.4,
                          ease: "easeOut",
                          delay: index * 0.05
                        }
                      }}
                      exit={{
                        opacity: 0,
                        y: -20,
                        scale: 0.95,
                        transition: {
                          duration: 0.3,
                          ease: "easeIn"
                        }
                      }}
                    >
                      <EnhancedCaseStudyCard
                        {...caseStudy}
                        className="h-full"
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </Suspense>
          )}
        </AnimatePresence>

        {/* Enhanced View More Button - Only render after hydration */}
        {isHydrated && hasMoreProjects && (
          <motion.div
            className="mt-12 text-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            layout
          >
            <motion.button
              onClick={handleShowMore}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold hover:from-white/20 hover:to-white/10 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-kiiro-yellow focus:ring-offset-2 focus:ring-offset-charcoal-black transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              aria-label={showAllProjects ? "Show fewer case studies" : `View all ${CASE_STUDIES.length} case studies`}
              layout
            >
              {showAllProjects ? (
                <>
                  <span>Show Less</span>
                  <motion.div
                    className="w-5 h-5"
                    animate={{ rotate: 180 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.div>
                </>
              ) : (
                <>
                  <span>View All Projects ({remainingCount} more)</span>
                  <motion.div
                    className="w-5 h-5"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.div>
                </>
              )}
            </motion.button>

            {/* Dynamic helper text with smooth transition */}
            <motion.p
              className="mt-3 text-sm text-white/60"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              key={showAllProjects ? 'expanded' : 'collapsed'}
              layout
            >
              {showAllProjects
                ? "Showing all available projects"
                : `${remainingCount} additional projects available`
              }
            </motion.p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.button
            onClick={() => handleScrollToSection('contact')}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-gradient-to-r from-kiiro-yellow to-kiiro-yellow/90 text-charcoal-black font-semibold hover:shadow-lg hover:shadow-kiiro-yellow/25 focus:outline-none focus:ring-2 focus:ring-kiiro-yellow focus:ring-offset-2 focus:ring-offset-charcoal-black transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-describedby="cta-description"
          >
            Start Your Project
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
          <p id="cta-description" className="sr-only">
            Click to scroll to the contact form and start your project
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <ScrollIndicator
            text="Client Testimonials"
            onClick={() => handleScrollToSection('client-wins')}
            className="hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default CaseStudiesSection;
