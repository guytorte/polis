import { ScrollReveal } from '@/components/ScrollReveal';
import { StarRating } from '@/components/StarRating';
import { Users } from 'lucide-react';

const actors = [
  {
    name: 'João Carlos Mansur',
    title: 'O ARQUITETO INVISÍVEL',
    background: 'Fundador/sócio REAG Investimentos. Opera gestão fundos desde início anos 2010. Baixíssimo perfil público (quase zero aparições mídia).',
    experience: '11+ anos operando REAG (2014-2025 confirmado, provavelmente desde antes). Gestão fundos para operações "estruturadas".',
    mo: 'Banco empresta → laranja → Laranja compra cotas fundo REAG → Fundo é cotista único banco → Valorização artificial → Ganho fictício balanço',
    profile: 'Invisível mas essencial. Continuidade criminal 11+ anos. Conhecimento profundo regulação fundos. Expertise técnica criar estruturas fraudulentas.',
    assessment: 'Mansur = verdadeiro arquiteto infraestrutura. Perfil = operador sombras, MUITO mais perigoso que Vorcaro.',
    competencies: [
      { area: 'Fraude Técnica (Fundos)', rating: 5 },
      { area: 'Estruturação Offshore', rating: 0 },
      { area: 'Captação CDBs', rating: 0 },
      { area: 'Interface Política', rating: 0 },
    ],
    yearsExp: '13+ anos',
  },
  {
    name: 'Maurício Quadrado',
    title: 'O ORQUESTRADOR',
    background: 'Ex-Bradesco (banco tradicional, grande experiência). Ex-sógio Corretora Planner. Expertise: Estruturação financeira, M&A, mercado capitais.',
    experience: '2020-2024: Sócio 30% Master. Liderou banco investimentos Master. Fundou Trustee DTVM (2022). Apresentou Tanure a Vorcaro.',
    evidence: 'CVM investiga Quadrado por manipulação Ambipar. Processo criminal (sigilo) Quadrado + Tanure + Vorcaro por Gafisa/Upcom. Trustee aparece em "diferentes investigações" Master. Setembro 2024: Quadrado vende ações e SAI (antes colapso).',
    profile: 'Expertise técnica alta. Conhece sistema por dentro (ex-Bradesco). Conector de pessoas/capital. Discreto mas efetivo.',
    assessment: 'Quadrado = engenheiro-chefe operações. Perfil = profissional mercado que cruzou a linha. Saiu antes do colapso = sabia o que estava vindo.',
    competencies: [
      { area: 'Fraude Técnica (Fundos)', rating: 4 },
      { area: 'Estruturação Offshore', rating: 3 },
      { area: 'Captação CDBs', rating: 4 },
      { area: 'Interface Política', rating: 1 },
    ],
    yearsExp: '20+ anos',
  },
  {
    name: 'Nelson Tanure',
    title: 'O CAPITALISTA OFFSHORE',
    background: 'Empresário serial aquisições. R$ 15 bilhões paraísos fiscais Europa. Domicílio fiscal mudado (esconde onde). Opera via estruturas offshore complexas.',
    mo: 'Compra empresas distressed (Light, Gafisa, Oncoclínicas, EMAE, Prio). Usa fundos offshore. Trustee Holding representa "investidor estrangeiro anônimo". Valoriza ativos questionavelmente.',
    connection: 'Entrou via Quadrado (2020). Fundos Tanure (Estocolmo, Estoa, Lormont). 2022: Financia R$ 700+ milhões Master via debêntures. PF abriu inquérito (maio 2025): Tanure = "controlador oculto Master".',
    profile: 'Capital massivo offshore. Experiência décadas distressed assets. Network internacional. Estruturas legais sofisticadas.',
    assessment: 'Tanure = financiador estratégico. Perfil = capitalista sem escrúpulos que viu oportunidade. Nega veementemente controle Master (mas evidências sugerem contrário).',
    competencies: [
      { area: 'Fraude Técnica (Fundos)', rating: 2 },
      { area: 'Estruturação Offshore', rating: 5 },
      { area: 'Captação CDBs', rating: 2 },
      { area: 'Interface Política', rating: 3 },
    ],
    yearsExp: '30+ anos',
  },
  {
    name: 'Augusto Lima',
    title: 'A INTERFACE POLÍTICA',
    background: 'Empresário baiano, começou vendendo velas/abadás. 2017: Conhece Jaques Wagner (PT-BA). 2018: Compra Ebal/Cesta do Povo (privatização PT Bahia).',
    connections: 'PT: Rui Costa (ministro Casa Civil), Jaques Wagner (líder Senado). União Brasil: ACM Neto, Bruno Reis. PP: Ciro Nogueira. Casado com Flávia Peres (ex-ministra Bolsonaro).',
    role: '2020: Entra como sócio, traz CredCesta. CredCesta vira ativo legítimo principal banco. Expande consignado vários estados. Maio 2024: SAI do Master (antes colapso).',
    profile: 'Discreto (oposto Vorcaro). Network político transversal (PT + Centrão + Bolsonaro). CredCesta = negócio legítimo (diferente fraudes Master).',
    assessment: 'Lima = porta de entrada mundo político. Perfil = empresário oportunista que se associou Master por CredCesta. Saiu quando viu "negócios questionáveis" = não era núcleo criminoso.',
    competencies: [
      { area: 'Fraude Técnica (Fundos)', rating: 0 },
      { area: 'Estruturação Offshore', rating: 0 },
      { area: 'Captação CDBs', rating: 2 },
      { area: 'Interface Política', rating: 5 },
    ],
    yearsExp: '2 anos (2018-2020)',
  },
];

export function ProfileOthers() {
  return (
    <section id="profile-others" className="py-16 lg:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:pr-80">
        <ScrollReveal>
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground mb-3">
              <Users size={16} />
              PARTE 2: ANÁLISE DE PERFIS
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              OS OUTROS ATORES
            </h2>
            <p className="text-muted-foreground">
              Quem realmente tinha as competências para operar o esquema?
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {actors.map((actor, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="bg-card border border-border rounded-lg p-6 card-hover">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{actor.name}</h3>
                    <span className="inline-block mt-1 px-3 py-1 text-sm font-semibold rounded-full bg-accent/10 text-accent">
                      {actor.title}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Experiência</div>
                    <div className="font-medium">{actor.yearsExp}</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">BACKGROUND</h4>
                    <p className="text-sm">{actor.background}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">EXPERIÊNCIA/PAPEL</h4>
                    <p className="text-sm">{actor.experience || actor.role || actor.connection}</p>
                  </div>
                </div>

                {(actor.mo || actor.evidence) && (
                  <div className="mb-4 p-4 bg-muted rounded-lg">
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                      {actor.mo ? 'M.O. (MODUS OPERANDI)' : 'EVIDÊNCIAS'}
                    </h4>
                    <p className="text-sm font-mono">{actor.mo || actor.evidence}</p>
                  </div>
                )}

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-2">PERFIL</h4>
                  <p className="text-sm">{actor.profile}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">COMPETÊNCIAS</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {actor.competencies.map((comp, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-xs">{comp.area}</span>
                        <StarRating rating={comp.rating} size={14} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-accent/5 rounded">
                  <h4 className="text-sm font-semibold text-accent mb-1">AVALIAÇÃO:</h4>
                  <p className="text-sm">{actor.assessment}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
