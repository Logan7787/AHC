import React from 'react';
import { createBrowserRouter, Outlet, Navigate } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { WhatsAppFloatButton } from './components/layout/WhatsAppFloatButton';
import { Home } from './pages/Home';
import { ServicesOverview } from './pages/ServicesOverview';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ClinicalAssociates } from './pages/ClinicalAssociates';
import { Career } from './pages/Career';
import { Contact } from './pages/Contact';
import { Membership } from './pages/Membership';
import { ReferralPartner } from './pages/ReferralPartner';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsConditions } from './pages/TermsConditions';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-warm-50">
      <Header />
      <main className="grow flex flex-col">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'services', element: <ServicesOverview /> },
      { path: 'services/:slug', element: <ServiceDetailPage /> },
      { path: 'team/clinical-associates', element: <ClinicalAssociates /> },
      { path: 'career', element: <Career /> },
      { path: 'contact', element: <Contact /> },
      { path: 'contact/membership', element: <Membership /> },
      { path: 'contact/referral-partner', element: <ReferralPartner /> },
      { path: 'privacy-policy', element: <PrivacyPolicy /> },
      { path: 'terms-conditions', element: <TermsConditions /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
]);
