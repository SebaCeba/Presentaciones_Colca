import React from 'react';
import SlideBase from '../base/SlideBase';
import '../base/SlideBase.css';

/**
 * ExpandedBulletsSlide - Slide con bullets expandidos (título + descripción)
 * 
 * @param {Object} props
 * @param {string} props.title - Título de la diapositiva
 * @param {Array} props.items - Array de objetos {title, description}
 */
const ExpandedBulletsSlide = ({ title, items }) => {
  return (
    <SlideBase title={title}>
      <div style={{
        width: '100%',
        overflow: 'hidden'
      }}>
        {items.map((item, index) => (
          <div key={index} style={{
            marginBottom: '2rem'
          }}>
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: 600,
              marginBottom: '0.5rem',
              lineHeight: 1.4
            }}>
              {item.title}
            </h3>
            <p style={{
              fontSize: '1.3rem',
              lineHeight: 1.6,
              margin: 0,
              paddingLeft: '1.5rem'
            }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </SlideBase>
  );
};

export default ExpandedBulletsSlide;
