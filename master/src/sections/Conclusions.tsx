import { ScrollReveal } from '@/components/ScrollReveal';
import { Flag, CheckCircle, AlertTriangle, Target, FileSearch } from 'lucide-react';

const implications = [
  {
    title: 'RESPONSABILIDADE CRIMINAL',
    content: 'Vorcaro AINDA É CULPADO (executou, assinou, lucrou). MAS outros são igualmente ou mais culpáveis. Mansur/Quadrado/Tanure não podem escapar. Foco investigação deve ampliar não estreitar.',
  },
  {
    title: 'BC FALHOU MUITO PIOR',
    content: 'Se Vorcaro era amador recrutado, BC deveria ter detectado. Aprovaram compra fraudulenta = facilitaram. 2021: Já sabiam esquema REAG-Máxima (MPF denúncia). 2018-2019: Aprovaram Vorcaro MESMO ASSIM = Permitiram recidiva conhecida.',
  },
  {
    title: 'SISTEMA MAIS SOFISTICADO',
    content: 'Não é "um maluco" (Vorcaro). É rede estabelecida décadas. Mansur 13+ anos, Tanure offshore décadas. MAIS PERIGOSO que indivíduo.',
  },
  {
    title: 'INVESTIGAÇÃO PRECISA FOCAR',
    content: 'Mansur/REAG: Infraestrutura técnica (2014-2025). Tanure offshore: R$ 15bi, controlador oculto? Quadrado: Orquestrador, saiu antes. BC 2018-2019: Por que aprovaram fraude óbvia?',
  },
  {
    title: 'NARRATIVA MÍDIA INCOMPLETA',
    content: 'Mídia foca Vorcaro (ostentação, prisão dramática). Ignora Mansur (invisível mas essencial). Subestima Quadrado (saiu estrategicamente). Dá plataforma Tanure negar (sem escrutínio).',
  },
];

const nextSteps = [
  {
    priority: 'PRIORIDADE MÁXIMA',
    items: [
      { title: 'MANSUR/REAG Histórico Completo', details: 'Todos fundos REAG 2012-2025. Todos bancos parceiros (Máxima, Master, outros?). MPF denúncia 2021 texto completo. REAG AUM real vs declarado.' },
      { title: 'Sabbá Interrogatório (5/fev/2026)', details: 'QUEM pediu/sugeriu Vorcaro como sucessor? Mansur envolvido na escolha? Por que Vorcaro especificamente?' },
      { title: 'Quadrado Papel Exato', details: 'Emails/mensagens Quadrado-Tanure. Quando exatamente apresentou Tanure? Por que saiu setembro 2024? Trustee operações completas.' },
      { title: 'Tanure Offshore Breakdown', details: 'Quais jurisdições específicas R$ 15bi? Entidades específicas (Panama, Cayman, etc)? Trail dinheiro Tanure → Trustee → Master. Fundos Estocolmo/Estoa/Lormont estrutura completa.' },
    ],
  },
];

const criticalQuestions = [
  'Quem tomava decisões estratégicas Master 2019-2025? (Vorcaro sozinho? Consenso? Mansur/Tanure ditavam de fora?)',
  'Como Mansur/Vorcaro se comunicavam? (Havia comunicação direta? Via intermediário? Mansur dava instruções ou só fornecia infraestrutura?)',
  'Quando Tanure se tornou "controlador oculto"? (Desde 2020? 2022? Ou nunca foi?)',
  'BC 2018-2019: Incompetência ou corrupção? (Quem aprovou compra Vorcaro? Receberam alertas? Houve pressão política?)',
];

const strongestEvidence = [
  { stars: 5, text: 'MPF denúncia 2021: REAG operava com Máxima 2014-2016 (ANTES Vorcaro)' },
  { stars: 5, text: 'Compra fraudulenta: BC aprovou capital circular óbvio (Vorcaro não tinha dinheiro real)' },
  { stars: 4, text: 'Quadrado apresentou Tanure: Brazil Journal confirma (Vorcaro não mobilizou capital)' },
  { stars: 4, text: 'Saídas estratégicas: Quadrado/Lima saíram 2024, Vorcaro ficou (hierarquia)' },
  { stars: 3, text: 'Dubai improvisação: Vs Tanure R$ 15bi offshore (níveis diferentes sofisticação)' },
];

const criticalGaps = [
  'Quem recrutou Vorcaro especificamente? (Sabbá ofereceu, mas quem estava ATRÁS de Sabbá? Mansur participou decisão sucessor?)',
  'Quando Vorcaro soube da fraude? (Desde início ou descobriu depois e aceitou? Há momento "turning point"?)',
  'Por que Vorcaro não saiu em 2024? (Não podia (ameaças)? Não quis (ganância)? Não sabia gravidade?)',
  'Qual papel exato cada ator? (Percentuais responsabilidade. Quem decidia o quê.)',
];

