# 🚀 Memoria 3DSA — Portal del Año

> **Instituto Nacional Cantón Lourdes (INDEL)**[cite: 7, 8]  
> **Especialidad:** 3.º Bachillerato Técnico Vocacional en Desarrollo de Software «A»[cite: 7, 8]  
> **Docentes:** Prof. Javier Arturo García Mineros & Prof. Arcides Canales[cite: 7, 8]

---

## 📌 Descripción del Proyecto

**Memoria 3DSA** es un portal web estático, dinámico e interactivo diseñado como un archivo vivo de repaso de los 8 módulos cursados durante el año académico[cite: 7, 8]. 

El sitio centraliza y sintetiza los aprendizajes, el software instalado, las herramientas utilizadas, los instrumentos de evaluación, los recursos oficiales y las evidencias de los proyectos desarrollados tanto en el eje de Desarrollo de Software (Prof. Javier Mineros) como en el de Hardware, Redes y Robótica (Prof. Arcides Canales)[cite: 7, 8].

---

## 🌐 Enlace de Despliegue y Versión

* **URL Pública (GitHub Pages):** [https://nicolejesy.github.io/hub-3ds-a/](https://nicolejesy.github.io/hub-3ds-a/)[cite: 1]
* **Versión Actual:** `v0.2` (Día 1 — Cimientos del HUB)[cite: 3, 4]

---

## ✨ Características Principales

* 🎨 **Diseño Editorial Dark Premium:** Sistema de diseño oscuro con tipografía editorial (*Fraunces* e *Inter*), tarjetas interactivas y animaciones escalonadas[cite: 7, 8].
* ⚡ **Renderizado Dinámico:** Generación de las tarjetas de los 8 módulos en tiempo real desde el archivo `data/modulos.js`[cite: 7, 8].
* 🗂️ **Modal Accesible:** Fichas desplegables (`<dialog>`) con resumen, aprendizajes clave, programas, herramientas, enlaces verificados y quiz de lectura[cite: 7, 8].
* 🏆 **Proyectos Destacados:** Sección con entregas integradoras como *Vivero «La Marchita»*, *Tienda E-commerce PrestaShop*, *Vehículo 4WD Autónomo* y *Circuito LED con Visión Artificial*[cite: 7, 8].

---

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Maquetación semántica y estándares de accesibilidad (`aria-*`, navegación por teclado)[cite: 7, 8].
* **CSS3:** Custom properties, CSS Grid, Flexbox, animaciones con `IntersectionObserver` y diseño responsivo adaptado a móviles y escritorios[cite: 7, 8].
* **JavaScript (ES6+):** Módulos nativos, manipulación del DOM, control del flujo de foco y lógica de ventanas modales[cite: 7, 8].
* **Control de Versiones:** Git, repositorio remoto en GitHub y despliegue automático en GitHub Pages[cite: 7, 8].

---

## 👥 Equipo de Trabajo y Roles

| Integrante | Rol Principal | Aportes |
| :--- | :--- | :--- |
| **Nicole Hernández** | Líder Git / QA y Accesibilidad[cite: 4] | Control de versiones, pruebas de contraste, navegación por teclado y documentación[cite: 8]. |
| **Eileen Henríquez** | Diseñadora UI / Frontend[cite: 4] | Maquetación HTML, sistema visual en CSS, hero y componentes de tarjetas[cite: 8]. |
| **Jonathan García** | Curador de Contenido[cite: 4] | Estructura de datos, redacción de resúmenes de módulos, evidencias y enlaces[cite: 8]. |

---

## 📂 Estructura del Repositorio

```text
Memoria_3DSA/
├── index.html          → Estructura semántica principal
├── styles/
│   └── main.css        → Variables CSS, componentes, animaciones y responsive
├── scripts/
│   └── app.js          → Renderizado dinámico, modal accesible y navegación
├── data/
│   └── modulos.js      → Fuente de datos de los 8 módulos del año
└── README.md           → Documentación oficial del proyecto
