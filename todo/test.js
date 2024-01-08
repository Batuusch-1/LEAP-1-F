const mainDiv = document.getElementsByClassName("maindiv")[0];
console.log(mainDiv);
const textFunc = (event) => {
  event.target.classList.add("ckk");
 
};

// window.onclick = function sda(event) {
//  console.log(event.target);
   
// };

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

  boxArray.push(inputObj);
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
  // status iin value filter------------------------------------------
  const filtredTodo = boxArray.filter((el, i) => el.Status === "To do");
  const filtredinProgredd = boxArray.filter(
    (el, i) => el.Status === "in Progress"
  );
  const filtredStuck = boxArray.filter((el, i) => el.Status === "Stuck");
  const filtredDone = boxArray.filter((el, i) => el.Status === "Done");
  // status iin value filter----
  filtredTodo.forEach((el, i) => {
    toDoContainerElement += `<div ondragstart="drag(event)" class="box" draggable="true"id="${el.id}" >

          <ul>
            <li>${el.title}</li>
            <li>${el.Description}</li>
            <li id="Todo">${el.Status}</li>
            <li>${el.Priority}</li>
          </ul>
        <div class="trasheandedit">
        <i onclick="trashIcon(event.target.parentElement.parentElement.id)" class="fa-solid fa-trash"></i>
<i class="fa-solid fa-pen-to-square"></i>
        </div>
        </div>
        `;
  });

  filtredinProgredd.forEach((el, i) => {
    inProgressContainerElement += `<div ondragstart="drag(event)" class="box" draggable="true" id="${el.id}">
          <ul>
            <li>${el.title}</li>
            <li>${el.Description}</li>
            <li id="in Progress">${el.Status}</li>
            <li>${el.Priority}</li>
          </ul>
          <div class="trasheandedit">
        <i onclick="trashIcon(event.target.parentElement.parentElement.id)" class="fa-solid fa-trash"></i>
<i class="fa-solid fa-pen-to-square"></i>
        </div>
        </div>
        `;
  });

  filtredStuck.forEach((el, i) => {
    stuckContainerElement += `<div ondragstart="drag(event)" class="box" draggable="true" id="${el.id}">
          <ul>
            <li>${el.title}</li>
            <li>${el.Description}</li>
            <li id="Stuck">${el.Status}</li>
            <li>${el.Priority}</li>
          </ul>
          <div class="trasheandedit">
        <i onclick="trashIcon(event.target.parentElement.parentElement.id)" class="fa-solid fa-trash"></i>
<i class="fa-solid fa-pen-to-square"></i>
        </div>
        </div>
        `;
  });

  filtredDone.forEach((el, i) => {
    doneContainerElement += `<div ondragstart="drag(event)" class="box" draggable="true" id="${el.id}"
>
          <ul>
            <li>${el.title}</li>
            <li>${el.Description}</li>
            <li id="Done" >${el.Status}</li>
            <li>${el.Priority}</li>
          </ul>
          <div class="trasheandedit">
        <i onclick="trashIcon(event.target.parentElement.parentElement.id)" class="fa-solid fa-trash"></i>
<i class="fa-solid fa-pen-to-square"></i>
        </div>
        </div>
        `;
  });
  document.getElementById("add-value").innerHTML = toDoContainerElement;
  document.getElementById("add-value1").innerHTML = inProgressContainerElement;
  document.getElementById("add-value2").innerHTML = stuckContainerElement;
  document.getElementById("add-value3").innerHTML = doneContainerElement;
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
  const newStatus = event.target.parentElement.id.replace("add-value", ""); // Extract the status from the container ID

  // Update the status of the dragged element
  boxArray.forEach((el) => {
    if (el.id == boxId) {
      el.Status = newStatus;
    }
  });

  // Move the dragged element to the new container
  event.target.appendChild(draggedElement);

  render(); // Re-render the board with the updated statuses
  console.log(`Item ${boxId} moved to status: ${newStatus}`);
};

