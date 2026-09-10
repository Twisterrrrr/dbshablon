import { createFileRoute } from "@tanstack/react-router";
import { VenuePdp } from "@/components/venue-pdp";

export const Route = createFileRoute("/venues/koncertnyy-zal")({
  head: () => ({
    meta: [
      { title: "Концертный зал - страница места на Дайбилет" },
      { name: "description", content: "Концертный зал: афиша концертов, акустика, схема зала и билеты. Шаблон карточки места Дайбилет." },
      { property: "og:title", content: "Концертный зал - страница места на Дайбилет" },
      { property: "og:description", content: "Концертный зал: афиша концертов, акустика, схема зала и билеты. Шаблон карточки места Дайбилет." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <VenuePdp type="concert_hall" />,
});
