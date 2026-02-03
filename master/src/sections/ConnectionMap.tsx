import { ScrollReveal } from '@/components/ScrollReveal';
import { Network, ArrowRight, CheckCircle } from 'lucide-react';

const connections = [
  { from: 'SABBÁ (Máxima 2014-2017)', to: 'VORCARO (2016)', label: '[oferece banco]', note: 'Já negociavam imóveis' },
  { from: 'VORCARO', to: 'MASTER (assume 2019)', label: '', note: '' },
  { from: 'VORCARO', to: 'IRMÃOS CONTE', label: '(minoritários 2019)', note: '' },
  { from: 'QUADRADO (set 2020, 30%)', to: 'TANURE (2020)', label: '[apresenta]', note: 'Cliente Trustee' },
  { from: 'TANURE', to: 'MASTER', label: 'R$ 700mi+ (2022)', note: 'Via debêntures' },
  { from: 'LIMA (maio 2020)', to: 'CREDCESTA', label: '[traz]', note: 'Ativo principal' },
  { from: 'MANSUR/REAG', to: 'MASTER (2019-2025)', label: '[fornece infraestrutura]', note: 'Operando desde 2014' },
];

const chronologicalEvidence = [
  'Mansur/REAG existiam ANTES de Vorcaro (confirmado 2014)',
  'Sabbá OFERECEU banco a Vorcaro (não foi Vorcaro quem buscou)',
  'Quadrado APRESENTOU Tanure a Vorcaro (confirmado Brazil Journal)',
  'Lima PROCURAVA funding quando Vorcaro "fechou em um dia"',
  'Tanure entrou VIA Quadrado, não via Vorcaro',
];

const conclusions = [
  'Vorcaro NÃO recrutou os atores principais',
  'Vorcaro FOI INSERIDO em rede pré-existente',
  'Sabbá → Vorcaro = passagem de bastão infraestrutura criminosa',
  'Quadrado = verdadeiro conector trazendo Tanure',
  'Lima = adição oportunista (network político)',
];

export function ConnectionMap() {
  return (
    <section id="connections" className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6 lg:pr-80">
        <ScrollReveal>
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground mb-3">
              <Network size={16} />
              PARTE 3: ANÁLISE RELACIONAL
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              MAPA DE CONEXÕES
            </h2>
            <p className="text-muted-foreground">
              Quem apresentou quem? A cronologia das relações revela a verdadeira estrutura.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="bg-card border border-border rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold mb-6">MAPA DE CONEXÕES</h3>
            <div className="space-y-4">
              {connections.map((conn, index) => (
                <div key={index} className="flex flex-wrap items-center gap-2 p-3 bg-muted rounded-lg">
                  <span className="font-mono text-sm font-medium">{conn.from}</span>
                  <ArrowRight size={16} className="text-muted-foreground" />
                  <span className="font-mono text-sm">{conn.to}</span>
                  {conn.label && (
                    <span className="text-xs px-2 py-0.5 bg-accent/10 text-accent rounded">
                      {conn.label}
                    </span>
                  )}
                  {conn.note && (
                    <span className="text-xs text-muted-foreground ml-auto">
                      ({conn.note})
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="bg-card border border-border rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4">EVIDÊNCIAS CRONOLÓGICAS</h3>
            <ul className="space-y-3">
              {chronologicalEvidence.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-accent font-mono text-sm">{index + 1}.</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="p-6 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
            <h4 className="font-semibold text-green-800 dark:text-green-400 mb-4 flex items-center gap-2">
              <CheckCircle size={18} />
              CONCLUSÃO RELACIONAL
            </h4>
            <ul className="space-y-2">
              {conclusions.map((item, index) => (
                <li key={index} className="text-sm text-green-700 dark:text-green-300 flex items-start gap-2">
                  <span>✓</span>
                  <strong>{item.split(' ')[0]} {item.split(' ')[1]} {item.split(' ')[2]}</strong>
                  {' '}{item.split(' ').slice(3).join(' ')}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
