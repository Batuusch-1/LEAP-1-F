// import chalk from "chalk";
// import { v4 as uuid} from "uuid";
// console.log(chalk.blue("Hello"));
// const uniqId = uuid();
// console.log(uniqId);



const drop = (event) => {
  event.preventDefault();
  const boxId = event.dataTransfer.getData("text");
  const droppedBox = document.getElementById(boxId);
  
  // Check if the dropped box is in the "Done" section
  if (event.target.id === 'done-container') {
    // Update the status of the dropped item to "Done"
    const statusElement = droppedBox.querySelector('li:nth-child(3)');
    statusElement.textContent = 'Done';
    
    // You can also add any additional logic or actions here
    
    // Append it to done container
    event.target.appendChild(droppedBox);
    
   } else {
     // If not in Done container append it back where it was dragged from.
     document.getElementById('todo-container').appendChild(droppedBox);
   }
};

// Make sure you update your HTML code accordingly by adding id="done-container" attribute on your "Done" container.

// With this modification, when you drag and drop a todo item into the "done-container", its Status value will be updated as well.

// Let me know if this helps or if there's anything else I can assist you with!