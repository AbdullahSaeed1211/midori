"use client";

import { Linkedin, Twitter, Mail } from 'lucide-react';
import Link from 'next/link'; // Need Link for internal navigation

export function Footer() {
  const year = new Date().getFullYear();
  
  const pageLinks = [
    { label: 'How it works', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQs', href: '#faq' },
    // Add other important page links if needed
  ];

  return (
    <footer className="border-t border-code-black-700 bg-charcoal-black py-12 text-off-white/80" id="footer">
      <div className="container mx-auto px-4">
        {/* Add max-w-screen-xl and mx-auto to constrain width on larger screens */}
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-10 text-center md:text-left">
          
          {/* Column 1: Logo & Copyright (Takes available space, pushes others right) */}
          <div className="flex flex-col items-center md:items-start md:flex-grow">
            <Link href="/" className="text-2xl font-bold text-off-white mb-4 group">
              MidoriLabs
              <span className="text-verdant-green transition-transform duration-200 inline-block group-hover:scale-150">.</span>
            </Link>
            <p className="text-sm text-off-white/60">
              © {year} MidoriLabs.studio
            </p>
            <p className="text-sm text-off-white/60 mt-1">
              Results-Driven Web Development
            </p>
          </div>

          {/* Wrapper for Pages & Connect to group them before pushing right */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center md:items-start">
            {/* Column 2: Page Links */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-semibold text-off-white mb-3 uppercase tracking-wider text-sm">Pages</h4>
              <nav className="flex flex-col space-y-2">
                {pageLinks.map((link) => (
                  <Link 
                    key={link.label}
                    href={link.href} 
                    className="text-sm text-off-white/80 hover:text-[#FFD700] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Column 3: Social Links */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-semibold text-off-white mb-3 uppercase tracking-wider text-sm">Connect</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" // Replace with your LinkedIn URL
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn"
                  className="text-off-white/80 hover:text-[#FFD700] transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="#" // Replace with your Twitter URL
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Twitter"
                  className="text-off-white/80 hover:text-[#FFD700] transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="mailto:#" // Replace with your email address
                  aria-label="Email"
                  className="text-off-white/80 hover:text-[#FFD700] transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
} 