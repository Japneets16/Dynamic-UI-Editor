import { useEffect } from 'react';
import { useConfig } from '../context/ConfigContext';

export default function FontLoader() {
  const { config } = useConfig();

  useEffect(() => {
    // Remove previously loaded font link if exists
    const existingLink = document.getElementById('dynamic-font-link');
    if (existingLink) {
      existingLink.remove();
    }

    // Create and append new font link
    const link = document.createElement('link');
    link.id = 'dynamic-font-link';
    link.rel = 'stylesheet';
    
    // Google Fonts URL for the selected font family
    const fontFamily = config.typography.fontFamily;
    link.href = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(' ', '+')}:wght@400;500;600;700&display=swap`;
    
    document.head.appendChild(link);

    return () => {
      // Cleanup on unmount
      const linkToRemove = document.getElementById('dynamic-font-link');
      if (linkToRemove) {
        linkToRemove.remove();
      }
    };
  }, [config.typography.fontFamily]);

  return null; // This component doesn't render anything
}