import { ScrollReveal } from '@/components/ScrollReveal';
import { Clock, Building2, AlertCircle, CheckCircle } from 'lucide-react';

const timelineEvents = [
  {
    year: '2012-2014',
    title: 'MANSUR/REAG Constroem Infraestrutura',
    description: 'João Carlos Mansur já operava REAG Investimentos. REAG se torna gestora de fundos para operações estruturadas.',
    evidence: 'REAG fundada anos antes, crescimento gradual',
    type: 'info',
  },
  {
    year: '2014-2016',
    title: 'TEMPLATE CRIMINOSO - BANCO MÁXIMA + REAG',
    description: 'Saul Dutra Sabbá controla Banco Máxima. Mecânica fraudulenta implementada: empréstimo → laranja → cotas REAG → valorização artificial 126% → ganho fictício.',
    evidence: '2016: Crise inadimplência, Máxima quase quebra. Abril 2025: Sabbá condenado por gestão fraudulenta 2014-2016',
    type: 'warning',
  },
  {
    year: '2017',
    title: 'SABBÁ PRECISA VENDER',
    description: 'Sabbá inabilitado pelo BC. Precisa transferir controle urgentemente. Busca ativamente um comprador.',
    evidence: 'Sabbá ofereceu ativamente o banco',
    type: 'critical',
  },
];

export function TimelinePhase1() {
  return (
    <section id="timeline-phase1" className="py-16 lg:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:pr-80">
        <ScrollReveal>
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground mb-3">
              <Clock size={16} />
              PARTE 1: CRONOLOGIA DETALHADA
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              FASE 1: PRÉ-VORCARO (2012-2017)
            </h2>
            <p className="text-muted-foreground">
              Quem chegou primeiro? A infraestrutura criminosa já existia antes de Vorcaro.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border hidden md:block"></div>

          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="relative md:pl-12">
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-2 top-1 w-5 h-5 rounded-full border-2 border-background items-center justify-center"
                    style={{ 
                      backgroundColor: event.type === 'critical' ? '#c41e3a' : 
                                       event.type === 'warning' ? '#ea580c' : '#1a1a1a'
                    }}
                  >
                    {event.type === 'critical' && <AlertCircle size={10} className="text-white" />}
                    {event.type === 'warning' && <Building2 size={10} className="text-white" />}
                    {event.type === 'info' && <CheckCircle size={10} className="text-white" />}
                  </div>

                  <div className="bg-card border border-border rounded-lg p-6 card-hover">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-muted">
                        {event.year}
                      </span>
                      {event.type === 'critical' && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded bg-red-100 text-red-700">
                          <AlertCircle size={12} />
                          CRÍTICO
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-muted-foreground font-medium">Evidência:</span>
                      <span className="text-foreground">{event.evidence}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-10 p-6 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
            <h4 className="font-semibold text-green-800 dark:text-green-400 mb-2 flex items-center gap-2">
              <CheckCircle size={18} />
              CONCLUSÃO FASE 1
            </h4>
            <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
              <li>✅ Infraestrutura criminosa REAG-banco <strong>EXISTIA ANTES de Vorcaro</strong></li>
              <li>✅ Template fraudulento <strong>JÁ TESTADO e COMPROVADO</strong> (2014-2016)</li>
              <li>✅ BC e PF <strong>JÁ SABIAM</strong> (investigações 2016-2021)</li>
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
