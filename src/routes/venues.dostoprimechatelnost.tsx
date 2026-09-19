import { createFileRoute } from "@tanstack/react-router";
import { VenuePdp } from "@/components/venue-pdp";

const title = "Собор Василия Блаженного — экскурсии и билеты | Дайбилет";
const description = "Собор Василия Блаженного: адрес, часы работы, маршруты, экскурсии и билеты.";

export const Route = createFileRoute("/venues/dostoprimechatelnost")({
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
  component: () => <VenuePdp type="landmark" />,
});
