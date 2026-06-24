# Documento de Requisitos del Producto (PRD) - Versión 1.1
## Proyecto: Portafolio Web & Landing Page

### 1. Visión General del Producto
El objetivo de este proyecto es construir una landing page estática de alto impacto visual y rendimiento óptimo para actuar como portafolio profesional. El sitio se alojará en **GitHub Pages**, lo que exige una arquitectura basada en tecnologías frontend puras (HTML, CSS, JavaScript) o frameworks de generación estática. El enfoque principal es mostrar proyectos de arquitectura y diseño técnico de manera sofisticada y minimalista.

* **Nota de Fase Actual:** En esta primera etapa de desarrollo, **no se subirán proyectos reales**. El sitio utilizará un set de cuatro proyectos ficticios detallados en la Sección 4 para probar el comportamiento de la UI, el sistema de filtros y la estética visual.

---

### 2. Objetivos Estratégicos
* **Posicionamiento Profesional:** Crear una identidad digital sólida que refleje precisión, diseño moderno y capacidad técnica.
* **Conversión:** Facilitar que los clientes potenciales (públicos y privados) se contacten rápidamente.
* **Performance:** Lograr tiempos de carga mínimos y un diseño 100% responsivo (foco en mobile y desktop).

---

### 3. Estructura y Secciones de la Landing Page
El sitio se estructurará como una **Single Page Application (SPA)** con navegación fluida (scroll suave) a través de las siguientes secciones:

| Sección | Componentes Clave | Propósito |
| :--- | :--- | :--- |
| **Navbar (Navegación)** | Logotipo/Nombre (`spa estudio`), Enlaces (Portafolio, Contacto), Botón de acción rápido. | Navegación intuitiva y fija (*sticky*). |
| **Hero Section** | Frase de impacto (Propuesta de valor), Fondo visual potente, CTA (Llamado a la acción) principal. | Capturar la atención en los primeros 3 segundos. |
| **Portafolio (Galería)** | Grid de proyectos, filtros por categoría (Público / Privado), tarjetas de prueba con títulos y descripción breve. | Validar visualmente la UI y la interactividad de los filtros con datos simulados. |
| **Contacto** | Formulario limpio (Nombre, Email, Mensaje), enlaces a redes profesionales, correo directo. | Convertir visitantes en leads o clientes. |
| **Footer** | Copyright, enlaces legales mínimos y créditos. | Cierre formal del sitio. |

---

### 4. Proyectos Ficticios para Pruebas de UI
Para validar el diseño, el contraste de color, la distribución del grid y el correcto funcionamiento de los filtros por especialidad/categoría, se implementarán las siguientes cuatro tarjetas de prueba:

#### Proyecto 1: Centro Cívico Metropolitano
* **Categoría:** Público
* **Especialidad:** Diseño de Arquitectura e Ingeniería Estructural
* **Descripción Corta:** Propuesta conceptual para un edificio gubernamental de alta eficiencia energética, con áreas peatonales integradas y fachada bioclimática.
* **Uso en UI:** Evaluar imágenes de gran escala y textos de descripción mediana.

#### Proyecto 2: Complejo Residencial Altura
* **Categoría:** Privado
* **Especialidad:** Arquitectura de Interiores y Paisajismo
* **Descripción Corta:** Diseño de tres torres habitacionales con foco en la integración de áreas verdes privadas y optimización de luz natural en zonas comunes.
* **Uso en UI:** Probar la visualización en formato vertical y el contraste en tarjetas residenciales.

#### Proyecto 3: Escuela Técnica de Innovación
* **Categoría:** Público
* **Especialidad:** Especialidades Técnicas (HVAC, Acústica, Eléctrica)
* **Descripción Corta:** Plan maestro técnico para un centro educativo de alta complejidad, priorizando la distribución modular de aulas y laboratorios.
* **Uso en UI:** Verificar cómo se visualizan las etiquetas largas de especialidades técnicas en la UI.

#### Proyecto 4: Oficinas Corporativas C-Hub
* **Categoría:** Privado
* **Especialidad:** Remodelación y Arquitectura Comercial
* **Descripción Corta:** Rediseño interior de una planta libre industrial reconvertida en espacios de co-work modernos y salas de reuniones modulares.
* **Uso en UI:** Confirmar el funcionamiento del grid asimétrico y el comportamiento responsive con un número par de proyectos.

---

### 5. Requisitos Funcionales (FR)
* **RF-01: Navegación Fluida:** El menú debe dirigir al usuario a la sección correspondiente mediante un scroll suave sin recargar la página.
* **RF-02: Filtro de Proyectos (UI Mock):** El usuario debe poder hacer clic en los botones "Todos", "Público" o "Privado". La interfaz debe ocultar/mostrar instantáneamente los 4 proyectos ficticios correspondientes mediante clases de Tailwind o manipulación del DOM con JS.
* **RF-03: Formulario de Contacto:** Al estar en GitHub Pages, el formulario deberá integrarse con un servicio externo (como *Formspree* o *StaticForms*) para procesar los correos de prueba.
* **RF-04: Diseño Responsivo:** La interfaz debe adaptarse perfectamente a pantallas de smartphones, tablets y monitores de escritorio.

---

### 6. Requisitos No Funcionales (NFR)
* **RNF-01: Stack Tecnológico:** 
    * Estructura moderna utilizando clases utilitarias de **Tailwind CSS**.
    * Código limpio y modular para facilitar futuras actualizaciones.
* **RNF-02: Despliegue (Hosting):** Automatizado en **GitHub Pages** mediante la rama `main` o a través de un GitHub Action (si se usa algún empaquetador como Vite).
* **RNF-03: Placeholders de Imagen:** Para las imágenes de los cuatro proyectos ficticios, se utilizarán URLs temporales de alta calidad (ej. de *Unsplash* con temáticas de arquitectura minimalista) optimizadas para no ralentizar las pruebas iniciales.

---

### 7. Estructura de Archivos Recomendada
```text
mi-portafolio/
├── index.html          # Archivo principal con el HTML y los proyectos de prueba
├── package.json        # Dependencias (Tailwind CSS, Vite, etc.)
├── tailwind.config.js  # Configuración personalizada de estilos
└── src/
    ├── css/
    │   └── styles.css  # Estilos globales e inyecciones de Tailwind
    ├── js/
    │   └── main.js     # Lógica de filtros ficticios, scroll y formulario
    └── assets/         # Logos y assets temporales
```