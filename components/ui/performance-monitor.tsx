"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
}

export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
  });
  const [showMetrics, setShowMetrics] = useState(false);

  useEffect(() => {
    // Only show in development or for admin users
    const isDev = process.env.NODE_ENV === 'development';
    const isAdmin = localStorage.getItem('kiiro_admin') === 'true';
    
    if (!isDev && !isAdmin) return;

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        switch (entry.entryType) {
          case 'largest-contentful-paint':
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
            break;
          case 'first-input':
            setMetrics(prev => ({ ...prev, fid: (entry as any).processingStart - entry.startTime }));
            break;
          case 'layout-shift':
            if (!(entry as any).hadRecentInput) {
              setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + (entry as any).value }));
            }
            break;
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            }
            break;
        }
      }
    });

    // Observe different metric types
    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint'] });
    } catch (e) {
      // Fallback for older browsers
      console.log('Performance Observer not fully supported');
    }

    setShowMetrics(isDev || isAdmin);

    return () => observer.disconnect();
  }, []);

  if (!showMetrics) return null;

  const getScoreColor = (metric: string, value: number | null) => {
    if (value === null) return 'text-gray-400';
    
    switch (metric) {
      case 'lcp':
        return value <= 2500 ? 'text-green-400' : value <= 4000 ? 'text-yellow-400' : 'text-red-400';
      case 'fid':
        return value <= 100 ? 'text-green-400' : value <= 300 ? 'text-yellow-400' : 'text-red-400';
      case 'cls':
        return value <= 0.1 ? 'text-green-400' : value <= 0.25 ? 'text-yellow-400' : 'text-red-400';
      case 'fcp':
        return value <= 1800 ? 'text-green-400' : value <= 3000 ? 'text-yellow-400' : 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed bottom-4 left-4 z-40 bg-charcoal-black/90 backdrop-blur-sm border border-off-white/20 rounded-lg p-3 text-xs font-mono max-w-xs"
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 bg-kiiro-yellow rounded-full animate-pulse"></div>
        <span className="text-off-white font-medium">Core Web Vitals</span>
      </div>
      
      <div className="space-y-1">
        <div className="flex justify-between">
          <span className="text-off-white/70">LCP:</span>
          <span className={getScoreColor('lcp', metrics.lcp)}>
            {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'Loading...'}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-off-white/70">FID:</span>
          <span className={getScoreColor('fid', metrics.fid)}>
            {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'Waiting...'}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-off-white/70">CLS:</span>
          <span className={getScoreColor('cls', metrics.cls)}>
            {metrics.cls ? metrics.cls.toFixed(3) : '0.000'}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-off-white/70">FCP:</span>
          <span className={getScoreColor('fcp', metrics.fcp)}>
            {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'Loading...'}
          </span>
        </div>
      </div>
      
      <div className="mt-2 pt-2 border-t border-off-white/10">
        <span className="text-off-white/50 text-xs">Dev Mode Active</span>
      </div>
    </motion.div>
  );
} 