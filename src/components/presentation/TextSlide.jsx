import React from 'react';
import SlideBase from '../base/SlideBase';
import '../base/SlideBase.css';

/**
 * TextSlide - Diapositiva con párrafos de texto
 * 
 * @param {Object} props
 * @param {string} props.title - Título de la diapositiva
 * @param {string[]} props.paragraphs - Array de párrafos
 */
const TextSlide = ({ title, paragraphs }) => {
  return (
    <SlideBase title={title}>
      <div style={{
        width: '100%',
        textAlign: 'left',
        fontSize: '1.5rem',
        lineHeight: '1.8',
        overflow: 'hidden'
      }}>
        {paragraphs.map((paragraph, index) => (
          <p key={index} style={{ marginBottom: '1.5rem' }}>
            {paragraph}
          </p>
        ))}
      </div>
    </SlideBase>
  );
};

export default TextSlide;
