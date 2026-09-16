import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, MapPin, Search, Star } from "lucide-react";
import { TYPE_CONFIG, TYPE_ORDER, TYPE_SLUG, VENUES } from "@/lib/venue-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Страницы мест Дайбилет — шаблоны карточек площадок" },
      {
        name: "description",
        content:
          "Каталог реальных площадок Дайбилет: музеи, театры, концертные залы, клубы, причалы, парки, арены и точки сбора.",
      },
      { property: "og:title", content: "Страницы мест Дайбилет — шаблоны карточек площадок" },
      {
        property: "og:description",
        content:
          "Каталог реальных площадок Дайбилет: музеи, театры, концертные залы, клубы, причалы, парки, арены и точки сбора.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CatalogPage,
});

function CatalogPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-card">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 3xl:max-w-[1680px]">
          <div className="flex h-16 items-center gap-3 sm:gap-6">
            <span className="flex shrink-0 items-baseline gap-0.5 text-xl font-extrabold tracking-tight">
              <span className="text-primary">Дай</span>
              <span>билет</span>
            </span>
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

      <main className="mx-auto max-w-[1280px] px-4 pb-16 sm:px-6 3xl:max-w-[1680px]">
        <section className="pt-8">
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Страницы мест на Дайбилет
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
             Музеи, театры, концертные площадки и другие места с адресами, афишей,
             маршрутами и доступными билетами.
          </p>
        </section>

        <section className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TYPE_ORDER.map((t) => {
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
                  {venue.priceFrom ? (
                    <span className="absolute bottom-3 left-3 rounded-lg bg-foreground/70 px-2 py-1 text-xs font-bold text-background backdrop-blur">
                      от {venue.priceFrom}
                    </span>
                  ) : (
                    <span className="absolute bottom-3 left-3 rounded-lg bg-foreground/70 px-2 py-1 text-xs font-bold text-background backdrop-blur">
                      {TYPE_CONFIG[t].stickyCta}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h2 className="line-clamp-1 font-bold leading-snug group-hover:text-primary">
                    {venue.name}
                  </h2>
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" />
                    <span className="line-clamp-1">{venue.address}</span>
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
      </main>
    </div>
  );
}
