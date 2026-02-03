import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const sections = [
  { id: 'executive-summary', label: 'Sumário Executivo' },
  { id: 'timeline-phase1', label: 'Fase 1: Pré-Vorcaro (2012-2017)' },
  { id: 'timeline-phase2', label: 'Fase 2: Entrada Vorcaro (2016-2019)' },
  { id: 'timeline-phase3', label: 'Fase 3: Orquestração (2020-2021)' },
  { id: 'profile-vorcaro', label: 'Perfil: Vorcaro' },
  { id: 'profile-others', label: 'Perfil: Outros Atores' },
  { id: 'connections', label: 'Mapa de Conexões' },
  { id: 'competencies', label: 'Análise de Competências' },
  { id: 'evidence', label: 'Evidências' },
  { id: 'hypothesis', label: 'Hipótese Revisada' },
  { id: 'conclusions', label: 'Conclusões' },
];

export function TableOfContents() {
  const [activeSection, setActiveSection] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 bg-card border border-border rounded-lg shadow-lg lg:hidden"
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* TOC */}
      <nav 
        className={`fixed top-0 right-0 h-full w-72 bg-card border-l border-border z-40 overflow-y-auto transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            Índice
          </h2>
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left text-sm py-1.5 px-2 rounded transition-colors ${
                    activeSection === section.id
                      ? 'bg-accent/10 text-accent font-medium'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
