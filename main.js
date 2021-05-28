//Capturar input - tabla - Botón
const input = document.getElementById("input");
const table = document.getElementById("tabla");
const boton = document.getElementById("boton");

//Creamos la función para la app
function agregarTarea() {
    //creamos una fila de la tabla
    const fila = document.createElement("tr");

    //Introducimos en Fila elementos HTML como checkbox - valor del input - X para eliminarla
    fila.innerHTML = `
        <td><input type="checkbox" onClick="completar()" /></td>
        <td> ${input.value} </td>
        <td><span onClick="borrar()"> X </span></td>
    `;

    //con Appendchild agregarlo a la tabla capturada
    tabla.appendChild(fila);

};

//Creamos el evento de click sobre el botón
boton.addEventListener('click', agregarTarea);

//Creamos una función para borrar con la X para lo cual debemos borrar toda la fila
//Le pasamos un parámetro evento a la función
function borrar(event) {
    this.event.target.parentElement.parentElement.remove();
};


//Crear función para que la tarea se vea completada
function completar(event) {
    //Valida si el checkbox está marcado
    if (this.event.target.checked) {
        //crea una clase para editarl en CSS y cambiar el color del fondo
        this.event.target.parentElement.parentElement.classList.add("completado");
    } else {
        this.event.target.parentElement.parentElement.classList.remove("completado");
    }
}