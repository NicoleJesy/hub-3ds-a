/**
 * scripts/app.js
 * ---------------------------------------------------------------------------
 * Lógica del portal "Memoria 3DSA":
 *   · Pinta el grid de módulos desde data/modulos.js.
 *   · Abre y cierra el modal de ficha (botón, Escape y clic fuera).
 *   · Anima la entrada de los elementos con IntersectionObserver.
 *   · Resalta el enlace activo de la navegación y el estado de la cabecera.
 *
 * No usa frameworks ni dependencias externas.
 * ---------------------------------------------------------------------------
 */

import { MODULOS } from "../data/modulos.js";

/* ==========================================================================
   Utilidades
   ========================================================================== */

/** Escapa texto antes de insertarlo como HTML. */
const escaparHTML = (valor = "") =>
  String(valor).replace(/[&<>"']/g, (caracter) => {
    const mapa = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return mapa[caracter];
  });

/** Devuelve un color hexadecimal seguro (evita inyectar CSS desde los datos). */
const colorSeguro = (color) =>
  /^#(?:[0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(color || "") ? color : "var(--acento)";

/** Devuelve la URL solo si es http(s); en caso contrario, null. */
const urlSegura = (url) => {
  try {
    const parseada = new URL(url);
    return parseada.protocol === "https:" || parseada.protocol === "http:" ? parseada : null;
  } catch {
    return null;
  }
};

/** Iniciales de un nombre: "Javier Mineros" → "JM". */
const iniciales = (nombre = "") =>
  nombre
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((parte) => parte.charAt(0).toUpperCase())
    .join("");

/** Número con dos dígitos: 1 → "01". */
const dosDigitos = (numero) => String(numero).padStart(2, "0");

/** Icono de flecha externa reutilizable. */
const iconoFlechaExterna = `
  <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" focusable="false">
    <path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor"
      stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
  </svg>`;

const iconoFlechaDiagonal = `
  <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true" focusable="false">
    <path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor"
      stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
  </svg>`;

/* ==========================================================================
   Referencias del DOM
   ========================================================================== */

const grid = document.querySelector("#grid-modulos");
const modal = document.querySelector("#modal-ficha");
const cabecera = document.querySelector("#cabecera");

/* ==========================================================================
   Render del grid de módulos
   ========================================================================== */

/**
 * Construye el HTML de una tarjeta.
 * @param {object} modulo
 * @param {number} indice
 * @returns {string}
 */
function crearTarjeta(modulo, indice) {
  const nombre = escaparHTML(modulo.nombre);
  const color = colorSeguro(modulo.color);
  const instrumentos = Array.isArray(modulo.instrumentos) ? modulo.instrumentos.length : 0;
  const programas = Array.isArray(modulo.programas) ? modulo.programas.length : 0;
  const herramientas = Array.isArray(modulo.herramientas) ? modulo.herramientas.length : 0;

  return `
    <article class="tarjeta-modulo"
             style="--acento-modulo: ${color}; --retraso: ${indice * 70}ms">
      <div class="tarjeta-cabecera">
        <span class="tarjeta-icono" role="img" aria-label="Icono del módulo ${nombre}">
          ${escaparHTML(modulo.icono)}
        </span>
        <span class="tarjeta-numero" aria-hidden="true">${dosDigitos(indice + 1)}</span>
      </div>

      <h3 class="tarjeta-titulo">
        <button class="tarjeta-disparador" type="button"
                data-modulo="${escaparHTML(modulo.id)}"
                aria-haspopup="dialog" aria-controls="modal-ficha">
          ${nombre}<span class="visualmente-oculto">. Ver ficha completa</span>
        </button>
      </h3>

      <p class="tarjeta-docente">
        <span class="docente-monograma" aria-hidden="true">${escaparHTML(iniciales(modulo.docente))}</span>
        <span>${escaparHTML(modulo.docente)}</span>
      </p>

      <p class="tarjeta-resumen">${escaparHTML(modulo.resumen)}</p>

      <div class="tarjeta-pie">
        <p class="tarjeta-metricas">
          <span><strong>${instrumentos}</strong> instrumentos</span>
          <span class="separador-metrica" aria-hidden="true">·</span>
          <span><strong>${programas}</strong> programas</span>
          <span class="separador-metrica" aria-hidden="true">·</span>
          <span><strong>${herramientas}</strong> herramientas</span>
        </p>
        <span class="tarjeta-flecha" aria-hidden="true">${iconoFlechaDiagonal}</span>
      </div>
    </article>`;
}

