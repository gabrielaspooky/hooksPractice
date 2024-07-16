import React, { useState } from 'react';
import DarkLightButton from './DarkLightButton';

const Parent = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const imgStyle = {
    borderRadius: '50%',
    width: '150px',
    height: '150px',
  };

  const containerStyle = {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
    backgroundColor: isDarkMode ? '#333' : '#fff',
    color: isDarkMode ? '#fff' : '#333',
  };

  const handleToggle = (newMode) => {
    setIsDarkMode(newMode);
  };

  return (
    <div style={containerStyle}>
      <img
        src="https://media.licdn.com/dms/image/D4D03AQEIwlksHyZ9fA/profile-displayphoto-shrink_800_800/0/1720981593589?e=1726704000&v=beta&t=ybQ-fILXE07NmCfC2KBonRAz0GPMMnL1zTQlNuOa9pI"
        alt="Foto de perfil"
        style={imgStyle}
      />
      <h1>¡Hola, mundo! Mi nombre es Gabriela</h1>
      <p>
        Conecta conmigo si buscas un perfil que vaya más allá de la gestión y no tema "picar código"
        colaborando directamente en el desarrollo de aplicaciones web guiadas por una perspectiva
        técnica documentada, protocolos QA óptimos y el aporte de una visión holística y creativa al
        equipo.
      </p>
      <DarkLightButton onToggle={handleToggle} />
    </div>
  );
};

export default Parent;

