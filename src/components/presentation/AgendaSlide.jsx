import React from 'react';
import SlideBase from '../base/SlideBase';
import '../base/SlideBase.css';

/**
 * AgendaSlide - Slide tipo agenda con bloques numerados
 * 
 * @param {Object} props
 * @param {string} props.title - Título de la agenda
 * @param {Array} props.items - Array de objetos {number, title, description}
 */
const AgendaSlide = ({ title, items }) => {
  return (
    <SlideBase title={title}>
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '4rem',
          width: '100%',
          maxWidth: '95%'
        }}>
          {items.map((item, index) => (
            <div key={index} style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              {/* Círculo con número */}
              <div style={{
                width: '80px',
                height: '80px',
                border: '2px solid #333',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: 300,
                marginBottom: '1rem'
              }}>
                {item.number}
              </div>

              {/* Línea vertical */}
              <div style={{
                width: '2px',
                height: '40px',
                backgroundColor: '#333',
                marginBottom: '1.5rem'
              }}></div>

              {/* Título */}
              <h3 style={{
                fontSize: '2rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                margin: 0,
                marginBottom: '1.5rem',
                color: '#000'
              }}>
                {item.title}
              </h3>

              {/* Bajada */}
              <div style={{
                fontSize: '1.1rem',
                lineHeight: 1.6,
                color: '#555',
                maxWidth: '280px'
              }}>
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideBase>
  );
};

export default AgendaSlide;
