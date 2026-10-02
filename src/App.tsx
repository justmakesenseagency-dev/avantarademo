import React, { useState, useEffect } from 'react';
import { ViewMode } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ChoiceLanding } from './components/ChoiceLanding';
import { ExperiencesView } from './components/ExperiencesView';
import { EventsView } from './components/EventsView';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>(() => {
    // Read initial route from pathname or hash
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();

    if (path.includes('experiences') || hash.includes('experiences')) {
      return 'experiences';
    }
    if (path.includes('events') || hash.includes('events')) {
      return 'events';
    }
    return 'landing';
  });

  const [consultationModalOpen, setConsultationModalOpen] = useState(false);

  // Sync URL history and document title
  const handleNavigate = (view: ViewMode, sectionId?: string) => {
    setCurrentView(view);

    let targetPath = '/';
    if (view === 'experiences') targetPath = '/experiences';
    if (view === 'events') targetPath = '/events';

    try {
      window.history.pushState({ view }, '', targetPath);
    } catch {
      // Fallback for sandboxed iframes
      window.location.hash = view === 'landing' ? '' : view;
    }

    if (sectionId) {
      setTimeout(() => {
        const el =
          document.getElementById(sectionId) ||
          (sectionId === 'contact'
            ? document.getElementById('events-contact') ||
              document.getElementById('experience-enquiry')
            : null);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 80);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Sync browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();

      if (path.includes('experiences') || hash.includes('experiences')) {
        setCurrentView('experiences');
      } else if (path.includes('events') || hash.includes('events')) {
        setCurrentView('events');
      } else {
        setCurrentView('landing');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync document title and meta description
  useEffect(() => {
    if (currentView === 'experiences') {
      document.title = 'Avantaara Experiences | Considered Moments & Curated Gatherings';
    } else if (currentView === 'events') {
      document.title = 'Avantaara Events | Weddings, Ceremonies & Event Planning';
    } else {
      document.title = 'Avantaara | Two ways to make a moment unforgettable';
    }
  }, [currentView]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F0E8] text-[#29251F] selection:bg-[#E7DDCD]">
      {/* Top Bar Navigation */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenConsultation={() => setConsultationModalOpen(true)}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {currentView === 'landing' && (
          <ChoiceLanding
            onSelectChoice={(choice) => handleNavigate(choice)}
          />
        )}

        {currentView === 'experiences' && (
          <ExperiencesView
            onSwitchToEvents={() => handleNavigate('events')}
            onOpenConsultation={() => setConsultationModalOpen(true)}
          />
        )}

        {currentView === 'events' && (
          <EventsView
            onSwitchToExperiences={() => handleNavigate('experiences')}
            onOpenConsultation={() => setConsultationModalOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Quick Consultation Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        defaultOffering={currentView === 'experiences' ? 'experiences' : 'events'}
      />
    </div>
  );
}
