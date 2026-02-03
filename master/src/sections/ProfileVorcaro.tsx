import { ScrollReveal } from '@/components/ScrollReveal';
import { StarRating } from '@/components/StarRating';
import { User, CheckCircle, XCircle, Quote } from 'lucide-react';

const background = [
  { label: 'Nascimento', value: '1983, família imobiliária BH' },
  { label: 'Pai', value: 'Henrique Vorcaro (Multipar imóveis)' },
  { label: 'Avô', value: 'Serafim Vorcaro (pastor, imigrante italiano)' },
  { label: 'Educação', value: 'Economia IBMEC, MBA Finanças (2007)' },
];

const experience = [
  { period: '2003-2005', role: 'Manager PQS Educacional (empresa pai)' },
  { period: '2007-2010', role: 'CFO SBTEC (tecnologia)' },
  { period: '2009-2015', role: 'CFO/CEO Grupo Multipar (imobiliário família)' },
  { period: '2015-2016', role: 'Co-fundador Zion Capital' },
  { period: '2015-2017', role: 'Manager Maxima Realty (fundos imobiliários)' },
];

const brought = [
  'Capital (fraudulento, mas trouxe)',
  'Ambição e energia',
  'Conexões evangélicas BH',
  'Disposição assumir riscos',
  'ROSTO PÚBLICO do empreendimento',
];

const lacked = [
  'Conhecimento profundo sistema financeiro',
  'Rede Faria Lima estabelecida',
  'Experiência gestão fundos',
  'Expertise estruturação complexa',
  'Infraestrutura criminal pré-existente',
];

const competencies = [
  { area: 'Fraude Técnica (Fundos)', rating: 1 },
  { area: 'Estruturação Offshore', rating: 0 },
  { area: 'Captação CDBs', rating: 4 },
  { area: 'Interface Política', rating: 3 },
];

export function ProfileVorcaro() {
  return (
    <section id="profile-vorcaro" className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6 lg:pr-80">
        <ScrollReveal>
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground mb-3">
              <User size={16} />
              PARTE 2: ANÁLISE DE PERFIS
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              VORCARO: HERDEIRO IMOBILIÁRIO AMBICIOSO
            </h2>
            <p className="text-muted-foreground">
              Perfil psicológico e competências - executor entusiasmado, não arquiteto.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal delay={100}>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">BACKGROUND</h3>
              <dl className="space-y-3">
                {background.map((item, index) => (
                  <div key={index}>
                    <dt className="text-sm text-muted-foreground">{item.label}</dt>
                    <dd className="text-sm font-medium">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">EXPERIÊNCIA PRÉ-BANCÁRIA</h3>
              <div className="space-y-3">
                {experience.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <span className="text-sm text-muted-foreground whitespace-nowrap">{item.period}</span>
                    <span className="text-sm">{item.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={200}>
          <div className="mt-8 bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">PERFIL PSICOLÓGICO</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground mb-3">CARACTERÍSTICAS</h4>
                <ul className="space-y-2">
                  <li className="text-sm flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Ostentador extremo (festas R$ 15 milhões, jatos, mansões)
                  </li>
                  <li className="text-sm flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Religioso (Igreja Batista Lagoinha, conexões Pastor Valadão)
                  </li>
                  <li className="text-sm flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Autodescrição: "outsider na Faria Lima"
                  </li>
                  <li className="text-sm flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Ambicioso mas SEM expertise bancária profunda
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <Quote size={16} className="text-muted-foreground mb-2" />
                <blockquote className="text-sm italic text-muted-foreground">
                  "Vorcaro disse que se sentiu um estrangeiro na Avenida Faria Lima, centro financeiro de São Paulo."
                </blockquote>
                <cite className="text-xs text-muted-foreground mt-2 block">— Revista Piauí</cite>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <ScrollReveal delay={250}>
            <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-green-800 dark:text-green-400 flex items-center gap-2">
                <CheckCircle size={18} />
                O QUE VORCARO TROUXE
              </h3>
              <ul className="space-y-2">
                {brought.map((item, index) => (
                  <li key={index} className="text-sm text-green-700 dark:text-green-300 flex items-start gap-2">
                    <span>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-red-800 dark:text-red-400 flex items-center gap-2">
                <XCircle size={18} />
                O QUE VORCARO NÃO TINHA
              </h3>
              <ul className="space-y-2">
                {lacked.map((item, index) => (
                  <li key={index} className="text-sm text-red-700 dark:text-red-300 flex items-start gap-2">
                    <span>✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={350}>
          <div className="mt-8 bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">ANÁLISE DE COMPETÊNCIAS</h3>
            <div className="space-y-4">
              {competencies.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm">{item.area}</span>
                  <StarRating rating={item.rating} />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="mt-8 p-6 bg-accent/10 border border-accent/20 rounded-lg">
            <h4 className="font-semibold text-accent mb-2">AVALIAÇÃO</h4>
            <p className="text-sm">
              <strong>Vorcaro = executor entusiasmado, NÃO arquiteto</strong><br />
              Perfil = <strong>"useful idiot" ambicioso</strong> que topou jogar o jogo
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
