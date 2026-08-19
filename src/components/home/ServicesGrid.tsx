import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import { getServices, Service } from '../../lib/queries/services';
import { SkeletonCard } from '../shared/LoadingSpinner';
import { AnimatedSection } from '../shared/AnimatedSection';

const fallbackServices: Service[] = [
  {
    id: 'e961ff7e-ef0c-430c-ab2f-1d899557ea71',
    slug: 'trained-caretaker',
    title: 'Trained Care Taker',
    short_description: 'Elderly care and post-surgical support with dignity at home by professional, compassionate caretakers.',
    full_description: '',
    hero_image_url: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80',
    icon: 'Heart',
    display_order: 1,
    created_at: '',
  },
  {
    id: 'd2b70f08-7261-4de2-bf56-11f81cfef1ea',
    slug: 'nursing',
    title: 'Nursing',
    short_description: 'Professional home nursing care for wound dressing, injections, IV infusions, and post-op recovery.',
    full_description: '',
    hero_image_url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80',
    icon: 'Activity',
    display_order: 2,
    created_at: '',
  },
  {
    id: 'c3ab5ad1-3bfd-466d-88b9-50c9f131a473',
    slug: 'doctor-visit',
    title: 'Doctor Visit',
    short_description: 'Experienced doctors visiting your home for consultation, diagnosis, and chronic disease management.',
    full_description: '',
    hero_image_url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    icon: 'UserCheck',
    display_order: 3,
    created_at: '',
  },
  {
    id: 'b1db1eb4-44cd-4e8b-871d-f952f4eb27a2',
    slug: 'physiotherapist',
    title: 'Physiotherapist',
    short_description: 'Personalized physical therapy sessions for orthopedic, neurological, and post-op rehabilitation.',
    full_description: '',
    hero_image_url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80',
    icon: 'Accessibility',
    display_order: 4,
    created_at: '',
  },
];

export const ServicesGrid: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchServicesData() {
      try {
        const data = await getServices();
        if (data && data.length > 0) {
          setServices(data);
        } else {
          setServices(fallbackServices);
        }
      } catch (err) {
        console.error('Failed to fetch services, using fallbacks', err);
        setServices(fallbackServices);
      } finally {
        setLoading(false);
      }
    }
    fetchServicesData();
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection className="max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold text-primary-600 uppercase tracking-widest">
            Our Offerings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-warm-900">
            Comprehensive Home Care Services
          </h2>
          <p className="text-sm sm:text-base text-warm-600 leading-relaxed max-w-2xl mx-auto">
            From short nurse procedures to full-time caretaking and advanced doctor assessments, we fulfill your recovery needs with standard care protocols.
          </p>
        </AnimatedSection>

        {loading ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-warm-200 bg-white p-5 shadow-xs">
                <div className="shimmer h-40 w-full rounded-xl bg-warm-100 mb-4"></div>
                <div className="shimmer h-5 w-2/3 rounded bg-warm-100 mb-2"></div>
                <div className="shimmer h-3.5 w-full rounded bg-warm-100 mb-1"></div>
                <div className="shimmer h-3.5 w-4/5 rounded bg-warm-100"></div>
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {services.slice(0, 4).map((service) => {
              const IconComponent = (Icons as any)[service.icon] || Icons.Heart;
              return (
                <motion.div
                  key={service.id}
                  variants={cardVariants}
                  className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-warm-200 bg-white p-5 text-left shadow-xs transition-shadow hover:shadow-lg duration-300"
                >
                  <div className="space-y-4">
                    {/* Card Image */}
                    <div className="relative h-40 w-full overflow-hidden rounded-2xl bg-warm-50">
                      <img
                        src={service.hero_image_url}
                        alt={service.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-primary-600 shadow-md backdrop-blur-xs">
                        <IconComponent className="h-5 w-5" />
                      </div>
                    </div>
                    {/* Card Info */}
                    <div className="space-y-2">
                      <h3 className="font-serif text-lg font-bold text-warm-900 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-xs text-warm-600 leading-relaxed line-clamp-2">
                        {service.short_description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-warm-100 mt-4 flex items-center justify-between">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-primary-600 hover:text-primary-700 hover:underline outline-none"
                    >
                      Read More
                      <Icons.ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        <div className="mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-warm-200 px-6 py-3 text-sm font-semibold text-warm-700 hover:bg-warm-100 hover:border-warm-300 transition-colors focus:ring-2 focus:ring-warm-500 outline-none"
          >
            View All Services Offered
          </Link>
        </div>
      </div>
    </section>
  );
};
