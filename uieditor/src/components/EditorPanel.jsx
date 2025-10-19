import { useConfig } from "../context/ConfigContext";

export default function EditorPanel() {
  const { config, setConfig } = useConfig();

  const updateConfig = (section, key, value) => {
    setConfig((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value,
      },
    }));
  };

  const exportJSON = () => {
    const blob = new Blob([JSON.stringify(config, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ui-config.json";
    a.click();
  };

  return (
    <div className="space-y-6">
      {/* Typography */}
      <section>
        <h2 className="font-semibold mb-2">Typography</h2>

        <label className="block text-sm mb-1">Font Family</label>
        <select
          value={config.typography.fontFamily}
          onChange={(e) =>
            updateConfig("typography", "fontFamily", e.target.value)
          }
          className="border rounded px-2 py-1 w-full"
        >
          <option value="Inter">Inter</option>
          <option value="Roboto">Roboto</option>
          <option value="Poppins">Poppins</option>
          {/* <option value="Open Sans">Open Sans</option>
          <option value="Montserrat">Montserrat</option>
          <option value="Lato">Lato</option>
          <option value="Raleway">Raleway</option>
          <option value="Playfair Display">Playfair Display</option>
          <option value="Merriweather">Merriweather</option> */}
        </select>

        <label className="block text-sm mt-2 mb-1">Font Weight</label>
        <select
          value={config.typography.fontWeight}
          onChange={(e) =>
            updateConfig("typography", "fontWeight", Number(e.target.value))
          }
          className="border rounded px-2 py-1 w-full"
        >
          <option value={400}>400</option>
          <option value={500}>500</option>
          <option value={600}>600</option>
          <option value={700}>700</option>
        </select>

        <label className="block text-sm mt-2 mb-1">
          Font Size ({config.typography.fontSize}px)
        </label>
        <input
          type="range"
          min="10"
          max="60"
          value={config.typography.fontSize}
          onChange={(e) =>
            updateConfig("typography", "fontSize", Number(e.target.value))
          }
          className="w-full"
        />
      </section>

      {/* Button */}
      <section>
        <h2 className="font-semibold mb-2">Button</h2>

        <label className="block text-sm mb-1">Background</label>
        <input
          type="color"
          value={config.button.bgColor}
          onChange={(e) => updateConfig("button", "bgColor", e.target.value)}
        />

        <label className="block text-sm mt-2 mb-1">Text Color</label>
        <input
          type="color"
          value={config.button.textColor}
          onChange={(e) => updateConfig("button", "textColor", e.target.value)}
        />

        <label className="block text-sm mt-2 mb-1">
          Border Radius ({config.button.borderRadius})
        </label>
        <input
          type="range"
          min="0"
          max="50"
          value={parseInt(config.button.borderRadius)}
          onChange={(e) =>
            updateConfig("button", "borderRadius", `${e.target.value}px`)
          }
          className="w-full"
        />

        <label className="block text-sm mt-2 mb-1">Shadow</label>
        <select
          value={config.button.shadow}
          onChange={(e) =>
            updateConfig("button", "shadow", e.target.value)
          }
          className="border rounded px-2 py-1 w-full"
        >
          <option value="none">None</option>
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
        </select>

        <label className="block text-sm mt-2 mb-1">Alignment</label>
        <select
          value={config.button.align}
          onChange={(e) =>
            updateConfig("button", "align", e.target.value)
          }
          className="border rounded px-2 py-1 w-full"
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </section>

      {/* Gallery */}
      <section>
        <h2 className="font-semibold mb-2">Gallery</h2>

        <label className="block text-sm mb-1">Alignment</label>
        <select
          value={config.gallery.alignment}
          onChange={(e) =>
            updateConfig("gallery", "alignment", e.target.value)
          }
          className="border rounded px-2 py-1 w-full"
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>

        <label className="block text-sm mt-2 mb-1">
          Spacing ({config.gallery.spacing}px)
        </label>
        <input
          type="range"
          min="0"
          max="50"
          value={config.gallery.spacing}
          onChange={(e) =>
            updateConfig("gallery", "spacing", Number(e.target.value))
          }
          className="w-full"
        />

        <label className="block text-sm mt-2 mb-1">Image Border Radius</label>
        <input
          type="range"
          min="0"
          max="30"
          value={config.gallery.borderRadius}
          onChange={(e) =>
            updateConfig("gallery", "borderRadius", Number(e.target.value))
          }
          className="w-full"
        />
      </section>

      {/* Border */}
      <section>
        <h2 className="font-semibold mb-2">Border</h2>

        <label className="block text-sm mb-1">Color</label>
        <input
          type="color"
          value={config.border.color}
          onChange={(e) => updateConfig("border", "color", e.target.value)}
        />

        <label className="block text-sm mt-2 mb-1">Width</label>
        <input
          type="range"
          min="0"
          max="10"
          value={config.border.width}
          onChange={(e) =>
            updateConfig("border", "width", Number(e.target.value))
          }
          className="w-full"
        />
      </section>

      {/* General */}
      <section>
        <h2 className="font-semibold mb-2">General Layout</h2>
        
        <label className="block text-sm mb-1">Card Radius</label>
        <input
          type="range"
          min="0"
          max="40"
          value={config.general.cardRadius}
          onChange={(e) =>
            updateConfig("general", "cardRadius", Number(e.target.value))
          }
          className="w-full"
        />

        <label className="block text-sm mt-2 mb-1">Background Color</label>
        <input
          type="color"
          value={config.general.backgroundColor}
          onChange={(e) =>
            updateConfig("general", "backgroundColor", e.target.value)
          }
        />

        {/* <label className="block text-sm mt-2 mb-1">Panel Background (Mobile)</label> */}
        {/* <input
          type="color"
          value={config.general.panelBg}
          onChange={(e) =>
            updateConfig("general", "panelBg", e.target.value)
          }
        /> */}

        <label className="block text-sm mt-2 mb-1">Shadow</label>
        <select
          value={config.general.shadow}
          onChange={(e) =>
            updateConfig("general", "shadow", e.target.value)
          }
          className="border rounded px-2 py-1 w-full"
        >
          <option value="none">None</option>
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
        </select>
      </section>

      <button
        onClick={exportJSON}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full mt-4"
      >
        Export JSON
      </button>
    </div>
  );
}