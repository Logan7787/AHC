import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getHomeFeaturedTeamMembers, TeamMember } from '../../lib/queries/team';
import { User, Award, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '../shared/AnimatedSection';

const fallbackTeam: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. M.C Deepak',
    qualification: 'M.D',
    specialty: 'Sr. Diabetologist',
    role_tag: 'Senior Clinical Associate',
    photo_url: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80',
    featured_on_home: true,
    display_order: 1,
    created_at: '',
  },
  {
    id: '2',
    name: 'Dr. Ravindra Nath',
    qualification: 'M.B.B.S, M.D',
    specialty: 'Sr. General Physician',
    role_tag: 'Senior Clinical Associate',
    photo_url: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=300&q=80',
    featured_on_home: true,
    display_order: 2,
    created_at: '',
  },
  {
    id: '3',
    name: 'Dr. Vamsi Krishna',
    qualification: 'M.B.B.S, M.S',
    specialty: 'General & Laparoscopic Surgeon',
    role_tag: 'Clinical Associate',
    photo_url: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80',
    featured_on_home: true,
    display_order: 3,
    created_at: '',
  },
  {
    id: '4',
    name: 'Dr. SSK. Sandeep',
    qualification: 'M.S (Ortho)',
    specialty: 'Orthopaedic Specialist',
    role_tag: 'Clinical Associate',
    photo_url: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&w=300&q=80',
    featured_on_home: true,
    display_order: 4,
    created_at: '',
  },
  {
    id: '5',
    name: 'Dr. Roshan Kumar',
    qualification: 'M.D (Pulmonary Medicine)',
    specialty: 'Pulmonary Specialist',
    role_tag: 'Clinical Associate',
    photo_url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80',
    featured_on_home: true,
    display_order: 5,
    created_at: '',
  },
];

export const TeamPreview: React.FC = () => {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFeaturedTeam() {
      try {
        const data = await getHomeFeaturedTeamMembers();
        if (data && data.length > 0) {
          setMembers(data);
        } else {
          setMembers(fallbackTeam);
        }
      } catch (err) {
        console.error('Failed to load featured team, using fallback', err);
        setMembers(fallbackTeam);
      } finally {
        setLoading(false);
      }
    }
    loadFeaturedTeam();
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white/40 backdrop-blur-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection className="max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold text-primary-600 uppercase tracking-widest">
            Medical Panel
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-warm-900">
            Our Clinical Associates
          </h2>
          <p className="text-sm sm:text-base text-warm-600 leading-relaxed max-w-2xl mx-auto">
            Experienced diabetologists, general physicians, surgeons, orthopedics, and pulmonologists advising our home-care protocols.
          </p>
        </AnimatedSection>

        {loading ? (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-warm-200 bg-white p-4 shadow-xs">
                <div className="shimmer h-40 w-full rounded-xl bg-warm-100 mb-4"></div>
                <div className="shimmer h-4 w-2/3 rounded bg-warm-100 mb-2"></div>
                <div className="shimmer h-3.5 w-full rounded bg-warm-100"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-left">
            {members.slice(0, 5).map((member) => (
              <AnimatedSection
                key={member.id}
                direction="up"
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-warm-200 bg-white p-4 shadow-xs transition-shadow hover:shadow-md duration-300"
              >
                <div className="space-y-4">
                  {/* Photo container */}
                  <div className="relative h-44 w-full overflow-hidden rounded-xl bg-warm-50">
                    {member.photo_url ? (
                      <img
                        src={member.photo_url}
                        alt={member.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-103"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-warm-100 text-warm-400">
                        <User className="h-10 w-10" />
                      </div>
                    )}
                    <span className="absolute top-2 left-2 rounded-lg bg-warm-900/80 px-2 py-0.5 text-[9px] font-bold text-white uppercase tracking-wider backdrop-blur-xs">
                      {member.role_tag}
                    </span>
                  </div>

                  {/* Profile info */}
                  <div className="space-y-1">
                    <h3 className="font-serif text-sm font-bold text-warm-950 leading-tight">
                      {member.name}
                    </h3>
                    {member.qualification && (
                      <p className="text-[11px] font-bold text-warm-500">{member.qualification}</p>
                    )}
                    <p className="text-[11px] font-semibold text-sky-600 uppercase tracking-wide">
                      {member.specialty}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-warm-100 mt-4">
                  <Link
                    to="/team/clinical-associates"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-primary-600 hover:text-primary-700 hover:underline outline-none"
                  >
                    Know More
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}

        <div className="mt-12">
          <Link
            to="/team/clinical-associates"
            className="inline-flex items-center gap-2 rounded-xl bg-warm-900 px-6 py-3 text-sm font-semibold text-white hover:bg-warm-850 transition-colors focus:ring-2 focus:ring-warm-500 outline-none"
          >
            Meet All Clinical Associates
          </Link>
        </div>
      </div>
    </section>
  );
};
