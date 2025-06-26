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
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Process', href: '/#process' },
  { label: 'FAQ', href: '/#faq' },
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
            ? 'bg-deep-gray/80 backdrop-blur-xl shadow-lg border-b border-kiiro-yellow/10'
            : 'bg-transparent'
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center text-2xl font-bold text-off-white">
              kiiro<span className="text-kiiro-yellow">.cx</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = `#${activeSection}` === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "text-kiiro-yellow"
                        : "text-off-white/70 hover:text-kiiro-yellow"
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 h-0.5 bg-kiiro-yellow"
                        style={{
                          width: '30%',
                          left: '35%',
                        }}
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
                className={cn(
                  "bg-kiiro-yellow text-charcoal-black",
                  "hover:bg-kiiro-yellow/90 hover:shadow-[0_0_15px_theme(colors.kiiro-yellow/30)]",
                )}
              >
                <Link href="#booking">
                  Book a Call
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Trigger */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <button 
                  aria-label="Toggle Menu"
                  className="flex items-center justify-center rounded-full w-10 h-10 bg-kiiro-yellow/10 text-off-white hover:bg-kiiro-yellow/20 transition-colors"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-charcoal-gray/95 backdrop-blur-sm border-l border-white/10 text-off-white p-6 flex flex-col shadow-2xl">
                <SheetHeader className="mb-8 border-b border-white/10 pb-4">
                  <SheetTitle className="text-2xl font-bold text-off-white">
                    kiiro<span className="text-kiiro-yellow">.cx</span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex-grow">
                  <ul className="space-y-4">
                    {navItems.map((item) => {
                      const isActive = `#${activeSection}` === item.href;
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={cn(
                              "flex items-center py-2 px-4 rounded-lg transition-colors",
                              isActive
                                ? "text-kiiro-yellow bg-kiiro-yellow/10" 
                                : "text-off-white/80 hover:bg-kiiro-yellow/10 hover:text-kiiro-yellow"
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
                      "hover:bg-kiiro-yellow/90 hover:shadow-[0_0_15px_theme(colors.kiiro-yellow/30)]",
                    )}
                  >
                    <Link href="#booking">
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