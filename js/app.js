window.addEventListener('load', inicial, false);
let products = document.querySelectorAll(".accessory");
let productSelected = "";

const findSelectedProduct = () => {
    products.forEach((product) => {
        if (product.checked) {
            productSelected = product.value;
        }
    })
}
findSelectedProduct();

function inicial() {

    let tabla = document.getElementById('table');
    let cantidad = document.getElementById('cantidad');
    let registrarBtn = document.getElementById('registrarBtn');
    let precioBtn = document.getElementById('precioBtn');
    let total = document.getElementById('total');
    let masPopularBtn = document.getElementById('masPopular');
    let restablecerBtn = document.getElementById('restablecerBtn');

    let datos = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ];

    registrarAccesorio(1, 'Colgante Snitch', 'Harry Potter', 'Oro', 'Charm', 0, 0, 79);
    registrarAccesorio(2, 'Cadena de Serpiente con Cierre', 'Star Wars', 'Plata', 'Pulsera', 0, 0, 79);
    registrarAccesorio(3, 'Colgante Diadema Minnie', 'Disney', 'Plata', 'Charm', 0, 0, 49);
    registrarAccesorio(4, 'Pandora eslabones', 'Pandora Me', 'Plata', 'Collar', 0, 0, 175);
    registrarAccesorio(5, 'Corona y Logotipo de Pandora', 'Charms y Pulseras', 'Oro Rosa', 'Charm', 0, 0, 39);
    registrarAccesorio(6, 'Pandora rígida cierre deslizante', 'Descuentos', 'Plata', 'Charm', 0, 0, 59);
    registrarAccesorio(7, 'Colgante Árbol Genealógico', 'Charms y Pulseras', 'Oro', 'Charm', 0, 0, 89);
    registrarAccesorio(8, 'Cadena de seguridad', 'Descuentos', 'Oro Rosa', 'Charm', 0, 0, 99);
    registrarAccesorio(9, 'Colgante Reliquias de la Muerte', 'Harry Potter', 'Plata', 'Charm', 0, 0, 49);
    registrarAccesorio(10, 'Chewbacca', 'Star Wars', 'Plata', 'Charm', 0, 0, 69);
    registrarAccesorio(11, 'Casa y los Globos de Up', 'Disney', 'Plata', 'Charm', 0, 0, 49);
    registrarAccesorio(12, 'Pandora eslabones', 'Pandora Me', 'Plata', 'Pulsera', 0, 0, 90);

    tablaProveedores();

    function registrarAccesorio(id, accesorio, coleccion, metal, tipo, cantidad, total, precio) {
        datos[0].push(id);
        datos[1].push(accesorio);
        datos[2].push(coleccion);
        datos[3].push(metal);
        datos[4].push(tipo);
        datos[5].push(cantidad);
        datos[6].push(total);
        datos[7].push(precio);
    }

    function registrarCompra() {
        let accesorioSumar = Number(cantidad.value);
        let index = Number(productSelected) - 1;
        let cantidadActual = Number(datos[5][index]);
        cantidadActual = cantidadActual + accesorioSumar;
        datos[5][index] = cantidadActual;
        let total = datos[7][index] * cantidadActual;
        datos[6][index] = total;
    }

    function tablaProveedores() {

        tabla.innerHTML = '';

        for (let y = 0; y < datos[0].length; y++) {

            let tr = document.createElement('tr');
            tabla.appendChild(tr);

            td = document.createElement('td');
            td.innerHTML = datos[0][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[1][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[2][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[3][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[4][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[5][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = `$${datos[6][y]}.00`;
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = "<button class='deleteBtn'><i class='fas fa-trash-alt deleteBtn'></i></button>";
            tr.appendChild(td);

        }
    }

    function totalCompra() {
        let language = localStorage.getItem("languageConfig");
        let total = 0;

        for (let y = 0; y < datos[6].length; y++) {
            total = total + datos[6][y];
        }
        Swal.fire({
            background: "var(--pink-light)",
            confirmButtonColor: "var(--pink)",
            confirmButtonText: changeLanguage[language].accept,
            imageUrl: "./imagenes/logo-corona.png",
            imageHeight: 80,
            title: changeLanguage[language].payAmount + "$" + total + ".00",
            width: 400,
            padding: 20,
        });
    }

    function masPopular() {
        let language = localStorage.getItem("languageConfig");
        let maxAccesorio = datos[5][0];
        let posicionMayor = 0;
        for (let y = 0; y < datos[5].length; y++) {

            if (maxAccesorio < datos[5][y]) {
                maxAccesorio = datos[5][y];
            }
        }
        posicionMayor = datos[5].indexOf(maxAccesorio);
        Swal.fire({
            background: "var(--pink-light)",
            confirmButtonColor: "var(--pink)",
            confirmButtonText: changeLanguage[language].accept,
            imageUrl: "./imagenes/logo-corona.png",
            imageHeight: 80,
            title: changeLanguage[language].popularAccessory + datos[1][posicionMayor] + changeLanguage[language].fromCollection + datos[2][posicionMayor],
            width: 400,
            padding: 20,
        });
    }

    function consultarPrecio() {
        let language = localStorage.getItem("languageConfig");
        let index = Number(productSelected) - 1;
        let precioAccesorio = datos[7][index];

        Swal.fire({
            background: "var(--pink-light)",
            confirmButtonColor: "var(--pink)",
            confirmButtonText: changeLanguage[language].accept,
            imageUrl: "./imagenes/logo-corona.png",
            imageHeight: 80,
            title: changeLanguage[language].accessoryPrice + datos[1][index] + changeLanguage[language].is + "$" + precioAccesorio + ".00",
            width: 400,
            padding: 20,
        });
    }

    registrarBtn.onclick = function registrarBtnOnClick() {
        let language = localStorage.getItem("languageConfig");
        registrarCompra();
        tablaProveedores();

        if (cantidad.value == '') {
            Swal.fire({
                background: "var(--pink-light)",
                confirmButtonColor: "var(--pink)",
                confirmButtonText: changeLanguage[language].accept,
                icon: 'error',
                title: changeLanguage[language].form,
                text: changeLanguage[language].invalidAmount,
                width: 400,
                padding: 20,
            });
        } else {
            Swal.fire({
                background: "var(--pink-light)",
                confirmButtonColor: "var(--pink)",
                confirmButtonText: changeLanguage[language].accept,
                icon: 'success',
                title: changeLanguage[language].registerSuccess,
                timer: 2000,
                width: 400,
                padding: 20,
            })
        }
    }

    function borrarfila(e) {
        console.log(e);
        if (!e.target.classList.contains("deleteBtn")) {
            return;
        }
        const btn = e.target;
        btn.closest("tr").remove();
    }

    function restablecer() {
        let index = Number(productSelected) - 1;
        datos[5][index] = 0;
        datos[6][index] = 0;
    }

    precioBtn.onclick = consultarPrecio;
    masPopularBtn.onclick = masPopular;

    total.onclick = totalCompra;
    restablecerBtn.onclick = function() {
        restablecer();
        tablaProveedores();
    }

    tabla.addEventListener("click", borrarfila);
}