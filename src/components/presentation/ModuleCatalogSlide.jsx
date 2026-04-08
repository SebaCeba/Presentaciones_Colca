import React from 'react';
import SlideBase from '../base/SlideBase';
import '../base/SlideBase.css';

/**
 * ModuleCatalogSlide - Slide con patrón split layout: módulo + features en grid
 * 
 * @param {Object} props
 * @param {string} props.title - Título del módulo
 * @param {string} [props.subtitle] - Descripción breve del módulo
 * @param {Object} props.layout - Configuración de layout
 * @param {number} props.layout.featuresPerRow - Features por fila
 * @param {string} props.layout.moduleWidth - Ancho del área del módulo (%)
 * @param {string} props.layout.featureWidth - Ancho del área de features (%)
 * @param {Object} props.content - Contenido del catálogo
 * @param {Array} props.content.modules - Array de módulos con features
 */
const ModuleCatalogSlide = ({ title, subtitle, layout, content }) => {
  const { featuresPerRow = 3, moduleWidth = '30%', featureWidth = '70%' } = layout;
  const module = content.modules[0];

  return (
    <SlideBase title={title}>
      {subtitle && (
        <p style={{
          fontSize: '1.25rem',
          marginBottom: '3rem',
          lineHeight: 1.5,
          color: '#4a4a4a',
          fontWeight: 400
        }}>
          {subtitle}
        </p>
      )}

      <div style={{
        display: 'flex',
        gap: '3rem',
        height: 'calc(100% - 5rem)',
        alignItems: 'flex-start'
      }}>
        {/* Lado izquierdo: nombre del módulo */}
        <div style={{
          flex: `0 0 ${moduleWidth}`,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 600,
            color: '#002E46',
            lineHeight: 1.2,
            margin: 0
          }}>
            {module.name}
          </h2>
        </div>

        {/* Lado derecho: features en grid */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: `repeat(${featuresPerRow}, 1fr)`,
          gap: '1.5rem',
          alignContent: 'start'
        }}>
          {module.features.map((feature, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#E6D6A7',
                padding: '1.5rem',
                borderLeft: '4px solid #027B76',
                display: 'flex',
                alignItems: 'center',
                minHeight: '80px'
              }}
            >
              <p style={{
                fontSize: '1.125rem',
                fontWeight: 500,
                color: '#1a1a1a',
                lineHeight: 1.4,
                margin: 0
              }}>
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SlideBase>
  );
};

export default ModuleCatalogSlide;
