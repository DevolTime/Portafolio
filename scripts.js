const palabra = document.getElementById("logo1");

window.addEventListener("scroll", () => {
    if (window.innerWidth <= 480) return; // 🚀 evita que se muestre en móvil

    if (window.scrollY > 60) {
        palabra.style.display = "none";
    } else {
        palabra.style.display = "block";
    }
});