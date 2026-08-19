import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8 bg-warm-50">
      <Helmet>
        <title>Privacy Policy | Ayusya Health Care</title>
        <meta name="description" content="Ayusya Health Care Privacy Policy." />
      </Helmet>
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm border border-warm-200 text-left">
        <div className="flex items-center gap-3 border-b border-warm-100 pb-4 mb-6">
          <ShieldCheck className="h-8 w-8 text-primary-600" />
          <h1 className="text-2xl font-bold font-serif text-warm-900 leading-none">Privacy Policy</h1>
        </div>
        <p className="text-sm text-warm-600 mb-4 leading-relaxed">
          At Ayusya Health Care, we prioritize the privacy and safety of our patients, clinical associates, and website visitors. Any information collected through forms (like appointment bookings, career applications, and partnership setups) is strictly utilized for service coordination and compliance.
        </p>
        <h2 className="text-lg font-bold font-serif text-warm-900 mt-6 mb-2">1. Information We Collect</h2>
        <p className="text-sm text-warm-600 mb-4 leading-relaxed">
          We collect basic details such as name, contact numbers, email address, physical address (for home clinical visits), and health files/resumes when submitted voluntarily.
        </p>
        <h2 className="text-lg font-bold font-serif text-warm-900 mt-6 mb-2">2. Data Sharing</h2>
        <p className="text-sm text-warm-600 mb-4 leading-relaxed">
          Your personal or medical information is never sold, rented, or distributed to third parties. It is shared only with assigned medical professionals and caretakers directly coordinating your home recovery.
        </p>
      </div>
    </div>
  );
};
