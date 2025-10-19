import { useConfig } from "../context/ConfigContext";
import DesktopLayout from "./layouts/DesktopLayout";
import MobileLayout from "./layouts/MobileLayout";

export default function PreviewComponent() {
  const { config } = useConfig();
  return config.layout === "desktop" ? <DesktopLayout /> : <MobileLayout />;
}
