const render = () => {
  let toDoContainerElement = "";
  let inProgressContainerElement = "";
  let stuckContainerElement = "";
  let doneContainerElement = "";
  boxArray.forEach((el, i) => {
    const boxHtml = `<div ondragstart="drag(event)" class="box" draggable="true" id="${el.id}">
      <i onclick="markAsDone(${el.id})"  class="fa-solid fa-check"></i>
    <ul>
        <li>${el.title}</li>
        <li>${el.Description}</li>
        <li>${el.Status}</li>
        <li>${el.Priority}</li>
      </ul>
      <div class="trasheandedit">
        <i onclick="trashIcon(${el.id})" class="fa-solid fa-trash"></i>
        <i onclick="editTask(${el.id})" class="fa-solid fa-pen-to-square"></i>
      </div>
    </div>`;

    switch (el.Status) {
      case "To do":
        toDoContainerElement += boxHtml;
        break;
      case "in-Progress":
        inProgressContainerElement += boxHtml;
        break;
      case "Stuck":
        stuckContainerElement += boxHtml;
        break;
      case "Done":
        doneContainerElement += boxHtml;
        break;
      default:
        console.log("k");
        break;
    }
  });
  document.getElementById("add-value").innerHTML = toDoContainerElement;
  document.getElementById("add-value1").innerHTML = inProgressContainerElement;
  document.getElementById("add-value2").innerHTML = stuckContainerElement;
  document.getElementById("add-value3").innerHTML = doneContainerElement;
};
console.log(123);