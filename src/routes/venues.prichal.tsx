import { createFileRoute } from "@tanstack/react-router";
import { VenuePdp } from "@/components/venue-pdp";

export const Route = createFileRoute("/venues/prichal")({
  head: () => ({
    meta: [
      { title: "Причал - страница места на Дайбилет" },
      { name: "description", content: "Причал: расписание рейсов, причалы отправления и сезон навигации. Шаблон карточки места Дайбилет." },
      { property: "og:title", content: "Причал - страница места на Дайбилет" },
      { property: "og:description", content: "Причал: расписание рейсов, причалы отправления и сезон навигации. Шаблон карточки места Дайбилет." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <VenuePdp type="pier" />,
});
