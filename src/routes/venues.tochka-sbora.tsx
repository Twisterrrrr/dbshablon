import { createFileRoute } from "@tanstack/react-router";
import { VenuePdp } from "@/components/venue-pdp";

export const Route = createFileRoute("/venues/tochka-sbora")({
  head: () => ({
    meta: [
      { title: "Точка сбора - страница места на Дайбилет" },
      { name: "description", content: "Точка сбора: место встречи с гидом, как найти и ближайшие экскурсии. Шаблон карточки места Дайбилет." },
      { property: "og:title", content: "Точка сбора - страница места на Дайбилет" },
      { property: "og:description", content: "Точка сбора: место встречи с гидом, как найти и ближайшие экскурсии. Шаблон карточки места Дайбилет." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <VenuePdp type="meeting_point" />,
});
