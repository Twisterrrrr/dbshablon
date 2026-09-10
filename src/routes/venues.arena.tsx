import { createFileRoute } from "@tanstack/react-router";
import { VenuePdp } from "@/components/venue-pdp";

export const Route = createFileRoute("/venues/arena")({
  head: () => ({
    meta: [
      { title: "Арена - страница места на Дайбилет" },
      { name: "description", content: "Арена: секторы, афиша матчей и концертов, как добраться. Шаблон карточки места Дайбилет." },
      { property: "og:title", content: "Арена - страница места на Дайбилет" },
      { property: "og:description", content: "Арена: секторы, афиша матчей и концертов, как добраться. Шаблон карточки места Дайбилет." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <VenuePdp type="sport" />,
});
