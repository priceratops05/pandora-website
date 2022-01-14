const goldInput = document.getElementById("gold");
const roseInput = document.getElementById("rose");
const silverInput = document.getElementById("silver");
const charmInput = document.getElementById("charms");
const braceletInput = document.getElementById("bracelets");

const filter = () => {
    const goldCharm = document.querySelectorAll(".gold.charm");
    const goldBracelet = document.querySelectorAll(".gold.bracelet");
    const roseCharm = document.querySelectorAll(".rose.charm");
    const roseBracelet = document.querySelectorAll(".rose.bracelet");
    const silverCharm = document.querySelectorAll(".silver.charm");
    const silverBracelet = document.querySelectorAll(".silver.bracelet");

    if (goldInput.checked && charmInput.checked) {
        goldCharm.forEach(accessory => accessory.classList.remove("hidden"));
    } else {
        goldCharm.forEach(accessory => accessory.classList.add("hidden"));
    }

    if (goldInput.checked && braceletInput.checked) {
        goldBracelet.forEach(accessory => accessory.classList.remove("hidden"));
    } else {
        goldBracelet.forEach(accessory => accessory.classList.add("hidden"));
    }

    if (roseInput.checked && charmInput.checked) {
        roseCharm.forEach(accessory => accessory.classList.remove("hidden"));
    } else {
        roseCharm.forEach(accessory => accessory.classList.add("hidden"));
    }
    if (roseInput.checked && braceletInput.checked) {
        roseBracelet.forEach(accessory => accessory.classList.remove("hidden"));
    } else {
        roseBracelet.forEach(accessory => accessory.classList.add("hidden"));
    }
    if (silverInput.checked && charmInput.checked) {
        silverCharm.forEach(accessory => accessory.classList.remove("hidden"));
    } else {
        silverCharm.forEach(accessory => accessory.classList.add("hidden"));
    }
    if (silverInput.checked && braceletInput.checked) {
        silverBracelet.forEach(accessory => accessory.classList.remove("hidden"));
    } else {
        silverBracelet.forEach(accessory => accessory.classList.add("hidden"));
    }
}

function photo1() {

    let language = localStorage.getItem("languageConfig");
    Swal.fire({
        background: "var(--pink-light)",
        width: 400,
        padding: 20,
        confirmButtonColor: "var(--pink)",
        title: changeLanguage[language].charmsPulserasPhoto1,
        text: '$29.00',
        imageUrl: "./imagenes/charmsPulseras/charmsPulseras1.png",
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
        title: changeLanguage[language].charmsPulserasPhoto2,
        text: '$29.00',
        imageUrl: "./imagenes/charmsPulseras/charmsPulseras2.png",
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
        title: changeLanguage[language].charmsPulserasPhoto3,
        text: '$29.00',
        imageUrl: "./imagenes/charmsPulseras/charmsPulseras3.png",
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
        title: changeLanguage[language].charmsPulserasPhoto4,
        text: '$29.00',
        imageUrl: "./imagenes/charmsPulseras/charmsPulseras4.png",
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
        title: changeLanguage[language].charmsPulserasPhoto5,
        text: '$39.00',
        imageUrl: "./imagenes/charmsPulseras/charmsPulseras5.png",
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
        title: changeLanguage[language].charmsPulserasPhoto6,
        text: '$49.00',
        imageUrl: "./imagenes/charmsPulseras/charmsPulseras6.png",
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
        title: changeLanguage[language].charmsPulserasPhoto7,
        text: '$59.00',
        imageUrl: "./imagenes/charmsPulseras/charmsPulseras7.png",
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
        title: changeLanguage[language].charmsPulserasPhoto8,
        text: '$99.00',
        imageUrl: "./imagenes/charmsPulseras/charmsPulseras8.png",
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
        title: changeLanguage[language].charmsPulserasPhoto9,
        text: '$59.00',
        imageUrl: "./imagenes/charmsPulseras/charmsPulseras9.png",
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
        title: changeLanguage[language].charmsPulserasPhoto10,
        text: '$59.00',
        imageUrl: "./imagenes/charmsPulseras/charmsPulseras10.png",
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
        title: changeLanguage[language].charmsPulserasPhoto11,
        text: '$89.00',
        imageUrl: "./imagenes/charmsPulseras/charmsPulseras11.png",
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
        title: changeLanguage[language].charmsPulserasPhoto12,
        text: '$59.00',
        imageUrl: "./imagenes/charmsPulseras/charmsPulseras12.png",
        confirmButtonText: changeLanguage[language].closeButton,

    })
}

function photo13() {
    let language = localStorage.getItem("languageConfig");
    Swal.fire({
        background: "var(--pink-light)",
        width: 400,
        padding: 20,
        confirmButtonColor: "var(--pink)",
        title: changeLanguage[language].charmsPulserasPhoto13,
        text: '$169.00',
        imageUrl: "./imagenes/charmsPulseras/charmsPulseras13.png",
        confirmButtonText: changeLanguage[language].closeButton,

    })
}

