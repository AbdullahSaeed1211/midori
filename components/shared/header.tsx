"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Menu, ArrowRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteSearch } from '@/components/ui/site-search';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Work', href: '#featured-work' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100; // Offset for header height
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveItem('#' + section);
            break;
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    // Cleanup scroll listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add/Remove overflow-hidden on body when mobile menu state changes
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    // Cleanup function to restore overflow if component unmounts while open
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled 
          ? 'bg-deep-gray/80 backdrop-blur-xl shadow-lg border-b border-verdant-green/10' 
          : 'bg-transparent pt-4',
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold group flex items-center">
          <motion.span 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Midori
            <span className="text-verdant-green">Labs</span>
            <motion.span 
              className="text-verdant-green inline-block"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.5, rotate: 180 }}
              transition={{ duration: 0.3 }}
            >.</motion.span>
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-all duration-200 relative py-2 px-1",
                activeItem === item.href 
                  ? "text-verdant-green" 
                  : "text-off-white/70 hover:text-verdant-green"
              )}
            >
              {item.label}
              {activeItem === item.href && (
                <motion.span 
                  className="absolute bottom-0 left-0 h-0.5 bg-verdant-green"
                  layoutId="navIndicator"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
          
          <SiteSearch />
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              asChild
              variant="default"
              size="sm"
              className={cn(
                "bg-verdant-green text-off-white",
                "hover:bg-verdant-green/90 hover:shadow-[0_0_15px_theme(colors.verdant-green/30)]",
                "transition-all duration-300"
              )}
            >
              <Link href="#booking" className="flex items-center gap-1.5">
                <span>Get Started</span>
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.8 }}
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                </motion.div>
              </Link>
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center rounded-full w-10 h-10 bg-verdant-green/10 text-off-white hover:bg-verdant-green/20 transition-colors"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </motion.button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-deep-gray/95 backdrop-blur-lg border-l border-verdant-green/10 text-off-white p-6 flex flex-col">
              <SheetHeader className="mb-8 border-b border-verdant-green/10 pb-4 flex flex-row justify-between items-center">
                <Link href="/" className="text-xl font-bold group flex items-center" onClick={closeMobileMenu}>
                  <span>Midori<span className="text-verdant-green">Labs</span></span>
                  <span className="text-verdant-green transition-transform duration-200 inline-block group-hover:scale-150">.</span>
                </Link>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeMobileMenu}
                  className="rounded-full p-2 hover:bg-verdant-green/10"
                >
                  <X className="h-5 w-5 text-off-white/70" />
                </motion.button>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-1 flex-grow">
                <AnimatePresence>
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ delay: index * 0.05, duration: 0.2 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "block rounded-md px-3 py-2.5 text-base font-medium",
                          "transition-all duration-200 relative",
                          activeItem === item.href 
                            ? "text-verdant-green bg-verdant-green/10" 
                            : "text-off-white/80 hover:bg-verdant-green/10 hover:text-verdant-green"
                        )}
                        onClick={closeMobileMenu}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                <motion.div 
                  className="mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <SiteSearch />
                </motion.div>
                
                <motion.div 
                  className="pt-6 mt-6 border-t border-verdant-green/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Button
                    asChild
                    variant="default"
                    className={cn(
                      "mt-4 w-full py-6 h-auto text-base font-medium",
                      "bg-verdant-green text-off-white",
                      "hover:bg-verdant-green/90 hover:shadow-[0_0_15px_theme(colors.verdant-green/30)]",
                      "transition-all duration-300 rounded-xl"
                    )}
                    onClick={closeMobileMenu}
                  >
                    <Link href="#booking" className="flex items-center justify-center gap-2">
                      Get Started
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
} 