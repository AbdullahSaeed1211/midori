"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Users, TrendingUp, Clock } from "lucide-react";

interface Notification {
  id: string;
  type: 'booking' | 'audit' | 'conversion' | 'testimonial';
  message: string;
  time: string;
  location?: string;
}

const notifications: Notification[] = [
  {
    id: '1',
    type: 'booking',
    message: 'Sarah M. just booked a strategy call',
    time: '2 minutes ago',
    location: 'Toronto, CA'
  },
  {
    id: '2',
    type: 'audit',
    message: 'Alex K. completed a conversion audit',
    time: '5 minutes ago',
    location: 'Dubai, UAE'
  },
  {
    id: '3',
    type: 'conversion',
    message: 'Brainwise increased conversions by 42%',
    time: '12 minutes ago'
  },
  {
    id: '4',
    type: 'booking',
    message: 'Michael R. scheduled a consultation',
    time: '18 minutes ago',
    location: 'London, UK'
  },
  {
    id: '5',
    type: 'testimonial',
    message: 'Simply Mortgage left a 5-star review',
    time: '25 minutes ago'
  },
  {
    id: '6',
    type: 'audit',
    message: 'Jennifer P. downloaded audit results',
    time: '31 minutes ago',
    location: 'New York, US'
  },
  {
    id: '7',
    type: 'conversion',
    message: 'Lotus Pro Services saw 85% mobile improvement',
    time: '38 minutes ago'
  },
  {
    id: '8',
    type: 'booking',
    message: 'David L. booked a strategy session',
    time: '45 minutes ago',
    location: 'Sydney, AU'
  }
];

export function SocialProofNotifications() {
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [notificationIndex, setNotificationIndex] = useState(0);

  useEffect(() => {
    // Don't show on mobile or small screens
    const checkScreenSize = () => {
      return window.innerWidth >= 1024; // lg breakpoint
    };

    if (!checkScreenSize()) return;

    // Show first notification after initial delay
    const initialDelay = setTimeout(() => {
      setCurrentNotification(notifications[0]);
      setIsVisible(true);
      setNotificationIndex(0);
    }, 8000); // Wait 8 seconds after page load

    return () => clearTimeout(initialDelay);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      // Hide current notification
      setIsVisible(false);
      
      setTimeout(() => {
        // Show next notification
        const nextIndex = (notificationIndex + 1) % notifications.length;
        setCurrentNotification(notifications[nextIndex]);
        setNotificationIndex(nextIndex);
        setIsVisible(true);
      }, 500); // Brief pause between notifications
      
    }, 12000); // Show each notification for 12 seconds

    return () => clearInterval(interval);
  }, [isVisible, notificationIndex]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'booking':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'audit':
        return <TrendingUp className="w-4 h-4 text-kiiro-yellow" />;
      case 'conversion':
        return <TrendingUp className="w-4 h-4 text-teal-accent" />;
      case 'testimonial':
        return <Users className="w-4 h-4 text-purple-400" />;
      default:
        return <CheckCircle className="w-4 h-4 text-green-400" />;
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && currentNotification && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            duration: 0.6 
          }}
          className="fixed bottom-6 left-6 z-40 max-w-sm"
        >
          <div className="bg-charcoal-black/95 backdrop-blur-sm border border-off-white/20 rounded-xl p-4 shadow-2xl">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                {getIcon(currentNotification.type)}
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-off-white">
                  {currentNotification.message}
                </p>
                
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center gap-1 text-xs text-off-white/60">
                    <Clock className="w-3 h-3" />
                    <span>{currentNotification.time}</span>
                  </div>
                  
                  {currentNotification.location && (
                    <>
                      <span className="text-off-white/30">•</span>
                      <span className="text-xs text-off-white/60">
                        {currentNotification.location}
                      </span>
                    </>
                  )}
                </div>
              </div>
              
              <button
                onClick={handleClose}
                className="flex-shrink-0 text-off-white/40 hover:text-off-white/70 transition-colors p-1"
                aria-label="Close notification"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Progress bar */}
            <motion.div 
              className="mt-3 h-0.5 bg-off-white/10 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="h-full bg-kiiro-yellow rounded-full"
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 11.5, ease: "linear" }} // 11.5s to account for delays
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 