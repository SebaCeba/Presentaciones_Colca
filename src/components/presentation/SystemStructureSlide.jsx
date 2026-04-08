import React from 'react';
import SlideBase from '../base/SlideBase';
import '../base/SlideBase.css';

/**
 * SystemStructureSlide - Slide con layout de 3 columnas tipo diagrama
 */
const SystemStructureSlide = () => {
  const columns = [
    {
      title: 'START',
      sections: [
        {
          subtitle: 'Contratación y Activación',
          items: [
            'Propuesta, validación y firma electrónica',
            'Creación automática del entorno (tenant)',
            'Transición hacia uso productivo'
          ]
        },
        {
          subtitle: 'Onboarding / Setup',
          items: [
            'Activación inicial y OTP/credenciales',
            'Configuración base de empresa',
            'Creación de usuarios/roles'
          ]
        }
      ]
    },
    {
      title: 'CLIENT',
      sections: [
        {
          subtitle: 'Configuración de Clientes y Contratos',
          items: [
            'Estructura contractual: mandante + contrato/OC/OS/SD',
            'Parametriza cumplimiento: rubro, riesgo, requisitos',
            'Validación de coherencia y activación'
          ]
        }
      ]
    },
    {
      title: 'STAFF',
      sections: [
        {
          subtitle: 'Gestión Documental de Personas',
          items: [
            'Nómina (alta/baja) + carga de documentos',
            'Validación automática (RULES) y estados',
            'Reutilización y alertas preventivas (ORBIT/PANEL)'
          ]
        }
      ]
    }
  ];

  return (
    <SlideBase title="Estructura del sistema">
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '2rem',
        width: '100%',
        height: '100%',
        alignItems: 'stretch',
        overflow: 'hidden'
      }}>
        {columns.map((column, index) => (
          <div key={index} style={{
            flex: 1,
            border: '2px solid #333',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            overflow: 'hidden'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 700,
              marginBottom: '1.5rem',
              textAlign: 'center',
              width: '100%'
            }}>
              {column.title}
            </h2>
            
            {column.sections.map((section, sIdx) => (
              <div key={sIdx} style={{
                marginBottom: sIdx < column.sections.length - 1 ? '2rem' : 0,
                width: '100%'
              }}>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  marginBottom: '0.8rem',
                  color: '#555',
                  lineHeight: 1.3
                }}>
                  {section.subtitle}
                </h3>
                <ul style={{
                  listStyle: 'disc',
                  padding: 0,
                  paddingLeft: '1.3rem',
                  margin: 0
                }}>
                  {section.items.map((item, iIdx) => (
                    <li key={iIdx} style={{
                      fontSize: '0.9rem',
                      marginBottom: '0.6rem',
                      lineHeight: 1.4
                    }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </SlideBase>
  );
};

export default SystemStructureSlide;
