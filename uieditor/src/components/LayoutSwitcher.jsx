import { useConfig } from "../context/ConfigContext";

export default function LayoutSwitcher() {
  const { config, setConfig } = useConfig();

  const toggleLayout = () => {
    setConfig((prev) => ({
      ...prev,
      layout: prev.layout === "desktop" ? "mobile" : "desktop",
    }));
  };

  return (
    <div className="mb-4 flex justify-between items-center">
      <span className="font-medium">Layout:</span>
      <button
        onClick={toggleLayout}
        className="bg-gray-800 text-white px-3 py-1 rounded"
      >
        {config.layout === "desktop" ? "Switch to Mobile" : "Switch to Desktop"}
      </button>
    </div>
  );
}
