import React, { useState } from 'react';
import PresentationRenderer from '../components/presentation/PresentationRenderer';
import presentationData from '../content/onboarding-funcional-colca.json';

/**
 * OnboardingFuncionalColca - Página de presentación
 * 
 * Usa teclas de flecha para navegar:
 * - Flecha derecha / Espacio: siguiente slide
 * - Flecha izquierda: slide anterior
 */
const OnboardingFuncionalColca = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const totalSlides = presentationData.presentation.slides.length;

  // Toggle fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch((err) => {
        console.error('Error al activar pantalla completa:', err);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      });
    }
  };

  // Detectar cambios de fullscreen
  React.useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Navegación con teclado
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'Escape' && !document.fullscreenElement) {
        // ESC ya sale de fullscreen por defecto, este else es solo para claridad
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalSlides]);

  return (
    <div>
      <PresentationRenderer 
        data={presentationData}
        currentSlide={currentSlide}
      />
      <div style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        fontSize: '1.2rem',
        opacity: 0.5,
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <button
          onClick={toggleFullscreen}
          style={{
            padding: '0.5rem 1rem',
            fontSize: '0.9rem',
            border: '1px solid #333',
            background: 'white',
            cursor: 'pointer',
            borderRadius: '4px',
            opacity: 0.7,
            transition: 'opacity 0.2s'
          }}
          onMouseEnter={(e) => e.target.style.opacity = 1}
          onMouseLeave={(e) => e.target.style.opacity = 0.7}
          title="Presiona F para pantalla completa"
        >
          {isFullscreen ? '⊡ Salir' : '⛶ Pantalla completa'}
        </button>
        <span>{currentSlide + 1} / {totalSlides}</span>
      </div>
    </div>
  );
};

export default OnboardingFuncionalColca;
