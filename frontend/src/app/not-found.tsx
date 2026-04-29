"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-6" style={{ backgroundColor: 'var(--color-bg)' }}>
      {/* Huge background text */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black text-[40vw] select-none pointer-events-none tracking-tighter leading-none"
        style={{ color: 'var(--color-primary)' }}
      >
        404
      </motion.div>

      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-10">
        {/* Compass Icon */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center"
        >
          <motion.div 
            className="w-24 h-24 rounded-full flex items-center justify-center shadow-sm" 
            style={{ backgroundColor: 'rgba(198, 167, 94, 0.15)' }}
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
             <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-12 h-12" 
              style={{ color: 'var(--color-accent)' }} 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              initial={{ rotate: -45 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.5, type: "spring", stiffness: 50 }}
             >
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
             </motion.svg>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight" style={{ color: 'var(--color-primary)' }}>
            Off the Beaten Trail
          </h1>
          <p className="text-lg md:text-xl max-w-lg mx-auto leading-relaxed" style={{ color: 'var(--color-muted)' }}>
            The page you're looking for seems to have gone on a safari of its own. Let's get you back to the main camp safely.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-8"
        >
          <Link 
            href="/"
            className="px-8 py-4 text-white rounded-full font-semibold transition-all hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 w-full sm:w-auto"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m12 19-7-7 7-7"/>
              <path d="M19 12H5"/>
            </svg>
            Return to Base Camp
          </Link>
          <Link 
            href="/safari"
            className="px-8 py-4 border-2 rounded-full font-semibold transition-all hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-2 w-full sm:w-auto bg-white/50 hover:bg-white"
            style={{ 
              borderColor: 'var(--color-accent)', 
              color: 'var(--color-primary)' 
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12h20"/>
              <path d="m15 5 7 7-7 7"/>
            </svg>
            Explore Safaris
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
