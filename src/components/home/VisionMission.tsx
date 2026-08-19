import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Rocket, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '../shared/AnimatedSection';

export const VisionMission: React.FC = () => {
  return (
    <section className="py-16 bg-sky-50/20 border-y border-sky-100/50 backdrop-blur-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Card 1: Our Vision */}
          <AnimatedSection direction="up" delay={0} className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-sm border border-warm-200 text-left transition-transform hover:-translate-y-1 duration-300">
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 border border-sky-100">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold tracking-tight text-warm-900">
                Our Vision
              </h3>
              <p className="text-sm text-warm-600 leading-relaxed">
                To build a healthier, happier society by making professional clinical care accessible, reliable, and comfortable at home. We envision a future where patient rehabilitation and elderly support are governed by warm personal relationships and stellar clinical protocols.
              </p>
            </div>
            <div className="pt-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1 text-sm font-bold text-primary-600 hover:text-primary-700 hover:underline outline-none"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedSection>

          {/* Card 2: Our Mission */}
          <AnimatedSection direction="up" delay={0.1} className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-sm border border-warm-200 text-left transition-transform hover:-translate-y-1 duration-300">
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 border border-amber-100">
                <Rocket className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold tracking-tight text-warm-900">
                Our Mission
              </h3>
              <p className="text-sm text-warm-600 leading-relaxed">
                We are committed to delivering standard-of-care nursing, caretakers, physiotherapy, and physician visits directly into residential communities. Through trained care providers and rigorous background-vetting, we ensure safety, dignity, and recovery support for senior citizens and recovering patients alike.
              </p>
            </div>
            <div className="pt-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1 text-sm font-bold text-primary-600 hover:text-primary-700 hover:underline outline-none"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
