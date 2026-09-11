import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
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
  Clock,
  Ticket,
  Car,
  Info,
  Users,
  Sparkles,
  Armchair,
  Music4,
  Route as RouteIcon,
  ShieldCheck,
  MessageSquare,
  Plus,
  Minus,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { TYPE_CONFIG, TYPE_ORDER, TYPE_SLUG, VENUES, type VenueType } from "@/lib/venue-data";


/* ---------- мелкие примитивы ---------- */

function Chip({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return (
    <button
      className={cn(
        "shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-colors sm:text-sm",
        active
          ? "bg-foreground text-background"
          : "border border-border bg-card text-foreground hover:bg-muted",
      )}
    >
      {children}
    </button>
  );
}

function SectionTitle({ children, link }: { children: React.ReactNode; link?: string | undefined }) {
  return (
    <div className="flex items-end justify-between gap-4">
      <h2 className="text-xl font-bold tracking-tight sm:text-2xl">{children}</h2>
      {link ? (
        <a href="#" className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-primary sm:flex">
          {link} <ChevronRight className="h-4 w-4" />
        </a>
      ) : null}
    </div>
  );
}

function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("rounded-2xl border border-border bg-card p-5 shadow-card", className)}>{children}</div>
  );
}

function Informer({
  title,
  items,
  icon: Icon = Info,
}: {
  title: string;
  items: string[];
  icon?: React.ElementType;
}) {
  return (
    <Card className="bg-primary-soft border-transparent">
      <p className="flex items-center gap-2 text-sm font-bold">
        <Icon className="h-4 w-4 shrink-0 text-primary" />
        {title}
      </p>
      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
        {items.map((i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
            {i}
          </li>
        ))}
      </ul>
    </Card>
  );
}

/* ---------- страница ---------- */

