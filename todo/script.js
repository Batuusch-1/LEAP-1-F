const show = () => {
  document.getElementById("title-input").value = "";
  document.getElementById("description-input").value = "";
  document.getElementsByClassName("second-screen")[0].classList.add("show");
};
const hide = () => {
  document.getElementsByClassName("second-screen")[0].classList.remove("show");
};
const trashIcon = (event) => {
  for (let i = 0; i < boxArray.length; i++) {
    if (boxArray[i].id == event) {
      boxArray.splice(i, 1);
    }
  }
  render();
};
const boxArray = [];
const statusInputValue = document.getElementById("status-input").value;
const addTodo = () => {
  const titleInputValue = document.getElementById("title-input").value;
  const descriptionInputValue =
    document.getElementById("description-input").value;
  const statusInputValue = document.getElementById("status-input").value;
  const priorityInputValue = document.getElementById("priority-input").value;
  const inputObj = {
    id: Math.floor(Math.random() * (999 - 0) + 0),
    title: titleInputValue,
    Description: descriptionInputValue,
    Status: statusInputValue,
    Priority: priorityInputValue,
  };
  const existingTaskIndex = boxArray.findIndex((el) => el.id == inputObj.id);
  if (existingTaskIndex !== -1) {
    boxArray[existingTaskIndex] = inputObj;
  } else {
    boxArray.push(inputObj);
  }
  hide();
  render();
};
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
const allowDrop = (event) => {
  event.preventDefault();
};
const drag = (event) => {
  event.dataTransfer.setData("text", event.target.id);
};
const drop = (event) => {
  event.preventDefault();
  const boxId = event.dataTransfer.getData("text");
  const draggedElement = document.getElementById(boxId);
  const newStatus = event.target.parentElement.id;
  boxArray.forEach((el) => {
    if (el.id == boxId) {
      el.Status = newStatus;
    }
    console.log(el.Status);
  });
  event.target.appendChild(draggedElement);

  console.log(`Item ${boxId} moved to status: ${newStatus}`);
  render();
};
const editTask = (taskId) => {
  const taskToEdit = boxArray.find((el) => el.id == taskId);
  const indexToRemove = boxArray.findIndex((el) => el.id == taskId);
  if (indexToRemove !== -1) {
    boxArray.splice(indexToRemove, 1);
  }
  document.getElementById("title-input").value = taskToEdit.title;
  document.getElementById("description-input").value = taskToEdit.Description;
  document.getElementById("status-input").value = taskToEdit.Status;
  document.getElementById("priority-input").value = taskToEdit.Priority;
  show();
};
const markAsDone = (taskId) => {
  const taskToMarkAsDone = boxArray.find((el) => el.id == taskId);
  taskToMarkAsDone.Status = "Done";
  render();
};

