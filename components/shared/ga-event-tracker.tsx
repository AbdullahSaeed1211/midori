"use client";

import { useEffect } from 'react';

export function GAEventTracker() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Track form interactions
    const contactForms = document.querySelectorAll('form[action*="contact"]');
    contactForms.forEach(form => {
      form.addEventListener('focusin', function() {
        if (window.gtag) {
          window.gtag('event', 'form_start', {
            event_category: 'engagement',
            event_label: 'contact_form'
          });
        }
      });
    });

    // Track CTA button clicks
    const ctaButtons = document.querySelectorAll('a[href*="booking"], a[href*="contact"], button[type="submit"]');
    ctaButtons.forEach(button => {
      button.addEventListener('click', function() {
        if (window.gtag) {
          window.gtag('event', 'cta_click', {
            event_category: 'engagement',
            event_label: this.textContent || this.innerText || 'CTA Button',
            page_location: window.location.href
          });
        }
      });
    });

    // Track scroll depth
    let maxScroll = 0;
    const handleScroll = () => {
      const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
        maxScroll = scrollPercent;
        if (window.gtag) {
          window.gtag('event', 'scroll_depth', {
            event_category: 'engagement',
            event_label: scrollPercent + '%'
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null; // This component doesn't render anything
}

// Add gtag to window type
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
