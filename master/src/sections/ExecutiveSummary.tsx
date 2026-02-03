import { ScrollReveal } from '@/components/ScrollReveal';
import { Calendar, User, Shield, CheckCircle, AlertTriangle } from 'lucide-react';

const keyFindings = [
  'O esquema de fraude REAG-banco operava desde 2014 (Banco Máxima)',
  'Vorcaro era imobiliário sem experiência bancária até 2016',
  'Sabbá ofereceu ativamente o banco a Vorcaro (não o contrário)',
  'Maurício Quadrado apresentou Vorcaro a Nelson Tanure (2020)',
  'Augusto Lima trouxe conexões PT e CredCesta (2020)',
  'Vorcaro entrou com capital fraudulento (terrenos superfaturados)',
];

export function ExecutiveSummary() {
  return (
    <section 
      id="executive-summary" 
      className="min-h-screen bg-[#1a1a1a] text-white py-16 lg:py-24"
    >
      <div className="max-w-4xl mx-auto px-6 lg:pr-80">
        <ScrollReveal>
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 text-sm text-red-400 font-medium mb-4">
              <AlertTriangle size={16} />
              INVESTIGAÇÃO EM ANDAMENTO
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              ANÁLISE PROFUNDA: VORCARO COMO "TESTA DE FERRO RECRUTADO"
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Investigação da Hipótese de Recrutamento vs Arquiteto Criminal
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex flex-wrap gap-6 mb-10 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>02 de Fevereiro de 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>Research Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={16} />
              <span>Nível de Confiança: 75% (Alto)</span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="bg-white/5 rounded-lg p-6 mb-10">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-red-500 rounded"></span>
              SUMÁRIO EXECUTIVO
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Após investigação profunda das conexões, cronologia e perfis dos atores envolvidos, 
              as evidências sugerem <strong className="text-white">FORTEMENTE</strong> que Daniel 
              Vorcaro foi <strong className="text-white">recrutado para dentro de uma infraestrutura 
              criminosa pré-existente</strong>, ao invés de ser seu arquiteto original.
            </p>
            
            <div className="flex items-center gap-4 mb-2">
              <span className="text-sm text-gray-400">Confiança na hipótese:</span>
              <div className="flex-1 max-w-xs">
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <span className="text-red-400 font-semibold">75%</span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Principais Descobertas
            </h3>
            <ul className="space-y-3">
              {keyFindings.map((finding, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{finding}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
