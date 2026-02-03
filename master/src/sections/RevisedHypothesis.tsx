import { ScrollReveal } from '@/components/ScrollReveal';
import { Lightbulb, Layers } from 'lucide-react';

const tiers = [
  {
    level: 'TIER 1',
    title: 'ARQUITETOS SOMBRA',
    actors: [
      { name: 'MANSUR/REAG', role: 'infraestrutura técnica fundos, 13+ anos' },
      { name: 'TANURE', role: 'capital offshore R$ 15bi, décadas experiência' },
    ],
    color: 'bg-red-100 dark:bg-red-950/30 border-red-200 dark:border-red-800',
    textColor: 'text-red-800 dark:text-red-400',
  },
  {
    level: 'TIER 2',
    title: 'ORQUESTRADORES',
    actors: [
      { name: 'QUADRADO', role: 'estruturação financeira, conecta todos' },
    ],
    color: 'bg-orange-100 dark:bg-orange-950/30 border-orange-200 dark:border-orange-800',
    textColor: 'text-orange-800 dark:text-orange-400',
  },
  {
    level: 'TIER 3',
    title: 'EXECUTORES ESPECIALIZADOS',
    actors: [
      { name: 'LIMA', role: 'interface política PT, CredCesta' },
      { name: 'VORCARO', role: 'captação pública, rosto ostentador' },
    ],
    color: 'bg-yellow-100 dark:bg-yellow-950/30 border-yellow-200 dark:border-yellow-800',
    textColor: 'text-yellow-800 dark:text-yellow-600',
  },
  {
    level: 'TIER 4',
    title: 'FACILITADORES',
    actors: [
      { name: 'Campos Neto (BC)', role: 'hesitação' },
      { name: 'Moraes/Toffoli (STF)', role: 'proteções' },
      { name: 'Políticos diversos', role: 'Ciro, PP, etc' },
    ],
    color: 'bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700',
    textColor: 'text-gray-700 dark:text-gray-400',
  },
];

const roleDefinitions = [
  {
    actor: 'MANSUR (Arquiteto Técnico)',
    description: 'Fornece infraestrutura fundos fictícios. Conhecimento profundo regulação. Invisível mas essencial. Operando desde 2014 (provado).',
  },
  {
    actor: 'TANURE (Capitalista Offshore)',
    description: 'Fornece capital massivo R$ 15bi+. Estruturas offshore sofisticadas. Empresas compram CDBs Master. Nega controle mas evidências sugerem.',
  },
  {
    actor: 'QUADRADO (Orquestrador)',
    description: 'Conecta Vorcaro + Tanure. Estrutura operações complexas. Funda Trustee (veículo). Saiu antes colapso (sabia).',
  },
  {
    actor: 'LIMA (Interface PT)',
    description: 'Traz conexões políticas. CredCesta ativo legítimo. Expande estados via network. Saiu antes colapso (viu problemas).',
  },
  {
    actor: 'VORCARO (Rosto Público)',
    description: 'Capta R$ 40bi CDBs. Ostentação gera confiança. Assina como responsável legal. Fica até fim = bode expiatório.',
  },
];

