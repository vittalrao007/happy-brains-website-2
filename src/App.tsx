import React, { useState, useEffect } from 'react';
import { type PageId } from './types';
import { BusinessDetailsProvider } from './context/BusinessDetailsContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { DaycarePage } from './pages/DaycarePage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { GalleryPage } from './pages/GalleryPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';

export function AppContent() {
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    const hash = window.location.hash.replace('#', '');
    const validPages: PageId[] = [
      'home',
      'about',
      'programs',
      'daycare',
      'facilities',
      'gallery',
      'admissions',
      'faqs',
      'contact',
      'privacy',
    ];
    return validPages.includes(hash as PageId) ? (hash as PageId) : 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages: PageId[] = [
        'home',
        'about',
        'programs',
        'daycare',
        'facilities',
        'gallery',
        'admissions',
        'faqs',
        'contact',
        'privacy',
      ];
      if (validPages.includes(hash as PageId)) {
        setCurrentPage(hash as PageId);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = `#${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'programs':
        return <ProgramsPage onNavigate={handleNavigate} />;
      case 'daycare':
        return <DaycarePage onNavigate={handleNavigate} />;
      case 'facilities':
        return <FacilitiesPage onNavigate={handleNavigate} />;
      case 'gallery':
        return <GalleryPage onNavigate={handleNavigate} />;
      case 'admissions':
        return <AdmissionsPage onNavigate={handleNavigate} />;
      case 'faqs':
        return <FAQPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case 'privacy':
        return <PrivacyPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F7] text-[#172A3A]">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">
        {renderCurrentPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return (
    <BusinessDetailsProvider>
      <AppContent />
    </BusinessDetailsProvider>
  );
}
