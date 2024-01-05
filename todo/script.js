const show = () => {
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

// event.target.parentElement.parentElement.ad
const boxArray = [];
const statusInputValue = document.getElementById("status-input").value;
const allvalueHolder = document.getElementsByTagName("option");
// console.log(allvalueHolder[1].value);
const addTodo = () => {
  const titleInputValue = document.getElementById("title-input").value;
  const descriptionInputValue =
    document.getElementById("description-input").value;
  const statusInputValue = document.getElementById("status-input").value;
  const priorityInputValue = document.getElementById("priority-input").value;
  const inputObj = {
    id: titleInputValue + Math.floor(Math.random() * (999 - 0) + 0),
    title: titleInputValue,
    Description: descriptionInputValue,
    Status: statusInputValue,
    Priority: priorityInputValue,
  };

  boxArray.push(inputObj);

  hide();
  render();
};

const render = () => {
  let toDoContainerElement = "";
  let inProgressContainerElement = "";
  let stuckContainerElement = "";
  let doneContainerElement = "";

  const filtredTodo = boxArray.filter((el, i) => el.Status === "To do");
  const filtredinProgredd = boxArray.filter(
    (el, i) => el.Status === "in Progress"
  );
  const filtredStuck = boxArray.filter((el, i) => el.Status === "Stuck");
  const filtredDone = boxArray.filter((el, i) => el.Status === "Done");
  filtredTodo.forEach((el, i) => {
    toDoContainerElement += `<div ondragstart="drag(event)" class="box" draggable="true"id="${el.id}" >

          <ul>
            <li>${el.title}</li>
            <li>${el.Description}</li>
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
            <li>${el.Priority}</li>
          </ul>
          <div class="trasheandedit">
        <i onclick="trashIcon(event.target.parentElement.parentElement.id)" class="fa-solid fa-trash"></i>
<i class="fa-solid fa-pen-to-square"></i>
        </div>
        </div>
        `;
  });
  document.getElementById("add-value1").innerHTML = inProgressContainerElement;
  document.getElementById("add-value2").innerHTML = stuckContainerElement;
  document.getElementById("add-value").innerHTML = toDoContainerElement;
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
  event.target.appendChild(document.getElementById(boxId));
};
// document.getElementsByTagName("svg")[0].onclick =()=>{
//   document.getElementsByClassName("valuedivs")[0].classList.add;
// }
const  cyclecount =()=>{
const count = document.getElementById("q").value;

}
