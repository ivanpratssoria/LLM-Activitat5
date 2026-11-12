
function mostrarCuriositat() {
    let zona = document.getElementById("zonaInteractiva");
    let text = document.getElementById("textOcult");

    zona.style.backgroundColor = "#a94e78";
    zona.style.color = "white";
    text.style.display = "block";
}

function ocultarCuriositat() {
    let zona = document.getElementById("zonaInteractiva");
    let text = document.getElementById("textOcult");

    zona.style.backgroundColor = "#ffe1ed";
    zona.style.color = "#4a3540";
    text.style.display = "none";
}

function validarContrasenya() {
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;

    if (password1.length < 8) {
        alert("Uau! 🐾 La contrasenya ha de tenir com a mínim 8 caràcters.");
        return false;
    }

    if (password1 !== password2) {
        alert("Ups! 🐶 Les contrasenyes no coincideixen.");
        return false;
    }

    alert("S'ha canviat correctament la contrasenya");
    return false;
}

