import { ScrollReveal } from '@/components/ScrollReveal';
import { StarRating } from '@/components/StarRating';
import { BarChart3 } from 'lucide-react';

const competencies = [
  {
    name: 'Fraude Técnica (Fundos)',
    complexity: 'ALTA',
    requirements: [
      'Conhecimento profundo regulação CVM/BC',
      'Expertise estruturação fundos investimento',
      'Capacidade criar documentação convincente',
      'Network gestoras/auditores',
    ],
    ratings: [
      { actor: 'Mansur/REAG', rating: 5, note: '11+ anos experiência, denúncia MPF 2021 prova expertise' },
      { actor: 'Quadrado', rating: 4, note: 'ex-Bradesco, ex-Planner, fundou Trustee' },
      { actor: 'Tanure', rating: 2, note: 'usa fundos offshore décadas, mas via Trustee/Quadrado' },
      { actor: 'Vorcaro', rating: 1, note: 'zero experiência fundos até 2016' },
      { actor: 'Lima', rating: 0, note: 'varejo/consignado, não fundos complexos' },
    ],
    conclusion: 'Mansur + Quadrado = núcleo técnico fraude fundos',
  },
  {
    name: 'Estruturação Offshore (R$ 15bi Tanure)',
    complexity: 'MUITO ALTA',
    requirements: [
      'Décadas experiência internacional',
      'Network advisors offshore',
      'Estruturas legais múltiplas jurisdições',
      'Capital massivo pré-existente',
    ],
    ratings: [
      { actor: 'Tanure', rating: 5, note: 'único com R$ 15bi offshore comprovado' },
      { actor: 'Quadrado', rating: 3, note: 'conhece estruturas, opera Trustee' },
      { actor: 'Vorcaro', rating: 0, note: 'tentou Dubai última hora = amador' },
      { actor: 'Mansur', rating: 0, note: 'nacional, fundos BR' },
      { actor: 'Lima', rating: 0, note: 'nacional, político' },
    ],
    conclusion: 'Tanure = único com infrastructure offshore sofisticada',
  },
  {
    name: 'Captação CDBs (R$ 40bi)',
    complexity: 'MÉDIA-ALTA',
    requirements: [
      'Taxas agressivas',
      'Marketing efetivo',
      'Relacionamento corretoras (XP, BTG, Nu)',
      'Aparência solidez',
    ],
    ratings: [
      { actor: 'Vorcaro', rating: 4, note: 'face pública, ostentação = "confiança"' },
      { actor: 'Quadrado', rating: 4, note: 'relacionamento mercado, ex-Planner' },
      { actor: 'Master', rating: 3, note: 'como instituição (aprovado BC)' },
      { actor: 'Tanure', rating: 2, note: 'offshore, evita exposição' },
      { actor: 'Mansur', rating: 0, note: 'invisível' },
    ],
    conclusion: 'Vorcaro + Quadrado = duo captação (Vorcaro rosto, Quadrado relacionamentos)',
  },
  {
    name: 'Interface Política',
    complexity: 'MÉDIA',
    requirements: [
      'Relacionamentos décadas',
      'Doações/favores',
      'Credibilidade política',
      'Network transversal',
    ],
    ratings: [
      { actor: 'Lima', rating: 5, note: 'PT desde 2017, Centrão, conexões Bolsonaro via esposa' },
      { actor: 'Vorcaro', rating: 3, note: 'conexões Centrão via Paulo Pimenta/Ciro Nogueira' },
      { actor: 'Tanure', rating: 3, note: 'empresário grande porte, network naturalmente' },
      { actor: 'Quadrado', rating: 1, note: 'financeiro, não político' },
      { actor: 'Mansur', rating: 0, note: 'invisível' },
    ],
    conclusion: 'Lima = interface PT; Vorcaro = interface Centrão',
  },
];

