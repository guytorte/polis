import { ScrollReveal } from '@/components/ScrollReveal';
import { Clock, Users, Quote, CheckCircle } from 'lucide-react';

const actors = [
  {
    name: 'Maurício Quadrado',
    role: 'O CONECTOR',
    entry: 'Setembro 2020',
    stake: '30% das ações',
    background: 'Ex-executivo Bradesco, ex-sócio Corretora Planner. Expertise: Estruturação financeira, mercado capitais.',
    contributions: [
      'Entra como sócio Master (30% ações)',
      'Lidera área investimentos do banco',
      'CRÍTICO: Apresenta Vorcaro a Nelson Tanure',
      '2022: Funda Trustee DTVM (presta serviços Master)',
      'Trustee vira veículo operacional dos esquemas',
    ],
    quote: 'Maurício Quadrado, o ex-executivo do Bradesco e ex-sócio da Corretora Planner, se associou ao Master no ano passado e hoje comanda o banco de investimentos, aprovado em novembro pelo BC. Foi Maurício quem apresentou Daniel a Nelson Tanure, que passou a investir e fazer negócios com o banco.',
    quoteSource: 'Brazil Journal (2021)',
    roleAssessment: 'Arquiteto financeiro das operações complexas. Ponte entre Vorcaro (frontal) e Tanure (capital offshore). Dono Trustee (veículo fraudes).',
  },
  {
    name: 'Augusto Lima',
    role: 'INTERFACE POLÍTICA PT',
    entry: 'Maio 2020',
    stake: 'Sócio minoritário',
    background: '2017: Conhece Jaques Wagner (Sec. Desenvolvimento Bahia). 2018: Compra Ebal (estatal PT Bahia) por R$ 15 milhões. Cria CredCesta (consignado servidores públicos).',
    contributions: [
      'Lima procurava funding CredCesta em grandes bancos',
      'Vorcaro "fechou negócio em um dia" (Brazil Journal)',
      'Maio 2020: Lima vira sócio Master, traz CredCesta',
      'CredCesta vira ativo principal do banco',
    ],
    quote: 'Vorcaro viu potencial no negócio e Guga Lima entrou, em 2020, na sociedade do Master levando o CredCesta, que virou um dos principais ativos do banco.',
    quoteSource: 'CNN',
    roleAssessment: 'Interface PT (Rui Costa, Wagner). CredCesta = negócio legítimo (diferente fraudes Master). Saiu quando viu "negócios questionáveis" = não era núcleo criminoso.',
  },
  {
    name: 'Nelson Tanure',
    role: 'O CAPITAL OFFSHORE',
    entry: '2020 (via Quadrado)',
    stake: 'Via fundos offshore',
    background: 'Empresário serial aquisições. R$ 15 bilhões paraísos fiscais Europa. Domicílio fiscal mudado. Opera via estruturas offshore complexas.',
    contributions: [
      'Entrou via Quadrado (2020)',
      'Fundos Tanure (Estocolmo, Estoa, Lormont)',
      '2022: Financia R$ 700+ milhões Master via debêntures',
      'Empresas Tanure compraram CDBs Master (Oncoclínicas, EMAE, Dia)',
      'PF abriu inquérito (maio 2025): Tanure = "controlador oculto Master"',
    ],
    quote: null,
    quoteSource: null,
    roleAssessment: 'Financiador estratégico. Capitalista sem escrúpulos que viu oportunidade. Nega veementemente controle Master (mas evidências dizem contrário).',
  },
];

export function TimelinePhase3() {
  return (
    <section id="timeline-phase3" className="py-16 lg:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:pr-80">
        <ScrollReveal>
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground mb-3">
              <Clock size={16} />
              PARTE 1: CRONOLOGIA DETALHADA
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              FASE 3: ORQUESTRAÇÃO - OS VERDADEIROS OPERADORES (2020-2021)
            </h2>
            <p className="text-muted-foreground">
              Os verdadeiros operadores entram em cena - Quadrado, Lima e Tanure.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {actors.map((actor, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div className="bg-card border border-border rounded-lg p-6 card-hover">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Users size={18} className="text-accent" />
                      <h3 className="text-xl font-bold">{actor.name}</h3>
                    </div>
                    <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-accent/10 text-accent">
                      {actor.role}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Entrada</div>
                    <div className="font-medium">{actor.entry}</div>
                    <div className="text-sm text-muted-foreground mt-1">Participação</div>
                    <div className="font-medium">{actor.stake}</div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-2">PERFIL</h4>
                  <p className="text-sm">{actor.background}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-2">O QUE TROUXE</h4>
                  <ul className="space-y-1">
                    {actor.contributions.map((item, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <span className="text-accent">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {actor.quote && (
                  <div className="mb-4 p-4 bg-muted rounded-lg">
                    <Quote size={16} className="text-muted-foreground mb-2" />
                    <blockquote className="text-sm italic text-muted-foreground mb-2">
                      "{actor.quote}"
                    </blockquote>
                    <cite className="text-xs text-muted-foreground">— {actor.quoteSource}</cite>
                  </div>
                )}

                <div className="p-3 bg-accent/5 rounded">
                  <h4 className="text-sm font-semibold text-accent mb-1">PAPEL:</h4>
                  <p className="text-sm">{actor.roleAssessment}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500}>
          <div className="mt-10 p-6 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
            <h4 className="font-semibold text-green-800 dark:text-green-400 mb-2 flex items-center gap-2">
              <CheckCircle size={18} />
              CONCLUSÃO FASE 3
            </h4>
            <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
              <li>✅ <strong>Quadrado</strong> = cérebro estruturação financeira</li>
              <li>✅ <strong>Tanure</strong> = capital offshore massivo</li>
              <li>✅ <strong>Lima</strong> = interface política PT</li>
              <li>✅ <strong>Vorcaro</strong> = face pública ostentadora</li>
              <li>✅ <strong>Mansur/REAG</strong> = infraestrutura fundos fictícios (desde 2014)</li>
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
