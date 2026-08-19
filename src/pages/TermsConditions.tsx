import React from 'react';
import { FileText } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export const TermsConditions: React.FC = () => {
  return (
    <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8 bg-transparent">
      <Helmet>
        <title>Terms & Conditions | Ayusya Health Care</title>
        <meta name="description" content="Ayusya Health Care Terms and Conditions." />
      </Helmet>
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm border border-warm-200 text-left">
        <div className="flex items-center gap-3 border-b border-warm-100 pb-4 mb-6">
          <FileText className="h-8 w-8 text-primary-600" />
          <h1 className="text-2xl font-bold font-serif text-warm-900 leading-none">Terms & Conditions</h1>
        </div>
        <p className="text-sm text-warm-600 mb-4 leading-relaxed">
          Welcome to Ayusya Health Care. By utilizing our website and scheduling home healthcare, nursing, medical machinery, or caretaking services, you agree to comply with the terms and conditions outlined here.
        </p>
        <h2 className="text-lg font-bold font-serif text-warm-900 mt-6 mb-2">1. Booking and Services</h2>
        <p className="text-sm text-warm-600 mb-4 leading-relaxed">
          All bookings are subject to clinician availability and initial home case assessment. Ayusya acts as a clinical coordinator connecting families with certified caretakers, nurses, and medical professionals.
        </p>
        <h2 className="text-lg font-bold font-serif text-warm-900 mt-6 mb-2">2. Patient Safety</h2>
        <p className="text-sm text-warm-600 mb-4 leading-relaxed">
          Families must provide complete medical records, prescriptions, and instructions prior to clinical interventions. In case of acute emergencies, patients must be transferred to nearby hospital emergency rooms immediately.
        </p>
      </div>
    </div>
  );
};
