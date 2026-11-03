document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById('lista-modulos');

  if (!contenedor) return;
  if (typeof modulosData === 'undefined' || !modulosData.length) {
    contenedor.innerHTML = '<p>No hay módulos registrados en data/modulos.js.</p>';
    return;
  }

  modulosData.forEach(mod => {
    const card = document.createElement('article');
    card.classList.add('tarjeta');

    const tagsHTML = mod.herramientas
      .map(h => `<span class="tag">${h}</span>`)
      .join('');

    card.innerHTML = `
      <h3>${mod.nombre}</h3>
      <div class="docente">Docente: ${mod.docente}</div>
      <p>${mod.resumen}</p>
      <div class="tags">${tagsHTML}</div>
    `;

    contenedor.appendChild(card);
  });
});