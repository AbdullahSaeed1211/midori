"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CountdownTimerProps {
  title?: string;
  subtitle?: string;
  endDate?: Date;
}

export function CountdownTimer({ 
  title = "Limited Time Offer",
  subtitle = "Free conversion audit ends in:",
  endDate
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Set end date to end of current month if not provided
    const targetDate = endDate || new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0, 23, 59, 59);

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Initial update
    updateTimer();
    
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, [endDate]);

  // Return static placeholder during SSR
  if (!isClient) {
    return (
      <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-lg p-4 text-center">
        <p className="text-sm font-medium text-red-400 mb-1">{title}</p>
        <p className="text-xs text-off-white/70 mb-3">{subtitle}</p>
        
        <div className="flex justify-center gap-2 sm:gap-4">
          {[
            { label: 'Days', value: 0 },
            { label: 'Hours', value: 0 },
            { label: 'Minutes', value: 0 },
            { label: 'Seconds', value: 0 }
                     ].map((unit) => (
            <div key={unit.label} className="flex flex-col items-center">
              <div className="bg-charcoal-black/50 border border-red-500/30 rounded-lg px-2 py-1 sm:px-3 sm:py-2 min-w-[40px] sm:min-w-[50px]">
                <span className="text-lg sm:text-xl font-bold text-red-400">
                  00
                </span>
              </div>
              <span className="text-xs text-off-white/60 mt-1">{unit.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-lg p-4 text-center">
      <p className="text-sm font-medium text-red-400 mb-1">{title}</p>
      <p className="text-xs text-off-white/70 mb-3">{subtitle}</p>
      
      <div className="flex justify-center gap-2 sm:gap-4">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            className="flex flex-col items-center"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <motion.div
              className="bg-charcoal-black/50 border border-red-500/30 rounded-lg px-2 py-1 sm:px-3 sm:py-2 min-w-[40px] sm:min-w-[50px]"
              key={unit.value} // This will trigger re-animation on value change
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-lg sm:text-xl font-bold text-red-400">
                {unit.value.toString().padStart(2, '0')}
              </span>
            </motion.div>
            <span className="text-xs text-off-white/60 mt-1">{unit.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 