import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Activity, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '../shared/AnimatedSection';

export const CareTakerSpotlight: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection className="max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold text-primary-600 uppercase tracking-widest">
            Specialized Care Focus
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-warm-900">
            Trained Care Taker Programs
          </h2>
          <p className="text-sm sm:text-base text-warm-600 leading-relaxed max-w-2xl mx-auto">
            Our caretakers are trained specifically in assisting individuals with daily routines, mobility, hygiene, and clinical guidelines.
          </p>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Card 1: Elderly Care Services */}
          <AnimatedSection direction="up" className="group relative overflow-hidden rounded-3xl border border-sky-100/50 bg-white/60 p-6 sm:p-8 text-left shadow-xs transition-shadow hover:shadow-lg duration-300 flex flex-col sm:flex-row gap-6 backdrop-blur-xs">
            <div className="w-full sm:w-2/5 overflow-hidden rounded-2xl h-44 bg-warm-200">
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=400&q=80"
                alt="Elderly Care services"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                  <Heart className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-warm-900 leading-snug">
                  Elderly Care Services
                </h3>
                <p className="text-xs text-warm-600 leading-relaxed">
                  Support for aged parents. Helping with feeding, clean dressing, walking assistance, and standard medication scheduling under doctor instructions.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  to="/services/trained-caretaker"
                  className="inline-flex items-center gap-1 text-xs font-bold text-primary-600 hover:text-primary-700 hover:underline outline-none"
                >
                  Read More
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Card 2: Post Surgical Care Services */}
          <AnimatedSection direction="up" delay={0.1} className="group relative overflow-hidden rounded-3xl border border-sky-100/50 bg-white/60 p-6 sm:p-8 text-left shadow-xs transition-shadow hover:shadow-lg duration-300 flex flex-col sm:flex-row gap-6 backdrop-blur-xs">
            <div className="w-full sm:w-2/5 overflow-hidden rounded-2xl h-44 bg-warm-200">
              <img
                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=400&q=80"
                alt="Post Surgical care services"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <Activity className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-warm-900 leading-snug">
                  Post Surgical Care Services
                </h3>
                <p className="text-xs text-warm-600 leading-relaxed">
                  Short or long-term nursing and caregiver support after major surgery. We assist with posture adjustments, vitals recording, and mobility support.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  to="/services/trained-caretaker"
                  className="inline-flex items-center gap-1 text-xs font-bold text-primary-600 hover:text-primary-700 hover:underline outline-none"
                >
                  Read More
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
