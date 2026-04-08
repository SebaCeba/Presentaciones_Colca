import React from 'react';
import SlideBase from '../base/SlideBase';
import SlideSection from '../base/SlideSection';
import '../base/SlideBase.css';
import '../base/SlideSection.css';

/**
 * BulletsSlide - Diapositiva con bullets
 * 
 * @param {Object} props
 * @param {string} props.title - Título de la diapositiva
 * @param {string[]} props.bullets - Array de bullets
 * @param {string} [props.emphasis] - Texto de énfasis opcional
 */
const BulletsSlide = ({ title, bullets, emphasis }) => {
  return (
    <SlideBase title={title}>
      <SlideSection title="" bullets={bullets} />
      {emphasis && (
        <div style={{ 
          marginTop: '2rem', 
          fontSize: '1.5rem', 
          fontStyle: 'italic',
          textAlign: 'left'
        }}>
          {emphasis}
        </div>
      )}
    </SlideBase>
  );
};

export default BulletsSlide;
