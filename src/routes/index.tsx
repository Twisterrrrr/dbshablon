import { createFileRoute } from "@tanstack/react-router";
import {
  Star,
  MapPin,
  TrainFront,
  Phone,
  Globe,
  Search,
  Heart,
  Share2,
  ChevronRight,
  CalendarDays,
} from "lucide-react";
import heroClub from "@/assets/hero-club.jpg";
import hall from "@/assets/hall.jpg";
import dinner from "@/assets/dinner.jpg";
import posterSax from "@/assets/poster-sax.jpg";
import posterSwing from "@/assets/poster-swing.jpg";
import posterVocal from "@/assets/poster-vocal.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Джаз-клуб Игоря Бутмана — афиша и билеты в Санкт-Петербурге" },
      {
        name: "description",
        content:
          "Все события джаз-клуба Игоря Бутмана в Санкт-Петербурге: расписание концертов, цены, схема зала и покупка билетов онлайн на АфишаПлюс.",
      },
      { property: "og:title", content: "Джаз-клуб Игоря Бутмана — афиша и билеты" },
      {
        property: "og:description",
        content:
          "Расписание концертов джаз-клуба Игоря Бутмана: цены от 2 000 ₽, онлайн-покупка билетов.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VenuePage,
});

const categories = ["Концерты", "Театр", "Кино", "Детям", "Стендап", "Выставки", "Спорт", "Ещё"];

const dateChips = [
  "Сегодня",
  "Завтра",
  "Сентябрь",
  "Октябрь",
  "Выходные",
  "Выбрать дату",
];

const events = [
  {
    date: "5 сентября, пт",
    time: "20:00",
    title: "Олег и Наталья Бутман Бэнд",
    price: "от 2 500 ₽",
    tag: "Джаз",
    poster: posterSax,
  },
  {
    date: "14 сентября, вс",
    time: "20:00",
    title: "Валерий Сюткин и ансамбль S.O.S",
    price: "от 2 500 ₽",
    tag: "Свинг",
    poster: posterSwing,
  },
  {
    date: "15 сентября, пн",
    time: "20:00",
    title: "Валерий Сюткин и «Лайт Джаз»",
    price: "от 2 500 ₽",
    tag: "Свинг",
    poster: posterVocal,
  },
  {
    date: "16 сентября, вт",
    time: "20:00",
    title: "Виталий Погосян Duduk-Band",
    price: "от 2 000 ₽",
    tag: "Этно-джаз",
    poster: posterSax,
  },
  {
    date: "17 сентября, ср",
    time: "20:00",
    title: "Elena et les garçons",
    price: "от 2 500 ₽",
    tag: "Вокал",
    poster: posterVocal,
  },
  {
    date: "18 сентября, чт",
    time: "20:00",
    title: "Дмитрий Носков и его квинтет",
    price: "от 2 500 ₽",
    tag: "Джаз",
    poster: posterSax,
  },
  {
    date: "1 октября, ср",
    time: "21:00",
    title: "Квартет Игоря Бутмана. День рождения клуба",
    price: "от 3 500 ₽",
    tag: "Спецконцерт",
    poster: posterSwing,
  },
  {
    date: "12 октября, вс",
    time: "20:00",
    title: "Бутман & Друзья: вечер блюза",
    price: "от 2 800 ₽",
    tag: "Блюз",
    poster: posterVocal,
  },
];

const similar = [
  { name: "Козлов Club", metro: "Сенная площадь", kind: "Джаз-клуб", img: hall },
  { name: "JFC Jazz Club", metro: "Невский проспект", kind: "Джаз-клуб", img: dinner },
  { name: "The Hat Bar", metro: "Гостиный двор", kind: "Бар с живой музыкой", img: heroClub },
  { name: "Эрарта. Сцена", metro: "Приморская", kind: "Концертная площадка", img: hall },
];

