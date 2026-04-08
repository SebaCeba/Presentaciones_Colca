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
  const { featuresPerRow = 3, moduleWidth = '30%' } = layout;
  const module = content.modules[0];

  return (
    <SlideBase title={title}>
      {subtitle && (
        <p style={{
          fontSize: '1.125rem',
          marginBottom: '2.5rem',
          lineHeight: 1.5,
          color: '#757575',
          fontWeight: 400
        }}>
          {subtitle}
        </p>
      )}

      <div style={{
        display: 'flex',
        gap: '3rem',
        height: 'calc(100% - 4rem)',
        alignItems: 'stretch'
      }}>
        {/* Panel izquierdo: bloque sólido con nombre del módulo */}
        <div style={{
          flex: `0 0 ${moduleWidth}`,
          backgroundColor: '#027B76',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.1,
            margin: 0,
            textAlign: 'center'
          }}>
            {module.name}
          </h2>
        </div>

        {/* Panel derecho: features en grid limpio */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: `repeat(${featuresPerRow}, 1fr)`,
          gap: '2rem 2.5rem',
          alignContent: 'start',
          paddingTop: '1rem'
        }}>
          {module.features.map((feature, index) => (
            <div key={index}>
              <p style={{
                fontSize: '1.125rem',
                fontWeight: 600,
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
