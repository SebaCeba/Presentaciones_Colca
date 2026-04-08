import React from 'react';
import SlideBase from '../base/SlideBase';
import '../base/SlideBase.css';

/**
 * FrameworkSlide - Slide con diagrama waterfall/cascade del framework
 * 
 * @param {Object} props
 * @param {string} props.title - Título de la slide
 * @param {Array} props.steps - Array de objetos {name, description}
 * @param {string} [props.emphasis] - Frase de cierre
 */
const FrameworkSlide = ({ title, steps, emphasis }) => {
  return (
    <SlideBase title={title}>
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        {/* Diagrama waterfall */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.8rem',
          width: '100%',
          maxWidth: '95%',
          marginBottom: '2.5rem'
        }}>
          {steps.map((step, index) => (
            <div key={index} style={{
              marginLeft: `${index * 70}px`,
              width: `calc(100% - ${index * 70}px)`,
              maxWidth: '550px',
              border: '2px solid #333',
              padding: '1.2rem 1.8rem',
              backgroundColor: '#fff',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.4rem'
            }}>
              <div style={{
                fontSize: '1.2rem',
                fontWeight: 600,
                color: '#000',
                lineHeight: 1.3
              }}>
                {step.name}
              </div>
              <div style={{
                fontSize: '0.95rem',
                color: '#666',
                lineHeight: 1.4
              }}>
                {step.description}
              </div>
            </div>
          ))}
        </div>

        {/* Frase de cierre */}
        {emphasis && (
          <div style={{
            fontSize: '1.1rem',
            fontStyle: 'italic',
            textAlign: 'center',
            color: '#444',
            maxWidth: '75%'
          }}>
            {emphasis}
          </div>
        )}
      </div>
    </SlideBase>
  );
};

export default FrameworkSlide;