const chronology = [
  { year: '2012-2016', event: 'CONSTRUÇÃO INFRAESTRUTURA', details: 'Mansur/REAG estabelecem gestora fundos. Template fraudulento desenvolvido/testado. Sabbá/Máxima parceiro inicial (2014-2016). MPF/PF descobrem mas não agem rapidamente.' },
  { year: '2016-2017', event: 'SABBÁ PRECISA SUCESSOR', details: 'Sabbá condenado/inabilitado. Precisa transferir controle urgentemente. Critérios sucessor: Capital (mesmo fraudulento), Ambicioso/ganancioso, Sem reputação prévia, Disposto assumir riscos, NÃO conhecedor profundo (mais manipulável).' },
  { year: '2016-2017', event: 'VORCARO RECRUTADO', details: 'Sabbá conhecia Vorcaro (negócios imobiliários). Sabbá oferece banco. Vorcaro aceita (ambição). Vorcaro não questiona estruturas existentes. BC aprova (inexplicavelmente) compra fraudulenta.' },
  { year: '2019-2020', event: 'ORQUESTRADORES ENTRAM', details: 'Vorcaro assume controle (out 2019). Set 2020: Quadrado entra (30%) - Traz expertise, conecta Tanure, funda Trustee. Mai 2020: Lima entra - Traz CredCesta, network PT, interface política.' },
  { year: '2020-2025', event: 'OPERAÇÃO ESCALA', details: 'Quadrado estrutura operações complexas. Tanure fornece capital offshore massivo. Mansur/REAG fornece fundos fictícios. Lima expande CredCesta (cobertura legítima). Vorcaro = ROSTO PÚBLICO.' },
  { year: '2024', event: 'RATOS ABANDONAM NAVIO', details: 'Mai 2024: Lima sai (vê "negócios questionáveis"). Set 2024: Quadrado sai (sabe colapso vindo). Vorcaro fica (não pode sair? não sabe gravidade?).' },
  { year: 'Nov 2025', event: 'COLAPSO', details: 'BC liquida Master. Vorcaro preso (tentando fugir). Quadrado/Lima soltos (já tinham saído). Tanure investigado (nega tudo). Mansur? Invisível, mas PF sabe dele.' },
];

export function RevisedHypothesis() {
  return (
    <section id="hypothesis" className="py-16 lg:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:pr-80">
        <ScrollReveal>
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground mb-3">
              <Lightbulb size={16} />
              PARTE 6: HIPÓTESE REVISADA
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              ESTRUTURA REAL DO ESQUEMA
            </h2>
            <p className="text-muted-foreground">
              A hierarquia verdadeira e a cronologia do recrutamento.
            </p>
          </div>
        </ScrollReveal>

        {/* Hierarchy */}
        <ScrollReveal delay={100}>
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Layers size={18} />
              ESTRUTURA HIERÁRQUICA
            </h3>
            <div className="space-y-4">
              {tiers.map((tier, index) => (
                <div key={index} className={`p-4 rounded-lg border ${tier.color}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded ${tier.textColor} bg-white/50 dark:bg-black/20`}>
                      {tier.level}
                    </span>
                    <span className={`font-semibold ${tier.textColor}`}>{tier.title}</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {tier.actors.map((actor, i) => (
                      <div key={i} className="bg-white/70 dark:bg-black/30 rounded px-3 py-2">
                        <span className="text-sm font-medium">{actor.name}</span>
                        <span className="text-xs text-muted-foreground ml-2">({actor.role})</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Role Definitions */}
        <ScrollReveal delay={200}>
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-4">PAPEIS DEFINIDOS</h3>
            <div className="space-y-4">
              {roleDefinitions.map((role, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-sm mb-2">{role.actor}</h4>
                  <p className="text-sm text-muted-foreground">{role.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Chronology */}
        <ScrollReveal delay={300}>
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-4">CRONOLOGIA DO RECRUTAMENTO</h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border hidden md:block"></div>
              <div className="space-y-6">
                {chronology.map((item, index) => (
                  <div key={index} className="relative md:pl-12">
                    <div className="hidden md:block absolute left-2 top-1 w-5 h-5 rounded-full bg-accent border-2 border-background"></div>
                    <div className="bg-card border border-border rounded-lg p-4">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="text-sm font-bold text-accent">{item.year}</span>
                        <span className="text-sm font-semibold">{item.event}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="p-6 bg-accent/10 border border-accent/20 rounded-lg">
            <h4 className="font-semibold text-accent mb-3">HIPÓTESE CENTRAL (75% confiança)</h4>
            <p className="text-sm leading-relaxed">
              <strong>Daniel Vorcaro foi RECRUTADO para dentro de uma infraestrutura criminosa pré-existente</strong> 
              (Mansur/REAG + Sabbá/Máxima 2014-2016), servindo como <strong>ROSTO PÚBLICO e EXECUTOR ENTUSIASMADO</strong> de um 
              esquema arquitetado e operado por atores mais sofisticados (Mansur, Quadrado, Tanure).
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
