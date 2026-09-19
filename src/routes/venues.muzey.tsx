import { createFileRoute } from "@tanstack/react-router";
import { VenuePdp } from "@/components/venue-pdp";

export const Route = createFileRoute("/venues/muzey")({
  head: () => ({
    meta: [
      { title: "Пушкинский музей — билеты и выставки | Дайбилет" },
      { name: "description", content: "Пушкинский музей: адрес, часы работы, экспозиция, экскурсии и билеты." },
      { property: "og:title", content: "Пушкинский музей — билеты и выставки | Дайбилет" },
      { property: "og:description", content: "Пушкинский музей: адрес, часы работы, экспозиция, экскурсии и билеты." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <VenuePdp type="museum" />,
});
