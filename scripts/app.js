import { MODULOS } from "../data/modulos.js";

const STORAGE_KEY = "hub-3dsa:progreso";
const estado = {
  busqueda: "",
  docente: "todos",
  repasados: {},
};

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

const normalizarTexto = (valor = "") =>
  String(valor)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const colorSeguro = (color) =>
  /^#(?:[0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(color || "") ? color : "var(--acento)";

const urlSegura = (url) => {
  try {
    const parseada = new URL(url);
    return parseada.protocol === "https:" || parseada.protocol === "http:" ? parseada : null;
  } catch {
    return null;
  }
};

const iniciales = (nombre = "") =>
  nombre
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((parte) => parte.charAt(0).toUpperCase())
    .join("");

const dosDigitos = (numero) => String(numero).padStart(2, "0");
const contarRepasados = () =>
  MODULOS.filter((modulo) => Boolean(estado.repasados[modulo.id])).length;

const leerProgreso = () => {
  try {
    const valor = localStorage.getItem(STORAGE_KEY);
    if (!valor) return {};
    const datos = JSON.parse(valor);
    return datos && typeof datos === "object" ? datos : {};
  } catch {
    return {};
  }
};

const guardarProgreso = () => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(estado.repasados));
  } catch {
    // localStorage bloqueado: no rompe la experiencia.
  }
};

const quizKey = (id) => `hub-3dsa:quiz:${id}`;
const leerMejorQuiz = (id) => {
  try {
    const valor = localStorage.getItem(quizKey(id));
    return valor === null ? null : Number(valor);
  } catch {
    return null;
  }
};
const guardarMejorQuiz = (id, puntaje) => {
  try {
    localStorage.setItem(quizKey(id), String(puntaje));
  } catch {
    // Ignorar bloqueos de almacenamiento.
  }
};
const quizState = {};

const grid = document.querySelector("#grid-modulos");
const modal = document.querySelector("#modal-ficha");
const cabecera = document.querySelector("#cabecera");

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

const crearSeccion = (titulo, contenido) => `
  <section class="modal-seccion">
    <h3 class="modal-subtitulo">${titulo}</h3>
    ${contenido}
  </section>`;

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

function obtenerModulosFiltrados() {
  const consulta = normalizarTexto(estado.busqueda).trim();

  return MODULOS.filter((modulo) => {
    const docentes = modulo.docente.split("/").map((docente) => docente.trim());
    const docenteCoincide = estado.docente === "todos" || docentes.includes(estado.docente);
    if (!docenteCoincide) return false;
    if (!consulta) return true;

    const textoBusqueda = [
      modulo.codigo,
      modulo.nombre,
      modulo.resumen,
      modulo.docente,
      ...(modulo.programas || []),
      ...(modulo.herramientas || []),
      ...(modulo.keywords || []),
    ].join(" ");

    return normalizarTexto(textoBusqueda).includes(consulta);
  });
}

function actualizarToolbar() {
  const contador = document.querySelector("#contador-modulos");
  const buscador = document.querySelector("#buscador-modulos");
  const limpiar = document.querySelector("#limpiar-filtros");

  if (buscador) buscador.value = estado.busqueda;

  const filtrados = obtenerModulosFiltrados();
  if (contador) {
    contador.textContent = `Mostrando ${filtrados.length} de ${MODULOS.length} módulos`;
  }

  if (limpiar) {
    limpiar.hidden = !(estado.busqueda.trim() || estado.docente !== "todos");
  }

  document.querySelectorAll(".chip-docente").forEach((chip) => {
    const activo = chip.dataset.docente === estado.docente;
    chip.classList.toggle("activo", activo);
    chip.setAttribute("aria-pressed", String(activo));
  });
}

