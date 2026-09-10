import { createFileRoute } from "@tanstack/react-router";
import { VenuePdp } from "@/components/venue-pdp";

export const Route = createFileRoute("/venues/gastrotochka")({
  head: () => ({
    meta: [
      { title: "Гастроточка - страница места на Дайбилет" },
      { name: "description", content: "Гастроточка: бронирование стола, кухня, часы работы и события. Шаблон карточки места Дайбилет." },
      { property: "og:title", content: "Гастроточка - страница места на Дайбилет" },
      { property: "og:description", content: "Гастроточка: бронирование стола, кухня, часы работы и события. Шаблон карточки места Дайбилет." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <VenuePdp type="gastro" />,
});
