// app/page.tsx
import OpenLayersMap from "../components/OpenLayersMap";

export default function HomePage() {
  return (
    <main style={{ width: "100%", height: "100%" }}>
      <OpenLayersMap />
    </main>
  );
}
