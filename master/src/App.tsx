import { ReadingProgress } from '@/components/ReadingProgress';
import { TableOfContents } from '@/components/TableOfContents';
import { ExecutiveSummary } from '@/sections/ExecutiveSummary';
import { TimelinePhase1 } from '@/sections/TimelinePhase1';
import { TimelinePhase2 } from '@/sections/TimelinePhase2';
import { TimelinePhase3 } from '@/sections/TimelinePhase3';
import { ProfileVorcaro } from '@/sections/ProfileVorcaro';
import { ProfileOthers } from '@/sections/ProfileOthers';
import { ConnectionMap } from '@/sections/ConnectionMap';
import { CompetencyAnalysis } from '@/sections/CompetencyAnalysis';
import { EvidenceAnalysis } from '@/sections/EvidenceAnalysis';
import { RevisedHypothesis } from '@/sections/RevisedHypothesis';
import { Conclusions } from '@/sections/Conclusions';
import { ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 p-3 bg-card border border-border rounded-full shadow-lg hover:bg-muted transition-colors"
      aria-label="Voltar ao topo"
    >
      <ChevronUp size={20} />
    </button>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-background">
      <ReadingProgress />
      <TableOfContents />
      
      <main className="lg:mr-72">
        <ExecutiveSummary />
        <TimelinePhase1 />
        <TimelinePhase2 />
        <TimelinePhase3 />
        <ProfileVorcaro />
        <ProfileOthers />
        <ConnectionMap />
        <CompetencyAnalysis />
        <EvidenceAnalysis />
        <RevisedHypothesis />
        <Conclusions />
      </main>
      
      <BackToTop />
    </div>
  );
}

export default App;
