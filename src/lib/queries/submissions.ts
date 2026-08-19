import { supabase } from '../supabaseClient';

export interface ContactSubmissionInput {
  name: string;
  phone: string;
  email?: string;
  location?: string;
  service_interested?: string | null;
  message?: string;
}

export interface MembershipSubmissionInput {
  name: string;
  phone: string;
  email?: string;
  address?: string;
  plan_tier?: string;
  preferred_start_date?: string;
}

export interface ReferralSubmissionInput {
  name: string;
  organization?: string;
  phone: string;
  email?: string;
  relationship_type?: string;
  message?: string;
}

export async function submitContact(input: ContactSubmissionInput): Promise<void> {
  const { error } = await supabase
    .from('contact_submissions')
    .insert([input]);

  if (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
}

export async function submitMembership(input: MembershipSubmissionInput): Promise<void> {
  const { error } = await supabase
    .from('membership_submissions')
    .insert([input]);

  if (error) {
    console.error('Error submitting membership form:', error);
    throw error;
  }
}

export async function submitReferral(input: ReferralSubmissionInput): Promise<void> {
  const { error } = await supabase
    .from('referral_submissions')
    .insert([input]);

  if (error) {
    console.error('Error submitting referral form:', error);
    throw error;
  }
}
