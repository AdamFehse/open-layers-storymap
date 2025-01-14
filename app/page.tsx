// app/page.tsx
import OpenLayersMap from "../components/OpenLayersMap";
import OffCanvasSidebar from '../components/OffCanvasSidebar';
import AnotherSidebar from '../components/AnotherSidebar';

export default function HomePage() {
  return (
    <main style={{ width: "100%", height: "100%" }}>
      <OpenLayersMap />
      <OffCanvasSidebar />
    </main>
  );
}
