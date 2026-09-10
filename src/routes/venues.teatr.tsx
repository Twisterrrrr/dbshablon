import { createFileRoute } from "@tanstack/react-router";
import { VenuePdp } from "@/components/venue-pdp";

export const Route = createFileRoute("/venues/teatr")({
  head: () => ({
    meta: [
      { title: "Театр - страница места на Дайбилет" },
      { name: "description", content: "Театр: репертуар, схема зала, труппа и билеты. Шаблон карточки места Дайбилет." },
      { property: "og:title", content: "Театр - страница места на Дайбилет" },
      { property: "og:description", content: "Театр: репертуар, схема зала, труппа и билеты. Шаблон карточки места Дайбилет." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <VenuePdp type="theater" />,
});
