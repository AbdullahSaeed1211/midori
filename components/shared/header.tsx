"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Menu, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

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

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 10);
    }
    window.addEventListener('scroll', handleScroll);

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
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled 
          ? 'bg-deep-gray/95 backdrop-blur-lg shadow-lg border-b border-verdant-green/10' 
          : 'bg-transparent pt-4',
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold group flex items-center">
         
          <span>MidoriLabs</span>
          <span className="text-verdant-green transition-transform duration-200 inline-block group-hover:scale-150">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-off-white/70 transition-colors hover:text-verdant-green"
            >
              {item.label}
            </Link>
          ))}
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
              Get Started
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-off-white hover:bg-verdant-green/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-deep-gray/95 backdrop-blur-lg border-l border-verdant-green/10 text-off-white p-6 flex flex-col">
              <SheetHeader className="mb-8 border-b border-verdant-green/10 pb-4 flex flex-row justify-between items-center">
                <Link href="/" className="text-xl font-bold group flex items-center" onClick={closeMobileMenu}>
                 
                  <span>MidoriLabs</span>
                  <span className="text-verdant-green transition-transform duration-200 inline-block group-hover:scale-150">.</span>
                </Link>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-1 flex-grow">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block rounded-md px-3 py-2.5 text-base font-medium text-off-white/80 hover:bg-verdant-green/10 hover:text-verdant-green"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-6 mt-6 border-t border-verdant-green/10">
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
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
} 