import { Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const year = new Date().getFullYear();
  
  const pageLinks = [
    { label: 'Services', href: '/#services' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Cancellation Policy', href: '/cancellation' },
  ];

  const supportLinks = [
    { label: 'Support', href: '/support' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="border-t border-white/10 bg-charcoal-black py-12 text-off-white/80">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo & Copyright */}
          <div className="md:col-span-1 text-center md:text-left">
            <Link href="/" className="text-xl font-bold text-off-white mb-4 group inline-block">
              Kiiro
              <span className="text-kiiro-yellow transition-transform duration-200 inline-block group-hover:scale-125">.</span>
            </Link>
            <p className="text-xs text-off-white/60">
              © {year} Kiiro.cx. All rights reserved.
            </p>
          </div>

          {/* Column 2: Pages */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-off-white mb-3 uppercase tracking-wider text-xs">Menu</h4>
              <nav className="flex flex-col space-y-2">
                {pageLinks.map((link) => (
                  <Link 
                    key={link.label}
                    href={link.href} 
                    className="text-sm text-off-white/80 hover:text-kiiro-yellow transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

          {/* Column 3: Support */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-off-white mb-3 uppercase tracking-wider text-xs">Support</h4>
            <nav className="flex flex-col space-y-2">
              {supportLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-off-white/80 hover:text-kiiro-yellow transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4: Legal & Social */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-off-white mb-3 uppercase tracking-wider text-xs">Legal</h4>
            <nav className="flex flex-col space-y-2 mb-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-off-white/80 hover:text-kiiro-yellow transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <h4 className="font-semibold text-off-white mb-3 uppercase tracking-wider text-xs">Connect</h4>
            <div className="flex space-x-4 justify-center md:justify-start">
                <a
                href="https://www.linkedin.com/company/kiirocx"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-off-white/80 hover:text-kiiro-yellow transition-colors"
                >
                <Linkedin size={18} />
                </a>
                <a
                  href="mailto:abdullah.saeed1724@gmail.com"
                  aria-label="Email"
                  className="text-off-white/80 hover:text-kiiro-yellow transition-colors duration-300"
                >
                <Mail size={18} />
                </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 