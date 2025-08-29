class Template {
  constructor(titulo, mensaje, hashtag, categoria, autor) {
    this.titulo = titulo;
    this.mensaje = mensaje;
    this.hashtag = hashtag;
    this.categoria = categoria || "General";
    this.autor = autor || "Anónimo";
    this.estadoLocal = {
      creadoEn: new Date().toLocaleString(),
    };
  }

  render() {
    return `
      <div class="template-card">
        <h3>${this.titulo}</h3>
        <p>${this.mensaje}</p>
        <p><strong>Hashtag:</strong> ${this.hashtag}</p>
        <p><strong>Categoría:</strong> ${this.categoria}</p>
        <p><strong>Autor:</strong> ${this.autor}</p>
        <small>Creado en: ${this.estadoLocal.creadoEn}</small>
        <br>
        <button class="delete">Eliminar</button>
      </div>
    `;
  }
}
