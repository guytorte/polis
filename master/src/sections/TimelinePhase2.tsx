import { ScrollReveal } from '@/components/ScrollReveal';
import { Clock, AlertTriangle, FileWarning, CheckCircle } from 'lucide-react';

const timelineEvents = [
  {
    year: '2016',
    title: 'PRIMEIRO CONTATO - SABBÁ OFERECE BANCO',
    description: 'Vorcaro: CEO Grupo Multipar (imobiliário familiar). Zero experiência bancária. Sabbá oferece participação Banco Máxima.',
    evidence: 'Fontes afirmam: "Embora Daniel afirmasse ter conhecido Sabbá apenas naquele ano, transações entre empresas da família e o Banco Máxima já eram frequentes"',
    critical: ['Relação pré-existente Vorcaro-Sabbá via negócios imobiliários', 'Sabbá OFERECEU ativamente (Vorcaro não foi atrás)'],
    type: 'critical',
  },
  {
    year: '2016-2017',
    title: 'VORCARO ENTRA COMO MINORITÁRIO',
    description: 'Primeiro como participação minoritária. Ainda aprendendo setor bancário. 2017: Assume acordo de controle (mas BC demora aprovar).',
    evidence: 'Demora de 2 anos na aprovação do BC',
    type: 'info',
  },
  {
    year: '2018',
    title: 'FRAUDE NA COMPRA - BC APROVA INEXPLICAVELMENTE',
    description: 'BC exige R$ 50 milhões aporte de Vorcaro. Vorcaro apresenta "venda terreno Jequitibá" = R$ 57 milhões. PROBLEMA: Terreno custava R$ 2,5 mi em 2016. Valorização absurda: 2.180% em 2 anos.',
    evidence: '2017: Fundo São Domingos teve prejuízo R$ 109 milhões. 2022: CVM condenou Foco DTVM por operações que beneficiaram empresas família Vorcaro',
    type: 'warning',
  },
  {
    year: 'Outubro 2019',
    title: 'BC FINALMENTE APROVA TRANSFERÊNCIA',
    description: 'Vorcaro + Irmãos Conte assumem controle. Demorou 2 anos (BC hesitante ou investigando?). Augusto Lima e Maurício Quadrado entram como minoritários.',
    evidence: 'Demora incomum na aprovação regulatória',
    type: 'info',
  },
];

export function TimelinePhase2() {
  return (
    <section id="timeline-phase2" className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6 lg:pr-80">
        <ScrollReveal>
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground mb-3">
              <Clock size={16} />
              PARTE 1: CRONOLOGIA DETALHADA
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              FASE 2: ENTRADA VORCARO (2016-2019)
            </h2>
            <p className="text-muted-foreground">
              Como Vorcaro entrou no esquema - com capital fraudulento e aprovação inexplicável.
            </p>
          </div>
        </ScrollReveal>

        {/* Fraud Diagram */}
        <ScrollReveal delay={100}>
          <div className="mb-10 p-6 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg">
            <h3 className="font-semibold text-red-800 dark:text-red-400 mb-4 flex items-center gap-2">
              <FileWarning size={18} />
              A FARSA DO CAPITAL - ESTRUTURA CIRCULAR FRAUDULENTA
            </h3>
            <div className="font-mono text-sm space-y-2 text-red-700 dark:text-red-300 overflow-x-auto">
              <div className="p-2 bg-white/50 dark:bg-black/20 rounded">
                Vorcaro "vende" terreno superfaturado R$ 57mi →
              </div>
              <div className="p-2 bg-white/50 dark:bg-black/20 rounded">
                Fundo São Domingos compra →
              </div>
              <div className="p-2 bg-white/50 dark:bg-black/20 rounded">
                Fundo era abastecido por fundos pensão servidores públicos →
              </div>
              <div className="p-2 bg-white/50 dark:bg-black/20 rounded">
                Fundo tinha gestores LIGADOS A VORCARO (Foco DTVM) →
              </div>
              <div className="p-2 bg-white/50 dark:bg-black/20 rounded">
                Dinheiro volta como "capital" Vorcaro →
              </div>
              <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded font-semibold">
                BC aprova compra banco
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border hidden md:block"></div>

          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="relative md:pl-12">
                  <div className="hidden md:flex absolute left-2 top-1 w-5 h-5 rounded-full border-2 border-background items-center justify-center"
                    style={{ 
                      backgroundColor: event.type === 'critical' ? '#c41e3a' : 
                                       event.type === 'warning' ? '#ea580c' : '#1a1a1a'
                    }}
                  >
                    {event.type === 'critical' && <AlertTriangle size={10} className="text-white" />}
                    {event.type === 'warning' && <FileWarning size={10} className="text-white" />}
                    {event.type === 'info' && <CheckCircle size={10} className="text-white" />}
                  </div>

                  <div className={`bg-card border rounded-lg p-6 card-hover ${
                    event.type === 'critical' ? 'border-red-300 dark:border-red-700' : 'border-border'
                  }`}>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-muted">
                        {event.year}
                      </span>
                      {event.type === 'critical' && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded bg-red-100 text-red-700">
                          <AlertTriangle size={12} />
                          EVIDÊNCIA CRÍTICA
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    
                    {event.critical && (
                      <div className="mb-4 p-3 bg-red-50 dark:bg-red-950/20 rounded">
                        <p className="text-sm font-medium text-red-800 dark:text-red-400 mb-2">EVIDÊNCIAS CRÍTICAS:</p>
                        <ul className="space-y-1">
                          {event.critical.map((item, i) => (
                            <li key={i} className="text-sm text-red-700 dark:text-red-300 flex items-start gap-2">
                              <span className="text-red-500">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
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

        <ScrollReveal delay={500}>
          <div className="mt-10 p-6 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
            <h4 className="font-semibold text-green-800 dark:text-green-400 mb-2 flex items-center gap-2">
              <CheckCircle size={18} />
              CONCLUSÃO FASE 2
            </h4>
            <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
              <li>✅ Vorcaro <strong>NÃO tinha capital legítimo</strong> para comprar banco</li>
              <li>✅ Comprou com <strong>fraude circular óbvia</strong> (superfaturamento)</li>
              <li>✅ BC <strong>aprovou sabendo</strong> (incompetência criminal ou conivência)</li>
              <li>✅ Vorcaro foi <strong>inserido</strong> em estrutura, não a criou</li>
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
