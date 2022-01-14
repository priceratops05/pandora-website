const allInput = document.getElementById("all");
const harryInput = document.getElementById("harry");
const starWarsInput = document.getElementById("star-wars");
const disneyInput = document.getElementById("disney");


const filter = () => {
    const allAccessories = document.querySelectorAll(".img-gallery");
    const harryAccessories = document.querySelectorAll(".harry");
    const starWarsAccessories = document.querySelectorAll(".star-wars");
    const disneyAccessories = document.querySelectorAll(".disney");

    if (allInput.checked) {
        allAccessories.forEach(accessory => accessory.classList.remove("hidden"));
    } else {
        if (harryInput.checked) {
            harryAccessories.forEach(accessory => accessory.classList.remove("hidden"));
        } else {
            harryAccessories.forEach(accessory => accessory.classList.add("hidden"));
        }

        if (starWarsInput.checked) {
            starWarsAccessories.forEach(accessory => accessory.classList.remove("hidden"));
        } else {
            starWarsAccessories.forEach(accessory => accessory.classList.add("hidden"));
        }

        if (disneyInput.checked) {
            disneyAccessories.forEach(accessory => accessory.classList.remove("hidden"));
        } else {
            disneyAccessories.forEach(accessory => accessory.classList.add("hidden"));
        }
    }
}


function photo1() {
    let language = localStorage.getItem("languageConfig");
    Swal.fire({
        background: "var(--pink-light)",
        width: 400,
        padding: 20,
        confirmButtonColor: "var(--pink)",
        title: changeLanguage[language].coleccionesPhoto1,
        text: '$79.00',
        imageUrl: "./imagenes/colecciones/colecciones1.png",
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
        title: changeLanguage[language].coleccionesPhoto2,
        text: '$79.00',
        imageUrl: "./imagenes/colecciones/colecciones2.png",
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
        title: changeLanguage[language].coleccionesPhoto3,
        text: '$59.00',
        imageUrl: "./imagenes/colecciones/colecciones3.png",
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
        title: 'Charm Harry Potter',
        text: '$49.00',
        imageUrl: "./imagenes/colecciones/colecciones4.png",
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
        title: changeLanguage[language].coleccionesPhoto5,
        text: '$45.00',
        imageUrl: "./imagenes/colecciones/colecciones5.png",
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
        title: changeLanguage[language].coleccionesPhoto6,
        text: '$49.00',
        imageUrl: "./imagenes/colecciones/colecciones6.png",
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
        title: changeLanguage[language].coleccionesPhoto7,
        text: '$49.00',
        imageUrl: "./imagenes/colecciones/colecciones7.png",
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
        title: changeLanguage[language].coleccionesPhoto8,
        text: '$49.00',
        imageUrl: "./imagenes/colecciones/colecciones8.png",
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
        title: changeLanguage[language].coleccionesPhoto9,
        text: '$69.00',
        imageUrl: "./imagenes/colecciones/colecciones9.png",
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
        title: 'Charm Chewbacca™ Star Wars™',
        text: '$69.00',
        imageUrl: "./imagenes/colecciones/colecciones10.png",
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
        title: 'Charm Darth Vader™ Star Wars™',
        text: '$59.00',
        imageUrl: "./imagenes/colecciones/colecciones11.png",
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
        title: 'Charm C-3PO™ Star Wars™',
        text: '$79.00',
        imageUrl: "./imagenes/colecciones/colecciones12.png",
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
        title: 'Charm BB-8™ Star Wars™',
        text: '$69.00',
        imageUrl: "./imagenes/colecciones/colecciones13.png",
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
        title: changeLanguage[language].coleccionesPhoto14,
        text: '$59.00',
        imageUrl: "./imagenes/colecciones/colecciones14.png",
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
        title: changeLanguage[language].coleccionesPhoto15,
        text: '$69.00',
        imageUrl: "./imagenes/colecciones/colecciones15.png",
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
        title: changeLanguage[language].coleccionesPhoto16,
        text: '$79.00',
        imageUrl: "./imagenes/colecciones/colecciones16.png",
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
        title: changeLanguage[language].coleccionesPhoto17,
        text: '$49.00',
        imageUrl: "./imagenes/colecciones/colecciones17.png",
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
        title: changeLanguage[language].coleccionesPhoto18,
        text: '$49.00',
        imageUrl: "./imagenes/colecciones/colecciones18.png",
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
        title: changeLanguage[language].coleccionesPhoto19,
        text: '$89.00',
        imageUrl: "./imagenes/colecciones/colecciones19.png",
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
        title: changeLanguage[language].coleccionesPhoto20,
        text: '$49.00',
        imageUrl: "./imagenes/colecciones/colecciones20.png",
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
        title: changeLanguage[language].coleccionesPhoto21,
        text: '$69.00',
        imageUrl: "./imagenes/colecciones/colecciones21.png",
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
        title: changeLanguage[language].coleccionesPhoto22,
        text: '$59.00',
        imageUrl: "./imagenes/colecciones/colecciones22.png",
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
        title: changeLanguage[language].coleccionesPhoto23,
        text: '$49.00',
        imageUrl: "./imagenes/colecciones/colecciones23.png",
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
        title: changeLanguage[language].coleccionesPhoto24,
        text: '$59.00',
        imageUrl: "./imagenes/colecciones/colecciones24.png",
        confirmButtonText: changeLanguage[language].closeButton,

    })
}