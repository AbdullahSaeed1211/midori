"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'How it works', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQs', href: '#faq' },
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
        isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-md' : 'bg-transparent pt-4',
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold group">
          MidoriLabs
          <span className="text-verdant-green transition-transform duration-200 inline-block group-hover:scale-150">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Button
            asChild
            variant="default"
            size="sm"
            className={cn(
              "bg-[#FFD700] text-charcoal-black",
              "hover:bg-[#FFD700]/90 hover:shadow-[0_0_15px_theme(colors.gold)]",
              "transition-all duration-300"
            )}
          >
            <Link href="#booking">
              Book a call
            </Link>
          </Button>
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground hover:bg-secondary/50">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-charcoal-black/95 backdrop-blur-lg border-l border-code-black-700 text-off-white p-6 flex flex-col">
              <SheetHeader className="mb-8 border-b border-code-black-700 pb-4 flex flex-row justify-between items-center">
                <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">Links to website sections and booking page.</SheetDescription>
                <Link href="/" className="text-xl font-bold group" onClick={closeMobileMenu}>
                   MidoriLabs
                   <span className="text-verdant-green transition-transform duration-200 inline-block group-hover:scale-150">.</span>
                </Link>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 flex-grow">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  asChild
                  variant="default"
                  className={cn(
                    "mt-4 w-full py-3 text-base",
                    "bg-[#FFD700] text-charcoal-black",
                    "hover:bg-[#FFD700]/90 hover:shadow-[0_0_15px_theme(colors.gold)]",
                    "transition-all duration-300"
                  )}
                  onClick={closeMobileMenu}
                >
                  <Link href="#booking">
                     Book a call
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
} 