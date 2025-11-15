"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Send, CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function TestimonialsForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    rating: 5,
    testimonial: '',
    permission: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleRatingChange = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/testimonials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setError(result.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Thank You!</h2>
        <p className="text-lg text-off-white/80 mb-8">
          Your testimonial has been submitted successfully. We&apos;ve sent you a confirmation email and truly appreciate you taking the time to share your experience.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-kiiro-yellow text-charcoal-black font-medium rounded-lg hover:bg-kiiro-yellow/90 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Homepage
        </Link>
      </motion.div>
    );
  }

  return (
    <>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-charcoal-gray/50 border border-white/10 rounded-xl p-8"
      >
        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-off-white mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-charcoal-black border border-white/20 rounded-lg text-off-white placeholder-off-white/50 focus:border-kiiro-yellow focus:outline-none transition-colors"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-off-white mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-charcoal-black border border-white/20 rounded-lg text-off-white placeholder-off-white/50 focus:border-kiiro-yellow focus:outline-none transition-colors"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-off-white mb-2">
              Company/Business
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-charcoal-black border border-white/20 rounded-lg text-off-white placeholder-off-white/50 focus:border-kiiro-yellow focus:outline-none transition-colors"
              placeholder="Your company name"
            />
          </div>

          <div>
            <label htmlFor="projectType" className="block text-sm font-medium text-off-white mb-2">
              Project Type
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-charcoal-black border border-white/20 rounded-lg text-off-white focus:border-kiiro-yellow focus:outline-none transition-colors"
            >
              <option value="">Select project type</option>
              <option value="Website Design">Website Design</option>
              <option value="Website Redesign">Website Redesign</option>
              <option value="Landing Page">Landing Page</option>
              <option value="E-commerce">E-commerce</option>
              <option value="Conversion Optimization">Conversion Optimization</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-off-white mb-3">
            Overall Rating *
          </label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => handleRatingChange(star)}
                className="p-1 hover:scale-110 transition-transform"
              >
                <Star
                  className={`w-8 h-8 ${
                    star <= formData.rating
                      ? 'text-kiiro-yellow fill-kiiro-yellow'
                      : 'text-off-white/30'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="testimonial" className="block text-sm font-medium text-off-white mb-2">
            Your Testimonial *
          </label>
          <textarea
            id="testimonial"
            name="testimonial"
            required
            value={formData.testimonial}
            onChange={handleInputChange}
            rows={6}
            className="w-full px-4 py-3 bg-charcoal-black border border-white/20 rounded-lg text-off-white placeholder-off-white/50 focus:border-kiiro-yellow focus:outline-none transition-colors resize-vertical"
            placeholder="Tell us about your experience working with kiiro.cx. What results did you achieve? What did you like most about the process?"
          />
        </div>

        <div className="mb-8">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="permission"
              checked={formData.permission}
              onChange={handleInputChange}
              className="mt-1 w-4 h-4 text-kiiro-yellow bg-charcoal-black border-white/20 rounded focus:ring-kiiro-yellow focus:ring-2"
            />
            <span className="text-sm text-off-white/80">
              I give permission for kiiro.cx to use this testimonial publicly on their website, marketing materials, and social media. I understand that my name and company may be displayed with the testimonial.
            </span>
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-kiiro-yellow text-charcoal-black font-medium rounded-lg hover:bg-kiiro-yellow/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-charcoal-black/30 border-t-charcoal-black rounded-full animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Submit Testimonial
            </>
          )}
        </button>
      </motion.form>

      <div className="mt-8 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-kiiro-yellow hover:text-kiiro-yellow/80 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Homepage
        </Link>
      </div>
    </>
  );
}