const summaryData = [
  { actor: 'Mansur', fraud: 5, offshore: 0, captacao: 0, politica: 0, exp: '13+ anos' },
  { actor: 'Quadrado', fraud: 4, offshore: 3, captacao: 4, politica: 1, exp: '20+ anos' },
  { actor: 'Tanure', fraud: 2, offshore: 5, captacao: 2, politica: 3, exp: '30+ anos' },
  { actor: 'Vorcaro', fraud: 1, offshore: 0, captacao: 4, politica: 3, exp: '3 anos' },
  { actor: 'Lima', fraud: 0, offshore: 0, captacao: 2, politica: 5, exp: '2 anos' },
];

export function CompetencyAnalysis() {
  return (
    <section id="competencies" className="py-16 lg:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:pr-80">
        <ScrollReveal>
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground mb-3">
              <BarChart3 size={16} />
              PARTE 4: ANÁLISE DE COMPETÊNCIAS
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              QUEM SABIA FAZER O QUÊ?
            </h2>
            <p className="text-muted-foreground">
              Análise técnica das competências necessárias para cada aspecto do esquema.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {competencies.map((comp, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-lg font-semibold">{comp.name}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded font-medium ${
                    comp.complexity === 'MUITO ALTA' ? 'bg-red-100 text-red-700' :
                    comp.complexity === 'ALTA' ? 'bg-orange-100 text-orange-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    Complexidade: {comp.complexity}
                  </span>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-2">REQUER:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {comp.requirements.map((req, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <span className="text-muted-foreground">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">QUEM TINHA COMPETÊNCIA:</h4>
                  <div className="space-y-2">
                    {comp.ratings.map((rating, i) => (
                      <div key={i} className="flex items-center justify-between p-2 bg-muted rounded">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium w-28">{rating.actor}</span>
                          <StarRating rating={rating.rating} size={14} />
                        </div>
                        <span className="text-xs text-muted-foreground">{rating.note}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-accent/5 rounded">
                  <span className="text-sm font-semibold text-accent">CONCLUSÃO:</span>
                  <span className="text-sm ml-2">{comp.conclusion}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500}>
          <div className="mt-10 bg-card border border-border rounded-lg p-6 overflow-x-auto">
            <h3 className="text-lg font-semibold mb-4">SÍNTESE DE COMPETÊNCIAS</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3">Ator</th>
                  <th className="text-center py-2 px-3">Fraude Fundos</th>
                  <th className="text-center py-2 px-3">Offshore</th>
                  <th className="text-center py-2 px-3">Captação</th>
                  <th className="text-center py-2 px-3">Política</th>
                  <th className="text-left py-2 px-3">Anos Exp</th>
                </tr>
              </thead>
              <tbody>
                {summaryData.map((row, index) => (
                  <tr key={index} className="border-b border-border/50">
                    <td className="py-2 px-3 font-medium">{row.actor}</td>
                    <td className="py-2 px-3 text-center">
                      <StarRating rating={row.fraud} size={12} />
                    </td>
                    <td className="py-2 px-3 text-center">
                      <StarRating rating={row.offshore} size={12} />
                    </td>
                    <td className="py-2 px-3 text-center">
                      <StarRating rating={row.captacao} size={12} />
                    </td>
                    <td className="py-2 px-3 text-center">
                      <StarRating rating={row.politica} size={12} />
                    </td>
                    <td className="py-2 px-3 text-muted-foreground">{row.exp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <div className="mt-8 p-6 bg-accent/10 border border-accent/20 rounded-lg">
            <h4 className="font-semibold text-accent mb-2">CONCLUSÃO COMPETÊNCIAS</h4>
            <p className="text-sm">
              Vorcaro tinha <strong>APENAS</strong> captação + interface política parcial. 
              Vorcaro <strong>NÃO tinha</strong> expertise técnica fraudes. 
              Vorcaro <strong>dependia</strong> de Mansur (fundos) + Quadrado (estruturação) + Tanure (capital).
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
