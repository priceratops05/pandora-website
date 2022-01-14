const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const motiveInput = document.getElementById("motive");
const messageInput = document.getElementById("message");

const validate = () => {
    let language = localStorage.getItem("languageConfig");
    let name = nameInput.value;
    let email = emailInput.value;
    let phone = phoneInput.value;
    let motive = motiveInput.value;
    console.log(motive);
    let error = false;
    let regExpSoloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚ]+$/;
    let regExpCorreo = /^[a-z0-9._]+@[a-z]+.com$/gmi;
    let camposRequeridos = document.querySelectorAll(':required');
    let regExpTelefono = /[0-9]{4}-[0-9]{4}/;
    camposRequeridos.forEach(campo => {
        if (campo.value == '') {
            error = true;
            campo.classList.add('error-input');
        } else {
            campo.classList.remove('error-input');
        }
    })
    if (!regExpSoloLetras.test(name)) {
        error = true;
        nameInput.classList.add('error-input');
    } else {
        nameInput.classList.remove('error-input');
    }
    if (!regExpCorreo.test(email)) {
        error = true;
        emailInput.classList.add('error-input');
    } else {
        emailInput.classList.remove('error-input');
    }
    if (!regExpTelefono.test(phone)) {
        error = true;
        phoneInput.classList.add('error-input');
    } else {
        phoneInput.classList.remove('error-input');
    }
    if (error == false) {
        let recommendation = "";
        switch (motive) {
            case "changes":
                recommendation = changeLanguage[language].recommendationChanges;
                break;
            case "warranty":
                recommendation = changeLanguage[language].recommendationWarranty;
                break;
            case "cares":
                recommendation = changeLanguage[language].recommendationCares;
                break;
            case "status":
                recommendation = changeLanguage[language].recommendationStatus;
                break;
            default:
                recommendation = changeLanguage[language].defaultRecommentation;
                break;
        }
        Swal.fire({
            background: "var(--pink-light)",
            confirmButtonColor: "var(--pink)",
            confirmButtonText: changeLanguage[language].accept,
            imageUrl: "./imagenes/pandora-logo-negro.png",
            title: changeLanguage[language].thanks,
            html: recommendation + "<br><br>" + changeLanguage[language].contact,
            width: 600,
            padding: 20,
        });
    } else {
        Swal.fire({
            background: "var(--pink-light)",
            confirmButtonColor: "var(--pink)",
            confirmButtonText: changeLanguage[language].accept,
            icon: 'error',
            title: changeLanguage[language].form,
            text: changeLanguage[language].highlightedFields,
            width: 400,
            padding: 20,
        });
    }

}