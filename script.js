const todo = document.querySelector("#todo");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");
const columns = [todo, progress, done];
let draggedItem = null;

// Save function
function saveToLocalStorage() {
    const tasksData = {};
    columns.forEach(col => {
        const tasks = col.querySelectorAll(".task");
        tasksData[col.id] = Array.from(tasks).map(t => ({
            title: t.querySelector("h2").innerText,
            desc: t.querySelector("p").innerText
        }));
    });
    localStorage.setItem("tasks", JSON.stringify(tasksData));
}

// Counter update function

function updateCounters() {
    columns.forEach(col => {
        col.querySelector(".right").textContent =
            col.querySelectorAll(".task").length;
    });
}

// Task drag + delete events — SIRF EK BAAR
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
        updateCounters();
        saveToLocalStorage();
    });
}

//  Naya task banane ka function — reusable

function createTaskElement(title, desc) {
    const div = document.createElement("div");
    div.setAttribute("draggable", "true");
    div.classList.add("task");
    div.innerHTML = `
        <h2>${title}</h2>
        <p>${desc}</p>
        <button><i class="ri-delete-bin-6-line"></i></button>`;
    addDragEventOnTask(div);
    return div;
}

// Load from localStorage

if (localStorage.getItem("tasks")) {
    const data = JSON.parse(localStorage.getItem("tasks"));
    for (const col in data) {
        const column = document.querySelector(`#${col}`);
        data[col].forEach(task => {
            const div = createTaskElement(task.title, task.desc); 
            column.querySelector(".tasks-container").appendChild(div);
        });
    }
    updateCounters();
}

//  HTML mein jo tasks pehle se hain 

document.querySelectorAll(".task").forEach(task => addDragEventOnTask(task));

//  Column drag events

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
    column.addEventListener("dragover", (e) => e.preventDefault());
    column.addEventListener("drop", (e) => {
        e.preventDefault();
        if (!draggedItem) return; 
        column.querySelector(".tasks-container").appendChild(draggedItem);
        column.classList.remove("hover-over");
        updateCounters();
        saveToLocalStorage();
        draggedItem = null;
    });
}

columns.forEach(col => addDragEventsOnColumn(col)); 

// Modal code

const toggleModelBtn = document.querySelector("#toggle-modal");
const modalbg = document.querySelector(".modal .bg");
const modal = document.querySelector(".modal");
const addTaskBtn = document.querySelector("#add-new-task");
const taskTitleInput = document.querySelector("#task-title-input");
const taskDescInput = document.querySelector("#task-desc-input");

toggleModelBtn.addEventListener("click", () => modal.classList.toggle("active"));
modalbg.addEventListener("click", () => modal.classList.remove("active"));

addTaskBtn.addEventListener("click", () => {
    const taskTitle = taskTitleInput.value;
    const taskDesc = taskDescInput.value;
    if (!taskTitle.trim()) return;

    const div = createTaskElement(taskTitle, taskDesc); 
    document.querySelector("#todo .tasks-container").appendChild(div);
    modal.classList.remove("active");
    updateCounters();
    saveToLocalStorage();

    taskTitleInput.value = "";
    taskDescInput.value = "";
});