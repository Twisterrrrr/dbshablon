import { createFileRoute } from "@tanstack/react-router";
import heroClub from "@/assets/hero-club.jpg";
import dinner from "@/assets/dinner.jpg";
import hall from "@/assets/hall.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Джаз-клуб Игоря Бутмана в Петербурге — афиша и билеты" },
      {
        name: "description",
        content:
          "Двухъярусный джаз-клуб на канале Грибоедова: живые концерты каждый вечер, средиземноморская кухня и авторский бар. Афиша и билеты онлайн.",
      },
      { property: "og:title", content: "Джаз-клуб Игоря Бутмана — афиша и билеты" },
      {
        property: "og:description",
        content:
          "Живой джаз каждый вечер в сводчатых залах XVIII века. Ужин, бар и лучшие места у сцены.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VenuePage,
});

const events = [
  {
    date: "Завтра",
    day: "",
    title: "Олег и Наталья Бутман Бэнд",
    price: "от 2 500 ₽",
    tag: "Мейнстрим",
  },
  { date: "14", day: "сент", title: "Валерий Сюткин и ансамбль S.O.S", price: "от 2 500 ₽", tag: "Swing" },
  { date: "15", day: "сент", title: "Валерий Сюткин и «Лайт Джаз»", price: "от 2 500 ₽", tag: "Swing" },
  { date: "16", day: "сент", title: "Виталий Погосян Duduk-Band", price: "от 2 000 ₽", tag: "Этно-джаз" },
  { date: "17", day: "сент", title: "Elena et les garçons", price: "от 2 500 ₽", tag: "Vocal" },
  { date: "18", day: "сент", title: "Дмитрий Носков и его квинтет", price: "от 2 500 ₽", tag: "Квинтет" },
  {
    date: "1",
    day: "окт",
    title: "Квартет Игоря Бутмана. День рождения клуба",
    price: "от 3 500 ₽",
    tag: "Спецконцерт",
  },
];

const facts = [
  { k: "Два яруса", v: "Сводчатые потолки и камерный зал — ближе к артистам" },
  { k: "XVIII век", v: "Служебный корпус Придворного конюшенного ведомства" },
  { k: "Кухня", v: "Средиземноморье с латиноамериканскими акцентами" },
  { k: "Звук", v: "Концертный звук и премиальный свет" },
];

