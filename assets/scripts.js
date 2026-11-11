AOS.init({
    duration: 700,
    once: true
});

GLightbox({
    selector: ".glightbox"
});


const formulario = document.getElementById("formulario");
const aviso = document.getElementById("aviso");

if (formulario && aviso) {
    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();
        aviso.classList.remove("d-none");
        formulario.reset();
    });
}

const anio = document.getElementById("anio");
if (anio) {
    anio.textContent = String(new Date().getFullYear());
}