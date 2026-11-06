# Memorias 3DSA

> El año, módulo por módulo.

Portal de repaso del 3.º Bachillerato Técnico Vocacional en Desarrollo de Software «A» del Instituto Nacional Cantón Lourdes (INDEL). Reúne los 9 módulos del programa, con su enfoque, herramientas, docentes y recursos de práctica.

**Versión actual:** `v1.0`

---

## ✨ Funcionalidades v1.0

- [x] Diseño editorial oscuro con acento ámbar.
- [x] Modo claro y modo oscuro con persistencia y detección de la preferencia del sistema.
- [x] Grid de 9 módulos generado desde `data/modulos.js`, ordenados por su código oficial.
- [x] Búsqueda por nombre, resumen, programas, herramientas y palabras clave.
- [x] Filtros por docente: `Todos`, `Arcides Canales`, `Javier Mineros` y `Julio Portillo`.
- [x] Estado vacío con botón de limpieza.
- [x] Botón de “Marcar como repasado” en tarjeta y en modal.
- [x] Persistencia del progreso con `localStorage`.
- [x] Barra de progreso global con porcentaje y texto de avance.
- [x] Toast de celebración al completar los 9 módulos.
- [x] Quiz interactivo por módulo con retroalimentación inmediata, puntaje final y mejor puntaje guardado.
- [x] Navegación con teclado en el quiz y en el portal.
- [x] Implementación responsive y accesible.
- [x] Versiones etiquetadas por día: v0.2, v0.5 y v1.0.

---

## 🧭 Revisión cruzada

Se usaron GitHub Issues como soporte para revisar el progreso del portal y cerrar tareas con un enfoque claro.

- **Issue 1:** actualizar la estructura de datos con los nuevos módulos reales del curso y corregir el número total de módulos.
- **Issue 2:** implementar la toolbar de búsqueda y filtros, evitando romper el diseño base del portal.
- **Issue 3:** completar las fichas pendientes y añadir el banco de preguntas por módulo.
- **Issue 4:** implementar el quiz interactivo con retroalimentación inmediata y modo claro/oscuro.
- **Issue 5:** auditoría de accesibilidad, responsive y publicación de la versión v1.0.

La revisión cruzada permitió validar que el contenido, el comportamiento y la nomenclatura del sitio fueran coherentes antes de publicar la versión v1.0.

---

## 🗂 Módulos del portal

| Código | Módulo | Docente(s) |
|---|---|---|
| BTVD3 3.0 | Orientación a los estudiantes al proceso educativo | Julio Portillo |
| BTVD3 3.1 | Desarrollo de aplicaciones de software para la solución de problemas | Arcides Canales |
| BTVD3 3.2 | Mantenimiento y aseguramiento de la operación del sistema informático | Arcides Canales / Julio Portillo |
| BTVD3 3.3 | Administración de base de datos | Javier Mineros |
| BTVD3 3.4 | Elaboración de documentación de sistemas informáticos | Javier Mineros |
| BTVD3 3.5 | Desarrollo de componentes para dispositivos móviles | Arcides Canales |
| BTVD3 3.6 | Conversación de inglés sobre mantenimiento de sistemas informáticos | Javier Mineros |
| BTVD3 3.7 | Puesta en marcha de la microempresa en asociatividad cooperativa | Julio Portillo |
| BTVD3 3.8 | Proyecto innovador de desarrollo de software | Javier Mineros |

## 🔧 Proyecto práctico destacado

El portal también presenta el semáforo sencillo construido con LEDs, Arduino Uno y protoboard, con la secuencia de luces programada desde Arduino IDE.

---

## 📍 Estructura del proyecto

```text
Memorias_3DSA/
├── index.html
├── README.md
├── data/
│   └── modulos.js
├── scripts/
│   └── app.js
├── styles/
│   └── main.css
└── assets/
```

---

## 🚀 Cómo ejecutar

Se recomienda servir la carpeta con un servidor HTTP local:

```bash
python -m http.server 5500
```

Luego abrir en el navegador:

```text
http://localhost:5500
```

En GitHub Pages funciona sin configuración adicional.

---

## 👥 Integrantes y roles

Registra aquí los nombres del equipo y sus roles principales (curador de contenido, líder Git, QA, etc.).

| Integrante | Rol |
|---|---|
| Estudiante 1 | Curador de contenido |
| Estudiante 2 | Líder Git |
| Estudiante 3 | QA / diseño |

---

## 🔗 Enlaces del proyecto

- **Repositorio:** `https://github.com/<equipo>/memorias-3dsa`
- **Portal publicado (GitHub Pages):** `https://<usuario>.github.io/memorias-3dsa/`

---

## 🤖 Registro de prompts de IA usados hoy

| # | Prompt resumido | Resultado |
|---|---|---|
| 1 | Actualizar la base de datos del portal con los módulos y docentes correctos. | Se actualizó `data/modulos.js` con la información del programa. |
| 2 | Implementar la versión v0.5 con buscador, filtros, progreso y estado de repasado. | Se añadieron las interacciones y persistencia en `scripts/app.js`. |
| 3 | Ajustar la marca del portal a “Memorias 3DSA” y corregir textos que mencionaban 8 módulos. | Se actualizaron los textos visibles en `index.html` y `README.md`. |
| 4 | Completar fichas pendientes y añadir al menos tres preguntas de quiz por módulo. | Se amplió `data/modulos.js` con contenido verificado y banco de preguntas. |
| 5 | Implementar quiz interactivo con retroalimentación inmediata y mejor puntaje. | Se añadió la lógica en `scripts/app.js` y estilos en `styles/main.css`. |
| 6 | Implementar modo claro y oscuro con persistencia y preferencia del sistema. | Se añadió el tema claro en `styles/main.css` y el control en `scripts/app.js`. |
| 7 | Auditar accesibilidad, responsive y rendimiento para Lighthouse. | Se revisaron contrastes, navegación por teclado y carga del portal. |

---

## ✅ Niveles implementados

- **Nivel Base:** portada, navegación, 9 módulos desde datos, fichas completas, diseño adaptable, publicación en GitHub Pages y README con registro de prompts.
- **Nivel Pro:** buscador y filtros en tiempo real, progreso guardado, quiz interactivo con retroalimentación y modo claro/oscuro.
- **Nivel Épico:** pendiente opcional (flashcards, línea de tiempo, PWA, etc.).

---

## 📝 Notas finales

- El nombre oficial del portal es **Memorias 3DSA**.
- La versión actual del sitio corresponde a **v1.0**.
- El diseño mantiene la paleta y la tipografía originales en modo oscuro y suma una versión clara para mejorar la accesibilidad.