function actualizarProgreso() {
  const total = MODULOS.length;
  const repasados = contarRepasados();
  const porcentaje = total === 0 ? 0 : Math.round((repasados / total) * 100);

  const relleno = document.querySelector("#progreso-relleno");
  const barra = document.querySelector("#barra-progreso");
  const porcentajeTexto = document.querySelector("#progreso-porcentaje");
  const meta = document.querySelector("#progreso-meta");
  const contenedor = document.querySelector(".progreso-modulos");

  if (relleno) relleno.style.width = `${porcentaje}%`;
  if (barra) {
    barra.setAttribute("aria-valuenow", String(repasados));
    barra.setAttribute("aria-valuemax", String(total));
  }
  if (porcentajeTexto) porcentajeTexto.textContent = `${porcentaje}%`;
  if (meta) meta.textContent = `${repasados} de ${total} módulos repasados`;
  if (contenedor) contenedor.classList.toggle("completo", porcentaje >= 100 && total > 0);

  document.querySelectorAll("[data-total-modulos]").forEach((elemento) => {
    elemento.textContent = dosDigitos(total);
  });

  const docentes = new Set(
    MODULOS.flatMap((modulo) => modulo.docente.split("/").map((docente) => docente.trim()))
  );
  document.querySelectorAll("[data-total-docentes]").forEach((elemento) => {
    elemento.textContent = dosDigitos(docentes.size);
  });
}

function crearTarjeta(modulo, indice) {
  const nombre = escaparHTML(modulo.nombre);
  const color = colorSeguro(modulo.color);
  const instrumentos = Array.isArray(modulo.instrumentos) ? modulo.instrumentos.length : 0;
  const programas = Array.isArray(modulo.programas) ? modulo.programas.length : 0;
  const herramientas = Array.isArray(modulo.herramientas) ? modulo.herramientas.length : 0;
  const estaRepasado = Boolean(estado.repasados[modulo.id]);

  return `
    <article class="tarjeta-modulo ${estaRepasado ? "tarjeta-modulo--repasado" : ""}"
             style="--acento-modulo: ${color}; --retraso: ${indice * 70}ms">
      ${estaRepasado ? '<span class="tarjeta-badge">✓ Repasado</span>' : ""}
      <div class="tarjeta-cabecera">
        <span class="tarjeta-icono" role="img" aria-label="Icono del módulo ${nombre}">
          ${escaparHTML(modulo.icono)}
        </span>
        <span class="tarjeta-numero" aria-label="Código ${escaparHTML(modulo.codigo)}">${escaparHTML(modulo.codigo)}</span>
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

      <button class="tarjeta-repasar ${estaRepasado ? "is-activo" : ""}" type="button"
              data-toggle-repasado data-modulo="${escaparHTML(modulo.id)}" aria-pressed="${String(estaRepasado)}">
        <span class="repasar-icono" aria-hidden="true">${estaRepasado ? "✓" : "○"}</span>
        <span>${estaRepasado ? "Repasado" : "Repasar"}</span>
      </button>
    </article>`;
}

function mostrarToast() {
  const toast = document.querySelector("#toast-celebracion");
  if (!toast) return;

  toast.hidden = false;
  toast.classList.add("visible");

  window.clearTimeout(toast.timerId);
  toast.timerId = window.setTimeout(() => {
    toast.classList.remove("visible");
    window.setTimeout(() => {
      toast.hidden = true;
    }, 240);
  }, 5000);
}

function renderModulos() {
  if (!grid) return;

  window.MEMORIA_3DSA_OK = true;
  const avisoCarga = document.querySelector("#aviso-carga");
  if (avisoCarga) avisoCarga.hidden = true;

  const filtrados = obtenerModulosFiltrados();

  if (filtrados.length === 0) {
    const consulta = estado.busqueda.trim() || "los filtros actuales";
    grid.innerHTML = `
      <div class="estado-vacio" role="status" aria-live="polite">
        <span class="estado-vacio-emoji" aria-hidden="true">🔎</span>
        <p class="estado-vacio-titulo">No encontramos módulos con «${escaparHTML(consulta)}»</p>
        <button class="boton-vaciar" type="button" data-limpiar-filtros>Limpiar filtros</button>
      </div>`;
    grid.setAttribute("aria-busy", "false");
    actualizarToolbar();
    actualizarProgreso();
    return;
  }

  grid.innerHTML = filtrados.map(crearTarjeta).join("");
  grid.setAttribute("aria-busy", "false");

  actualizarToolbar();
  actualizarProgreso();
}

