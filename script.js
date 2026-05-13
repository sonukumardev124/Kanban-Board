const todo = document.querySelector("#todo");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");
let draggedItem = null;


function addDragEventOnTask(task) {
    task.addEventListener("dragstart", () => {
        draggedItem = task;
        setTimeout(() => task.classList.add("dragging"), 0);
    });
    task.addEventListener("dragend", () => {
        task.classList.remove("dragging");
        draggedItem = null;
    });
    task.querySelector("button").addEventListener("click", () => {
        task.remove();
        [todo, progress, done].forEach(col =>{
            const tasks = col.querySelectorAll(".task");
            const count = col.querySelector(".right");
            count.textContent = tasks.length;    
        });
    });
}

// Purane tasks pe events lagao

document.querySelectorAll(".task").forEach(task => addDragEventOnTask(task));

// Column drag events
function addDragEventsOnColumn(column) {
    column.addEventListener("dragenter", (e) => {
        e.preventDefault();
        column.classList.add("hover-over");
    });
    column.addEventListener("dragleave", (e) => {
        e.preventDefault();
        if (!column.contains(e.relatedTarget)) {
            column.classList.remove("hover-over");
        }
    });
    column.addEventListener("dragover", (e) => {
        e.preventDefault();
    });
 column.addEventListener("drop", (e) => {
    e.preventDefault();
    console.log("Dropped", draggedItem, column);
    const container = column.querySelector(".tasks-container");
    container.appendChild(draggedItem);       
    column.classList.remove("hover-over");
    [todo, progress, done].forEach(col =>{
        const tasks = col.querySelectorAll(".task");
        const count = col.querySelector(".right");
        count.textContent = tasks.length;    
    })
    draggedItem = null;
});
}
addDragEventsOnColumn(todo);
addDragEventsOnColumn(progress);
addDragEventsOnColumn(done);

//  Modal related code
const toggleModelBtn = document.querySelector("#toggle-modal");
const modalbg = document.querySelector(".modal .bg");
const modal = document.querySelector(".modal");
const addTaskBtn = document.querySelector("#add-new-task");

toggleModelBtn.addEventListener("click", () => {
    modal.classList.toggle("active");
});

modalbg.addEventListener("click", () => {
    modal.classList.remove("active");
});

addTaskBtn.addEventListener("click", () => {
    const taskTitle = document.querySelector("#task-title-input").value;
    const taskDesc = document.querySelector("#task-desc-input").value;

    if (!taskTitle.trim()) return; 

    const div = document.createElement("div");
    div.setAttribute("draggable", "true");
    div.classList.add("task");

    div.innerHTML = `
        <h2>${taskTitle}</h2>
        <p>${taskDesc}</p>
        <button>Delete</button>
    `;

    addDragEventOnTask(div);

    document.querySelector("#todo .tasks-container").appendChild(div);
    modal.classList.remove("active");
    [todo, progress, done].forEach(col =>{
        const tasks = col.querySelectorAll(".task");
        const count = col.querySelector(".right");
        count.textContent = tasks.length;    
    });

    document.querySelector("#task-title-input").value = "";
    document.querySelector("#task-desc-input").value = "";
});