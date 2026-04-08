import React from 'react';
import SlideBase from './base/SlideBase';
import SlideSection from './base/SlideSection';
import './base/SlideBase.css';
import './base/SlideSection.css';

/**
 * StaffIntro - Diapositiva de introducción del STAFF
 */
const StaffIntro = () => {
  const bullets = [
    'Gestiona personas',
    'Controla documentación',
    'Asegura habilitación operativa'
  ];

  return (
    <SlideBase title="STAFF">
      <SlideSection 
        title="STAFF"
        bullets={bullets}
      />
    </SlideBase>
  );
};

export default StaffIntro;