/** Pinta todas las tarjetas y actualiza los contadores del hero. */
function renderModulos() {
  if (!grid) return;

  // Marca de éxito para el aviso de respaldo del HTML (file:// o red lenta).
  window.MEMORIA_3DSA_OK = true;
  const avisoCarga = document.querySelector("#aviso-carga");
  if (avisoCarga) avisoCarga.hidden = true;

  if (!Array.isArray(MODULOS) || MODULOS.length === 0) {
    grid.innerHTML = `
      <div class="aviso-carga">
        <p class="aviso-carga-titulo">Todavía no hay módulos</p>
        <p>Agrega el primer objeto al arreglo <code>MODULOS</code> en
        <code>data/modulos.js</code> y aparecerá aquí automáticamente.</p>
      </div>`;
    grid.setAttribute("aria-busy", "false");
    return;
  }

  grid.innerHTML = MODULOS.map(crearTarjeta).join("");
  grid.setAttribute("aria-busy", "false");

  // Contadores del hero calculados desde los datos.
  const totalModulos = dosDigitos(MODULOS.length);
  const totalDocentes = dosDigitos(new Set(MODULOS.map((modulo) => modulo.docente)).size);

  document.querySelectorAll("[data-total-modulos]").forEach((elemento) => {
    elemento.textContent = totalModulos;
  });
  document.querySelectorAll("[data-total-docentes]").forEach((elemento) => {
    elemento.textContent = totalDocentes;
  });
}

/* ==========================================================================
   Ficha dentro del modal
   ========================================================================== */

/** Crea una sección con título y contenido HTML. */
const crearSeccion = (titulo, contenido) => `
  <section class="modal-seccion">
    <h3 class="modal-subtitulo">${titulo}</h3>
    ${contenido}
  </section>`;

/** Crea una columna (instrumentos, programas o herramientas). */
const crearColumna = (titulo, elementos = []) => `
  <section class="modal-columna">
    <h3 class="modal-subtitulo">
      ${titulo}
      <span class="modal-subtitulo-conteo">${dosDigitos(elementos.length)}</span>
    </h3>
    <ul class="lista-simple">
      ${elementos.map((elemento) => `<li>${escaparHTML(elemento)}</li>`).join("")}
    </ul>
  </section>`;

