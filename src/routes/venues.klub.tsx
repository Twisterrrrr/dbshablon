import { createFileRoute } from "@tanstack/react-router";
import { VenuePdp } from "@/components/venue-pdp";

export const Route = createFileRoute("/venues/klub")({
  head: () => ({
    meta: [
      { title: "Клуб - страница места на Дайбилет" },
      { name: "description", content: "Клуб и бар: танцпол, столы с депозитом, афиша и правила входа. Шаблон карточки места Дайбилет." },
      { property: "og:title", content: "Клуб - страница места на Дайбилет" },
      { property: "og:description", content: "Клуб и бар: танцпол, столы с депозитом, афиша и правила входа. Шаблон карточки места Дайбилет." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <VenuePdp type="club_bar" />,
});
