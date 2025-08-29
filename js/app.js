const form = document.getElementById("template-form");
const listContainer = document.getElementById("templates-list");
const emptyMessage = document.getElementById("empty-message");

// Renderiza todas las plantillas desde la Store
function render(state) {
  listContainer.innerHTML = "";

  if (state.plantillas.length === 0) {
    emptyMessage.style.display = "block";
    return;
  }
  emptyMessage.style.display = "none";

  state.plantillas.forEach((tpl, index) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = tpl.render();

    wrapper.querySelector(".delete").addEventListener("click", () => {
      Store.removePlantilla(index);
    });

    listContainer.appendChild(wrapper);
  });
}

// Suscribir render a la Store
Store.subscribe(render);

// Inicial render
render(Store.getState());

// Manejar formulario
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const titulo = document.getElementById("titulo").value;
  const mensaje = document.getElementById("mensaje").value;
  const hashtag = document.getElementById("hashtag").value;
  const categoria = document.getElementById("categoria").value;
  const autor = document.getElementById("autor").value;

  const nuevaPlantilla = new Template(titulo, mensaje, hashtag, categoria, autor);
  Store.addPlantilla(nuevaPlantilla);

  form.reset();
});
