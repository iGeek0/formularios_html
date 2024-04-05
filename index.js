console.log("entro a index.js");

const btnRegistrar = document.getElementById("btnRegistrar");

var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var edad = document.getElementById("edad");


btnRegistrar.addEventListener("click", () => {
    console.log("Cick en boton formulario");
    // console.log(nombre.value);
    // console.log(apellido.value);
    // console.log(edad.value);
    console.log([
        nombre.value,
        apellido.value,
        edad.value
    ]);
    // alert([
    //     nombre.value,
    //     apellido.value,
    //     edad.value
    // ]);
});