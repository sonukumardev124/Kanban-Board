const todo = document.querySelector("#todo");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");
const tasks = document.querySelectorAll(".task");
const column = [todo, progress, done]

let draggedTask = null;

tasks.forEach(task => {
         task.addEventListener("drag", (e) => {
                  // console.log("dragging",(e))
                  DragElement = task;
         })
})

function addDragEventsOnColumn(column) {
         column.addEventListener("dragenter", (e) => {
                  e.preventDefault();
                  column.classList.add("hover-over");
         });
         column.addEventListener("dragleave", (e) => {
                  e.preventDefault();
                  column.classList.remove("hover-over");
         });
         column.addEventListener("dragover", (e) => {
                  e.preventDefault();
         })
         column.addEventListener("drop", (e) => {
                  e.preventDefault();
                  console.log("dropped", DragElement, column);
                  column.appendChild(DragElement);
                  column.classList.remove("hover-over");

                  [todo, progress, done].forEach(col => {
                           const task = col.querySelectorAll(".task");
                           console.log(object)
                           const count = col.querySelector(".right");
                           count.innerText = tasks.length;
                  })
         })
}


addDragEventsOnColumn(todo);
addDragEventsOnColumn(progress);
addDragEventsOnColumn(done);

// Modal related use

const toggleModalButton = document.querySelector("#toggle-modal")
const modalbg = document.querySelector(".modal .bg")
const modal = document.querySelector(".modal")
const addTaskButton = document.querySelector("#add-new-task")

toggleModalButton.addEventListener("click", () => {
         modal.classList.toggle("active")
})
modalbg.addEventListener("click", () => {
         modal.classList.remove("active")
})

addTaskButton.addEventListener("click", () => {
         const taskTitle = document.querySelector("#task-title-input").value
         const taskDesc = document.querySelector("#task-desc-input").value

         const div = document.createElement("div")
         div.classList.add("task")
         div.setAttribute("draggable", "true")
         div.innerHTML = `
         <h2>${taskTitle}</h2>
         <p>${taskDesc}</p>
         <button>Delete</button>`

         todo.appendChild(div)
         column.forEach(col => {
                  // const task = col.querySelectorAll(".task");
                  // const count = col.querySelectorAll(".right");
                  // count.innerText = task.length;
         })
         modal.classList.remove("active")    
})