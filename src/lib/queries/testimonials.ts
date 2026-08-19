import { supabase } from '../supabaseClient';

export interface Testimonial {
  id: string;
  patient_name?: string;
  location?: string;
  youtube_id: string;
  thumbnail_url?: string;
  display_order: number;
  created_at: string;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .order('display_order', { ascending: true });

  if (error) {
    console.error('Error fetching testimonials:', error);
    throw error;
  }
  return data || [];
}
