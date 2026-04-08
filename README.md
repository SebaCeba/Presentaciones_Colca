# Presentaciones COLCA

Sistema de componentes React para crear presentaciones de manera simple y reutilizable.

## Estructura del Proyecto

```
src/
└── components/
    ├── base/              # Componentes base reutilizables
    │   ├── SlideBase.jsx
    │   ├── SlideBase.css
    │   ├── SlideSection.jsx
    │   └── SlideSection.css
    └── slides/            # Diapositivas específicas
        └── StaffIntro.jsx
```

## Componentes Base

### SlideBase

Componente contenedor principal para todas las diapositivas.

**Props:**
- `title` (string): Título principal de la diapositiva
- `children` (ReactNode): Contenido de la diapositiva
- `className` (string, opcional): Clases CSS adicionales

**Ejemplo:**
```jsx
import SlideBase from './components/base/SlideBase';
import './components/base/SlideBase.css';

<SlideBase title="MI PRESENTACIÓN">
  <p>Contenido aquí</p>
</SlideBase>
```

**Características:**
- Layout centrado vertical y horizontalmente
- Título grande y dominante (6rem, mayúsculas)
- Altura completa de viewport (100vh)
- Padding generoso para respiración visual

---

### SlideSection

Componente para mostrar una sección con lista de viñetas.

**Props:**
- `title` (string): Título de la sección
- `bullets` (string[]): Array de textos para las viñetas
- `className` (string, opcional): Clases CSS adicionales

**Ejemplo:**
```jsx
import SlideSection from './components/base/SlideSection';
import './components/base/SlideSection.css';

<SlideSection 
  title="Objetivos"
  bullets={[
    'Primer objetivo',
    'Segundo objetivo',
    'Tercer objetivo'
  ]}
/>
```

**Características:**
- Título de sección centrado (3rem)
- Bullets con amplio espaciado (3rem entre cada uno)
- Fuente grande y legible (2rem)
- Line-height generoso para mayor claridad

---

## Diapositivas

### StaffIntro

Diapositiva de presentación del STAFF.

**Uso:**
```jsx
import StaffIntro from './components/slides/StaffIntro';

<StaffIntro />
```

**Contenido:**
- Título: STAFF
- Bullets:
  - Gestiona personas
  - Controla documentación
  - Asegura habilitación operativa

---

## Composición de Componentes

Puedes combinar los componentes base para crear nuevas diapositivas:

```jsx
import SlideBase from './components/base/SlideBase';
import SlideSection from './components/base/SlideSection';
import './components/base/SlideBase.css';
import './components/base/SlideSection.css';

const MiNuevaSlide = () => {
  return (
    <SlideBase title="TÍTULO PRINCIPAL">
      <SlideSection 
        title="Sección 1"
        bullets={[
          'Punto A',
          'Punto B',
          'Punto C'
        ]}
      />
    </SlideBase>
  );
};
```

---

## Diseño Visual

### Jerarquía
1. **Título principal** (h1): 6rem, mayúsculas, bold
2. **Título de sección** (h2): 3rem, semi-bold
3. **Bullets**: 2rem, espaciado amplio

### Espaciado
- Padding general: 3-4rem
- Separación título-contenido: 5rem
- Separación entre bullets: 3rem
- Line-height bullets: 2

### Tipografía
- Fuente del sistema: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif
- Sin colores (solo negro por defecto)
- Layout limpio tipo presentación

---

## Próximos Pasos

Para agregar más diapositivas:

1. Crea un nuevo archivo en `src/components/slides/`
2. Importa `SlideBase` y otros componentes necesarios
3. Compón tu diapositiva con los componentes base
4. Exporta el componente para usarlo en tu presentación

**Ejemplo:**
```jsx
// src/components/slides/MiSlide.jsx
import React from 'react';
import SlideBase from '../base/SlideBase';
import SlideSection from '../base/SlideSection';
import '../base/SlideBase.css';
import '../base/SlideSection.css';

const MiSlide = () => {
  return (
    <SlideBase title="MI SLIDE">
      <SlideSection 
        title="Contenido"
        bullets={['Item 1', 'Item 2']}
      />
    </SlideBase>
  );
};

export default MiSlide;
```
