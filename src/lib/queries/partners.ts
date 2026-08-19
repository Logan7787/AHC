import { supabase } from '../supabaseClient';

export interface Partner {
  id: string;
  name: string;
  logo_url: string;
  website_url?: string;
  display_order: number;
}

export async function getPartners(): Promise<Partner[]> {
  const { data, error } = await supabase
    .from('partners')
    .select('*')
    .order('display_order', { ascending: true });

  if (error) {
    console.error('Error fetching partners:', error);
    throw error;
  }
  return data || [];
}