function VenuePage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* ===== Aggregator header ===== */}
      <header className="sticky top-0 z-50 border-b border-border bg-card">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 3xl:max-w-[1700px]">
          <div className="flex h-16 items-center gap-3 sm:gap-6">
            <a href="/" className="flex shrink-0 items-baseline gap-1 text-xl font-extrabold tracking-tight">
              <span className="text-primary">Афиша</span>
              <span>Плюс</span>
            </a>
            <button className="hidden shrink-0 items-center gap-1 rounded-lg px-2 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted md:flex">
              Санкт-Петербург
              <ChevronRight className="h-3.5 w-3.5 rotate-90" />
            </button>
            <label className="flex h-10 min-w-0 flex-1 items-center gap-2 rounded-lg bg-muted px-3">
              <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
              <input
                placeholder="Событие, артист или площадка"
                className="w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </label>
            <button className="hidden shrink-0 rounded-lg border border-border px-4 py-2 text-sm font-semibold transition-colors hover:bg-muted sm:block">
              Войти
            </button>
          </div>
          <nav className="hidden gap-5 overflow-x-auto pb-3 text-sm text-muted-foreground md:flex">
            {categories.map((c) => (
              <a key={c} href="#" className="shrink-0 transition-colors hover:text-primary">
                {c}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[1280px] px-4 sm:px-6 3xl:max-w-[1700px]">
        {/* ===== Breadcrumbs ===== */}
        <nav aria-label="Хлебные крошки" className="flex flex-wrap items-center gap-1.5 pt-5 text-xs text-muted-foreground sm:text-sm">
          <a href="#" className="hover:text-primary">Главная</a>
          <ChevronRight className="h-3.5 w-3.5" />
          <a href="#" className="hover:text-primary">Места</a>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground">Джаз-клуб Игоря Бутмана</span>
        </nav>

        {/* ===== Venue header ===== */}
        <section className="mt-5 grid gap-5 lg:grid-cols-[380px_minmax(0,1fr)] 3xl:grid-cols-[460px_minmax(0,1fr)]">
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={heroClub}
              alt="Зал джаз-клуба Игоря Бутмана: сцена под кирпичными сводами"
              width={1920}
              height={1088}
              className="h-56 w-full object-cover sm:h-72 lg:h-full lg:min-h-[320px]"
            />
            <span className="absolute left-3 top-3 rounded-md bg-background/90 px-2 py-1 text-xs font-semibold backdrop-blur">
              3 фото
            </span>
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-accent px-2 py-1 text-xs font-semibold text-accent-foreground">Джаз-клуб</span>
              <span className="rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">18+</span>
              <span className="flex items-center gap-1 rounded-md bg-muted px-2 py-1 text-xs font-semibold">
                <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                4,9 <span className="font-normal text-muted-foreground">· 1 240 отзывов</span>
              </span>
            </div>
            <h1 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight sm:text-4xl 3xl:text-5xl">
              Джаз-клуб Игоря Бутмана
            </h1>
            <div className="mt-4 space-y-2 text-sm sm:text-base">
              <p className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                наб. канала Грибоедова, 7, Санкт-Петербург
              </p>
              <p className="flex items-center gap-2 text-muted-foreground">
                <TrainFront className="h-4 w-4 shrink-0 text-primary" />
                Невский проспект · 5 минут пешком
              </p>
              <p className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                +7 (812) 000-00-00 · касса клуба
              </p>
              <p className="flex items-center gap-2 text-muted-foreground">
                <Globe className="h-4 w-4 shrink-0 text-primary" />
                butmanclub.ru
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#afisha"
                className="rounded-lg bg-primary px-6 py-3 text-center text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Купить билет · от 2 000 ₽
              </a>
              <div className="flex gap-2">
                <button
                  aria-label="Добавить в избранное"
                  className="flex h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-border px-4 text-sm font-semibold transition-colors hover:bg-muted sm:flex-none"
                >
                  <Heart className="h-4 w-4" />
                  В избранное
                </button>
                <button
                  aria-label="Поделиться"
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-border transition-colors hover:bg-muted"
                >
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Afisha ===== */}
        <section id="afisha" className="mt-12">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl 3xl:text-3xl">
              Афиша в джаз-клубе Игоря Бутмана
            </h2>
            <a href="#" className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-primary sm:flex">
              Все события <ChevronRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-4 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
            {dateChips.map((d, i) => (
              <button
                key={d}
                className={
                  i === 0
                    ? "flex shrink-0 items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-bold text-background sm:text-sm"
                    : "flex shrink-0 items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold transition-colors hover:bg-muted sm:text-sm"
                }
              >
                {d === "Выбрать дату" && <CalendarDays className="h-4 w-4" />}
                {d}
              </button>
            ))}
          </div>

          <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 lg:grid-cols-4 3xl:grid-cols-5">
            {events.map((e) => (
              <li key={e.title} className="group min-w-0">
                <a href="#" className="block">
                  <div className="relative overflow-hidden rounded-xl bg-muted">
                    <img
                      src={e.poster}
                      alt={`Афиша концерта: ${e.title}`}
                      loading="lazy"
                      width={768}
                      height={1024}
                      className="aspect-[3/4] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <span className="absolute left-2 top-2 rounded-md bg-background/90 px-2 py-1 text-[11px] font-semibold backdrop-blur">
                      {e.tag}
                    </span>
                  </div>
                  <div className="mt-3">
                    <p className="text-xs font-semibold text-primary sm:text-sm">
                      {e.date} · {e.time}
                    </p>
                    <h3 className="mt-1 line-clamp-2 text-sm font-bold leading-snug sm:text-base">
                      {e.title}
                    </h3>
                    <p className="mt-1.5 text-sm font-extrabold sm:text-base">{e.price}</p>
                    <button className="mt-3 w-full rounded-lg bg-primary px-4 py-2.5 text-xs font-bold text-primary-foreground transition-opacity hover:opacity-90 sm:text-sm">
                      Купить
                    </button>
                  </div>
                </a>
              </li>
            ))}
          </ul>

          <button className="mt-8 w-full rounded-lg border border-border py-3 text-sm font-bold transition-colors hover:bg-muted">
            Показать ещё
          </button>
        </section>

        {/* ===== About ===== */}
        <section className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start 3xl:grid-cols-[minmax(0,1fr)_460px]">
          <div className="min-w-0">
            <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">О площадке</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                Джаз-клуб Игоря Бутмана на канале Грибоедова — камерный двухуровневый зал в
                историческом здании Служебного корпуса Придворного конюшенного ведомства XVIII
                века. Старинные кирпичные своды создают глубокое естественное звучание, которое
                дополняет современное концертное оборудование.
              </p>
              <p>
                Здесь каждый вечер выступают звёзды российского и мирового джаза. Кухня сочетает
                средиземноморские блюда с латиноамериканскими акцентами, барная карта — авторские
                коктейли и классические вина. Рекомендуем приходить за 30–40 минут до начала
                концерта.
              </p>
            </div>
            <dl className="mt-6 grid grid-cols-1 gap-3 rounded-xl bg-muted p-5 sm:grid-cols-2">
              {[
                ["Вместимость", "до 200 гостей"],
                ["Формат мест", "столики, барная стойка, VIP-диваны"],
                ["Ресторан", "средиземноморская кухня"],
                ["Возрастное ограничение", "18+"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{k}</dt>
                  <dd className="mt-1 text-sm font-semibold">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img
              src={hall}
              alt="Двухъярусный зал клуба с роялем на сцене"
              loading="lazy"
              width={1200}
              height={900}
              className="col-span-2 aspect-[16/10] w-full rounded-xl object-cover"
            />
            <img
              src={dinner}
              alt="Стол с блюдами и коктейлем при свечах"
              loading="lazy"
              width={1200}
              height={900}
              className="aspect-square w-full rounded-xl object-cover"
            />
            <img
              src={posterVocal}
              alt="Вокалистка у винтажного микрофона"
              loading="lazy"
              width={768}
              height={1024}
              className="aspect-square w-full rounded-xl object-cover"
            />
          </div>
        </section>

        {/* ===== Similar venues ===== */}
        <section className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">Похожие места</h2>
            <a href="#" className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-primary sm:flex">
              Все площадки <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 3xl:grid-cols-5">
            {similar.map((v) => (
              <li key={v.name}>
                <a
                  href="#"
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-3 transition-shadow hover:shadow-md"
                >
                  <img
                    src={v.img}
                    alt={v.name}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="h-16 w-16 shrink-0 rounded-lg object-cover"
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold">{v.name}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{v.kind}</p>
                    <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                      <TrainFront className="h-3 w-3" /> {v.metro}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* ===== Aggregator footer ===== */}
      <footer className="mt-16 border-t border-border bg-card">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-4 py-10 text-sm sm:grid-cols-2 sm:px-6 lg:grid-cols-4 3xl:max-w-[1700px]">
          <div>
            <p className="flex items-baseline gap-1 text-lg font-extrabold tracking-tight">
              <span className="text-primary">Афиша</span>Плюс
            </p>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              Билеты на концерты, спектакли и выставки. Официальная продажа без наценок.
            </p>
          </div>
          {[
            { t: "События", l: ["Концерты", "Театр", "Стендап", "Выставки"] },
            { t: "Города", l: ["Санкт-Петербург", "Москва", "Казань", "Екатеринбург"] },
            { t: "Помощь", l: ["Как купить билет", "Возврат билетов", "Контакты", "Партнёрам"] },
          ].map((col) => (
            <div key={col.t}>
              <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{col.t}</p>
              <ul className="mt-3 space-y-2">
                {col.l.map((x) => (
                  <li key={x}>
                    <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                      {x}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border">
          <p className="mx-auto max-w-[1280px] px-4 py-5 text-xs text-muted-foreground sm:px-6 3xl:max-w-[1700px]">
            © 2026 АфишаПлюс · Концепт карточки площадки
          </p>
        </div>
      </footer>
    </div>
  );
}
