let numParametros = Object.keys(parameters).length;
console.log(`${numParametros} parámetros recibidos`);
console.log("Los parámetros son:");
console.log(parameters);
if (numParametros == 4) {
  console.log("Se creará una tarea")
  addTarea(
parameters.fecha,
parameters.materia,
parameters.descripcion,
parameters.realizada
  );

} else if (numParametros == 5) {
  modifyTarea(
parameters.id,
parameters.fecha,
parameters.materia,
parameters.descrpcion,
parameters.realizada
  );
}
window.history.pushState({}, document.title, "index.html");
// console.log(document.title);

let deleteForm = document.querySelector("#deleteForm");
deleteForm.onsubmit = () => {
  deleteTarea(document.querySelector("#deleteForm input[name='id']").value);
  updateTableHtml(tareas);
};

updateTableHtml(tareas);