export function Conclusions() {
  return (
    <section id="conclusions" className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6 lg:pr-80">
        <ScrollReveal>
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground mb-3">
              <Flag size={16} />
              PARTE 8-10: CONCLUSÕES
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              CONCLUSÕES FINAIS
            </h2>
            <p className="text-muted-foreground">
              Implicações da hipótese e próximos passos investigativos.
            </p>
          </div>
        </ScrollReveal>

        {/* Final Conclusion */}
        <ScrollReveal delay={100}>
          <div className="mb-10 p-6 bg-[#1a1a1a] text-white rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-red-400">CONCLUSÃO FINAL</h3>
            <p className="text-base leading-relaxed mb-4">
              <strong>Daniel Vorcaro foi, com alta probabilidade (75%), RECRUTADO</strong> para servir como 
              rosto público de uma infraestrutura criminosa pré-existente operada por 
              <strong> João Carlos Mansur</strong> (REAG, 13+ anos experiência), orquestrada por 
              <strong> Maurício Quadrado</strong> (expertise financeira), e financiada por 
              <strong> Nelson Tanure</strong> (R$ 15bi offshore).
            </p>
            <p className="text-sm text-gray-300">
              <strong>Vorcaro NÃO foi o arquiteto original, mas foi um EXECUTOR ENTUSIASMADO E GANANCIOSO</strong> que:
              aceitou comprar banco com capital fraudulento, expandiu agressivamente operações criminosas, 
              serviu como rosto ostentador para captação, assumiu responsabilidade legal, e ficou até o fim 
              (quando outros fugiram).
            </p>
          </div>
        </ScrollReveal>

        {/* Implications */}
        <ScrollReveal delay={150}>
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <AlertTriangle size={18} />
              SE VORCARO FOI RECRUTADO - IMPLICAÇÕES
            </h3>
            <div className="space-y-4">
              {implications.map((item, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-5">
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Strongest Evidence */}
        <ScrollReveal delay={200}>
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <CheckCircle size={18} />
              EVIDÊNCIAS MAIS FORTES
            </h3>
            <div className="bg-card border border-border rounded-lg p-5">
              <div className="space-y-3">
                {strongestEvidence.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex items-center gap-0.5 flex-shrink-0 mt-0.5">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span key={i} className={i < item.stars ? 'text-accent' : 'text-border'}>★</span>
                      ))}
                    </div>
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Critical Gaps */}
        <ScrollReveal delay={250}>
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FileSearch size={18} />
              GAPS CRÍTICOS
            </h3>
            <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg p-5">
              <ul className="space-y-3">
                {criticalGaps.map((item, index) => (
                  <li key={index} className="text-sm text-orange-700 dark:text-orange-300 flex items-start gap-2">
                    <span className="text-orange-500">?</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Next Steps */}
        <ScrollReveal delay={300}>
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Target size={18} />
              PRÓXIMOS PASSOS INVESTIGATIVOS
            </h3>
            {nextSteps.map((step, index) => (
              <div key={index}>
                <span className="inline-block px-3 py-1 text-xs font-bold rounded bg-red-100 text-red-700 mb-4">
                  {step.priority}
                </span>
                <div className="space-y-4">
                  {step.items.map((item, i) => (
                    <div key={i} className="bg-card border border-border rounded-lg p-5">
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Critical Questions */}
        <ScrollReveal delay={350}>
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-4">PERGUNTAS CRÍTICAS NÃO RESPONDIDAS</h3>
            <div className="bg-card border border-border rounded-lg p-5">
              <ul className="space-y-3">
                {criticalQuestions.map((item, index) => (
                  <li key={index} className="text-sm flex items-start gap-2">
                    <span className="text-accent font-bold">{index + 1}.</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Final Statement */}
        <ScrollReveal delay={400}>
          <div className="p-6 bg-accent/10 border border-accent/20 rounded-lg">
            <p className="text-sm leading-relaxed">
              <strong className="text-accent">O caso Master NÃO é "fraude de um banqueiro maluco".</strong><br />
              <strong>É CAPTURA SISTÊMICA DE LONGA DATA com múltiplos atores sofisticados.</strong>
            </p>
          </div>
        </ScrollReveal>

        {/* Footer */}
        <ScrollReveal delay={450}>
          <div className="mt-12 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Autor:</strong> Research Team
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Data:</strong> 02 de Fevereiro de 2026
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              <strong>Confiança Geral:</strong> 75%
            </p>
            <p className="text-xs text-muted-foreground">
              <strong>Próxima Atualização:</strong> Após interrogatório Sabbá (5/fev/2026)
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