function VenuePage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto grid max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-10 3xl:max-w-[2100px]">
          <div className="flex min-w-0 items-center gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-primary/50 font-display text-lg text-primary">
              Б
            </span>
            <span className="truncate font-display text-lg tracking-wide sm:text-xl">
              Джаз-клуб Игоря Бутмана
            </span>
          </div>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground lg:flex">
            <a className="transition-colors hover:text-primary" href="#afisha">Афиша</a>
            <a className="transition-colors hover:text-primary" href="#club">О клубе</a>
            <a className="transition-colors hover:text-primary" href="#kitchen">Ресторан</a>
            <a className="transition-colors hover:text-primary" href="#info">Как добраться</a>
          </nav>
          <a
            href="#afisha"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 lg:ml-8"
          >
            Билеты
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <img
          src={heroClub}
          alt="Зал джаз-клуба Игоря Бутмана: сцена с саксофонистом под кирпичными сводами"
          width={1920}
          height={1088}
          className="h-[68vh] min-h-[420px] w-full object-cover sm:h-[72vh] 3xl:h-[78vh]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-[1600px] px-4 pb-10 sm:px-6 lg:px-10 lg:pb-16 3xl:max-w-[2100px]">
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.18em] text-primary">
              <span className="rounded-full border border-primary/40 px-3 py-1">Джаз-клуб</span>
              <span className="rounded-full border border-border px-3 py-1 text-muted-foreground">С ужином</span>
              <span className="rounded-full border border-border px-3 py-1 text-muted-foreground">18+</span>
              <span className="rounded-full border border-border px-3 py-1 text-muted-foreground">
                Историческое здание
              </span>
            </div>
            <h1 className="mt-5 max-w-4xl font-display text-4xl leading-[1.05] sm:text-6xl lg:text-7xl 3xl:text-8xl">
              Джаз-клуб <span className="italic text-primary">Игоря Бутмана</span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base 3xl:max-w-3xl 3xl:text-lg">
              Санкт-Петербург, наб. канала Грибоедова, 7 · м. Невский проспект. Каждый вечер —
              живые выступления звёзд российского и мирового джаза.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#afisha"
                className="rounded-full bg-primary px-7 py-3 text-center text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Смотреть афишу
              </a>
              <a
                href="#info"
                className="rounded-full border border-border px-7 py-3 text-center text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Как добраться
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Facts strip */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-px px-4 py-2 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-10 3xl:max-w-[2100px]">
          {facts.map((f) => (
            <div key={f.k} className="px-1 py-5 lg:px-6">
              <p className="font-display text-xl text-primary">{f.k}</p>
              <p className="mt-1 text-sm text-muted-foreground">{f.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Afisha */}
      <section id="afisha" className="mx-auto max-w-[1600px] px-4 py-14 sm:px-6 lg:px-10 lg:py-20 3xl:max-w-[2100px]">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
          <div className="min-w-0">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl">Ближайшие события</h2>
            <p className="mt-2 text-sm text-muted-foreground">Афиша площадки на ближайшие дни</p>
          </div>
          <a href="#afisha" className="shrink-0 text-sm text-primary hover:underline">
            Вся афиша →
          </a>
        </div>

        <ul className="mt-8 divide-y divide-border/60 border-y border-border/60">
          {events.map((e) => (
            <li
              key={e.title}
              className="group grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 py-5 sm:grid-cols-[6rem_minmax(0,1fr)_auto] sm:gap-6 lg:py-6"
            >
              <div className="shrink-0 text-center sm:text-left">
                <p className="font-display text-2xl leading-none text-primary sm:text-3xl">{e.date}</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{e.day}</p>
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{e.tag}</p>
                <h3 className="mt-1 font-display text-xl leading-snug transition-colors group-hover:text-primary sm:text-2xl 3xl:text-3xl">
                  {e.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">наб. канала Грибоедова, 7</p>
                <div className="mt-3 flex items-center gap-3 sm:hidden">
                  <span className="text-sm font-semibold">{e.price}</span>
                  <button className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground">
                    Купить билет
                  </button>
                </div>
              </div>
              <div className="hidden shrink-0 items-center gap-5 sm:flex">
                <span className="text-sm font-semibold whitespace-nowrap">{e.price}</span>
                <button className="rounded-full border border-primary/60 px-5 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                  Купить билет
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* About + hall */}
      <section id="club" className="border-t border-border/60 bg-card/30">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10 lg:py-24 3xl:max-w-[2100px] 3xl:gap-24">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-primary">Пространство</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl 3xl:text-6xl">
              Своды XVIII века и живой звук
            </h2>
            <p className="mt-5 text-muted-foreground 3xl:text-lg">
              Старинные кирпичные арки создают глубокое естественное звучание, которое дополняет
              передовое световое и звуковое оборудование. Камерный двухуровневый зал позволяет быть
              ближе к артистам: места у барной стойки, столики и уединённые VIP-диваны.
            </p>
            <ul className="mt-7 space-y-3 text-sm sm:text-base">
              {[
                "Пространство в два яруса со сводчатыми потолками",
                "Концертный звук и премиальное световое оснащение",
                "Историческое здание Служебного корпуса",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <img
            src={hall}
            alt="Двухъярусный зал клуба с роялем и контрабасом на сцене"
            loading="lazy"
            width={1200}
            height={900}
            className="w-full rounded-sm object-cover lg:h-[540px]"
          />
        </div>
      </section>

      {/* Kitchen */}
      <section id="kitchen">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10 lg:py-24 3xl:max-w-[2100px] 3xl:gap-24">
          <img
            src={dinner}
            alt="Стол с брускеттами и авторским коктейлем при свечах"
            loading="lazy"
            width={1200}
            height={900}
            className="order-2 w-full rounded-sm object-cover lg:order-1 lg:h-[520px]"
          />
          <div className="order-1 lg:order-2">
            <p className="text-xs uppercase tracking-[0.24em] text-primary">Ресторан и бар</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl 3xl:text-6xl">
              Ужин под живую музыку
            </h2>
            <p className="mt-5 text-muted-foreground 3xl:text-lg">
              Меню сочетает средиземноморские блюда и латиноамериканские акценты: авторские
              брускетты, нежные паштеты, морепродукты и стейки на гриле. Барная карта — авторские
              коктейли и классические вина, подобранные под вечерние сеты.
            </p>
            <p className="mt-6 rounded-sm border-l-2 border-primary bg-card/60 px-5 py-4 text-sm text-muted-foreground">
              Совет: приходите за 30–40 минут до начала концерта, чтобы спокойно сделать заказ и
              выбрать лучшие места.
            </p>
          </div>
        </div>
      </section>

      {/* Info */}
      <section id="info" className="border-t border-border/60 bg-card/30">
        <div className="mx-auto grid max-w-[1600px] gap-8 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-10 lg:py-20 3xl:max-w-[2100px]">
          {[
            { t: "Адрес", d: "Санкт-Петербург, наб. канала Грибоедова, 7" },
            { t: "Метро", d: "«Невский проспект» — 5 минут пешком" },
            { t: "Возраст", d: "18+" },
            { t: "Формат", d: "Концерты каждый вечер, ужин и бар" },
          ].map((i) => (
            <div key={i.t}>
              <p className="text-xs uppercase tracking-[0.24em] text-primary">{i.t}</p>
              <p className="mt-2 text-base text-muted-foreground">{i.d}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border/60">
        <div className="mx-auto grid max-w-[1600px] gap-4 px-4 py-8 text-sm text-muted-foreground sm:grid-cols-[minmax(0,1fr)_auto] sm:px-6 lg:px-10 3xl:max-w-[2100px]">
          <p className="min-w-0">© Джаз-клуб Игоря Бутмана, Санкт-Петербург</p>
          <p className="shrink-0">Концепт-версия страницы площадки</p>
        </div>
      </footer>
    </div>
  );
}
