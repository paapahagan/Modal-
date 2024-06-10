const overlay = document.getElementById("overlay");
const login = document.getElementById("login");
const close = document.getElementById("close");

login.addEventListener("click", () => {
  overlay.style.display = "grid";
});

close.addEventListener("click", () => {
  overlay.style.display = "none";
});