/** Construye el contenido completo de la ficha de un módulo. */
function crearContenidoFicha(modulo) {
  const recursos = (modulo.recursos || [])
    .map((recurso) => {
      const url = urlSegura(recurso.url);
      if (!url) return "";
      const host = url.hostname.replace(/^www\./, "");

      return `
        <li>
          <a class="recurso-enlace" href="${escaparHTML(url.href)}"
             target="_blank" rel="noopener noreferrer">
            <span class="recurso-info">
              <span class="recurso-nombre">${escaparHTML(recurso.nombre)}</span>
              <span class="recurso-host">${escaparHTML(host)}</span>
            </span>
            <span class="recurso-flecha">${iconoFlechaExterna}</span>
            <span class="visualmente-oculto">(se abre en una pestaña nueva)</span>
          </a>
        </li>`;
    })
    .join("");

  const evidencias = (modulo.evidencias || [])
    .map(
      (evidencia) => `
        <li>
          <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" focusable="false">
            <path d="m5 12.5 4.2 4.2L19 7" fill="none" stroke="currentColor"
              stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span>${escaparHTML(evidencia)}</span>
        </li>`
    )
    .join("");

  const letras = ["a", "b", "c", "d"];
  const quiz = (modulo.quiz || [])
    .map(
      (pregunta, indice) => `
        <li class="quiz-pregunta">
          <p class="quiz-enunciado">
            <span class="quiz-numero" aria-hidden="true">${dosDigitos(indice + 1)}</span>
            <span>${escaparHTML(pregunta.pregunta)}</span>
          </p>
          <ul class="quiz-opciones" aria-label="Opciones de respuesta">
            ${(pregunta.opciones || [])
              .map(
                (opcion, posicion) => `
                  <li>
                    <span class="opcion-letra" aria-hidden="true">${letras[posicion] || posicion + 1}</span>
                    <span>${escaparHTML(opcion)}</span>
                  </li>`
              )
              .join("")}
          </ul>
          <details class="quiz-respuesta">
            <summary>Ver respuesta y explicación</summary>
            <p>
              <strong>Respuesta ${letras[pregunta.correcta] || pregunta.correcta + 1}.</strong>
              ${escaparHTML(pregunta.explicacion)}
            </p>
          </details>
        </li>`
    )
    .join("");

  return `
    <p class="modal-resumen">${escaparHTML(modulo.resumen)}</p>

    ${crearSeccion(
      "Lo que aprendiste",
      `<ul class="lista-aprendiste">
        ${(modulo.aprendiste || [])
          .map((item) => `<li>${escaparHTML(item)}</li>`)
          .join("")}
      </ul>`
    )}

    <div class="modal-columnas">
      ${crearColumna("Instrumentos", modulo.instrumentos)}
      ${crearColumna("Programas", modulo.programas)}
      ${crearColumna("Herramientas", modulo.herramientas)}
    </div>

    ${crearSeccion("Recursos para seguir", `<ul class="lista-recursos">${recursos}</ul>`)}

    ${crearSeccion("Evidencias", `<ul class="lista-evidencias">${evidencias}</ul>`)}

    ${crearSeccion(
      "Quiz de repaso",
      `<ol class="quiz-lista">${quiz}</ol>
       <p class="quiz-nota">Versión de lectura: el quiz interactivo con
       retroalimentación llega en la próxima actualización.</p>`
    )}`;
}

/** Rellena la cabecera y el cuerpo del modal con los datos del módulo. */
function rellenarFicha(modulo) {
  if (!modal) return;

  modal.style.setProperty("--acento-modulo", colorSeguro(modulo.color));

  const icono = modal.querySelector("#modal-icono");
  const titulo = modal.querySelector("#modal-titulo");
  const docente = modal.querySelector("#modal-docente");
  const cuerpo = modal.querySelector("#modal-cuerpo");

  if (icono) {
    icono.textContent = modulo.icono;
    icono.setAttribute("aria-label", `Icono del módulo ${modulo.nombre}`);
  }
  if (titulo) titulo.textContent = modulo.nombre;
  if (docente) docente.textContent = `Docente · ${modulo.docente}`;
  if (cuerpo) cuerpo.innerHTML = crearContenidoFicha(modulo);
}

/* ==========================================================================
   Apertura y cierre del modal
   ========================================================================== */

let disparadorActivo = null;

const bloquearScroll = (bloquear) => {
  document.documentElement.classList.toggle("sin-scroll", bloquear);
  document.body.classList.toggle("sin-scroll", bloquear);
};

function abrirModal(idModulo, disparador) {
  if (!modal) return;

  const modulo = MODULOS.find((elemento) => elemento.id === idModulo);
  if (!modulo) return;

  disparadorActivo = disparador || null;
  rellenarFicha(modulo);
  bloquearScroll(true);

  if (typeof modal.showModal === "function") {
    if (!modal.open) modal.showModal();
  } else {
    modal.setAttribute("open", "");
  }

  const botonCerrar = modal.querySelector("#modal-cerrar");
  if (botonCerrar) botonCerrar.focus({ preventScroll: true });
}

