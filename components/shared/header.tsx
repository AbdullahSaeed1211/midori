"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Services', href: '/#services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Audit', href: '/audit' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Process', href: '/#process' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Get all sections and determine which one is currently in view
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 300; // Offset for better UX

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
          isScrolled
            ? 'bg-charcoal-gray/95 backdrop-blur-sm border-b border-white/10'
            : 'bg-transparent'
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center text-xl font-bold text-off-white">
              kiiro<span className="text-kiiro-yellow">.cx</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('/#', '');
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative px-3 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "text-kiiro-yellow"
                        : "text-off-white/70 hover:text-off-white"
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-1 left-0 right-0 h-[1px] bg-kiiro-yellow"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                asChild
                size="sm"
                className={cn(
                  "bg-kiiro-yellow text-charcoal-black",
                  "hover:bg-kiiro-yellow/90",
                )}
              >
                <Link href="/contact">
                  Book a Call
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Trigger */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <button 
                  aria-label="Toggle Menu"
                  className="flex items-center justify-center rounded-md w-9 h-9 text-off-white hover:bg-white/10 transition-colors"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-charcoal-gray/95 backdrop-blur-sm border-l border-white/10 text-off-white p-6 flex flex-col shadow-2xl">
                <SheetHeader className="mb-6 border-b border-white/10 pb-4">
                  <SheetTitle className="text-xl font-bold text-off-white">
                    kiiro<span className="text-kiiro-yellow">.cx</span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex-grow">
                  <ul className="space-y-2">
                    {navItems.map((item) => {
                      const isActive = activeSection === item.href.replace('/#', '');
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={cn(
                              "flex items-center py-2.5 px-3 rounded-md transition-colors text-base",
                              isActive
                                ? "text-kiiro-yellow bg-kiiro-yellow/10" 
                                : "text-off-white/80 hover:bg-white/10 hover:text-off-white"
                            )}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
                <div className="pt-6 mt-6 border-t border-white/10">
                  <Button
                    asChild
                    variant="default"
                    size="lg"
                    className={cn(
                      "bg-kiiro-yellow text-charcoal-black w-full",
                      "hover:bg-kiiro-yellow/90",
                    )}
                  >
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Book a Call
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
} 