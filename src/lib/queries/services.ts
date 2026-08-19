import { supabase } from '../supabaseClient';

export interface Service {
  id: string;
  slug: string;
  title: string;
  short_description: string;
  full_description: string;
  hero_image_url: string;
  icon: string;
  display_order: number;
  created_at: string;
}

export async function getServices(): Promise<Service[]> {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .order('display_order', { ascending: true });

  if (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
  return data || [];
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    if (error.code === 'PGRST116') {
      // Record not found
      return null;
    }
    console.error(`Error fetching service by slug ${slug}:`, error);
    throw error;
  }
  return data;
}
