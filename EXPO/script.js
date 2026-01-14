// Cargamos el dom
const input = document.getElementById("tarea");
const button = document.getElementById("agregar");
const list = document.getElementById("lista");
const message = document.getElementById("mensaje");

// agregar a lista
button.addEventListener("click", () => {
  // input vacio
  if (input.value === "") {
    message.textContent = "La tarea no puede estar vacía";
    message.style.color = "red";
  } else {
    // tarea agregada
    list.innerHTML += `<li>${input.value}</li>`;
    message.textContent = "Tarea agregada correctamente";
    message.style.color = "green";
    input.value = "";
  }
});



/* Dom(document object model)
innerHtml: modifica o agrega el html. se debe usar con cuidado:
- confia en el contenido que recibe
- peligroso con datos del usuario
- Robar cookies, Robar sesiones, Modificar la página, Enviar datos a otro servidor

cuando usarlo: 
- el html lo escribes tu, no el usuario

textContent: modifica un texto sin interpretar etiquetas html
*/