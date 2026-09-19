import { createFileRoute } from "@tanstack/react-router";
import { VenuePdp } from "@/components/venue-pdp";

const title = "Третьяковская галерея — билеты и выставки | Дайбилет";
const description = "Третьяковская галерея: адрес, часы работы, выставки, экскурсии и билеты.";

export const Route = createFileRoute("/venues/art-galereya")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <VenuePdp type="art_gallery" />,
});
