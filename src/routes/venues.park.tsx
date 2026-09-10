import { createFileRoute } from "@tanstack/react-router";
import { VenuePdp } from "@/components/venue-pdp";

export const Route = createFileRoute("/venues/park")({
  head: () => ({
    meta: [
      { title: "Парк - страница места на Дайбилет" },
      { name: "description", content: "Парк: свободный вход, экскурсии и маршруты по территории. Шаблон карточки места Дайбилет." },
      { property: "og:title", content: "Парк - страница места на Дайбилет" },
      { property: "og:description", content: "Парк: свободный вход, экскурсии и маршруты по территории. Шаблон карточки места Дайбилет." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <VenuePdp type="outdoor" />,
});
