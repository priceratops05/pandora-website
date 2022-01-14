const charmInput = document.getElementById("charms");
const braceletInput = document.getElementById("bracelets");
const necklaceInput = document.getElementById("necklace");


const filter = () => {
    const charm = document.querySelectorAll(".charm");
    const bracelet = document.querySelectorAll(".bracelet");
    const necklace = document.querySelectorAll(".necklace");

    if (charmInput.checked) {
        charm.forEach(accessory => accessory.classList.remove("hidden"));
    } else {
        charm.forEach(accessory => accessory.classList.add("hidden"));
    }

    if (braceletInput.checked) {
        bracelet.forEach(accessory => accessory.classList.remove("hidden"));
    } else {
        bracelet.forEach(accessory => accessory.classList.add("hidden"));
    }

    if (necklaceInput.checked) {
        necklace.forEach(accessory => accessory.classList.remove("hidden"));
    } else {
        necklace.forEach(accessory => accessory.classList.add("hidden"));
    }
}


function photo1() {
    let language = localStorage.getItem("languageConfig");
    Swal.fire({
        background: "var(--pink-light)",
        width: 400,
        padding: 20,
        confirmButtonColor: "var(--pink)",
        title: changeLanguage[language].pandoraMePhoto1,
        text: '$175.00',
        imageUrl: "./imagenes/pandoraMe/pandoraMe1.jpeg",
        confirmButtonText: changeLanguage[language].closeButton,
    })
}

function photo2() {
    let language = localStorage.getItem("languageConfig");
    Swal.fire({
        background: "var(--pink-light)",
        width: 400,
        padding: 20,
        confirmButtonColor: "var(--pink)",
        title: changeLanguage[language].pandoraMePhoto2,
        text: '$25.00',
        imageUrl: "./imagenes/pandoraMe/pandoraMe2.jpeg",
        confirmButtonText: changeLanguage[language].closeButton,
    })
}

function photo3() {
    let language = localStorage.getItem("languageConfig");
    Swal.fire({
        background: "var(--pink-light)",
        width: 400,
        padding: 20,
        confirmButtonColor: "var(--pink)",
        title: changeLanguage[language].pandoraMePhoto3,
        text: '$25.00',
        imageUrl: "./imagenes/pandoraMe/pandoraMe3.jpeg",
        confirmButtonText: changeLanguage[language].closeButton,
    })
}

function photo4() {
    let language = localStorage.getItem("languageConfig");
    Swal.fire({
        background: "var(--pink-light)",
        width: 400,
        padding: 20,
        confirmButtonColor: "var(--pink)",
        title: changeLanguage[language].pandoraMePhoto4,
        text: '$90.00',
        imageUrl: "./imagenes/pandoraMe/pandoraMe4.jpeg",
        confirmButtonText: changeLanguage[language].closeButton,
    })
}

function photo5() {
    let language = localStorage.getItem("languageConfig");
    Swal.fire({
        background: "var(--pink-light)",
        width: 400,
        padding: 20,
        confirmButtonColor: "var(--pink)",
        title: changeLanguage[language].pandoraMePhoto5,
        text: '$20.00',
        imageUrl: "./imagenes/pandoraMe/pandoraMe5.jpeg",
        confirmButtonText: changeLanguage[language].closeButton,
    })
}

function photo6() {
    let language = localStorage.getItem("languageConfig");
    Swal.fire({
        background: "var(--pink-light)",
        width: 400,
        padding: 20,
        confirmButtonColor: "var(--pink)",
        title: changeLanguage[language].pandoraMePhoto6,
        text: '$25.00',
        imageUrl: "./imagenes/pandoraMe/pandoraMe6.jpeg",
        confirmButtonText: changeLanguage[language].closeButton,
    })
}

function photo7() {
    let language = localStorage.getItem("languageConfig");
    Swal.fire({
        background: "var(--pink-light)",
        width: 400,
        padding: 20,
        confirmButtonColor: "var(--pink)",
        title: changeLanguage[language].pandoraMePhoto7,
        text: '$25.00',
        imageUrl: "./imagenes/pandoraMe/pandoraMe7.jpeg",
        confirmButtonText: changeLanguage[language].closeButton,
    })
}

function photo8() {
    let language = localStorage.getItem("languageConfig");
    Swal.fire({
        background: "var(--pink-light)",
        width: 400,
        padding: 20,
        confirmButtonColor: "var(--pink)",
        title: changeLanguage[language].pandoraMePhoto8,
        text: '$25.00',
        imageUrl: "./imagenes/pandoraMe/pandoraMe8.jpeg",
        confirmButtonText: changeLanguage[language].closeButton,
    })
}

function photo9() {
    let language = localStorage.getItem("languageConfig");
    Swal.fire({
        background: "var(--pink-light)",
        width: 400,
        padding: 20,
        confirmButtonColor: "var(--pink)",
        title: changeLanguage[language].pandoraMePhoto9,
        text: '$25.00',
        imageUrl: "./imagenes/pandoraMe/pandoraMe9.jpeg",
        confirmButtonText: changeLanguage[language].closeButton,
    })
}

function photo10() {
    let language = localStorage.getItem("languageConfig");
    Swal.fire({
        background: "var(--pink-light)",
        width: 400,
        padding: 20,
        confirmButtonColor: "var(--pink)",
        title: changeLanguage[language].pandoraMePhoto10,
        text: '$20.00',
        imageUrl: "./imagenes/pandoraMe/pandoraMe10.jpeg",
        confirmButtonText: changeLanguage[language].closeButton,
    })
}

function photo11() {
    let language = localStorage.getItem("languageConfig");
    Swal.fire({
        background: "var(--pink-light)",
        width: 400,
        padding: 20,
        confirmButtonColor: "var(--pink)",
        title: changeLanguage[language].pandoraMePhoto11,
        text: '$25.00',
        imageUrl: "./imagenes/pandoraMe/pandoraMe11.jpeg",
        confirmButtonText: changeLanguage[language].closeButton,
    })
}

function photo12() {
    let language = localStorage.getItem("languageConfig");
    Swal.fire({
        background: "var(--pink-light)",
        width: 400,
        padding: 20,
        confirmButtonColor: "var(--pink)",
        title: changeLanguage[language].pandoraMePhoto12,
        text: '$25.00',
        imageUrl: "./imagenes/pandoraMe/pandoraMe12.jpeg",
        confirmButtonText: changeLanguage[language].closeButton,
    })
}