import { createFileRoute } from "@tanstack/react-router";
import { VenuePdp } from "@/components/venue-pdp";

export const Route = createFileRoute("/venues/muzey")({
  head: () => ({
    meta: [
      { title: "Музей - страница места на Дайбилет" },
      { name: "description", content: "Музей современного искусства «свод»: входной билет, выставки, часы работы и экскурсии. Шаблон карточки места Дайбилет." },
      { property: "og:title", content: "Музей - страница места на Дайбилет" },
      { property: "og:description", content: "Музей современного искусства «свод»: входной билет, выставки, часы работы и экскурсии. Шаблон карточки места Дайбилет." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <VenuePdp type="museum" />,
});
