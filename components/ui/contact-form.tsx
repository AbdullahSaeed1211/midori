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

export function ContactForm() {
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
          className="min-h-[100px] sm:min-h-[120px] text-sm sm:text-base"
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
  );
} 