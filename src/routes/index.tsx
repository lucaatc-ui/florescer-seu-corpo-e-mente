import { createFileRoute } from "@tanstack/react-router";
import heroPortrait from "../assets/hero-portrait.jpg";
import expertPortrait from "../assets/expert-portrait.jpg";
import logoAsset from "../assets/logo-florecer.jpeg.asset.json";

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

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-accent/40">
      {/* Nav */}
      <header className="border-b border-foreground/10">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Florescer"
              width={40}
              height={40}
              className="size-10 object-contain"
            />
            <span className="hidden text-xs uppercase tracking-[0.2em] text-moss sm:inline">
              um curso
            </span>
          </a>
          <a
            href="#acesso"
            className="text-sm font-medium text-clay transition-colors hover:text-florish"
          >
            Quero começar
          </a>
        </div>
      </header>

      {/* Dobra 01 · Hero */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="order-2 lg:order-1 lg:col-span-7">
            <p className="fade-in fade-in-delay-1 mb-6 text-xs uppercase tracking-[0.25em] text-clay">
              Relação saudável com a comida
            </p>
            <h1 className="fade-in fade-in-delay-1 max-w-[18ch] font-display text-4xl font-medium leading-[1.02] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Cansada de pensar em comida e no seu corpo o tempo inteiro?
            </h1>
            <p className="fade-in fade-in-delay-2 mt-6 max-w-[52ch] text-base leading-relaxed text-foreground/70 text-pretty sm:text-lg">
              Chega de viver entre controle, exagero, culpa e a promessa de que
              amanhã vai ser diferente. Você faz “tudo certo” durante o dia e
              sentir que perdeu o controle depois. Talvez você não precise de
              mais uma dieta.
            </p>
            <a
              href="#acesso"
              className="fade-in fade-in-delay-3 mt-9 inline-flex items-center gap-2 rounded-[min(1vw,12px)] bg-florish px-7 py-3.5 text-sm font-medium text-cream ring-1 ring-inset ring-florish/20 transition-colors hover:bg-florish/90 hover:ring-florish/20"
            >
              Quero melhorar minha relação com a comida!
              <span aria-hidden="true" className="text-cream/80">
                →
              </span>
            </a>
            <p className="fade-in fade-in-delay-3 mt-4 text-xs text-foreground/45">
              Sem dietas punitivas. Só acolhimento, ciência e presença.
            </p>
          </div>
          <div className="order-1 lg:order-2 lg:col-span-5">
            <div className="fade-in fade-in-delay-2 relative">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-[min(1.4vw,20px)] bg-accent/25 outline-1 -outline-offset-1 outline-black/5">
                <img
                  src={heroPortrait}
                  alt="Mulher sorrindo em ambiente acolhedor com luz natural"
                  width={1080}
                  height={1400}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-4 hidden max-w-[240px] rounded-[min(1vw,12px)] bg-background px-5 py-4 ring-1 ring-foreground/10 sm:block">
                <p className="font-display text-sm font-medium leading-snug text-foreground">
                  “Comer bem é também se escutar.”
                </p>
                <p className="mt-1 text-xs text-foreground/55">Luiza Lucci</p>
              </div>
            </div>
          </div>
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
            <p className="mt-6 max-w-[56ch] text-base leading-relaxed text-foreground/70 text-pretty">
              Florescer é um conjunto de aulas feitas por três tipos de
              pessoas, cada uma cuidando de uma parte da sua relação com a
              comida — devagar, sem culpa e com começo, meio e fim.
            </p>
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
          <h2 className="max-w-[24ch] font-display text-3xl font-medium leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
            O Florescer é para meninas e mulheres que:
          </h2>
          <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <li className="flex items-start gap-4 rounded-[min(1vw,16px)] bg-muted/60 p-6 ring-1 ring-foreground/5">
              <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-moss/10 font-display text-sm text-moss">
                1
              </span>
              <p className="text-base leading-relaxed text-foreground/75 text-pretty">
                Percebem colocar na comida uma válvula de escape para dias
                difíceis, ansiedade ou depressão.
              </p>
            </li>
            <li className="flex items-start gap-4 rounded-[min(1vw,16px)] bg-muted/60 p-6 ring-1 ring-foreground/5">
              <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-moss/10 font-display text-sm text-moss">
                2
              </span>
              <p className="text-base leading-relaxed text-foreground/75 text-pretty">
                Que são muito fissuradas com alimentação e emagrecimento, não
                conseguem ir em um aniversário ou comer uma sobremesa de forma
                tranquila.
              </p>
            </li>
            <li className="flex items-start gap-4 rounded-[min(1vw,16px)] bg-muted/60 p-6 ring-1 ring-foreground/5">
              <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-moss/10 font-display text-sm text-moss">
                3
              </span>
              <p className="text-base leading-relaxed text-foreground/75 text-pretty">
                Tem todos ou alguns sintomas da compulsão alimentar.
              </p>
            </li>
            <li className="flex items-start gap-4 rounded-[min(1vw,16px)] bg-muted/60 p-6 ring-1 ring-foreground/5">
              <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-moss/10 font-display text-sm text-moss">
                4
              </span>
              <p className="text-base leading-relaxed text-foreground/75 text-pretty">
                Não consegue emagrecer, sempre faz dieta rígida, não consegue
                seguir e desiste.
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

      {/* Dobra 04 · Expert */}
      <section className="bg-moss py-20 text-background lg:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[min(1.4vw,20px)] bg-background/10 outline-1 -outline-offset-1 outline-black/5">
              <img
                src={expertPortrait}
                alt="Luiza Lucci, criadora do curso Florescer"
                width={1080}
                height={1400}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-background/60">
              Muito prazer
            </p>
            <h2 className="font-display text-4xl font-medium leading-[1.02] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Eu sou Luiza Lucci.
            </h2>
            <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-background/80 text-pretty sm:text-lg">
              (adicionar descrição)
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-background/70">
              <span className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-sage"></span> +500
                mulheres acompanhadas
              </span>
              <span className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-sage"></span> 12
                aulas em vídeo
              </span>
              <span className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-sage"></span> Acesso
                vitalício
              </span>
            </div>
            <a
              href="#acesso"
              className="mt-9 inline-flex items-center gap-2 rounded-[min(1vw,12px)] bg-cream px-7 py-3.5 text-sm font-medium text-florish ring-1 ring-inset ring-cream/20 transition-colors hover:bg-florish hover:text-cream hover:ring-florish/20"
            >
              Quero melhorar minha relação com a comida!
              <span aria-hidden="true">→</span>
            </a>
          </div>
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
