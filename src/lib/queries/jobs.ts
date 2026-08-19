import { supabase } from '../supabaseClient';

export interface JobOpening {
  id: string;
  title: string;
  location?: string;
  employment_type?: string;
  description?: string;
  is_active: boolean;
  created_at: string;
}

export interface JobApplicationInput {
  job_id?: string;
  name: string;
  email: string;
  phone: string;
  resume_url?: string;
  cover_note?: string;
}

export async function getJobOpenings(): Promise<JobOpening[]> {
  const { data, error } = await supabase
    .from('job_openings')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching job openings:', error);
    throw error;
  }
  return data || [];
}

export async function uploadResume(file: File): Promise<string> {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
  const filePath = `${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from('resumes')
    .upload(filePath, file);

  if (uploadError) {
    console.error('Error uploading file to resumes bucket:', uploadError);
    throw uploadError;
  }

  return filePath;
}

export async function submitJobApplication(application: JobApplicationInput): Promise<void> {
  const { error } = await supabase
    .from('job_applications')
    .insert([application]);

  if (error) {
    console.error('Error submitting job application:', error);
    throw error;
  }
}
