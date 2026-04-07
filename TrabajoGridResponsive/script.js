function showScreen(id, btn) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  document
    .querySelectorAll(".sidebar button")
    .forEach((b) => b.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  btn.classList.add("active");
}

function goBack() {
  const firstBtn = document.querySelector(".sidebar button");
  showScreen("fullbleed", firstBtn);
}
