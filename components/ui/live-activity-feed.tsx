"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Activity {
  id: string;
  type: 'consultation' | 'project' | 'audit';
  client: string;
  location: string;
  timeAgo: string;
  action: string;
}

const activities: Activity[] = [
  {
    id: '1',
    type: 'consultation',
    client: 'Sarah M.',
    location: 'Dubai, UAE',
    timeAgo: '2 min ago',
    action: 'booked a strategy call'
  },
  {
    id: '2',
    type: 'audit',
    client: 'Michael R.',
    location: 'Mumbai, India',
    timeAgo: '8 min ago',
    action: 'requested conversion audit'
  },
  {
    id: '3',
    type: 'project',
    client: 'Lisa K.',
    location: 'London, UK',
    timeAgo: '15 min ago',
    action: 'started new project'
  },
  {
    id: '4',
    type: 'consultation',
    client: 'Ahmed S.',
    location: 'Riyadh, KSA',
    timeAgo: '23 min ago',
    action: 'completed strategy call'
  },
  {
    id: '5',
    type: 'audit',
    client: 'Jennifer L.',
    location: 'New York, USA',
    timeAgo: '31 min ago',
    action: 'received audit results'
  }
];

export function LiveActivityFeed() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Show after 2 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!isClient || !isVisible) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activities.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isClient, isVisible]);

  // Don't render anything during SSR or if not client-side
  if (!isClient || !isVisible) {
    return null;
  }

  const currentActivity = activities[currentIndex];

  return (
    <div className="fixed left-4 bottom-20 z-40 max-w-xs">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: -50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -50, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="bg-charcoal-black/90 backdrop-blur-sm border border-kiiro-yellow/20 rounded-lg p-3 shadow-lg"
        >
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs font-medium text-kiiro-yellow">Live Activity</span>
          </div>
          <p className="text-sm text-off-white/90 mb-1">
            <span className="font-medium">{currentActivity.client}</span> {currentActivity.action}
          </p>
          <p className="text-xs text-off-white/60">{currentActivity.timeAgo}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
} 