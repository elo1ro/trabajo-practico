const contactForm = document.querySelector("#contact_form");

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // validar cada input
    const nombreInput = document.querySelector("#nombre");
    nombreInput.classList.remove("invalid-input");
    if (nombreInput.value.length < 4 || contieneNumero(nombreInput.value)) {
        nombreInput.classList.add("invalid-input");
    }

    const direccionInput = document.querySelector("#direccion");
    direccionInput.classList.remove("invalid-input");
    if (direccionInput.value.length < 4 || !contieneNumero(direccionInput.value)) {
        direccionInput.classList.add("invalid-input");
    }

    const correoInput = document.querySelector("#correo");
    correoInput.classList.remove("invalid-input");
    if (correoInput.value.length < 4 || !emailValido(correoInput.value)) {
        correoInput.classList.add("invalid-input");
    }

    const mensajeInput = document.querySelector("#mensaje");
    mensajeInput.classList.remove("invalid-input");
    if (mensajeInput.value.length < 50) {
        mensajeInput.classList.add("invalid-input");
    }
});

function contieneNumero(str) {
    return /\d/.test(str);
}

function emailValido(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
