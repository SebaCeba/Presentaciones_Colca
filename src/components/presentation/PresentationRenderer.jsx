import React from 'react';
import BulletsSlide from './BulletsSlide';
import TextSlide from './TextSlide';
import SystemStructureSlide from './SystemStructureSlide';
import ExpandedBulletsSlide from './ExpandedBulletsSlide';
import DiagramSlide from './DiagramSlide';
import AgendaSlide from './AgendaSlide';
import FrameworkSlide from './FrameworkSlide';

/**
 * PresentationRenderer - Renderiza una presentación desde JSON
 * 
 * @param {Object} props
 * @param {Object} props.data - Datos de la presentación
 * @param {number} [props.currentSlide] - Índice del slide actual (0-based)
 */
const PresentationRenderer = ({ data, currentSlide = 0 }) => {
  const slides = data.presentation.slides;
  const slide = slides[currentSlide];

  if (!slide) {
    return <div>No hay slide disponible</div>;
  }

  // Renderizar según tipo
  if (slide.type === 'systemStructure') {
    return <SystemStructureSlide />;
  }

  if (slide.type === 'framework') {
    return (
      <FrameworkSlide
        title={slide.title}
        steps={slide.steps}
        emphasis={slide.emphasis}
      />
    );
  }

  if (slide.type === 'agenda') {
    return (
      <AgendaSlide
        title={slide.title}
        items={slide.items}
      />
    );
  }

  if (slide.type === 'diagram') {
    return (
      <DiagramSlide
        title={slide.title}
        subtitle={slide.subtitle}
        columns={slide.columns}
      />
    );
  }

  if (slide.type === 'expandedBullets') {
    return (
      <ExpandedBulletsSlide
        title={slide.title}
        items={slide.items}
      />
    );
  }

  if (slide.type === 'bullets' || slide.type === 'hero') {
    return (
      <BulletsSlide 
        title={slide.title}
        bullets={slide.bullets}
        emphasis={slide.emphasis}
      />
    );
  }

  if (slide.type === 'text') {
    return (
      <TextSlide 
        title={slide.title}
        paragraphs={slide.paragraphs}
      />
    );
  }

  return <div>Tipo de slide desconocido: {slide.type}</div>;
};

export default PresentationRenderer;
