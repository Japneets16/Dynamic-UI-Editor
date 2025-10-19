import React, { useState } from "react";
import { useConfig } from "../../context/ConfigContext"; // ⬅️ added
import {
  ChevronDown,
  ChevronUp,
  Maximize2,
  Move,
  ZoomIn,
  ZoomOut,
  Camera,
} from "lucide-react";
import mainimage from "./images/product.png";

export default function FurnitureCustomizerMobile() {
  const [selectedFinish, setSelectedFinish] = useState("Leather Brown");
  const [isCustomizeExpanded, setIsCustomizeExpanded] = useState(true);
  const [activeTab, setActiveTab] = useState("arm-finish");

  // 🌈 access global config
  const { config } = useConfig();

  const leatherColors = [
    { name: "Leather Brown", color: "#4A4A4A" },
    { name: "Sage Green", color: "#6B7F5F" },
    { name: "Purple", color: "#6B5074" },
    { name: "Forest Green", color: "#527361" },
    { name: "Teal", color: "#2B8B7E" },
    { name: "Burgundy", color: "#6B3642" },
    { name: "Purple Dark", color: "#635074" },
    { name: "Deep Blue", color: "#4D6B7D" },
    { name: "Rust Red", color: "#B75D5D" },
  ];

  const siliconColors = [
    { name: "Teal Green", color: "#3B7A6D" },
    { name: "Rust", color: "#A05757" },
    { name: "Purple", color: "#705E7D" },
    { name: "Navy Blue", color: "#4D6280" },
    { name: "Red Wine", color: "#A04B56" },
    { name: "Olive", color: "#7A8266" },
  ];

  const shadowMap = {
    none: "none",
    sm: "0 1px 2px rgba(0,0,0,0.1)",
    md: "0 4px 6px rgba(0,0,0,0.15)",
    lg: "0 10px 15px rgba(0,0,0,0.25)",
  };

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundColor: config.general.backgroundColor,
        fontFamily: config.typography.fontFamily,
        fontSize: `${config.typography.fontSize}px`,
        fontWeight: config.typography.fontWeight,
      }}
    >
      {/* Product Image Section */}
      <div
        className="relative pb-8"
        style={{
          background: `linear-gradient(to bottom, ${config.general.backgroundColor}, white)`,
        }}
      >
        {/* View Photos Button */}
        <div className="absolute top-4 left-4 z-10">
          <button
            className="px-3 py-2 flex items-center gap-2 text-sm shadow-lg"
            style={{
              backgroundColor: config.button.bgColor,
              color: config.button.textColor,
              borderRadius: config.button.borderRadius,
              boxShadow: shadowMap[config.button.shadow],
            }}
          >
            <Camera size={16} />
            <span className="font-medium">View photos</span>
          </button>
        </div>

        {/* Main Product Image */}
        <div className="relative w-full pt-16 px-4 pb-4">
          <img
            src={mainimage}
            alt="Product 3D"
            className="w-full object-contain"
            style={{
              borderRadius: `${config.gallery.borderRadius}px`,
              boxShadow: shadowMap[config.general.shadow],
            }}
          />

          {/* Control Buttons */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2">
            {[Maximize2, Move, ZoomIn, ZoomOut].map((Icon, i) => (
              <button
                key={i}
                className="p-2.5 bg-white border rounded-lg shadow-md hover:bg-gray-50"
                style={{
                  borderColor: config.border.color,
                  borderWidth: `${config.border.width}px`,
                  borderRadius: config.button.borderRadius,
                  boxShadow: shadowMap[config.button.shadow],
                }}
              >
                <Icon size={18} className="text-gray-700" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Customization Panel */}
      <div
        className="shadow-2xl rounded-t-3xl -mt-4 relative z-20 flex-1"
        style={{
          backgroundColor: config.general.panelBg || "#fff",
          borderTopLeftRadius: `${config.general.cardRadius}px`,
          borderTopRightRadius: `${config.general.cardRadius}px`,
          boxShadow: shadowMap[config.general.shadow],
        }}
      >
        {/* Collapse/Expand Button */}
        <div className="flex justify-center py-2 border-b border-gray-100">
          <button
            onClick={() => setIsCustomizeExpanded(!isCustomizeExpanded)}
            className="p-2"
          >
            {isCustomizeExpanded ? (
              <ChevronDown size={28} className="text-gray-300" />
            ) : (
              <ChevronUp size={28} className="text-gray-300" />
            )}
          </button>
        </div>

        {isCustomizeExpanded && (
          <div className="px-5 pb-6">
            {/* Product Title and AR Button */}
            <div className="flex items-center justify-between pt-4 pb-3">
              <h1 className="text-xl font-bold text-gray-900">
                Cozy Lounge Chair
              </h1>
              <button
                className="px-3 py-1.5 border-2 rounded-md flex items-center gap-2"
                style={{
                  borderColor: config.border.color,
                  borderWidth: `${config.border.width}px`,
                  borderRadius: config.button.borderRadius,
                }}
              >
                <div className="w-5 h-5 border-2 border-gray-800 rounded flex items-center justify-center">
                  <div className="w-2.5 h-2.5 border-2 border-t-0 border-l-0 border-gray-800 rotate-45 -mt-0.5"></div>
                </div>
                <span className="text-sm font-semibold">AR</span>
              </button>
            </div>

            {/* Progress bars */}
            <div className="mb-5">
              <div className="h-2 bg-gray-200 rounded-full mb-2"></div>
              <div className="h-2 bg-gray-200 rounded-full w-3/5"></div>
            </div>

            {/* Customize Section Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-semibold text-gray-900">
                Customize your Chair
              </h2>
              <button className="p-1.5">
                <div className="flex flex-col gap-1">
                  <div className="w-5 h-0.5 bg-gray-800 rounded"></div>
                  <div className="w-5 h-0.5 bg-gray-800 rounded"></div>
                  <div className="w-5 h-0.5 bg-gray-800 rounded"></div>
                </div>
              </button>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200 mb-6 -mx-5 px-5">
              {["arms", "arm-finish", "arm-finish-2"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-3 text-sm transition-all ${
                    activeTab === tab
                      ? "border-b-2 border-gray-900 text-gray-900 font-medium"
                      : "text-gray-400 font-normal"
                  }`}
                >
                  {tab === "arms"
                    ? "Arms"
                    : tab === "arm-finish"
                    ? "Arm Finish"
                    : "Arm Finish 2"}
                </button>
              ))}
            </div>

            {/* Color Selection */}
            <div>
              {/* Leather Section */}
              <div className="mb-8">
                <h3 className="text-xs font-bold text-gray-400 mb-4 tracking-wider">
                  LEATHER
                </h3>
                <div className="flex flex-wrap gap-3 mb-3">
                  {leatherColors.slice(0, 6).map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedFinish(color.name)}
                      className={`w-12 h-12 rounded-full transition-all ${
                        selectedFinish === color.name
                          ? "ring-4 ring-red-500 ring-offset-2 scale-105"
                          : "ring-2 ring-gray-200"
                      }`}
                      style={{
                        backgroundColor: color.color,
                        borderRadius: config.button.borderRadius,
                      }}
                      title={color.name}
                    ></button>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {leatherColors.slice(6).map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedFinish(color.name)}
                      className={`w-12 h-12 rounded-full transition-all ${
                        selectedFinish === color.name
                          ? "ring-4 ring-red-500 ring-offset-2 scale-105"
                          : "ring-2 ring-gray-200"
                      }`}
                      style={{
                        backgroundColor: color.color,
                        borderRadius: config.button.borderRadius,
                      }}
                      title={color.name}
                    ></button>
                  ))}
                </div>
              </div>

              {/* Silicon Section */}
              <div className="mb-6">
                <h3 className="text-xs font-bold text-gray-400 mb-4 tracking-wider">
                  SILICON
                </h3>
                <div className="flex flex-wrap gap-3">
                  {siliconColors.map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedFinish(color.name)}
                      className={`w-12 h-12 rounded-full transition-all ${
                        selectedFinish === color.name
                          ? "ring-4 ring-red-500 ring-offset-2 scale-105"
                          : "ring-2 ring-gray-200"
                      }`}
                      style={{
                        backgroundColor: color.color,
                        borderRadius: config.button.borderRadius,
                      }}
                      title={color.name}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
