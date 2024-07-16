import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const DarkLightButton = ({ onToggle }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    onToggle(newMode); // Llama a la función onToggle que estoy enviando como prop
  };

  return (
    <button
      onClick={toggleMode}
      style={{ padding: '8px 16px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}
    >
           {/* {isDarkMode ? 'Light', <Sun /> : 'Dark', <Moon />} */}
            {isDarkMode ? (
        <>
          Light <Sun size={18} />
        </>
      ) : (
        <>
          Dark <Moon size={18} />
        </>
      )}
    </button>
  );
};

export default DarkLightButton;