function finalizarCierre() {
  bloquearScroll(false);

  const disparador = disparadorActivo;
  disparadorActivo = null;

  if (disparador && typeof disparador.focus === "function") {
    disparador.focus({ preventScroll: true });
  }
}

function cerrarModal() {
  if (!modal) return;

  if (typeof modal.close === "function" && modal.open) {
    modal.close(); // dispara el evento "close" → finalizarCierre()
  } else {
    modal.removeAttribute("open");
    finalizarCierre();
  }
}

/** Conecta todos los eventos del modal. */
function iniciarModal() {
  if (!modal) return;

  modal.addEventListener("close", finalizarCierre);

  modal.querySelector("#modal-cerrar")?.addEventListener("click", cerrarModal);

  // Clic fuera del panel (en el backdrop del <dialog>).
  modal.addEventListener("click", (evento) => {
    if (evento.target !== modal) return;

    const caja = modal.getBoundingClientRect();
    const fueraDelPanel =
      evento.clientX < caja.left ||
      evento.clientX > caja.right ||
      evento.clientY < caja.top ||
      evento.clientY > caja.bottom;

    if (fueraDelPanel) cerrarModal();
  });

  // Escape: el <dialog> lo maneja de forma nativa; el evento close limpia todo.
}

/* ==========================================================================
   Interacción con las tarjetas
   ========================================================================== */

function iniciarTarjetas() {
  if (!grid) return;

  grid.addEventListener("click", (evento) => {
    const boton = evento.target.closest(".tarjeta-disparador");
    if (!boton) return;
    abrirModal(boton.dataset.modulo, boton);
  });
}

/* ==========================================================================
   Animación de entrada (IntersectionObserver con stagger)
   ========================================================================== */

function iniciarRevelado() {
  const elementos = document.querySelectorAll(".revelar");
  const movimientoReducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!("IntersectionObserver" in window) || movimientoReducido) {
    elementos.forEach((elemento) => elemento.classList.add("es-visible"));
    return;
  }

  const observador = new IntersectionObserver(
    (entradas, observer) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;
        entrada.target.classList.add("es-visible");
        observer.unobserve(entrada.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
  );

  elementos.forEach((elemento) => observador.observe(elemento));
}

/* ==========================================================================
   Cabecera y navegación activa
   ========================================================================== */

function iniciarCabecera() {
  if (!cabecera) return;

  const actualizar = () => {
    cabecera.classList.toggle("con-scroll", window.scrollY > 8);
  };

  actualizar();
  window.addEventListener("scroll", actualizar, { passive: true });
}

function iniciarNavegacionActiva() {
  const enlaces = Array.from(document.querySelectorAll(".navegacion-enlace"));
  if (enlaces.length === 0 || !("IntersectionObserver" in window)) return;

  const secciones = enlaces
    .map((enlace) => document.querySelector(enlace.getAttribute("href")))
    .filter(Boolean);

  if (secciones.length === 0) return;

  const marcar = (id) => {
    enlaces.forEach((enlace) => {
      const activo = enlace.getAttribute("href") === `#${id}`;
      enlace.classList.toggle("activo", activo);
      if (activo) enlace.setAttribute("aria-current", "location");
      else enlace.removeAttribute("aria-current");
    });
  };

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) marcar(entrada.target.id);
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  secciones.forEach((seccion) => observador.observe(seccion));
}

/* ==========================================================================
   Arranque
   ========================================================================== */

function iniciar() {
  renderModulos();
  iniciarTarjetas();
  iniciarModal();
  iniciarRevelado();
  iniciarCabecera();
  iniciarNavegacionActiva();
}

iniciar();
