import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Brain, Award, Calendar, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '../shared/AnimatedSection';

export const CounsellingSpotlight: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white/40 backdrop-blur-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* Left Column: Details (7 cols) */}
          <AnimatedSection direction="right" className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 uppercase tracking-widest bg-sky-50 border border-sky-100 rounded-full px-3 py-1">
                <Sparkles className="h-3 w-3" />
                Mental Health Counselling
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-warm-900">
                Compassionate Mind & Wellness Support at Home
              </h2>
              <p className="text-sm sm:text-base text-warm-600 leading-relaxed">
                Caring for the body is only half the battle. Our specialized home counseling program targets anxiety, depression, adjustment issues in senior citizens, cognitive support, and holistic emotional coaching for patients recovering from major surgeries or strokes.
              </p>
            </div>

            {/* Bullet List */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700 mt-1">
                  <Brain className="h-3 w-3" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-warm-950">Geriatric Psychological Support</h4>
                  <p className="text-xs text-warm-500">Helping senior citizens manage loneliness, cognitive changes, and transitions.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700 mt-1">
                  <Brain className="h-3 w-3" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-warm-950">Chronic Care Counseling</h4>
                  <p className="text-xs text-warm-500">Helping patients and families build mental resilience to cope with long-term recovery.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-primary-700 hover:shadow-lg focus:ring-2 focus:ring-primary-500 outline-none"
              >
                Schedule a Counseling Session
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedSection>

          {/* Right Column: Specialist Card (5 cols) */}
          <AnimatedSection direction="left" className="lg:col-span-5">
            <div className="rounded-3xl border border-warm-200 bg-white p-6 shadow-sm flex flex-col items-center text-center">
              {/* Photo */}
              <div className="relative mb-4">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
                  alt="Dr. Anand Krishnan - Clinical Neuropsychologist"
                  className="h-28 w-28 rounded-full object-cover border-4 border-warm-50 shadow-md"
                />
                <span className="absolute bottom-0 right-0 rounded-full bg-sky-500 px-2 py-0.5 text-[9px] font-bold text-white uppercase tracking-wider shadow">
                  Online/Home
                </span>
              </div>
              {/* Name & Bio */}
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-warm-900 font-serif">Dr. Anand Krishnan</h4>
                <p className="text-xs text-sky-600 font-semibold uppercase tracking-wider">
                  PhD, Clinical Neuropsychologist
                </p>
                <div className="flex items-center justify-center gap-1 text-[11px] text-warm-500 py-1">
                  <Award className="h-3.5 w-3.5 text-amber-500" />
                  <span>12+ Years Clinical Experience</span>
                </div>
                <p className="text-xs text-warm-600 leading-relaxed px-4 pt-2">
                  "Mental well-being is fundamental to physical recovery. We bring tailored cognitive support and holistic coaching directly into family homes."
                </p>
              </div>
              {/* Action */}
              <div className="w-full border-t border-warm-100 mt-6 pt-4">
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 rounded-xl bg-warm-50 py-2.5 text-xs font-bold text-warm-700 hover:bg-warm-100 transition-colors"
                >
                  <Calendar className="h-4 w-4 text-warm-500" />
                  Book with Dr. Anand
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
