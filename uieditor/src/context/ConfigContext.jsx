import React, { createContext, useContext, useState } from "react";

const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {
  const [config, setConfig] = useState({
    typography: {
      fontFamily: "Inter",
      fontWeight: 500,
      fontSize: 16,
    },
    button: {
      bgColor: "#ef4444",
      textColor: "#ffffff",
      borderRadius: "8px",
      shadow: "md",
      align: "center",
    },
    gallery: {
      alignment: "center",
      spacing: 10,
      borderRadius: 10,
    },
    general: {
      cardRadius: 16,
      padding: 20,
      backgroundColor: "#f9fafb",
      panelBg: "#ffffff", // Added for mobile panel
      shadow: "md", // Added for mobile shadows
    },
    border: {
      color: "#e5e7eb",
      width: 1,
    },
    layout: "desktop", // Changed from "responsive" to "desktop"
  });

  return (
    <ConfigContext.Provider value={{ config, setConfig }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => useContext(ConfigContext);