import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, MapPin, Search, Star, X } from "lucide-react";
import {
  TYPE_CONFIG,
  TYPE_ORDER,
  TYPE_SLUG,
  VENUES,
  type VenueType,
} from "@/lib/venue-data";

export const Route = createFileRoute("/venues/")({
  head: () => ({
    meta: [
      { title: "Площадки и локации — поиск и фильтры | Дайбилет" },
      {
        name: "description",
        content:
          "Все площадки Дайбилет в одном списке: поиск по названию и адресу, фильтры по типу места, городу, наличию билетов и рейтингу.",
      },
      { property: "og:title", content: "Площадки и локации — поиск и фильтры | Дайбилет" },
      {
        property: "og:description",
        content:
          "Все площадки Дайбилет в одном списке: поиск по названию и адресу, фильтры по типу места, городу, наличию билетов и рейтингу.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VenuesListPage,
});

type SortKey = "popular" | "rating" | "price";

function priceNum(v: string | null): number {
  if (!v) return Number.POSITIVE_INFINITY;
  const digits = v.replace(/[^\d]/g, "");
  return digits ? Number(digits) : Number.POSITIVE_INFINITY;
}

function VenuesListPage() {
  const [query, setQuery] = useState("");
  const [types, setTypes] = useState<VenueType[]>([]);
  const [city, setCity] = useState("all");
  const [onlyTickets, setOnlyTickets] = useState(false);
  const [sort, setSort] = useState<SortKey>("popular");

  const cities = useMemo(
    () => Array.from(new Set(TYPE_ORDER.map((t) => VENUES[t].city))).sort(),
    [],
  );

  const toggleType = (t: VenueType) =>
    setTypes((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = TYPE_ORDER.filter((t) => {
      const v = VENUES[t];
      if (types.length && !types.includes(t)) return false;
      if (city !== "all" && v.city !== city) return false;
      if (onlyTickets && !v.priceFrom) return false;
      if (!q) return true;
      return [v.name, v.address, v.city, v.metro, v.kindLabel, TYPE_CONFIG[t].label]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });

    return [...list].sort((a, b) => {
      if (sort === "rating") return (VENUES[b].rating?.value ?? 0) - (VENUES[a].rating?.value ?? 0);
      if (sort === "price") return priceNum(VENUES[a].priceFrom) - priceNum(VENUES[b].priceFrom);
      return 0;
    });
  }, [query, types, city, onlyTickets, sort]);

  const filtersActive = Boolean(query) || types.length > 0 || city !== "all" || onlyTickets;

  const reset = () => {
    setQuery("");
    setTypes([]);
    setCity("all");
    setOnlyTickets(false);
    setSort("popular");
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-card">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 3xl:max-w-[1680px]">
          <div className="flex h-16 items-center gap-3 sm:gap-6">
            <Link to="/" className="flex shrink-0 items-baseline gap-0.5 text-xl font-extrabold tracking-tight">
              <span className="text-primary">Дай</span>
              <span>билет</span>
            </Link>
            <label className="flex h-10 min-w-0 flex-1 items-center gap-2 rounded-xl bg-muted px-3">
              <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Название, адрес или метро"
                className="w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
              {query ? (
                <button
                  onClick={() => setQuery("")}
                  aria-label="Очистить поиск"
                  className="shrink-0 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              ) : null}
            </label>
            <button className="hidden shrink-0 rounded-xl border border-border px-4 py-2 text-sm font-semibold transition-colors hover:bg-muted sm:block">
              Войти
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1280px] px-4 pb-16 sm:px-6 3xl:max-w-[1680px]">
        <section className="pt-8">
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Площадки и локации</h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Музеи, театры, концертные залы, клубы, парки и другие места. Найдите площадку по
            названию, адресу или типу и переходите к билетам.
          </p>
        </section>

        <section className="mt-6 rounded-2xl border border-border bg-card p-4 shadow-card sm:p-5">
          <div className="flex flex-wrap gap-2">
            {TYPE_ORDER.map((t) => {
              const active = types.includes(t);
              return (
                <button
                  key={t}
                  onClick={() => toggleType(t)}
                  aria-pressed={active}
                  className={`rounded-xl border px-3 py-1.5 text-sm font-semibold transition-colors ${
                    active
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-foreground hover:bg-muted"
                  }`}
                >
                  {TYPE_CONFIG[t].label}
                </button>
              );
            })}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-border pt-4">
            <label className="flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">Город</span>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="rounded-xl border border-border bg-card px-3 py-1.5 text-sm font-semibold outline-none"
              >
                <option value="all">Все города</option>
                {cities.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">Сортировка</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="rounded-xl border border-border bg-card px-3 py-1.5 text-sm font-semibold outline-none"
              >
                <option value="popular">По умолчанию</option>
                <option value="rating">Сначала с высоким рейтингом</option>
                <option value="price">Сначала дешевле</option>
              </select>
            </label>

            <button
              onClick={() => setOnlyTickets((v) => !v)}
              aria-pressed={onlyTickets}
              className={`rounded-xl border px-3 py-1.5 text-sm font-semibold transition-colors ${
                onlyTickets
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card hover:bg-muted"
              }`}
            >
              Только с билетами
            </button>

            {filtersActive ? (
              <button
                onClick={reset}
                className="rounded-xl px-3 py-1.5 text-sm font-semibold text-primary hover:underline"
              >
                Сбросить
              </button>
            ) : null}
          </div>
        </section>

        <p className="mt-5 text-sm text-muted-foreground">
          Найдено мест: <span className="font-semibold text-foreground">{results.length}</span>
        </p>

        {results.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-dashed border-border bg-card p-10 text-center">
            <p className="font-semibold">Ничего не нашлось</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Попробуйте изменить запрос или сбросить фильтры.
            </p>
            <button
              onClick={reset}
              className="mt-4 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              Сбросить фильтры
            </button>
          </div>
        ) : (
          <section className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((t) => {
              const venue = VENUES[t];
              return (
                <Link
                  key={t}
                  to={TYPE_SLUG[t]}
                  className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-shadow hover:shadow-card-hover"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={venue.cover}
                      alt={`${venue.kindLabel}: ${venue.name}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-lg bg-card px-2 py-1 text-xs font-semibold text-foreground">
                      {TYPE_CONFIG[t].label}
                    </span>
                    <span className="absolute bottom-3 left-3 rounded-lg bg-foreground/70 px-2 py-1 text-xs font-bold text-background backdrop-blur">
                      {venue.priceFrom ? `от ${venue.priceFrom}` : TYPE_CONFIG[t].stickyCta}
                    </span>
                  </div>
                  <div className="p-4">
                    <h2 className="line-clamp-1 font-bold leading-snug group-hover:text-primary">
                      {venue.name}
                    </h2>
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" />
                      <span className="line-clamp-1">
                        {venue.city}, {venue.address}
                      </span>
                    </p>
                    <p className="mt-2 flex items-center justify-between text-xs">
                      {venue.rating ? (
                        <span className="flex items-center gap-1 font-semibold">
                          <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                          {venue.rating.value.toFixed(1).replace(".", ",")}
                          <span className="font-normal text-muted-foreground">
                            · {venue.rating.count} отзывов
                          </span>
                        </span>
                      ) : (
                        <span className="text-muted-foreground">Пока нет оценок</span>
                      )}
                      <span className="flex items-center gap-0.5 font-semibold text-primary">
                        Открыть <ChevronRight className="h-3.5 w-3.5" />
                      </span>
                    </p>
                  </div>
                </Link>
              );
            })}
          </section>
        )}
      </main>
    </div>
  );
}