const crearContenidoFicha = (modulo) => {
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
        <li class="quiz-pregunta" data-pregunta="${indice}">
          <p class="quiz-enunciado">
            <span class="quiz-numero" aria-hidden="true">${dosDigitos(indice + 1)}</span>
            <span>${escaparHTML(pregunta.pregunta)}</span>
          </p>
          <ul class="quiz-opciones" aria-label="Opciones de respuesta">
            ${(pregunta.opciones || [])
              .map(
                (opcion, posicion) => `
                  <li>
                    <button class="quiz-opcion" type="button"
                            data-pregunta="${indice}" data-opcion="${posicion}"
                            aria-label="Opción ${letras[posicion] || posicion + 1}: ${escaparHTML(opcion)}">
                      <span class="opcion-letra" aria-hidden="true">${letras[posicion] || posicion + 1}</span>
                      <span>${escaparHTML(opcion)}</span>
                    </button>
                  </li>`
              )
              .join("")}
          </ul>
          <p class="quiz-feedback" aria-live="polite" hidden></p>
        </li>`
    )
    .join("");

  const estaRepasado = Boolean(estado.repasados[modulo.id]);
  const mejorQuiz = leerMejorQuiz(modulo.id);
  const quizMejorTexto = mejorQuiz === null ? "Sin intentos todavía" : `${mejorQuiz} de ${(modulo.quiz || []).length}`;

  return `
    <div class="modal-acciones">
      <button class="boton-repasar ${estaRepasado ? "is-activo" : ""}" type="button"
              data-toggle-repasado data-modulo="${escaparHTML(modulo.id)}" aria-pressed="${String(estaRepasado)}">
        <span class="repasar-icono" aria-hidden="true">${estaRepasado ? "✓" : "○"}</span>
        <span>${estaRepasado ? "Repasado" : "Repasar"}</span>
      </button>
    </div>

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

    ${crearSeccion("Evidencias", `<ul class="lista-evidencias">${evidencias}</ul>`) }

    ${crearSeccion(
      "Quiz de repaso",
      `<ol class="quiz-lista">${quiz}</ol>
       <div class="quiz-resumen" data-quiz-resumen>
         <p class="quiz-puntaje" data-quiz-puntaje>Respondidas: 0 de ${(modulo.quiz || []).length} · Aciertos: 0</p>
         <p class="quiz-mejor" data-quiz-mejor>Mejor puntaje: ${quizMejorTexto}</p>
         <button class="boton-quiz-reiniciar" type="button" data-quiz-reiniciar>Reiniciar quiz</button>
       </div>`
    )}`;
};

function rellenarFicha(modulo) {
  if (!modal) return;

  modal.dataset.moduloId = modulo.id;
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
  if (cuerpo) {
    cuerpo.innerHTML = crearContenidoFicha(modulo);
    inicializarQuiz(modulo);
  }
}

let disparadorActivo = null;

const bloquearScroll = (bloquear) => {
  document.documentElement.classList.toggle("sin-scroll", bloquear);
  document.body.classList.toggle("sin-scroll", bloquear);
};

function inicializarQuiz(modulo) {
  if (!modulo || !Array.isArray(modulo.quiz) || modulo.quiz.length === 0) return;
  quizState[modulo.id] = {
    total: modulo.quiz.length,
    correctas: 0,
    respondidas: 0,
    terminado: false,
  };
  actualizarResumenQuiz(modulo.id, modulo.quiz.length);
}

function actualizarResumenQuiz(moduloId, total) {
  if (!modal || modal.dataset.moduloId !== moduloId) return;
  const resumen = modal.querySelector("[data-quiz-resumen]");
  if (!resumen) return;
  const puntajeEl = resumen.querySelector("[data-quiz-puntaje]");
  const mejorEl = resumen.querySelector("[data-quiz-mejor]");
  const estadoQuiz = quizState[moduloId];
  if (puntajeEl && estadoQuiz) {
    if (estadoQuiz.terminado) {
      puntajeEl.textContent = `Puntaje final: ${estadoQuiz.correctas} de ${total}`;
    } else {
      puntajeEl.textContent = `Respondidas: ${estadoQuiz.respondidas} de ${total} · Aciertos: ${estadoQuiz.correctas}`;
    }
  }
  if (mejorEl) {
    const mejor = leerMejorQuiz(moduloId);
    mejorEl.textContent =
      mejor === null ? "Mejor puntaje: sin intentos todavía" : `Mejor puntaje: ${mejor} de ${total}`;
  }
}

function manejarRespuestaQuiz(boton) {
  if (!modal) return;
  const moduloId = modal.dataset.moduloId;
  const modulo = MODULOS.find((item) => item.id === moduloId);
  if (!modulo || !modulo.quiz) return;

  const preguntaIndex = Number(boton.dataset.pregunta);
  const opcionIndex = Number(boton.dataset.opcion);
  const pregunta = modulo.quiz[preguntaIndex];
  if (!pregunta) return;

  const preguntaEl = boton.closest(".quiz-pregunta");
  if (!preguntaEl || preguntaEl.classList.contains("respondida")) return;

  preguntaEl.classList.add("respondida");
  const botones = preguntaEl.querySelectorAll(".quiz-opcion");
  botones.forEach((item, indice) => {
    item.disabled = true;
    if (indice === pregunta.correcta) item.classList.add("quiz-opcion--correcta");
    if (indice === opcionIndex && opcionIndex !== pregunta.correcta) {
      item.classList.add("quiz-opcion--incorrecta");
    }
  });

  const feedback = preguntaEl.querySelector(".quiz-feedback");
  const esCorrecta = opcionIndex === pregunta.correcta;
  if (feedback) {
    feedback.hidden = false;
    feedback.innerHTML = `<strong>${esCorrecta ? "Correcto." : "Incorrecto."}</strong> ${
      esCorrecta ? "" : `La respuesta correcta es la opción ${letraOpcion(pregunta.correcta)}. `
    }${escaparHTML(pregunta.explicacion)}`;
  }

  const estadoQuiz = quizState[moduloId];
  if (!estadoQuiz) return;
  estadoQuiz.respondidas += 1;
  if (esCorrecta) estadoQuiz.correctas += 1;

  if (estadoQuiz.respondidas >= estadoQuiz.total) {
    estadoQuiz.terminado = true;
    const puntaje = estadoQuiz.correctas;
    const mejorPrevio = leerMejorQuiz(moduloId);
    if (mejorPrevio === null || puntaje > mejorPrevio) guardarMejorQuiz(moduloId, puntaje);
  }
  actualizarResumenQuiz(moduloId, modulo.quiz.length);
}

function letraOpcion(posicion) {
  return ["a", "b", "c", "d"][posicion] || String(posicion + 1);
}

function reiniciarQuiz(moduloId) {
  const modulo = MODULOS.find((item) => item.id === moduloId);
  if (modulo) rellenarFicha(modulo);
}

function alternarRepasado(idModulo) {
  const antes = contarRepasados();
  const estabaMarcado = Boolean(estado.repasados[idModulo]);
  estado.repasados[idModulo] = !estabaMarcado;
  guardarProgreso();
  const despues = contarRepasados();

  if (despues === MODULOS.length && antes !== MODULOS.length) {
    mostrarToast();
  }

  renderModulos();

  if (modal && modal.open) {
    const moduloActual = MODULOS.find((modulo) => modulo.id === idModulo);
    if (moduloActual) rellenarFicha(moduloActual);
  }
}

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
    modal.setAttribute("open", "open");
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
    modal.close();
  } else {
    modal.removeAttribute("open");
    finalizarCierre();
  }
}

function iniciarModal() {
  if (!modal) return;

  modal.addEventListener("close", finalizarCierre);
  modal.querySelector("#modal-cerrar")?.addEventListener("click", cerrarModal);

  modal.addEventListener("click", (evento) => {
    const opcionQuiz = evento.target.closest(".quiz-opcion");
    if (opcionQuiz) {
      manejarRespuestaQuiz(opcionQuiz);
      return;
    }

    const reinicioQuiz = evento.target.closest("[data-quiz-reiniciar]");
    if (reinicioQuiz) {
      reiniciarQuiz(modal.dataset.moduloId);
      return;
    }

    const toggle = evento.target.closest("[data-toggle-repasado]");
    if (toggle) {
      alternarRepasado(toggle.dataset.modulo);
      return;
    }

    if (evento.target !== modal) return;

    const caja = modal.getBoundingClientRect();
    const fueraDelPanel =
      evento.clientX < caja.left ||
      evento.clientX > caja.right ||
      evento.clientY < caja.top ||
      evento.clientY > caja.bottom;

    if (fueraDelPanel) cerrarModal();
  });
}

function iniciarToolbar() {
  const buscador = document.querySelector("#buscador-modulos");
  if (buscador) {
    buscador.addEventListener("input", (evento) => {
      estado.busqueda = evento.target.value;
      renderModulos();
    });
  }

  document.querySelectorAll(".chip-docente").forEach((chip) => {
    chip.addEventListener("click", () => {
      estado.docente = chip.dataset.docente || "todos";
      renderModulos();
    });
  });

  document.querySelectorAll("[data-limpiar-filtros]").forEach((boton) => {
    boton.addEventListener("click", () => {
      estado.busqueda = "";
      estado.docente = "todos";
      renderModulos();
    });
  });
}

function iniciarTarjetas() {
  if (!grid) return;

  grid.addEventListener("click", (evento) => {
    const botonRepasar = evento.target.closest("[data-toggle-repasado]");
    if (botonRepasar) {
      alternarRepasado(botonRepasar.dataset.modulo);
      return;
    }

    const boton = evento.target.closest(".tarjeta-disparador");
    if (boton) {
      abrirModal(boton.dataset.modulo, boton);
      return;
    }

    const limpiar = evento.target.closest("[data-limpiar-filtros]");
    if (limpiar) {
      estado.busqueda = "";
      estado.docente = "todos";
      renderModulos();
    }
  });
}

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

function iniciarTema() {
  const boton = document.querySelector("#boton-tema");
  if (!boton) return;

  const temaActual = () => (document.documentElement.getAttribute("data-tema") === "claro" ? "claro" : "oscuro");
  const aplicarTema = (tema) => {
    const esClaro = tema === "claro";
    document.documentElement.setAttribute("data-tema", esClaro ? "claro" : "oscuro");
    document.documentElement.style.colorScheme = esClaro ? "light" : "dark";

    const metaColorScheme = document.querySelector('meta[name="color-scheme"]');
    if (metaColorScheme) metaColorScheme.setAttribute("content", esClaro ? "light" : "dark");

    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) metaTheme.setAttribute("content", esClaro ? "#f7f8fc" : "#0a0e1a");

    const icono = boton.querySelector(".icono-tema");
    if (icono) icono.textContent = esClaro ? "☀" : "☾";
    boton.setAttribute("aria-pressed", String(esClaro));

    try {
      localStorage.setItem("hub-3dsa:tema", tema);
    } catch {
      // Ignorar bloqueos de almacenamiento.
    }
  };

  aplicarTema(temaActual());
  boton.addEventListener("click", () => {
    aplicarTema(temaActual() === "claro" ? "oscuro" : "claro");
  });

  if (window.matchMedia) {
    const media = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = (evento) => {
      let guardado = null;
      try {
        guardado = localStorage.getItem("hub-3dsa:tema");
      } catch {
        guardado = null;
      }
      if (guardado) return;
      aplicarTema(evento.matches ? "claro" : "oscuro");
    };
    if (typeof media.addEventListener === "function") media.addEventListener("change", onChange);
    else if (typeof media.addListener === "function") media.addListener(onChange);
  }
}

function iniciar() {
  renderModulos();
  iniciarToolbar();
  iniciarTarjetas();
  iniciarModal();
  iniciarTema();
  iniciarRevelado();
  iniciarCabecera();
  iniciarNavegacionActiva();
}

iniciar();
