# Memorias 3DSA

> El año, módulo por módulo.

Portal de repaso del 3.º Bachillerato Técnico Vocacional en Desarrollo de Software «A» del Instituto Nacional Cantón Lourdes (INDEL). Reúne los 9 módulos del programa, con su enfoque, herramientas, docentes y recursos de práctica.

**Versión actual:** `v0.5`

---

## ✨ Funcionalidades v0.5

- [x] Diseño editorial oscuro con acento ámbar.
- [x] Grid de 9 módulos generado desde `data/modulos.js`, ordenados por su código oficial.
- [x] Búsqueda por nombre, resumen, programas, herramientas y palabras clave.
- [x] Filtros por docente: `Todos`, `Arcides Canales`, `Javier Mineros` y `Julio Portillo`.
- [x] Estado vacío con botón de limpieza.
- [x] Botón de “Marcar como repasado” en tarjeta y en modal.
- [x] Persistencia con `localStorage`.
- [x] Barra de progreso global con porcentaje y texto de avance.
- [x] Toast de celebración al completar los 9 módulos.
- [x] Implementación responsive y accesible.

---

## 🧭 Revisión cruzada

Se usaron GitHub Issues como soporte para revisar el progreso del portal y cerrar tareas con un enfoque claro.

- **Issue 1:** actualizar la estructura de datos con los nuevos módulos reales del curso y corregir el número total de módulos.
- **Issue 2:** implementar la toolbar de búsqueda y filtros, evitando romper el diseño base del portal.

La revisión cruzada permitió validar que el contenido, el comportamiento y la nomenclatura del sitio fueran coherentes antes de publicar la versión v0.5.

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

---

## 🤖 Registro de prompts de IA usados hoy

| # | Prompt resumido | Resultado |
|---|---|---|
| 1 | Actualizar la base de datos del portal con los módulos y docentes correctos. | Se actualizó `data/modulos.js` con la información del programa. |
| 2 | Implementar la versión v0.5 con buscador, filtros, progreso y estado de repasado. | Se añadieron las interacciones y persistencia en `scripts/app.js`. |
| 3 | Ajustar la marca del portal a “Memorias 3DSA” y corregir textos que mencionaban 8 módulos. | Se actualizaron los textos visibles en `index.html` y `README.md`. |

---

## 📝 Notas finales

- El nombre oficial del portal es **Memorias 3DSA**.
- La versión actual del sitio corresponde a **v0.5**.
- El diseño mantiene la paleta y la tipografía originales sin romper la base del proyecto anterior.
