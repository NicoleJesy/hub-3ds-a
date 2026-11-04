# 🚀 Memoria 3DSA — Portal del Año

> **Instituto Nacional Cantón Lourdes (INDEL)**  
> **Especialidad:** 3.º Bachillerato Técnico Vocacional en Desarrollo de Software «A»  
> **Docentes:** Prof. Javier Arturo García Mineros & Prof. Arcides Canales

---

## 📌 Descripción del Proyecto

**Memoria 3DSA** es un portal web estático, dinámico e interactivo diseñado como un archivo vivo de repaso de los 8 módulos cursados durante el año académico. 

El sitio centraliza y sintetiza los aprendizajes, el software instalado, las herramientas utilizadas, los instrumentos de evaluación, los recursos oficiales y las evidencias de los proyectos desarrollados tanto en el eje de Desarrollo de Software (Prof. Javier Mineros) como en el de Hardware, Redes y Robótica (Prof. Arcides Canales).

---

## 🌐 Enlace de Despliegue y Versión

* **URL Pública (GitHub Pages):** [https://nicolejesy.github.io/hub-3ds-a/](https://nicolejesy.github.io/hub-3ds-a/)
* **Versión Actual:** `v0.2` (Día 1 — Cimientos del HUB)

---

## ✨ Características Principales

* 🎨 **Diseño Editorial Dark Premium:** Sistema de diseño oscuro con tipografía editorial (*Fraunces* e *Inter*), tarjetas interactivas y animaciones escalonadas.
* ⚡ **Renderizado Dinámico:** Generación de las tarjetas de los 8 módulos en tiempo real desde el archivo `data/modulos.js`.
* 🗂️ **Modal Accesible:** Fichas desplegables (`<dialog>`) con resumen, aprendizajes clave, programas, herramientas, enlaces verificados y quiz de lectura.
* 🏆 **Proyectos Destacados:** Sección con entregas integradoras como *Vivero «La Marchita»*, *Tienda E-commerce PrestaShop*, *Vehículo 4WD Autónomo* y *Circuito LED con Visión Artificial*.

---

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Maquetación semántica y estándares de accesibilidad (`aria-*`, navegación por teclado).
* **CSS3:** Custom properties, CSS Grid, Flexbox, animaciones con `IntersectionObserver` y diseño responsivo adaptado a móviles y escritorios.
* **JavaScript (ES6+):** Módulos nativos, manipulación del DOM, control del flujo de foco y lógica de ventanas modales.
* **Control de Versiones:** Git, repositorio remoto en GitHub y despliegue automático en GitHub Pages.

---

## 👥 Equipo de Trabajo y Roles

| Integrante | Rol Principal | Aportes |
| :--- | :--- | :--- |
| **Nicole Hernández** | Líder Git / QA y Accesibilidad | Control de versiones, pruebas de contraste, navegación por teclado y documentación. |
| **Eileen Henríquez** | Diseñadora UI / Frontend. | Maquetación HTML, sistema visual en CSS, hero y componentes de tarjetas. |
| **Jonathan García** | Curador de Contenido | Estructura de datos, redacción de resúmenes de módulos, evidencias y enlaces. |

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
