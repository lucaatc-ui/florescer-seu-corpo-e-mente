import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import heroPortrait from "../assets/hero-portrait.jpg";
import heroLogo from "../assets/logo-florescer-2.jpeg.asset.json";
import logoAsset from "../assets/logo-florecer.jpeg.asset.json";

const professionals = [
  {
    name: "Luiza Lucci",
    role: "Criadora do Florescer",
    description: "(adicionar descrição)",
    image: "hero" as const,
  },
  {
    name: "Bruna Cutait",
    role: "(adicionar especialidade)",
    description: "(adicionar descrição)",
    image: null,
  },
  {
    name: "Rafa Mansur",
    role: "(adicionar especialidade)",
    description: "(adicionar descrição)",
    image: null,
  },
  {
    name: "Amanda Taysa",
    role: "(adicionar especialidade)",
    description: "(adicionar descrição)",
    image: null,
  },
  {
    name: "Marcello Cotrim",
    role: "(adicionar especialidade)",
    description: "(adicionar descrição)",
    image: null,
  },
  {
    name: "Bruna Crivelenti",
    role: "(adicionar especialidade)",
    description: "(adicionar descrição)",
    image: null,
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Florescer — Relação saudável com a comida" },
      {
        name: "description",
        content:
          "Ganhe uma nova visão sobre a comida e tenha uma relação com o seu corpo mais saudável e emagrecimento eficiente, com acesso a psicólogas e nutricionistas especialistas.",
      },
      {
        property: "og:title",
        content: "Florescer — Relação saudável com a comida",
      },
      {
        property: "og:description",
        content:
          "Ganhe uma nova visão sobre a comida e tenha uma relação com o seu corpo mais saudável e emagrecimento eficiente.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function ProfessionalsCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Passa os profissionais automaticamente a cada 5 segundos.
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % professionals.length);
    }, 5000);
    return () => clearInterval(id);
  }, [paused, index]);

  const person = professionals[index]!;

  return (
    <div
      className="relative mt-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Quadro */}
      <div className="rounded-[min(1.5vw,24px)] border border-background/15 bg-background/5 p-6 sm:p-8 lg:p-10">
        <div className="grid items-center gap-8 md:grid-cols-[minmax(0,340px)_1fr] lg:gap-12">
          {/* Foto */}
          <div
            key={index}
            className="fade-in relative aspect-[4/5] overflow-hidden rounded-[min(1vw,16px)] bg-background/10"
          >
            {person.image === "hero" ? (
              <img
                src={heroPortrait}
                alt={person.name}
                className="size-full object-cover"
              />
            ) : (
              <div className="flex size-full flex-col items-center justify-center gap-4 border border-dashed border-background/25 bg-sage/15">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  className="size-14 text-background/50"
                >
                  <circle cx="32" cy="32" r="6" />
                  <path d="M32 26c0-8 6-14 14-14 0 8-6 14-14 14zM32 26c0-8-6-14-14-14 0 8 6 14 14 14zM32 38c0 8 6 14 14 14 0-8-6-14-14-14zM32 38c0 8-6 14-14 14 0-8 6-14 14-14z" />
                </svg>
                <p className="px-6 text-center text-xs uppercase tracking-[0.2em] text-background/50">
                  Espaço para foto
                </p>
              </div>
            )}
          </div>

          {/* Texto na lateral */}
          <div key={`text-${index}`} className="fade-in">
            <p className="text-xs uppercase tracking-[0.25em] text-background/55">
              {person.role}
            </p>
            <h3 className="mt-3 font-display text-3xl font-medium tracking-tight text-balance sm:text-4xl">
              {person.name}
            </h3>
            <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-background/80 text-pretty sm:text-lg">
              {person.description}
            </p>

            {/* Indicadores */}
            <div className="mt-8 flex items-center gap-2.5">
              {professionals.map((p, i) => (
                <button
                  key={p.name + i}
                  type="button"
                  aria-label={`Ver ${p.name}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index
                      ? "w-8 bg-cream"
                      : "w-1.5 bg-cream/35 hover:bg-cream/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Seta na lateral direita */}
      <button
        type="button"
        aria-label="Próxima profissional"
        onClick={() => setIndex((i) => (i + 1) % professionals.length)}
        className="absolute top-1/2 -right-3 z-10 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-cream text-lg text-florish shadow-lg ring-1 ring-inset ring-cream/20 transition-all hover:scale-105 hover:bg-florish hover:text-cream sm:-right-5"
      >
        <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-accent/40">
      {/* Dobra 01 · Hero */}
      <section className="bg-logo py-16 text-cream lg:py-24">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center lg:px-8">
          <div className="fade-in fade-in-delay-1 w-full max-w-[220px]">
            <img
              src={heroLogo.url}
              alt="Florescer"
              width={1024}
              height={1024}
              className="h-auto w-full rounded-[min(1.5vw,24px)] object-cover"
            />
          </div>
          <h1 className="fade-in fade-in-delay-2 mt-6 max-w-[20ch] font-display text-4xl font-medium leading-[1.02] tracking-tight text-balance text-cream sm:text-5xl lg:text-6xl">
            Cansada de pensar em comida e no seu corpo o tempo inteiro?
          </h1>
          <p className="fade-in fade-in-delay-3 mt-6 max-w-[52ch] text-base leading-relaxed text-cream/80 text-pretty sm:text-lg">
            Chega de viver entre controle, exagero, culpa e a promessa de que
            amanhã vai ser diferente. Você faz “tudo certo” durante o dia e
            sentir que perdeu o controle depois. Talvez você não precise de
            mais uma dieta.
          </p>
          <a
            href="#acesso"
            className="fade-in fade-in-delay-3 mt-9 inline-flex items-center gap-2 rounded-[min(1vw,12px)] bg-cream px-7 py-3.5 text-sm font-medium text-florish ring-1 ring-inset ring-cream/30 transition-colors hover:bg-cream/90"
          >
            Quero melhorar minha relação com a comida!
            <span aria-hidden="true" className="text-florish/80">
              →
            </span>
          </a>
          <p className="fade-in fade-in-delay-3 mt-4 text-sm font-medium text-cream sm:text-base">
            Sem dietas punitivas. Só acolhimento, ciência e presença.
          </p>
        </div>
      </section>

      {/* Dobra 02 · Minha história */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="max-w-[22ch] font-display text-4xl font-medium leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Talvez melhorar sua relação com corpo e comida não seja aprender a
            controlá-los ainda mais.
          </h2>
          <p className="mt-8 text-base italic leading-relaxed text-foreground/70 text-pretty sm:text-lg">
            Eu demorei anos para perceber isso.
          </p>
          <p className="mt-8 font-display text-2xl font-medium leading-snug text-foreground sm:text-3xl">
            Oi, eu sou a Luiza Lucci.
          </p>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-foreground/75 text-pretty sm:text-lg">
            <p>
              Durante muito tempo, vivi entre compulsão alimentar, restrição,
              comparação, obsessão corporal e uma busca constante por
              emagrecimento.
            </p>
            <p>
              E nessa busca, eu também fui para as canetinhas
              emagrecedoras.
            </p>
            <p>
              Por um período, achei que finalmente tinha encontrado a solução.
            </p>
            <p>
              Porque quando o seu maior medo é engordar, ter algo que diminui
              sua fome pode parecer liberdade.
            </p>
            <p>
              Mas, para mim, não foi. Em algum momento eu percebi que não
              queria depender de um medicamento para conseguir confiar na minha
              relação com comida e corpo.
            </p>
            <p>
              Eu queria conseguir viver. Viajar. Comer. Treinar. Sair. Mudar meu
              corpo ao longo da vida. Sem sentir que precisava de uma canetinha
              para manter tudo sob controle.
            </p>
            <p>
              E eu saí das canetinhas. Não porque medicamentos emagrecedores
              sejam certos ou errados — essa é uma decisão individual que deve
              ser feita com acompanhamento médico.
            </p>
            <p>
              Mas porque, na minha história, eu percebi que mudar meu corpo não
              estava necessariamente mudando a forma como eu me sentia dentro
              dele.
            </p>
            <p className="font-display text-xl font-bold leading-snug text-moss sm:text-2xl">
              E comecei a entender uma coisa muito maior: Minha relação com a
              comida nunca foi só sobre comida.
            </p>
            <p>
              Ela também falava sobre autoestima, emoções, ansiedade,
              comparação, presença e a forma como eu me enxergava. Foi quando
              comecei a olhar para essas outras camadas que minha perspectiva
              começou a mudar.
            </p>
            <p>
              E foi daí que nasceu o Florescer. Não porque hoje eu tenha uma
              relação perfeita com meu corpo e com a comida. Mas porque encontrei
              profissionais, conversas, estudos e práticas que eu gostaria muito
              de ter conhecido antes.
            </p>
            <p>
              E decidi reunir tudo isso em um só lugar.
            </p>
          </div>
        </div>
      </section>

      {/* Dobra 03 · O que é */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
              O que é o <span className="italic text-clay">Florescer</span>?
            </h2>
            <div className="mt-6 max-w-[56ch] space-y-4 text-base leading-relaxed text-foreground/70 text-pretty">
              <p>
                Uma jornada construída a partir de diferentes perspectivas
                sobre corpo, comida e mente.
              </p>
              <p>
                Porque não dá para falar de alimentação sem falar de emoções.
              </p>
              <p>
                De compulsão sem falar de restrição. De corpo sem falar de
                autoestima.
              </p>
              <p>E de saúde sem falar de mente.</p>
              <p>
                O Florescer não quer te dizer exatamente como você deve comer
                ou como seu corpo deve ser.
              </p>
              <p>
                A ideia é te ajudar a entender melhor seus padrões, questionar
                algumas crenças e conhecer ferramentas que podem contribuir
                para uma relação mais consciente e leve consigo mesma.
              </p>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-[min(1vw,16px)] bg-background p-8 ring-1 ring-foreground/5 border-t-4 border-moss/30">
              <span className="font-display text-5xl leading-none text-moss/60">
                01
              </span>
              <h3 className="mt-4 font-display text-xl font-medium text-foreground">
                Uma psicóloga
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/65 text-pretty">
                Para trazer a parte mais emocional que temos com a comida,
                explicando processos de ansiedade/depressão que podemos
                depositar em nossa alimentação e a quais as ferramentas para
                diminuir essas válvulas de escape que colocamos em doces,
                altas quantidades de comida e etc…
              </p>
            </div>
            <div className="rounded-[min(1vw,16px)] bg-background p-8 ring-1 ring-foreground/5 border-t-4 border-moss/30">
              <span className="font-display text-5xl leading-none text-moss/60">
                02
              </span>
              <h3 className="mt-4 font-display text-xl font-medium text-foreground">
                Uma nutricionista
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/65 text-pretty">
                Trazendo do ponto de vista nutricional os alimentos que nos dão
                maior saciedade, trazem as vitaminas e minerais que
                necessitamos para o funcionamento do nosso corpo e mente,
                diminuindo a possibilidade de crises que usam a comida como
                               válvula de escape.
              </p>
            </div>
            <div className="rounded-[min(1vw,16px)] bg-background p-8 ring-1 ring-foreground/5 border-t-4 border-moss/30">
              <span className="font-display text-5xl leading-none text-moss/60">
                03
              </span>
              <h3 className="mt-4 font-display text-xl font-medium text-foreground">
                Eu mesma, Luiza Lucci
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/65 text-pretty">
                Que passei por todo processo de compulsão alimentar, contando
                minhas história e explicando conceitos, dando dicas que me
                ajudam a não voltar a ter recaídas fortes como antes eu tinha.
              </p>
            </div>
          </div>
          <a
            href="#acesso"
            className="mt-10 inline-flex items-center gap-2 rounded-[min(1vw,12px)] bg-florish px-7 py-3.5 text-sm font-medium text-cream ring-1 ring-inset ring-florish/20 transition-colors hover:bg-florish/90 hover:ring-florish/20"
          >
            Quero melhorar minha relação com a comida!
            <span aria-hidden="true" className="text-cream/80">
              →
            </span>
          </a>
        </div>
      </section>

      {/* Dobra 03 · Para quem é */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="max-w-[24ch] font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
            O que o Florescer NÃO promete
          </h2>
          <div className="mt-10 max-w-3xl space-y-4">
            <p className="text-lg leading-relaxed text-foreground/80 text-pretty">
              Eu não quero te vender a ideia de que depois dessas aulas você
              nunca mais vai comer emocionalmente.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80 text-pretty">
              Que nunca mais vai se sentir insegura com seu corpo.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80 text-pretty">
              Que vai sair daqui com uma alimentação “perfeita”.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80 text-pretty">
              Ou que você deveria começar, parar ou deixar de usar qualquer
              medicamento.
            </p>
          </div>
          <p className="mt-10 font-display text-2xl font-bold leading-snug text-moss sm:text-3xl">
            Porque Florescer não é sobre perfeição.
          </p>
          <ul className="mt-8 max-w-3xl space-y-4">
            <li className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="mt-2.5 size-2 shrink-0 rounded-full bg-moss"
              />
              <p className="text-lg leading-relaxed text-foreground/80 text-pretty">
                É sobre começar a perceber seus padrões.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="mt-2.5 size-2 shrink-0 rounded-full bg-moss"
              />
              <p className="text-lg leading-relaxed text-foreground/80 text-pretty">
                Entender melhor seus gatilhos.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="mt-2.5 size-2 shrink-0 rounded-full bg-moss"
              />
              <p className="text-lg leading-relaxed text-foreground/80 text-pretty">
                Questionar a necessidade de controlar tudo.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="mt-2.5 size-2 shrink-0 rounded-full bg-moss"
              />
              <p className="text-lg leading-relaxed text-foreground/80 text-pretty">
                Separar um pouco mais o seu valor da sua aparência.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="mt-2.5 size-2 shrink-0 rounded-full bg-moss"
              />
              <p className="text-lg leading-relaxed text-foreground/80 text-pretty">
                E conhecer outras formas de se relacionar com comida, corpo e
                consigo mesma.
              </p>
            </li>
          </ul>
          <a
            href="#acesso"
            className="mt-10 inline-flex items-center gap-2 rounded-[min(1vw,12px)] bg-florish px-7 py-3.5 text-sm font-medium text-cream ring-1 ring-inset ring-florish/20 transition-colors hover:bg-florish/90 hover:ring-florish/20"
          >
            Quero me relacionar melhor com a comida!
            <span aria-hidden="true" className="text-cream/80">
              →
            </span>
          </a>
        </div>
      </section>

      {/* Dobra · O que você encontra dentro do Florescer */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="max-w-[24ch] font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
            O que você encontra dentro do Florescer
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-[min(1vw,16px)] bg-background p-8 ring-1 ring-foreground/5 border-t-4 border-moss/30">
              <span className="font-display text-5xl leading-none text-moss/60">
                01
              </span>
              <h3 className="mt-4 font-display text-xl font-medium text-foreground">
                Minha jornada
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/65 text-pretty">
                Compulsão, restrição, obsessão corporal, minha experiência com
                medicamentos emagrecedores e por que decidi sair das canetinhas,
                além do que começou a mudar a minha relação com tudo isso.
              </p>
            </div>
            <div className="rounded-[min(1vw,16px)] bg-background p-8 ring-1 ring-foreground/5 border-t-4 border-moss/30">
              <span className="font-display text-5xl leading-none text-moss/60">
                02
              </span>
              <h3 className="mt-4 font-display text-xl font-medium text-foreground">
                Nutrição &amp; presença
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/65 text-pretty">
                Fome e saciedade, mindful eating, restrição, hormônios,
                alimentação consciente, medicamentos emagrecedores e presença.
              </p>
            </div>
            <div className="rounded-[min(1vw,16px)] bg-background p-8 ring-1 ring-foreground/5 border-t-4 border-moss/30">
              <span className="font-display text-5xl leading-none text-moss/60">
                03
              </span>
              <h3 className="mt-4 font-display text-xl font-medium text-foreground">
                Compulsão &amp; emoções
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/65 text-pretty">
                Gatilhos, ansiedade, comparação, restrição, compulsão e
                ferramentas práticas.
              </p>
            </div>
            <div className="rounded-[min(1vw,16px)] bg-background p-8 ring-1 ring-foreground/5 border-t-4 border-moss/30">
              <span className="font-display text-5xl leading-none text-moss/60">
                04
              </span>
              <h3 className="mt-4 font-display text-xl font-medium text-foreground">
                Autoestima &amp; corpo
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/65 text-pretty">
                Autoimagem, excesso de controle, flexibilidade alimentar e
                autoestima para além da aparência.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-[min(1vw,16px)] bg-background p-8 ring-1 ring-foreground/5">
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="mt-2.5 size-2 shrink-0 rounded-full bg-moss"
                />
                <p className="text-base leading-relaxed text-foreground/75 text-pretty sm:text-lg">
                  <span className="font-medium text-foreground">
                    + práticas
                  </span>{" "}
                  de respiração, yoga e meditação
                </p>
              </li>
              <li className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="mt-2.5 size-2 shrink-0 rounded-full bg-moss"
                />
                <p className="text-base leading-relaxed text-foreground/75 text-pretty sm:text-lg">
                  <span className="font-medium text-foreground">
                    + PDF de receitas
                  </span>
                </p>
              </li>
              <li className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="mt-2.5 size-2 shrink-0 rounded-full bg-moss"
                />
                <p className="text-base leading-relaxed text-foreground/75 text-pretty sm:text-lg">
                  <span className="font-medium text-foreground">
                    + apostila visual
                  </span>{" "}
                  com a síntese das aulas
                </p>
              </li>
            </ul>
            <p className="mt-6 border-t border-foreground/10 pt-5 text-sm leading-relaxed text-foreground/55 italic">
              Os materiais de apoio também fazem parte da estrutura planejada do
              produto.
            </p>
          </div>

          <a
            href="#acesso"
            className="mt-10 inline-flex items-center gap-2 rounded-[min(1vw,12px)] bg-florish px-7 py-3.5 text-sm font-medium text-cream ring-1 ring-inset ring-florish/20 transition-colors hover:bg-florish/90 hover:ring-florish/20"
          >
            Quero melhorar minha relação com a comida!
            <span aria-hidden="true" className="text-cream/80">
              →
            </span>
          </a>
        </div>
      </section>

      {/* Dobra 04 · Equipe */}
      <section className="bg-moss py-20 text-background lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <p className="mb-5 text-xs uppercase tracking-[0.25em] text-background/60">
            Conheça o time
          </p>
          <h2 className="max-w-3xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Conheça mais sobre Luiza e as profissionais que vão te acompanhar
            no Florescer
          </h2>
          <ProfessionalsCarousel />
          <a
            href="#acesso"
            className="mt-10 inline-flex items-center gap-2 rounded-[min(1vw,12px)] bg-cream px-7 py-3.5 text-sm font-medium text-florish ring-1 ring-inset ring-cream/20 transition-colors hover:bg-florish hover:text-cream hover:ring-florish/20"
          >
            Quero melhorar minha relação com a comida!
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      {/* CTA strip */}
      <section id="acesso" className="bg-moss py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-balance text-background sm:text-4xl lg:text-5xl">
            Pronta para florescer?
          </h2>
          <p className="mx-auto mt-5 max-w-[44ch] text-base leading-relaxed text-background/75 text-pretty">
            Um começo suave, sem pressa e sem julgamento. A primeira aula já
            está te esperando.
          </p>
          <a
            href="#acesso"
            className="mt-8 inline-flex items-center gap-2 rounded-[min(1vw,12px)] bg-cream px-8 py-4 text-sm font-medium text-florish ring-1 ring-inset ring-cream/20 transition-colors hover:bg-florish hover:text-cream hover:ring-florish/20"
          >
            Quero melhorar minha relação com a comida!
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      {/* Alerta */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="flex items-start gap-5 rounded-[min(1vw,16px)] border border-clay/30 bg-clay/10 p-6 sm:p-8">
            <span
              aria-hidden="true"
              className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-clay/20 text-clay"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5"
              >
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                <path d="M12 9v4" />
                <path d="M12 17h.01" />
              </svg>
            </span>
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-clay">
                Atenção
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70 text-pretty">
                O Florescer é um conteúdo educativo e não substitui
                acompanhamento psicológico, nutricional ou médico. Não se
                propõe a diagnosticar ou tratar transtornos alimentares.
                Decisões sobre início, continuidade, ajuste ou interrupção de
                medicamentos devem ser feitas individualmente com um
                profissional de saúde habilitado.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-ink py-8 text-background">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row lg:px-8">
          <div className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Florescer"
              width={32}
              height={32}
              className="size-8 object-contain"
            />
            <span className="font-display text-lg font-medium tracking-tight">
              Florescer
            </span>
          </div>
          <p className="text-xs text-background/55">
            Um espaço de acolhimento para a sua relação com a comida. © 2026
          </p>
        </div>
      </footer>
    </main>
  );
}
