import React from 'react';

/**
 * SlideBase - Componente base para presentaciones
 * 
 * @param {Object} props
 * @param {string} props.title - Título de la diapositiva
 * @param {React.ReactNode} props.children - Contenido de la diapositiva
 * @param {string} [props.className] - Clases CSS adicionales
 */
const SlideBase = ({ title, children, className = '' }) => {
  return (
    <div className={`slide-container ${className}`}>
      <div className="slide-title">
        <h1>{title}</h1>
      </div>
      <div className="slide-content">
        {children}
      </div>
    </div>
  );
};

export default SlideBase;