export function VenuePdp({ type }: { type: VenueType }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const venue = VENUES[type];
  const cfg = TYPE_CONFIG[type];

  const eventFilters = useMemo(() => {
    const tags = Array.from(new Set(venue.events.map((e) => e.tag)));
    return ["Все", ...tags.slice(0, 5)];
  }, [venue]);

  const hasTickets = venue.priceFrom !== null;

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* ===== Шапка маркетплейса ===== */}
      <header className="sticky top-0 z-50 border-b border-border bg-card">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 3xl:max-w-[1680px]">
          <div className="flex h-16 items-center gap-3 sm:gap-6">
            <a href="/" className="flex shrink-0 items-baseline gap-0.5 text-xl font-extrabold tracking-tight">
              <span className="text-primary">Дай</span>
              <span>билет</span>
            </a>
            <button className="hidden shrink-0 items-center gap-1 rounded-lg px-2 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted md:flex">
              {venue.city}
              <ChevronRight className="h-3.5 w-3.5 rotate-90" />
            </button>
            <label className="flex h-10 min-w-0 flex-1 items-center gap-2 rounded-xl bg-muted px-3">
              <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
              <input
                placeholder="Экскурсия, музей или событие"
                className="w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </label>
            <button className="hidden shrink-0 rounded-xl border border-border px-4 py-2 text-sm font-semibold transition-colors hover:bg-muted sm:block">
              Войти
            </button>
          </div>
        </div>
      </header>

      {/* ===== Переключатель типа (демо шаблона) ===== */}
      <div className="border-b border-border bg-muted/60">
        <div className="mx-auto max-w-[1280px] px-4 py-3 sm:px-6 3xl:max-w-[1680px]">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
            Тип площадки - шаблон подстраивается
          </p>
          <div className="mt-2 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
            {TYPE_ORDER.map((t) => (
              <Link
                key={t}
                to={TYPE_SLUG[t]}
                className={cn(
                  "shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors",
                  t === type
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-card text-muted-foreground hover:text-foreground",
                )}
              >
                {TYPE_CONFIG[t].label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-[1280px] px-4 pb-28 sm:px-6 lg:pb-16 3xl:max-w-[1680px]">
        {/* ===== Хлебные крошки ===== */}
        <nav aria-label="Хлебные крошки" className="flex flex-wrap items-center gap-1.5 pt-5 text-xs text-muted-foreground sm:text-sm">
          <a href="#" className="hover:text-primary">Главная</a>
          <ChevronRight className="h-3.5 w-3.5" />
          <a href="#" className="hover:text-primary">{venue.city}</a>
          <ChevronRight className="h-3.5 w-3.5" />
          <a href="#" className="hover:text-primary">Места</a>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground">{venue.name}</span>
        </nav>

        {/* ===== Hero: баннер с вводными и кассой ===== */}
        <section className="mt-4">
          <div className="relative overflow-hidden rounded-2xl bg-muted pb-5 sm:pb-6 lg:aspect-[21/9] lg:max-h-[560px] lg:pb-0">
            <img
              src={venue.cover}
              alt={`${venue.kindLabel}: ${venue.name}`}
              width={1920}
              height={1088}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/25" />
            <span className="absolute right-3 top-3 rounded-lg bg-white/15 px-2.5 py-1.5 text-xs font-semibold text-white backdrop-blur">
              {venue.gallery.length + 1} фото
            </span>

            <div className="relative z-10 flex h-full flex-col justify-end gap-5 px-4 pt-24 sm:px-6 lg:flex-row lg:items-end lg:gap-8 lg:px-8 lg:pb-7">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-lg bg-white px-2 py-1 text-xs font-semibold text-foreground">
                    {venue.kindLabel}
                  </span>
                  {venue.age ? (
                    <span className="rounded-lg bg-white/15 px-2 py-1 text-xs font-medium text-white backdrop-blur">
                      {venue.age}
                    </span>
                  ) : null}
                  {venue.rating ? (
                    <span className="flex items-center gap-1 rounded-lg bg-white/15 px-2 py-1 text-xs font-semibold text-white backdrop-blur">
                      <Star className="h-3.5 w-3.5 fill-amber-300 text-amber-300" />
                      {venue.rating.value.toFixed(1).replace(".", ",")}
                      <span className="font-normal text-white/80">· {venue.rating.count} отзывов</span>
                    </span>
                  ) : (
                    <span className="rounded-lg bg-white/15 px-2 py-1 text-xs font-medium text-white backdrop-blur">
                      Пока нет оценок
                    </span>
                  )}
                  {cfg.hours && venue.hours ? (
                    <span className="flex items-center gap-1 rounded-lg bg-success px-2 py-1 text-xs font-semibold text-success-foreground">
                      <Clock className="h-3.5 w-3.5" /> Сейчас открыто
                    </span>
                  ) : null}
                </div>

                <h1 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl 3xl:text-4xl">
                  {venue.name}
                </h1>

                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-white/90">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 shrink-0" /> {venue.address}, {venue.city}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <TrainFront className="h-4 w-4 shrink-0" /> {venue.metro}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Phone className="h-4 w-4 shrink-0" /> {venue.phone}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Globe className="h-4 w-4 shrink-0" /> {venue.site}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href="#center"
                    className="rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    {cfg.heroCta}
                  </a>
                  <button className="flex h-11 items-center gap-2 rounded-xl bg-white/15 px-4 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/25">
                    <Heart className="h-4 w-4" /> В избранное
                  </button>
                  <button
                    aria-label="Поделиться"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur transition-colors hover:bg-white/25"
                  >
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Касса прямо на фото */}
              <div className="w-full shrink-0 rounded-2xl bg-card p-5 shadow-card lg:w-[320px]">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {hasTickets ? "Билеты на Дайбилет" : "Билеты не нужны"}
                </p>
                <p className="mt-1 text-2xl font-extrabold">
                  {hasTickets ? `от ${venue.priceFrom}` : "Вход свободный"}
                </p>
                {hasTickets && venue.nextDate ? (
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4 text-primary" /> Ближайшая дата: {venue.nextDate}
                  </p>
                ) : null}
                <button className="mt-4 w-full rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90">
                  {cfg.stickyCta}
                </button>
                <p className="mt-2 text-center text-xs text-muted-foreground">{cfg.stickyHint}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start 3xl:grid-cols-[minmax(0,1fr)_400px]">
          <div className="min-w-0">

            {/* ===== Коммерческий центр ===== */}
            <div id="center" className="mt-10 scroll-mt-24">
              {cfg.center === "admission" && venue.admission ? (
                <AdmissionBlock venue={venue} cfg={cfg} />
              ) : null}
              {cfg.center === "events" ? (
                <EventsBlock venue={venue} cfg={cfg} filters={eventFilters} />
              ) : null}
              {cfg.center === "trips" ? <TripsBlock venue={venue} cfg={cfg} /> : null}
              {cfg.center === "excursions" ? <ExcursionsBlock venue={venue} /> : null}
              {cfg.center === "booking" ? <BookingBlock venue={venue} /> : null}
              {cfg.center === "logistics" ? <LogisticsBlock venue={venue} cfg={cfg} /> : null}
            </div>

            {/* ===== Зоны клуба ===== */}
            {cfg.zonesVip && venue.zones ? (
              <section className="mt-12">
                <SectionTitle>Как попасть: танцпол или стол</SectionTitle>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {venue.zones.map((z, i) => (
                    <Card key={z.name} className={cn(i === 0 && "border-primary")}>
                      <p className="text-sm font-bold">{z.name}</p>
                      <p className="mt-1 text-lg font-extrabold">{z.price}</p>
                      <p className="mt-2 text-xs text-muted-foreground">{z.note}</p>
                      <button className="mt-4 w-full rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-primary-foreground transition-opacity hover:opacity-90">
                        {i === 0 ? "Купить в 1 клик" : "Забронировать"}
                      </button>
                    </Card>
                  ))}
                </div>
              </section>
            ) : null}

            {/* ===== Схема зала / секторов ===== */}
            {cfg.seatMap || cfg.sectors ? (
              <section className="mt-12">
                <SectionTitle>{cfg.sectors ? "Схема секторов" : "Схема зала"}</SectionTitle>
                <Card className="mt-4 grid gap-5 sm:grid-cols-[minmax(0,1fr)_220px] sm:items-center">
                  <div className="rounded-xl bg-muted p-6">
                    <div className="mx-auto h-3 w-2/3 rounded-full bg-foreground/70" />
                    <p className="mt-2 text-center text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                      {cfg.sectors ? "Площадка" : "Сцена"}
                    </p>
                    <div className="mt-5 space-y-2">
                      {[0, 1, 2, 3].map((row) => (
                        <div key={row} className="flex justify-center gap-1.5">
                          {Array.from({ length: 12 + row * 2 }).map((_, i) => (
                            <span
                              key={i}
                              className={cn(
                                "h-2.5 w-2.5 rounded-[3px]",
                                row < 2 ? "bg-primary/70" : row === 2 ? "bg-primary/40" : "bg-foreground/15",
                              )}
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                  <ul className="space-y-3 text-sm">
                    {(cfg.sectors
                      ? [
                          ["Трибуна A - центр", "от 2 400 руб."],
                          ["Трибуны B и C", "от 1 200 руб."],
                          ["Трибуна D - фан-сектор", "от 800 руб."],
                        ]
                      : [
                          ["Партер, 1-10 ряд", "от 2 400 руб."],
                          ["Партер, 11-20 ряд", "от 1 600 руб."],
                          ["Балкон", "от 1 200 руб."],
                        ]
                    ).map(([k, v]) => (
                      <li key={k} className="flex items-center justify-between gap-3">
                        <span className="min-w-0 text-muted-foreground">{k}</span>
                        <span className="shrink-0 font-bold">{v}</span>
                      </li>
                    ))}
                    <li>
                      <button className="mt-1 w-full rounded-xl border border-border py-2.5 text-xs font-bold transition-colors hover:bg-muted">
                        Открыть схему целиком
                      </button>
                    </li>
                  </ul>
                </Card>
              </section>
            ) : null}

            {/* ===== О площадке + факты + галерея ===== */}
            <section className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
              <div className="min-w-0">
                <SectionTitle>О месте</SectionTitle>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {venue.about.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
                <dl className="mt-5 grid grid-cols-2 gap-4 rounded-2xl bg-muted p-5 sm:grid-cols-4">
                  {venue.facts.map(([k, v]) => (
                    <div key={k} className="min-w-0">
                      <dt className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{k}</dt>
                      <dd className="mt-1 text-sm font-bold">{v}</dd>
                    </div>
                  ))}
                </dl>

                {cfg.kitchen && venue.kitchenTags ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {venue.kitchenTags.map((t) => (
                      <span key={t} className="rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}

                {cfg.acoustics && venue.acoustics ? (
                  <Card className="mt-4">
                    <p className="flex items-center gap-2 text-sm font-bold">
                      <Music4 className="h-4 w-4 text-primary" /> Акустика и техника
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      {venue.acoustics.map((a) => (
                        <li key={a} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </Card>
                ) : null}

                {cfg.troupe && venue.troupe ? (
                  <div className="mt-6">
                    <h3 className="text-base font-bold">Труппа и авторы</h3>
                    <ul className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {venue.troupe.map((p) => (
                        <li key={p.name} className="rounded-2xl border border-border bg-card p-3 text-center">
                          <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-muted">
                            <Users className="h-5 w-5 text-muted-foreground" />
                          </span>
                          <p className="mt-2 truncate text-sm font-semibold">{p.name}</p>
                          <p className="text-xs text-muted-foreground">{p.role}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {cfg.visitPlanner && venue.visitPlanner ? (
                  <Card className="mt-4">
                    <p className="flex items-center gap-2 text-sm font-bold">
                      <Sparkles className="h-4 w-4 text-primary" /> Как спланировать визит
                    </p>
                    <dl className="mt-3 grid gap-3 sm:grid-cols-3 text-sm">
                      <div>
                        <dt className="text-xs text-muted-foreground">Сколько времени</dt>
                        <dd className="font-semibold">{venue.visitPlanner.time}</dd>
                      </div>
                      <div>
                        <dt className="text-xs text-muted-foreground">Когда лучше идти</dt>
                        <dd className="font-semibold">{venue.visitPlanner.best}</dd>
                      </div>
                      <div>
                        <dt className="text-xs text-muted-foreground">Бесплатно</dt>
                        <dd className="font-semibold">{venue.visitPlanner.free}</dd>
                      </div>
                    </dl>
                  </Card>
                ) : null}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <img
                  src={venue.gallery[0]}
                  alt={`${venue.name}: интерьер`}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="col-span-2 aspect-[16/10] w-full rounded-2xl object-cover"
                />
                {venue.gallery.slice(1, 3).map((g, i) => (
                  <img
                    key={g + i}
                    src={g}
                    alt={`${venue.name}: фото ${i + 2}`}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="aspect-square w-full rounded-2xl object-cover"
                  />
                ))}
                {cfg.hours && venue.hours ? (
                  <Card className="col-span-2 p-4">
                    <p className="flex items-center gap-2 text-sm font-bold">
                      <Clock className="h-4 w-4 text-primary" /> Часы работы
                    </p>
                    <ul className="mt-3 space-y-1.5 text-sm">
                      {venue.hours.map((h) => (
                        <li key={h.day} className="flex items-center justify-between gap-3">
                          <span className="min-w-0 truncate text-muted-foreground">{h.day}</span>
                          <span className={cn("shrink-0 font-semibold", h.closed && "text-muted-foreground")}>
                            {h.time}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ) : null}
              </div>
            </section>

            {/* ===== Информер по типу ===== */}
            <section className="mt-12 grid gap-4 md:grid-cols-2">
              <Informer title={cfg.rulesTitle} items={cfg.rules} icon={ShieldCheck} />
              <Informer
                title="Как добраться"
                items={[venue.metro, venue.transport, venue.parking]}
                icon={Car}
              />
            </section>

            {/* ===== Карта ===== */}
            <section className="mt-6">
              <Card className="p-0 overflow-hidden">
                <div className="relative h-52 bg-muted sm:h-64">
                  <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)] [background-size:38px_38px]" />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                    <span className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground shadow-card">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <p className="mt-2 rounded-lg bg-background/90 px-3 py-1 text-xs font-semibold backdrop-blur">
                      {venue.address}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 p-4">
                  <p className="min-w-0 text-sm text-muted-foreground">{venue.metro}</p>
                  <button className="rounded-xl border border-border px-4 py-2 text-xs font-bold transition-colors hover:bg-muted">
                    Построить маршрут
                  </button>
                </div>
              </Card>

              {cfg.wayToFind && venue.wayToFind ? (
                <Card className="mt-4">
                  <p className="flex items-center gap-2 text-sm font-bold">
                    <RouteIcon className="h-4 w-4 text-primary" /> Как найти место встречи
                  </p>
                  <ol className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {venue.wayToFind.map((s, i) => (
                      <li key={s} className="flex gap-3">
                        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
                          {i + 1}
                        </span>
                        {s}
                      </li>
                    ))}
                  </ol>
                </Card>
              ) : null}
            </section>

            {/* ===== Вторичная афиша ===== */}
            {cfg.secondaryEvents && venue.events.length > 0 ? (
              <section className="mt-12">
                <SectionTitle link="Все события">События на площадке</SectionTitle>
                <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-4">
                  {venue.events.map((e) => (
                    <EventCard key={e.id} event={e} cta={cfg.cardCta} />
                  ))}
                </ul>
              </section>
            ) : null}

            {/* ===== FAQ ===== */}
            <section className="mt-12">
              <SectionTitle>Частые вопросы</SectionTitle>
              <ul className="mt-4 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
                {venue.faq.map((f, i) => {
                  const open = openFaq === i;
                  return (
                    <li key={f.q}>
                      <button
                        onClick={() => setOpenFaq(open ? null : i)}
                        aria-expanded={open}
                        className="flex w-full items-center gap-3 px-5 py-4 text-left transition-colors hover:bg-muted"
                      >
                        <span className="min-w-0 flex-1 text-sm font-semibold">{f.q}</span>
                        {open ? (
                          <Minus className="h-4 w-4 shrink-0 text-primary" />
                        ) : (
                          <Plus className="h-4 w-4 shrink-0 text-muted-foreground" />
                        )}
                      </button>
                      {open ? (
                        <p className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </section>

            {/* ===== Отзывы ===== */}
            <section className="mt-12">
              <SectionTitle link={venue.reviews.length ? "Все отзывы" : undefined}>Отзывы</SectionTitle>
              {venue.reviews.length ? (
                <ul className="mt-4 grid gap-4 md:grid-cols-2">
                  {venue.reviews.map((r) => (
                    <Card key={r.author + r.date}>
                      <div className="flex items-center justify-between gap-3">
                        <p className="min-w-0 truncate text-sm font-bold">{r.author}</p>
                        <span className="flex shrink-0 items-center gap-1 text-sm font-semibold">
                          <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                          {r.rating}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">{r.date}</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
                    </Card>
                  ))}
                </ul>
              ) : (
                <Card className="mt-4 flex flex-col items-center gap-3 py-10 text-center">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-muted">
                    <MessageSquare className="h-5 w-5 text-muted-foreground" />
                  </span>
                  <p className="text-sm font-semibold">Отзывов пока нет</p>
                  <p className="max-w-sm text-sm text-muted-foreground">
                    Оценки появятся, когда гости оставят первые отзывы после визита. Мы не показываем чужие
                    и неподтверждённые оценки.
                  </p>
                </Card>
              )}
            </section>

            {/* ===== Похожие места ===== */}
            <section className="mt-12">
              <SectionTitle link="Все места">Похожие места рядом</SectionTitle>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {venue.similar.map((v) => (
                  <li key={v.name}>
                    <a
                      href="#"
                      className="flex items-center gap-3 rounded-2xl border border-border bg-card p-3 transition-shadow hover:shadow-card-hover"
                    >
                      <img
                        src={v.img}
                        alt={v.name}
                        loading="lazy"
                        width={1200}
                        height={900}
                        className="h-16 w-16 shrink-0 rounded-xl object-cover"
                      />
                      <div className="min-w-0">
                        <p className="truncate text-sm font-bold">{v.name}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">{v.kind}</p>
                        <p className="mt-0.5 flex items-center gap-1 truncate text-xs text-muted-foreground">
                          <TrainFront className="h-3 w-3 shrink-0" /> {v.metro}
                        </p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* ===== Sticky касса (desktop) ===== */}
          <aside className="hidden lg:block lg:self-stretch">
            <div className="sticky top-24 space-y-4">
              <Card>
                {hasTickets ? (
                  <>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Билеты на Дайбилет
                    </p>
                    <p className="mt-1 text-2xl font-extrabold">от {venue.priceFrom}</p>
                    {venue.nextDate ? (
                      <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                        <CalendarDays className="h-4 w-4 text-primary" /> Ближайшая дата: {venue.nextDate}
                      </p>
                    ) : null}
                    <button className="mt-4 w-full rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90">
                      {cfg.stickyCta}
                    </button>
                    <p className="mt-2 text-center text-xs text-muted-foreground">{cfg.stickyHint}</p>
                  </>
                ) : (
                  <>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Билеты не нужны
                    </p>
                    <p className="mt-1 text-2xl font-extrabold">Вход свободный</p>
                    <button className="mt-4 w-full rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90">
                      {cfg.stickyCta}
                    </button>
                    <p className="mt-2 text-center text-xs text-muted-foreground">{cfg.stickyHint}</p>
                  </>
                )}
                <ul className="mt-4 space-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
                  <li className="flex gap-2">
                    <ShieldCheck className="h-4 w-4 shrink-0 text-success" /> Официальные билеты без наценок
                  </li>
                  <li className="flex gap-2">
                    <Ticket className="h-4 w-4 shrink-0 text-success" /> Электронный билет сразу после оплаты
                  </li>
                </ul>
              </Card>

              {venue.events.length > 0 ? (
                <Card>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Ближайшие события
                  </p>
                  <ul className="mt-3 space-y-3">
                    {venue.events.slice(0, 3).map((e) => (
                      <li key={e.id} className="flex gap-3">
                        <img
                          src={e.poster}
                          alt={e.title}
                          loading="lazy"
                          width={300}
                          height={400}
                          className="h-14 w-11 shrink-0 rounded-lg object-cover"
                        />
                        <div className="min-w-0">
                          <p className="flex items-center gap-1.5 text-[11px] font-semibold text-primary">
                            <CalendarDays className="h-3 w-3 shrink-0" /> {e.date}
                            <span className="text-muted-foreground">· {e.time}</span>
                          </p>
                          <p className="mt-0.5 truncate text-sm font-semibold">{e.title}</p>
                          <p className="mt-0.5 text-xs font-bold text-foreground">{e.price}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#center"
                    className="mt-4 flex items-center justify-center gap-1 text-xs font-bold text-primary transition-colors hover:text-accent-foreground"
                  >
                    Все события <ChevronRight className="h-3.5 w-3.5" />
                  </a>
                </Card>
              ) : null}

              <Card className="p-4">
                {venue.rating ? (
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1 text-sm font-bold">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      {venue.rating.value.toFixed(1).replace(".", ",")}
                    </span>
                    <span className="text-xs text-muted-foreground">{venue.rating.count} отзывов</span>
                  </div>
                ) : (
                  <p className="text-xs font-semibold text-muted-foreground">Отзывов пока нет</p>
                )}
                <ul className="mt-3 space-y-2 border-t border-border pt-3 text-xs text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    <span className="min-w-0 truncate">{venue.phone}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrainFront className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    <span className="min-w-0">{venue.metro}</span>
                  </li>
                  {cfg.hours && venue.hours ? (
                    <li className="flex items-center gap-2 text-success">
                      <Clock className="h-3.5 w-3.5 shrink-0" /> Сейчас открыто
                    </li>
                  ) : null}
                </ul>
                <div className="mt-3 flex gap-2">
                  <button className="flex h-9 flex-1 items-center justify-center gap-1.5 rounded-xl border border-border text-xs font-semibold transition-colors hover:bg-muted">
                    <Heart className="h-3.5 w-3.5" /> В избранное
                  </button>
                  <button
                    aria-label="Поделиться"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-border transition-colors hover:bg-muted"
                  >
                    <Share2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </Card>
            </div>
          </aside>
        </section>
      </main>

      {/* ===== Sticky касса (мобильная) ===== */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 p-3 backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-[1280px] items-center gap-3 px-1">
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-extrabold">
              {hasTickets ? `от ${venue.priceFrom}` : "Вход свободный"}
            </p>
            <p className="truncate text-xs text-muted-foreground">{cfg.stickyHint}</p>
          </div>
          <button className="shrink-0 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground">
            {cfg.stickyCta}
          </button>
        </div>
      </div>

      {/* ===== Футер ===== */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-4 py-10 text-sm sm:grid-cols-2 sm:px-6 lg:grid-cols-4 3xl:max-w-[1680px]">
          <div>
            <p className="flex items-baseline gap-0.5 text-lg font-extrabold tracking-tight">
              <span className="text-primary">Дай</span>билет
            </p>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              Экскурсии, музеи и мероприятия в городах России. Официальные билеты без наценок.
            </p>
          </div>
          {[
            { t: "Афиша", l: ["Экскурсии", "Музеи", "Театры", "Концерты"] },
            { t: "Города", l: ["Санкт-Петербург", "Москва", "Казань", "Сочи"] },
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
          <p className="mx-auto max-w-[1280px] px-4 py-5 pb-24 text-xs text-muted-foreground sm:px-6 lg:pb-5 3xl:max-w-[1680px]">
            © 2026 Дайбилет · Шаблон карточки площадки
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ---------- блоки коммерческого центра ---------- */

type V = (typeof VENUES)[VenueType];
type C = (typeof TYPE_CONFIG)[VenueType];

function EventCard({ event, cta }: { event: V["events"][number]; cta: string }) {
  return (
    <li className="group min-w-0">
      <a href="#" className="block">
        <div className="relative overflow-hidden rounded-2xl bg-muted">
          <img
            src={event.poster}
            alt={`Афиша: ${event.title}`}
            loading="lazy"
            width={768}
            height={1024}
            className="aspect-[3/4] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
          <span className="absolute left-2 top-2 rounded-lg bg-background/90 px-2 py-1 text-[11px] font-semibold backdrop-blur">
            {event.tag}
          </span>
        </div>
        <div className="mt-3">
          <p className="text-xs font-semibold text-primary sm:text-sm">
            {event.date} · {event.time}
          </p>
          <h3 className="mt-1 line-clamp-2 text-sm font-bold leading-snug sm:text-base">{event.title}</h3>
          {event.extra ? <p className="mt-1 text-xs text-muted-foreground">{event.extra}</p> : null}
          <p className="mt-1.5 text-sm font-extrabold sm:text-base">{event.price}</p>
          <button className="mt-3 w-full rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-primary-foreground transition-opacity hover:opacity-90 sm:text-sm">
            {cta}
          </button>
        </div>
      </a>
    </li>
  );
}

function EventsBlock({ venue, cfg, filters }: { venue: V; cfg: C; filters: string[] }) {
  if (venue.events.length === 0) {
    return (
      <Card className="flex flex-col items-center gap-3 py-12 text-center">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-muted">
          <CalendarDays className="h-5 w-5 text-muted-foreground" />
        </span>
        <p className="text-sm font-semibold">Пока нет объявленных дат</p>
        <p className="max-w-sm text-sm text-muted-foreground">
          Подпишитесь - пришлём письмо, как только появится расписание.
        </p>
        <button className="mt-1 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground">
          Сообщить о новых датах
        </button>
      </Card>
    );
  }
  return (
    <section>
      <SectionTitle link="Всё расписание">Афиша: {venue.name}</SectionTitle>
      <div className="mt-4 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
        {filters.map((f, i) => (
          <Chip key={f} active={i === 0}>
            {f}
          </Chip>
        ))}
        <Chip>
          <span className="flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4" /> Выбрать дату
          </span>
        </Chip>
      </div>
      <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 xl:grid-cols-4">
        {venue.events.map((e) => (
          <EventCard key={e.id} event={e} cta={cfg.cardCta} />
        ))}
      </ul>
      <button className="mt-6 w-full rounded-xl border border-border py-3 text-sm font-bold transition-colors hover:bg-muted">
        Показать ещё
      </button>
    </section>
  );
}

function AdmissionBlock({ venue, cfg }: { venue: V; cfg: C }) {
  const a = venue.admission!;
  return (
    <section>
      <SectionTitle>{a.title}</SectionTitle>
      <p className="mt-1 text-sm text-muted-foreground">{a.note}</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {a.options.map((o, i) => (
          <Card key={o.name} className={cn(i === 0 && "border-primary")}>
            <p className="text-sm font-bold">{o.name}</p>
            <p className="mt-1 text-xl font-extrabold">{o.price}</p>
            <p className="mt-2 text-xs text-muted-foreground">{o.note}</p>
            <button className="mt-4 w-full rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-primary-foreground transition-opacity hover:opacity-90">
              {cfg.cardCta}
            </button>
          </Card>
        ))}
      </div>

      {venue.exhibitions ? (
        <div className="mt-8">
          <SectionTitle link="Все выставки">Идут сейчас</SectionTitle>
          <ul className="mt-4 flex gap-4 overflow-x-auto pb-2 no-scrollbar sm:grid sm:grid-cols-3 sm:overflow-visible">
            {venue.exhibitions.map((e) => (
              <li key={e.title} className="w-56 shrink-0 sm:w-auto">
                <a href="#" className="group block">
                  <img
                    src={e.img}
                    alt={e.title}
                    loading="lazy"
                    width={768}
                    height={1024}
                    className="aspect-[4/3] w-full rounded-2xl object-cover"
                  />
                  <h3 className="mt-2 line-clamp-2 text-sm font-bold">{e.title}</h3>
                  <p className="text-xs text-muted-foreground">{e.until}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}

function TripsBlock({ venue, cfg }: { venue: V; cfg: C }) {
  return (
    <section>
      <SectionTitle link="Всё расписание">Расписание рейсов</SectionTitle>
      <div className="mt-4 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
        {["Сегодня", "Завтра", "Выходные", "Ночные рейсы", "Все маршруты"].map((f, i) => (
          <Chip key={f} active={i === 0}>
            {f}
          </Chip>
        ))}
      </div>
      <ul className="mt-4 space-y-3">
        {venue.events.map((e) => (
          <li key={e.id}>
            <Card className="grid gap-3 p-4 sm:grid-cols-[80px_minmax(0,1fr)_auto] sm:items-center">
              <div className="shrink-0">
                <p className="text-lg font-extrabold">{e.time}</p>
                <p className="text-xs text-muted-foreground">{e.date}</p>
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-bold">{e.title}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {e.tag} · {e.extra}
                </p>
              </div>
              <div className="flex items-center justify-between gap-3 sm:justify-end">
                <p className="text-sm font-extrabold">{e.price}</p>
                <button className="shrink-0 rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-primary-foreground">
                  {cfg.cardCta}
                </button>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ExcursionsBlock({ venue }: { venue: V }) {
  return (
    <section>
      <SectionTitle link="Все экскурсии">Экскурсии, которые начинаются здесь</SectionTitle>
      <p className="mt-1 text-sm text-muted-foreground">
        Вход на территорию свободный - билет нужен только на экскурсию.
      </p>
      <ul className="mt-4 grid gap-4 sm:grid-cols-3">
        {venue.excursions?.map((e) => (
          <li key={e.title}>
            <a href="#" className="group block">
              <img
                src={e.img}
                alt={e.title}
                loading="lazy"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full rounded-2xl object-cover"
              />
              <h3 className="mt-2 line-clamp-2 text-sm font-bold">{e.title}</h3>
              <p className="text-xs text-muted-foreground">{e.duration}</p>
              <p className="mt-1 text-sm font-extrabold">{e.price}</p>
              <button className="mt-3 w-full rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-primary-foreground">
                Выбрать дату
              </button>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function BookingBlock({ venue }: { venue: V }) {
  return (
    <section>
      <SectionTitle>Забронировать стол</SectionTitle>
      <Card className="mt-4 grid gap-3 sm:grid-cols-[repeat(3,minmax(0,1fr))_auto] sm:items-end">
        {[
          ["Дата", "Сегодня, 12 сентября"],
          ["Время", "19:00"],
          ["Гостей", "2 человека"],
        ].map(([label, value]) => (
          <label key={label} className="block min-w-0">
            <span className="text-xs font-semibold text-muted-foreground">{label}</span>
            <span className="mt-1 flex h-11 items-center rounded-xl border border-border px-3 text-sm font-semibold">
              {value}
            </span>
          </label>
        ))}
        <button className="h-11 shrink-0 rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground">
          Найти стол
        </button>
      </Card>
      <p className="mt-2 text-xs text-muted-foreground">
        Бронь бесплатная. Стол держим 20 минут после указанного времени.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <span className="flex items-center gap-2 rounded-xl bg-muted px-3 py-2 text-xs font-semibold">
          <Armchair className="h-4 w-4 text-primary" /> Зал на 40 мест
        </span>
        <span className="flex items-center gap-2 rounded-xl bg-muted px-3 py-2 text-xs font-semibold">
          <Clock className="h-4 w-4 text-primary" /> Средний чек 2 000 руб.
        </span>
      </div>
      {venue.events[0] ? (
        <p className="mt-6 text-sm text-muted-foreground">
          Ближайшее событие: <span className="font-semibold text-foreground">{venue.events[0].title}</span>,{" "}
          {venue.events[0].date}
        </p>
      ) : null}
    </section>
  );
}

function LogisticsBlock({ venue, cfg }: { venue: V; cfg: C }) {
  return (
    <section>
      <Card className="border-primary">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Место встречи</p>
        <p className="mt-1 text-xl font-extrabold leading-snug sm:text-2xl">{venue.address}</p>
        <p className="mt-2 text-sm text-muted-foreground">{venue.metro}</p>
      </Card>
      <div className="mt-8">
        <SectionTitle link="Все экскурсии">Экскурсии отсюда</SectionTitle>
        <ul className="mt-4 space-y-3">
          {venue.events.map((e) => (
            <li key={e.id}>
              <Card className="grid gap-3 p-4 sm:grid-cols-[80px_minmax(0,1fr)_auto] sm:items-center">
                <div>
                  <p className="text-lg font-extrabold">{e.time}</p>
                  <p className="text-xs text-muted-foreground">{e.date}</p>
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold">{e.title}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {e.tag} · {e.extra}
                  </p>
                </div>
                <div className="flex items-center justify-between gap-3 sm:justify-end">
                  <p className="text-sm font-extrabold">{e.price}</p>
                  <button className="shrink-0 rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-primary-foreground">
                    {cfg.cardCta}
                  </button>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
