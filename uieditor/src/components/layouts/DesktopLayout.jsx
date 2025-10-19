import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Maximize2,
  Move,
  ZoomIn,
  ZoomOut,
  Eye,
} from "lucide-react";
import { useConfig } from "../../context/ConfigContext";
import mainimage from "./images/product.png";
import image1 from "./images/1.jpg";

export default function FurnitureCustomizer() {
  const [selectedArms, setSelectedArms] = useState("Fixed Arms");
  const [selectedFinish, setSelectedFinish] = useState("Leather Brown");
  const [selectedLegs, setSelectedLegs] = useState("Steel");
  const [expandedSection, setExpandedSection] = useState("arms-finish");

  const { config } = useConfig();

  const leatherColors = [
    { name: "Leather Brown", color: "#8B6F47" },
    { name: "Brown", color: "#6B4423" },
    { name: "Sage Green", color: "#6B7F5F" },
    { name: "Forest Green", color: "#4A5F4F" },
    { name: "Dark Green", color: "#3F5F4F" },
    { name: "Navy", color: "#4F5273" },
    { name: "Purple", color: "#6B4F6F" },
    { name: "Deep Blue", color: "#3F5F7F" },
    { name: "Rust Red", color: "#AF4F4F" },
    { name: "Burgundy", color: "#6F2F3F" },
    { name: "Teal", color: "#2F6F5F" },
  ];

  const siliconColors = [
    { name: "Dark Brown", color: "#5F4F4F" },
    { name: "Olive", color: "#6B7F5F" },
    { name: "Moss Green", color: "#5F6F5F" },
    { name: "Sea Green", color: "#5F7F6F" },
    { name: "Slate", color: "#5F5F6F" },
  ];

  const thumbnails = ["image1.png", "image2.png", "image3.png", "image2.png", "image3.png"];

  const shadowMap = {
    none: "none",
    sm: "0 1px 2px rgba(0,0,0,0.1)",
    md: "0 4px 6px rgba(0,0,0,0.15)",
    lg: "0 10px 15px rgba(0,0,0,0.25)",
  };

  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundColor: config.general.backgroundColor,
        fontFamily: config.typography.fontFamily,
        fontSize: `${config.typography.fontSize}px`,
        fontWeight: config.typography.fontWeight,
      }}
    >
      <div className="flex h-screen">
        {/* Left Side - Product Image */}
        <div
          className="flex-1 flex flex-col"
          style={{
            padding: `${config.general.padding}px`,
          }}
        >
          {/* Thumbnail Strip */}
          <div className="hidden lg:flex gap-2 mb-4">
            {thumbnails.map((thumb, idx) => (
              <div
                key={idx}
                className="w-16 h-16 border-2 rounded cursor-pointer hover:border-gray-400 overflow-hidden bg-white"
                style={{
                  borderColor: config.border.color,
                  borderWidth: `${config.border.width}px`,
                  borderRadius: `${config.gallery.borderRadius}px`,
                  marginRight: `${config.gallery.spacing / 2}px`,
                }}
              >
                <img
                  src={image1}
                  alt={`Thumbnail ${idx}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Main Product Image */}
          <div className="flex-1 flex items-center justify-center relative">
            <div className="relative w-full max-w-2xl">
              <img
                src={mainimage}
                alt="Product 3D"
                className="w-full"
                style={{
                  borderRadius: `${config.gallery.borderRadius}px`,
                }}
              />
              {/* Control Buttons */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                {[Maximize2, Move, ZoomIn, ZoomOut].map((Icon, i) => (
                  <button
                    key={i}
                    className="p-2 bg-white border rounded shadow hover:bg-gray-50"
                    style={{
                      borderColor: config.border.color,
                      borderWidth: `${config.border.width}px`,
                      boxShadow: shadowMap[config.button.shadow],
                      borderRadius: `${config.button.borderRadius}`,
                    }}
                  >
                    <Icon size={20} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* View in Room Button */}
          <div
            className="mt-6"
            style={{
              display: 'flex',
              justifyContent: config.button.align === 'center' ? 'center' : config.button.align === 'right' ? 'flex-end' : 'flex-start',
            }}
          >
            <button
              className="px-6 py-3 border-2 flex items-center gap-2 hover:opacity-90"
              style={{
                borderColor: config.border.color,
                borderWidth: `${config.border.width}px`,
                borderRadius: `${config.button.borderRadius}`,
                color: config.button.textColor,
                backgroundColor: config.button.bgColor,
                boxShadow: shadowMap[config.button.shadow],
              }}
            >
              <Eye size={20} />
              <span className="font-medium">View in your room</span>
            </button>
          </div>
        </div>

        {/* Right Side - Customization Panel */}
        <div
          className="w-96 bg-white shadow-lg overflow-y-auto"
          style={{
            borderLeft: `${config.border.width}px solid ${config.border.color}`,
          }}
        >
          <div className="p-6">
            {/* Product Title */}
            <h1 className="text-2xl font-bold mb-6">Cozy Lounge Chair</h1>

            {/* Customize Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Customize your Chair</h2>
                <button className="p-1">
                  <div className="flex flex-col gap-1">
                    <div className="w-4 h-0.5 bg-gray-800"></div>
                    <div className="w-4 h-0.5 bg-gray-800"></div>
                    <div className="w-4 h-0.5 bg-gray-800"></div>
                  </div>
                </button>
              </div>

              {/* 1. Arms */}
              <div className="mb-4 border-b pb-4">
                <button
                  onClick={() =>
                    setExpandedSection(expandedSection === "arms" ? "" : "arms")
                  }
                  className="w-full flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
                      <div className="w-8 h-6 bg-gray-300 rounded-t-full"></div>
                    </div>
                    <div className="text-left">
                      <div className="font-medium">1. Arms</div>
                      <div className="text-sm text-gray-500">{selectedArms}</div>
                    </div>
                  </div>
                  {expandedSection === "arms" ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>
              </div>

              {/* 2. Arms Finish */}
              <div className="mb-4">
                <button
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === "arms-finish" ? "" : "arms-finish"
                    )
                  }
                  className="w-full flex items-center justify-between mb-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded overflow-hidden">
                      <div className="w-full h-full bg-amber-800"></div>
                    </div>
                    <div className="text-left">
                      <div className="font-medium">2. Arms Finish</div>
                      <div className="text-sm text-gray-500">
                        {selectedFinish}
                      </div>
                    </div>
                  </div>
                  {expandedSection === "arms-finish" ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>

                {expandedSection === "arms-finish" && (
                  <div className="pl-4">
                    {/* Leather Section */}
                    <div className="mb-4">
                      <h3 className="text-xs font-semibold text-gray-400 mb-3">
                        LEATHER
                      </h3>
                      <div className="grid grid-cols-5 gap-2 mb-3">
                        {leatherColors.map((color, idx) => (
                          <button
                            key={idx}
                            onClick={() => setSelectedFinish(color.name)}
                            className={`w-12 h-12 rounded-full border-2 ${
                              selectedFinish === color.name
                                ? "border-gray-800 ring-2 ring-gray-300"
                                : "border-gray-200"
                            }`}
                            style={{ backgroundColor: color.color }}
                            title={color.name}
                          ></button>
                        ))}
                      </div>
                      {selectedFinish &&
                        leatherColors.find((c) => c.name === selectedFinish) && (
                          <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                            <div
                              className="w-10 h-10 rounded"
                              style={{
                                backgroundColor: leatherColors.find(
                                  (c) => c.name === selectedFinish
                                )?.color,
                              }}
                            ></div>
                            <span className="text-sm font-medium">
                              {selectedFinish}
                            </span>
                          </div>
                        )}
                    </div>

                    {/* Silicon Section */}
                    <div className="mb-4">
                      <h3 className="text-xs font-semibold text-gray-400 mb-3">
                        SILICON
                      </h3>
                      <div className="grid grid-cols-5 gap-2">
                        {siliconColors.map((color, idx) => (
                          <button
                            key={idx}
                            onClick={() => setSelectedFinish(color.name)}
                            className={`w-12 h-12 rounded-full border-2 ${
                              selectedFinish === color.name
                                ? "border-gray-800 ring-2 ring-gray-300"
                                : "border-gray-200"
                            }`}
                            style={{ backgroundColor: color.color }}
                            title={color.name}
                          ></button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 3. Legs Finish */}
              <div className="mb-6 border-b pb-4">
                <button
                  onClick={() =>
                    setExpandedSection(expandedSection === "legs" ? "" : "legs")
                  }
                  className="w-full flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-b from-gray-300 to-gray-400"></div>
                    </div>
                    <div className="text-left">
                      <div className="font-medium">3. Legs Finish</div>
                      <div className="text-sm text-gray-500">{selectedLegs}</div>
                    </div>
                  </div>
                  {expandedSection === "legs" ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* Product Price */}
            <div className="mb-6">
              <h3 className="text-gray-600 mb-2">Product Price</h3>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">$200</span>
                <span className="text-gray-400 line-through">$245</span>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div
              className="flex"
              style={{
                justifyContent:
                  config.button.align === "center"
                    ? "center"
                    : config.button.align === "right"
                    ? "flex-end"
                    : "flex-start",
              }}
            >
              <button
                className="font-semibold py-3 px-8 transition-colors"
                style={{
                  backgroundColor: config.button.bgColor,
                  color: config.button.textColor,
                  borderRadius: config.button.borderRadius,
                  boxShadow: shadowMap[config.button.shadow],
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}