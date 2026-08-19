import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CalendarDays } from 'lucide-react';
import { ContactForm } from '../contact/ContactForm';

interface BookNowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookNowModal: React.FC<BookNowModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-1000 flex justify-end overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={onClose}
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="relative z-10 w-full max-w-lg bg-warm-50 shadow-2xl flex flex-col h-full overflow-hidden border-l border-warm-100"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-primary-700 px-6 py-5 text-white">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-6 w-6 text-primary-200" />
                <h3 className="text-xl font-bold font-serif tracking-wide">Request Home Care</h3>
              </div>
              <button
                onClick={onClose}
                className="rounded-full bg-primary-800 p-2 text-primary-200 hover:text-white hover:bg-primary-900 transition-colors focus:ring-2 focus:ring-primary-400 focus:outline-none"
                aria-label="Close booking form"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto p-6">
              <p className="text-sm text-warm-600 mb-6 leading-relaxed">
                Complete this form to schedule a nurse, caretaker, physiotherapist, or doctor visit. Our case manager will review the request and get back to you shortly.
              </p>
              <ContactForm onSuccess={onClose} compact />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
