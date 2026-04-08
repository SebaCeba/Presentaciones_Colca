import React from 'react';
import SlideBase from '../base/SlideBase';
import '../base/SlideBase.css';

/**
 * DiagramSlide - Slide con diagrama de 6 columnas sobre base
 * 
 * @param {Object} props
 * @param {string} props.title - Título de la diapositiva
 * @param {string} [props.subtitle] - Bajada opcional
 * @param {Array} props.columns - Array de 6 objetos {title, content}
 */
const DiagramSlide = ({ title, subtitle, columns }) => {
  return (
    <SlideBase title={title}>
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}>
        {subtitle && (
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '1.5rem',
            lineHeight: 1.4,
            maxWidth: '75%',
            color: '#555'
          }}>
            {subtitle}
          </p>
        )}
        
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          {/* Columnas */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            gap: '1.2rem',
            width: '100%',
            maxWidth: '95%'
          }}>
            {columns.map((column, index) => (
              <div key={index} style={{
                flex: 1,
                minHeight: '300px',
                maxHeight: '350px',
                border: '2px solid #333',
                padding: '1.5rem 1rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                backgroundColor: '#fff',
                overflow: 'hidden'
              }}>
                <div style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  textAlign: 'center',
                  lineHeight: 1.3,
                  marginBottom: '0.8rem'
                }}>
                  {column.title}
                </div>
                {column.content && (
                  <div style={{
                    fontSize: '0.9rem',
                    textAlign: 'center',
                    lineHeight: 1.4,
                    color: '#444'
                  }}>
                    {column.content}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Base */}
          <div style={{
            width: '98%',
            height: '50px',
            backgroundColor: '#f5f5f5',
            border: '2px solid #333',
            borderTop: 'none',
            clipPath: 'polygon(3% 0%, 97% 0%, 100% 100%, 0% 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '-2px'
          }}>
            <span style={{
              fontSize: '0.95rem',
              fontWeight: 600,
              color: '#666'
            }}>
              Sistema STAFF
            </span>
          </div>
        </div>
      </div>
    </SlideBase>
  );
};

export default DiagramSlide;
