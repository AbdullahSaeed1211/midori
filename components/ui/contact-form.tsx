"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, ArrowLeft, RotateCcw } from "lucide-react";
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

interface ContactFormProps {
  onBack?: () => void;
}

export function ContactForm({ onBack }: ContactFormProps) {
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

  const [showForm, setShowForm] = useState(true);

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
      
      // Hide form and show success section
      setShowForm(false);
      
    } catch {
      setStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try again or email us directly.' 
      });
    }
  };

  const handleSendAnother = () => {
    // Reset form data
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: '',
      message: ''
    });
    
    // Reset status
    setStatus({
      type: 'idle',
      message: ''
    });
    
    // Show form again
    setShowForm(true);
  };

  const projectTypes = [
    'New Website',
    'Website Redesign',
    'Other'
  ];

  // Success/Sent Section
  if (!showForm && status.type === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center py-8 sm:py-12"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30"
        >
          <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-400" />
        </motion.div>

        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-off-white mb-4">
            Message Sent Successfully!
          </h3>
          <p className="text-lg text-off-white/80 mb-8 max-w-md mx-auto">
            Thanks! We&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Send Another Message Button */}
          <motion.button
            onClick={handleSendAnother}
            className="flex items-center gap-2 px-6 py-3 bg-kiiro-yellow text-charcoal-black rounded-lg font-medium hover:bg-kiiro-yellow/90 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <RotateCcw className="w-4 h-4" />
            Send Another Message
          </motion.button>

          {/* Back Button (if onBack prop is provided) */}
          {onBack && (
            <motion.button
              onClick={onBack}
              className="flex items-center gap-2 px-6 py-3 border border-off-white/20 text-off-white rounded-lg font-medium hover:border-kiiro-yellow/40 hover:text-kiiro-yellow transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Options
            </motion.button>
          )}
        </motion.div>
      </motion.div>
    );
  }

  // Form Section
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
      {status.type !== 'idle' && status.type !== 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            "flex items-center gap-2 p-3 sm:p-4 rounded-lg text-sm sm:text-base",
            status.type === 'error' && "bg-red-500/10 text-red-400 border border-red-500/20",
            status.type === 'loading' && "bg-kiiro-yellow/10 text-kiiro-yellow border border-kiiro-yellow/20"
          )}
        >
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