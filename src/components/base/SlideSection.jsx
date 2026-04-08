import React from 'react';

/**
 * SlideSection - Componente para secciones con lista de viñetas
 * 
 * @param {Object} props
 * @param {string} props.title - Título de la sección
 * @param {string[]} props.bullets - Array de textos para las viñetas
 * @param {string} [props.className] - Clases CSS adicionales
 */
const SlideSection = ({ title, bullets = [], className = '' }) => {
  return (
    <div className={`slide-section ${className}`}>
      <h2 className="section-title">{title}</h2>
      <ul className="section-bullets">
        {bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
};

export default SlideSection;
