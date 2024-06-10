window.localStorage.setItem("nombre","ferminPruebas");

let datoalmacenado = localStorage.getItem("nombre");
console.log(datoalmacenado);
localStorage.removeItem("nombre");
console.log(localStorage.getItem("nombre"));
localStorage.clear()
console.log(localStorage.getItem("nombre"));

sessionStorage.setItem("user","pedro");
console.log(sessionStorage.getItem("user"))