const todo = document.querySelector("#todo");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");
let draggedItem = null;

console.log(todo, progress, done);
const tasks = document.querySelectorAll(".task");
tasks.forEach(task => {
    task.addEventListener("drag", (e) => {
        dragElement = task;
    });
});

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
    });
    column.addEventListener("drop", (e) => {
        e.preventDefault();
        console.log("Dropped", dragElement, column);
        column.appendChild(dragElement );
        column.classList.remove("hover-over");
    });
}
addDragEventsOnColumn(todo);
addDragEventsOnColumn(progress);
addDragEventsOnColumn(done);

// Model related code

const togglaModelBtn = document.querySelector("#toggle-modal");
const modalbg = document.querySelector(".modal .bg");
const modal = document.querySelector(".modal");
const addTaskBtn = document.querySelector("#add-new-task");

togglaModelBtn.addEventListener("click", () => {
    modal.classList.toggle("active");
});
modalbg.addEventListener("click", () => {
    modal.classList.remove("active");
});

addTaskBtn.addEventListener("click", () => {
    const taskTitle = document.querySelector("#task-title-input").value;
    const taskDesc = document.querySelector("#task-desc-input").value;

    const div = document.createElement("div");
    div.setAttribute("draggable", "true");

    div.innerHTML = 
    `<h2>${taskTitle}</h2>
    <p>${taskDesc}</p>
    <button>Delete</button>`;

    todo.appendChild(div);
    modal.classList.remove("active");
});

// Modal related code
