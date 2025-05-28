"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export function ContactFormSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending your message...' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      setStatus({ 
        type: 'success', 
        message: 'Thanks! We&apos;ll get back to you within 24 hours.' 
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        message: ''
      });
    } catch {
      setStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try again or email us directly.' 
      });
    }
  };

  const projectTypes = [
    'New Website',
    'Website Redesign',
    'Other'
  ];

  return (
    <section className="py-16 sm:py-20 bg-charcoal-black" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-kiiro-yellow/10 text-kiiro-yellow border border-kiiro-yellow/20 mb-4 sm:mb-6">
              <Send className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm font-medium">Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-off-white mb-3 sm:mb-4">
              Prefer to <span className="text-kiiro-yellow">Send a Message?</span>
            </h2>
            <p className="text-lg sm:text-xl text-off-white/80 max-w-2xl mx-auto px-4 sm:px-0">
              Not ready for a call? No problem. Tell us about your project and we&apos;ll send you a detailed proposal.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            className="bg-charcoal-black/50 border border-off-white/10 rounded-2xl p-4 sm:p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <Label htmlFor="name" className="text-off-white mb-2 block text-sm sm:text-base">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="h-10 sm:h-12"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-off-white mb-2 block text-sm sm:text-base">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="h-10 sm:h-12"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <Label htmlFor="company" className="text-off-white mb-2 block text-sm sm:text-base">
                  Company
                </Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your company name (optional)"
                  className="h-10 sm:h-12"
                />
              </div>

              {/* Project Type */}
              <div>
                <Label htmlFor="projectType" className="text-off-white mb-2 block text-sm sm:text-base">
                  Project Type *
                </Label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="flex h-10 sm:h-12 w-full rounded-lg border border-off-white/20 bg-charcoal-black/50 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-off-white focus:border-kiiro-yellow focus:outline-none focus:ring-2 focus:ring-kiiro-yellow/20 transition-colors duration-200"
                >
                  <option value="">Select project type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type} className="bg-charcoal-black">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message" className="text-off-white mb-2 block text-sm sm:text-base">
                  Project Details *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                  className="min-h-[120px] sm:min-h-[150px] text-sm sm:text-base"
                />
              </div>

              {/* Status Message */}
              {status.type !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "flex items-center gap-2 p-3 sm:p-4 rounded-lg text-sm sm:text-base",
                    status.type === 'success' && "bg-green-500/10 text-green-400 border border-green-500/20",
                    status.type === 'error' && "bg-red-500/10 text-red-400 border border-red-500/20",
                    status.type === 'loading' && "bg-kiiro-yellow/10 text-kiiro-yellow border border-kiiro-yellow/20"
                  )}
                >
                  {status.type === 'success' && <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />}
                  {status.type === 'error' && <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />}
                  {status.type === 'loading' && (
                    <div className="h-4 w-4 sm:h-5 sm:w-5 border-2 border-kiiro-yellow border-t-transparent rounded-full animate-spin flex-shrink-0" />
                  )}
                  <span className="leading-relaxed">{status.message}</span>
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status.type === 'loading'}
                className={cn(
                  "w-full flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg transition-all duration-300",
                  "bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90 hover:scale-[1.02]",
                  "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                )}
                whileHover={{ scale: status.type === 'loading' ? 1 : 1.02 }}
                whileTap={{ scale: status.type === 'loading' ? 1 : 0.98 }}
              >
                {status.type === 'loading' ? (
                  <>
                    <div className="h-4 w-4 sm:h-5 sm:w-5 border-2 border-charcoal-black border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                  </>
                )}
              </motion.button>
            </form>

            {/* Alternative Contact */}
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-off-white/10 text-center">
              <p className="text-off-white/60 mb-3 sm:mb-4 text-sm sm:text-base">
                Prefer to talk directly? 
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="#booking"
                  className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-off-white/20 text-off-white hover:bg-off-white/5 transition-colors duration-300 text-sm sm:text-base"
                >
                  Book a Call
                </a>
                <a
                  href="mailto:abdullah.saeed1724@gmail.com"
                  className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-off-white/20 text-off-white hover:bg-off-white/5 transition-colors duration-300 text-sm sm:text-base"
                >
                  Email Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 