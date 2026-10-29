// Cambia el tema claro y oscuro
const root = document.documentElement;
const botonTema = document.getElementById("cambiar-tema");

function aplicarTema(tema) {
  root.setAttribute("data-theme", tema);
  if (tema === "dark") {
    botonTema.textContent = "Modo claro";
} else {
    botonTema.textContent = "Modo oscuro";
}
}

if (botonTema) {
  botonTema.addEventListener("click", function () {
    let nuevoTema;

    if (root.getAttribute("data-theme") === "dark") {
      nuevoTema = "light";
    } else {
      nuevoTema = "dark";
    }

    aplicarTema(nuevoTema);

  });
}