// second screen gargaj irdeg function
const show = () => {
  document.getElementsByClassName("second-screen")[0].classList.add("show");
};
// second screen gargaj irdeg function
// second screen alga bolgodog FUNCTION
const hide = () => {
  document.getElementsByClassName("second-screen")[0].classList.remove("show");
};
// second screen alga bolgodog FUNCTION
// delete icon ajilah function
const trashIcon = (event) => {
  for (let i = 0; i < boxArray.length; i++) {
    if (boxArray[i].id == event) {
      boxArray.splice(i, 1);
    }
  }
  render();
};
// delete icon ajilah function
// input values---------------
const boxArray = [];
const statusInputValue = document.getElementById("status-input").value;
// input values---------------
// value nuudiig objected avaaad newarray ru pushlene
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
    // Update existing task
    boxArray[existingTaskIndex] = inputObj;
  } else {
    // Add new task
    boxArray.push(inputObj);
  }

  hide();
  render();
};

// value nuudiig objected avaaad newarray ru pushlene
// inputuudiig html ruu horvuulene
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
  count();
};

// inputuudiig html ruu horvuulene-----------------------------------
// elementuudiig drag hiideg function
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
  const newStatus = event.target.parentElement.id; // Extract the status from the container ID
  // Update the status of the dragged element
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

// elementuudiig drag hiideg function
// Add this function to handle the edit icon click
const editTask = (taskId) => {
  // Find the task to edit
  const taskToEdit = boxArray.find((el) => el.id == taskId);

  // Remove the old task from the array
  const indexToRemove = boxArray.findIndex((el) => el.id == taskId);
  if (indexToRemove !== -1) {
    boxArray.splice(indexToRemove, 1);
  }

  // You can now use the taskToEdit object to populate your edit form
  // For example, you can pre-fill the title, description, status, and priority fields in your edit form
  document.getElementById("title-input").value = taskToEdit.title;
  document.getElementById("description-input").value = taskToEdit.Description;
  document.getElementById("status-input").value = taskToEdit.Status;
  document.getElementById("priority-input").value = taskToEdit.Priority;

  // Now, you can show the second screen with the pre-filled data
  show();
};
const markAsDone = (taskId) => {
  const taskToMarkAsDone = boxArray.find((el) => el.id == taskId);

  // Update the status to "Done"
  taskToMarkAsDone.Status = "Done";

  // Re-render the board with the updated statuses
  render();
};