function photo14() {
    let language = localStorage.getItem("languageConfig");
    Swal.fire({
        background: "var(--pink-light)",
        width: 400,
        padding: 20,
        confirmButtonColor: "var(--pink)",
        title: changeLanguage[language].charmsPulserasPhoto14,
        text: '$169.00',
        imageUrl: "./imagenes/charmsPulseras/charmsPulseras14.png",
        confirmButtonText: changeLanguage[language].closeButton,

    })
}

function photo15() {
    let language = localStorage.getItem("languageConfig");
    Swal.fire({
        background: "var(--pink-light)",
        width: 400,
        padding: 20,
        confirmButtonColor: "var(--pink)",
        title: changeLanguage[language].charmsPulserasPhoto15,
        text: '$149.00',
        imageUrl: "./imagenes/charmsPulseras/charmsPulseras15.png",
        confirmButtonText: changeLanguage[language].closeButton,

    })
}

function photo16() {
    let language = localStorage.getItem("languageConfig");
    Swal.fire({
        background: "var(--pink-light)",
        width: 400,
        padding: 20,
        confirmButtonColor: "var(--pink)",
        title: changeLanguage[language].charmsPulserasPhoto16,
        text: '$169.00',
        imageUrl: "./imagenes/charmsPulseras/charmsPulseras16.png",
        confirmButtonText: changeLanguage[language].closeButton,

    })
}

function photo17() {
    let language = localStorage.getItem("languageConfig");
    Swal.fire({
        background: "var(--pink-light)",
        width: 400,
        padding: 20,
        confirmButtonColor: "var(--pink)",
        title: changeLanguage[language].charmsPulserasPhoto17,
        text: '$199.00',
        imageUrl: "./imagenes/charmsPulseras/charmsPulseras17.png",
        confirmButtonText: changeLanguage[language].closeButton,

    })
}

function photo18() {
    let language = localStorage.getItem("languageConfig");
    Swal.fire({
        background: "var(--pink-light)",
        width: 400,
        padding: 20,
        confirmButtonColor: "var(--pink)",
        title: changeLanguage[language].charmsPulserasPhoto18,
        text: '$179.00',
        imageUrl: "./imagenes/charmsPulseras/charmsPulseras18.png",
        confirmButtonText: changeLanguage[language].closeButton,

    })
}

function photo19() {
    let language = localStorage.getItem("languageConfig");
    Swal.fire({
        background: "var(--pink-light)",
        width: 400,
        padding: 20,
        confirmButtonColor: "var(--pink)",
        title: changeLanguage[language].charmsPulserasPhoto19,
        text: '$179.00',
        imageUrl: "./imagenes/charmsPulseras/charmsPulseras19.png",
        confirmButtonText: changeLanguage[language].closeButton,

    })
}

function photo20() {
    let language = localStorage.getItem("languageConfig");
    Swal.fire({
        background: "var(--pink-light)",
        width: 400,
        padding: 20,
        confirmButtonColor: "var(--pink)",
        title: changeLanguage[language].charmsPulserasPhoto20,
        text: '$179.00',
        imageUrl: "./imagenes/charmsPulseras/charmsPulseras20.png",
        confirmButtonText: changeLanguage[language].closeButton,

    })
}

function photo21() {
    let language = localStorage.getItem("languageConfig");
    Swal.fire({
        background: "var(--pink-light)",
        width: 400,
        padding: 20,
        confirmButtonColor: "var(--pink)",
        title: changeLanguage[language].charmsPulserasPhoto21,
        text: '$69.00',
        imageUrl: "./imagenes/charmsPulseras/charmsPulseras21.png",
        confirmButtonText: changeLanguage[language].closeButton,

    })
}

function photo22() {
    let language = localStorage.getItem("languageConfig");
    Swal.fire({
        background: "var(--pink-light)",
        width: 400,
        padding: 20,
        confirmButtonColor: "var(--pink)",
        title: changeLanguage[language].charmsPulserasPhoto22,
        text: '$69.00',
        imageUrl: "./imagenes/charmsPulseras/charmsPulseras22.png",
        confirmButtonText: changeLanguage[language].closeButton,

    })
}

function photo23() {
    let language = localStorage.getItem("languageConfig");
    Swal.fire({
        background: "var(--pink-light)",
        width: 400,
        padding: 20,
        confirmButtonColor: "var(--pink)",
        title: changeLanguage[language].charmsPulserasPhoto23,
        text: '$59.00',
        imageUrl: "./imagenes/charmsPulseras/charmsPulseras23.png",
        confirmButtonText: changeLanguage[language].closeButton,

    })
}

function photo24() {
    let language = localStorage.getItem("languageConfig");
    Swal.fire({
        background: "var(--pink-light)",
        width: 400,
        padding: 20,
        confirmButtonColor: "var(--pink)",
        title: changeLanguage[language].charmsPulserasPhoto24,
        text: '$69.00',
        imageUrl: "./imagenes/charmsPulseras/charmsPulseras24.png",
        confirmButtonText: changeLanguage[language].closeButton,

    })
}