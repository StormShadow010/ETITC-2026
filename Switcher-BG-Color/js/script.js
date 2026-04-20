// Seleccionamos el body y todos los botones de tema
const body = document.body;
const buttons = document.querySelectorAll(".theme-buttons button");

// Recorremos cada botón y le agregamos un evento click
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // 1. Leemos qué tema tiene este botón en su atributo data-theme
    const theme = button.dataset.theme;

    // 2. Quitamos todas las clases de tema del body
    body.classList.remove("light", "dark", "blue");

    // 3. Agregamos solo la clase del tema elegido
    body.classList.add(theme);

    // 4. Quitamos la clase "active" de todos los botones
    buttons.forEach((btn) => btn.classList.remove("active"));

    // 5. Se la agregamos solo al botón clickeado
    button.classList.add("active");
  });
});
