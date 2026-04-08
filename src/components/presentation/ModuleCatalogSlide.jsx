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
 * @param {boolean} [props.layout.showHeader] - Mostrar header en panel derecho
 * @param {string} [props.layout.headerText] - Texto del header
 * @param {Object} props.content - Contenido del catálogo
 * @param {Array} props.content.modules - Array de módulos con features
 */
const ModuleCatalogSlide = ({ title, subtitle, layout, content }) => {
  const { featuresPerRow = 3, moduleWidth = '30%', showHeader = false, headerText = '' } = layout;
  const module = content.modules[0];

  return (
    <SlideBase title={title}>
      {subtitle && (
        <p style={{
          fontSize: '1.125rem',
          marginBottom: '3rem',
          lineHeight: 1.5,
          color: '#757575',
          fontWeight: 400
        }}>
          {subtitle}
        </p>
      )}

      <div style={{
        display: 'flex',
        gap: '4rem',
        height: 'calc(100% - 4rem)',
        alignItems: 'stretch'
      }}>
        {/* Panel izquierdo: bloque sólido con nombre del módulo */}
        <div style={{
          flex: `0 0 ${moduleWidth}`,
          backgroundColor: '#027B76',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '3rem 2rem'
        }}>
          <h2 style={{
            fontSize: '3.5rem',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1,
            margin: 0,
            textAlign: 'center',
            letterSpacing: '0.02em'
          }}>
            {module.name}
          </h2>
        </div>

        {/* Panel derecho: header + features en grid */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          {showHeader && headerText && (
            <div style={{
              paddingBottom: '1rem',
              borderBottom: '2px solid #027B76'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                color: '#002E46',
                margin: 0,
                lineHeight: 1.3
              }}>
                {headerText}
              </h3>
            </div>
          )}

          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${featuresPerRow}, 1fr)`,
            gap: '2rem 2.5rem',
            alignContent: 'start'
          }}>
            {module.features.map((feature, index) => {
              const isString = typeof feature === 'string';
              const featureTitle = isString ? feature : feature.title;
              const featureDescription = isString ? '' : feature.description;

              return (
                <div key={index} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}>
                  <div style={{
                    backgroundColor: '#E6D6A7',
                    padding: '0.75rem 1rem',
                    borderLeft: '3px solid #027B76'
                  }}>
                    <p style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#1a1a1a',
                      lineHeight: 1.3,
                      margin: 0
                    }}>
                      {featureTitle}
                    </p>
                  </div>
                  {featureDescription && (
                    <div style={{
                      padding: '0.75rem 1rem',
                      backgroundColor: '#ffffff'
                    }}>
                      <p style={{
                        fontSize: '0.875rem',
                        fontWeight: 400,
                        color: '#4a4a4a',
                        lineHeight: 1.5,
                        margin: 0
                      }}>
                        {featureDescription}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SlideBase>
  );
};

export default ModuleCatalogSlide;
