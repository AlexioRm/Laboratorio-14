// Patrón Store: estado centralizado
const Store = {
  state: {
    plantillas: []
  },

  // Inicializa con 2 plantillas de ejemplo
  init() {
    const ejemplo1 = new Template("Bienvenida", "Hola, gracias por contactarnos", "#welcome", "General", "Soporte");
    const ejemplo2 = new Template("Despedida", "Hasta pronto, que tengas un gran día", "#bye", "General", "Soporte");
    this.state.plantillas = [ejemplo1, ejemplo2];
  },

  // Obtener estado
  getState() {
    return this.state;
  },

  // Añadir plantilla (respetando inmutabilidad)
  addPlantilla(template) {
    this.state = {
      ...this.state,
      plantillas: [...this.state.plantillas, template]
    };
    this.notify();
  },

  // Eliminar plantilla (filtrando sin mutar)
  removePlantilla(index) {
    this.state = {
      ...this.state,
      plantillas: this.state.plantillas.filter((_, i) => i !== index)
    };
    this.notify("Plantilla eliminada con éxito");
  },

  // Suscriptores
  subscribers: [],

  subscribe(fn) {
    this.subscribers.push(fn);
  },

  notify(message = null) {
    this.subscribers.forEach(fn => fn(this.state));
    if (message) {
      const msg = document.getElementById("success-message");
      msg.innerText = message;
      msg.style.display = "block";
      setTimeout(() => {
        msg.style.display = "none";
      }, 3000);
    }
  }
};

// Inicializar Store
Store.init();
