import { ScrollReveal } from '@/components/ScrollReveal';
import { FileSearch, Star, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

interface EvidenceItem {
  id: number;
  title: string;
  strength: number;
  sources?: string;
  quotes?: string[];
  quote?: string;
  source?: string;
  facts?: string[];
  mpfQuote?: string;
  mechanics?: Record<string, string>;
  exits?: Array<{ who: string; when: string; action: string; timing?: string }>;
  profile?: string[];
  analysis: string[];
  implication: string;
}

const evidenceList: EvidenceItem[] = [
  {
    id: 1,
    title: 'SABBÁ OFERECEU ATIVAMENTE',
    strength: 5,
    sources: 'Gazeta Mercantil, Bloomberg Línea, etc',
    quotes: [
      'A oportunidade surgiu porque Sabbá ofereceu a Vorcaro a possibilidade de adquirir o banco.',
      'Sua entrada oficial no mercado aconteceu em 2016, quando o Banco Máxima, então de Paul Sabbá, foi oferecido a Daniel.',
    ],
    analysis: [
      'Sabbá PRECISAVA vender (inabilitado BC)',
      'Sabbá CONHECIA Vorcaro (negócios imobiliários prévios)',
      'Sabbá ESCOLHEU Vorcaro como sucessor',
      'NÃO foi Vorcaro identificando oportunidade',
    ],
    implication: 'Vorcaro foi SELECIONADO, não se auto-inseriu',
  },
  {
    id: 2,
    title: 'BC APROVOU FRAUDE ÓBVIA',
    strength: 5,
    facts: [
      'Terreno R$ 2,5mi (2016) → "vendido" R$ 57mi (2018) = 2.180% valorização',
      'Comprador = Fundo ligado ao próprio Máxima (circular)',
      'Fundo teve prejuízo R$ 109mi em 2017',
      'Gestora (Foco DTVM) condenada CVM 2022 por beneficiar Vorcaro',
      'BC pediu laudo mas aprovou mesmo assim',
    ],
    analysis: [
      'Se BC aprovou fraude TÃO óbvia: incompetência extrema (improvável) ou conivência/pressão para aprovar',
    ],
    implication: 'Vorcaro não tinha capital real. Alguém QUERIA que Vorcaro comprasse banco. BC facilitou entrada fraudulenta.',
  },
  {
    id: 3,
    title: 'INFRAESTRUTURA PRÉ-EXISTENTE (2014)',
    strength: 5,
    mpfQuote: 'investigadores apontaram o uso de fundos geridos pela Reag para viabilizar as fraudes [Banco Máxima 2014-2016]',
    mechanics: {
      '2014 (Máxima+REAG)': 'Empréstimo → laranja → compra cotas REAG → valorização 126% artificial → ganho fictício',
      '2019-2025 (Master+REAG)': 'Empréstimo → laranja → compra cotas REAG → valorização artificial → ganho fictício',
    },
    analysis: [
      'MESMO MO exato',
      'MESMA REAG (Mansur)',
      'MESMO template criminoso',
      '5 anos ANTES de Vorcaro assumir controle',
    ],
    implication: 'Vorcaro NÃO inventou o esquema. Vorcaro HERDOU infraestrutura existente. Mansur/REAG = verdadeira continuidade.',
  },
  {
    id: 4,
    title: 'QUADRADO APRESENTOU TANURE',
    strength: 4,
    quote: 'Maurício Quadrado, o ex-executivo do Bradesco e ex-sócio da Corretora Planner, se associou ao Master no ano passado e hoje comanda o banco de investimentos, aprovado em novembro pelo BC. Foi Maurício quem apresentou Daniel a Nelson Tanure, que passou a investir e fazer negócios com o banco.',
    source: 'Brazil Journal (março 2021)',
    analysis: [
      'Quadrado conhecia Tanure ANTES de entrar Master',
      'Tanure era CLIENTE Trustee (Quadrado)',
      'Quadrado TROUXE Tanure para dentro',
      'NÃO foi Vorcaro networking',
    ],
    implication: 'Vorcaro não mobilizou capital offshore. Quadrado CONECTOU capital (Tanure) a operação (Vorcaro/Master). Quadrado = orquestrador real.',
  },
  {
    id: 5,
    title: 'VORCARO "OUTSIDER" CONFESSO',
    strength: 4,
    quote: 'Vorcaro disse que se sentiu um estrangeiro na Avenida Faria Lima, centro financeiro de São Paulo.',
    source: 'Revista Piauí',
    profile: [
      'Mineiro de BH (não paulista Faria Lima)',
      'Família imobiliária (não bancária)',
      'Primeira experiência bancária 2016 (33 anos)',
      'Zero network financeiro pré-estabelecido',
      'Ostentação ≠ perfil banqueiro tradicional',
    ],
    analysis: [
      'Vorcaro não pertencia ao círculo financeiro',
      'Vorcaro foi inserido como outsider',
      'Perfil ostentador = útil para captação, não para arquitetura',
    ],
    implication: 'Vorcaro não pertencia ao círculo financeiro. Vorcaro foi inserido como outsider. Perfil ostentador = útil para captação, não para arquitetura.',
  },
  {
    id: 6,
    title: 'SAÍDAS ESTRATÉGICAS (2024)',
    strength: 4,
    exits: [
      { who: 'Quadrado', when: 'Setembro 2024', action: 'Vende 30% Master, sai. Leva Letsbank (depois BlueBank).', timing: '7 meses ANTES da liquidação' },
      { who: 'Lima', when: 'Maio 2024', action: 'Sai do Master. Compra Voiter, rebatiza Pleno. Leva CredCesta.', timing: '6 meses ANTES da liquidação' },
      { who: 'Vorcaro', when: 'Novembro 2025', action: 'Fica até o fim. Preso tentando fugir.', timing: '' },
    ],
    analysis: [
      'Quadrado e Lima SABIAM o que estava vindo',
      'Saíram com ativos (Letsbank, Voiter/CredCesta)',
      'Vorcaro ficou = não sabia ou não podia sair',
    ],
    implication: 'Quadrado/Lima = operadores calculistas. Vorcaro = rosto que não podia abandonar navio. Hierarquia: Quadrado/Lima acima > Vorcaro abaixo.',
  },
  {
    id: 7,
    title: 'TENTATIVA DUBAI (DESESPERO)',
    strength: 3,
    facts: [
      'Novembro 2025: Vorcaro tenta ir Dubai (preso aeroporto)',
      'Cunhado Zettel tenta Dubai (detido)',
      'Vorcaro menciona "R$ 3bi investidores" Dubai',
    ],
    analysis: [
      'Dubai = última hora (não planejado)',
      'Se Vorcaro controlasse offshore, já teria infraestrutura',
      'Dubai = improvisação desesperada',
      'Contraste com Tanure (R$ 15bi offshore JÁ estabelecido)',
    ],
    implication: 'Vorcaro NÃO tinha plano fuga sofisticado. Vorcaro NÃO operava offshore previamente. Vorcaro = amador em exit strategy (vs Tanure profissional).',
  },
];

const counterEvidence = [
  'Vorcaro assumiu controle total rapidamente - poderia ter rejeitado estruturas existentes',
  'Vorcaro expandiu agressivamente - não foi passivo, foi agressivo em crescimento',
  'Vorcaro tentou BRB (R$ 12bi fraude) - operação complexa, requer expertise',
  'Vorcaro tinha sociedades múltiplas - Viking Participações, outras holdings',
];

const counterArguments = [
  'Ganância + ambição sobrepuseram prudência',
  'Seguiu script dos arquitetos, executou com entusiasmo',
  'Quadrado/Mansur estruturaram, Vorcaro executou/assinou',
  'Holdings comuns em estruturas, não provam arquitetura',
];

export function EvidenceAnalysis() {
  return (
    <section id="evidence" className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6 lg:pr-80">
        <ScrollReveal>
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground mb-3">
              <FileSearch size={16} />
              PARTE 5: EVIDÊNCIAS ESPECÍFICAS
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              EVIDÊNCIAS DE RECRUTAMENTO
            </h2>
            <p className="text-muted-foreground">
              Análise das evidências que sustentam a hipótese de recrutamento.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {evidenceList.map((evidence, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-lg font-semibold">EVIDÊNCIA {evidence.id}: {evidence.title}</h3>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < evidence.strength ? 'text-accent fill-accent' : 'text-border'}
                      />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">({evidence.strength}/5)</span>
                  </div>
                </div>

                {evidence.sources && (
                  <p className="text-sm text-muted-foreground mb-3">Fonte: {evidence.sources}</p>
                )}

                {evidence.quotes && (
                  <div className="mb-4 space-y-2">
                    {evidence.quotes.map((quote, i) => (
                      <blockquote key={i} className="pl-4 border-l-2 border-accent italic text-sm text-muted-foreground">
                        "{quote}"
                      </blockquote>
                    ))}
                  </div>
                )}

                {evidence.quote && (
                  <div className="mb-4">
                    <blockquote className="pl-4 border-l-2 border-accent italic text-sm text-muted-foreground mb-1">
                      "{evidence.quote}"
                    </blockquote>
                    <cite className="text-xs text-muted-foreground ml-4">— {evidence.source}</cite>
                  </div>
                )}

                {evidence.facts && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">FATOS:</h4>
                    <ul className="space-y-1">
                      {evidence.facts.map((fact, i) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <span className="text-accent">•</span>
                          {fact}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {evidence.mpfQuote && (
                  <div className="mb-4 p-3 bg-muted rounded">
                    <span className="text-xs font-semibold text-muted-foreground">MPF Denúncia 2021:</span>
                    <p className="text-sm italic">"{evidence.mpfQuote}"</p>
                  </div>
                )}

                {evidence.mechanics && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">MECÂNICA:</h4>
                    <div className="space-y-2">
                      {Object.entries(evidence.mechanics).map(([key, value], i) => (
                        <div key={i} className="p-2 bg-muted rounded font-mono text-xs">
                          <span className="font-semibold">{key}:</span> {value}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {evidence.exits && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">SAÍDAS:</h4>
                    <div className="space-y-2">
                      {evidence.exits.map((exit, i) => (
                        <div key={i} className="p-3 bg-muted rounded">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className="font-semibold text-sm">{exit.who}</span>
                            <span className="text-xs text-muted-foreground">({exit.when})</span>
                          </div>
                          <p className="text-sm">{exit.action}</p>
                          {exit.timing && (
                            <span className="text-xs text-accent">{exit.timing}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {evidence.profile && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">PERFIL:</h4>
                    <ul className="space-y-1">
                      {evidence.profile.map((item, i) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <span className="text-muted-foreground">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-2">ANÁLISE:</h4>
                  <ul className="space-y-1">
                    {evidence.analysis.map((item, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <span className="text-accent">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-accent/5 rounded">
                  <span className="text-sm font-semibold text-accent">IMPLICAÇÃO:</span>
                  <span className="text-sm ml-2">{evidence.implication}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Counter-evidence section */}
        <ScrollReveal delay={600}>
          <div className="mt-12">
            <div className="flex items-center gap-2 mb-6">
              <AlertTriangle size={20} className="text-orange-500" />
              <h3 className="text-xl font-bold">EVIDÊNCIAS CONTRA A HIPÓTESE</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Honestidade intelectual: considerando argumentos contra a hipótese de recrutamento.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
                <h4 className="font-semibold text-orange-800 dark:text-orange-400 mb-4 flex items-center gap-2">
                  <XCircle size={18} />
                  CONTRA "Vorcaro foi recrutado"
                </h4>
                <ul className="space-y-3">
                  {counterEvidence.map((item, index) => (
                    <li key={index} className="text-sm text-orange-700 dark:text-orange-300 flex items-start gap-2">
                      <span>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                <h4 className="font-semibold text-green-800 dark:text-green-400 mb-4 flex items-center gap-2">
                  <CheckCircle size={18} />
                  CONTRA-ARGUMENTOS
                </h4>
                <ul className="space-y-3">
                  {counterArguments.map((item, index) => (
                    <li key={index} className="text-sm text-green-700 dark:text-green-300 flex items-start gap-2">
                      <span>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
