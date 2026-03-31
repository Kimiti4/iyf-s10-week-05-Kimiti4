// =========================
// DOM Elements
// =========================
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const filters = document.querySelectorAll(".filter");
const clearCompletedBtn = document.getElementById("clear-completed");

// =========================
// State
// =========================
let todos = [];
let currentFilter = "all";

// =========================
// LocalStorage Helpers
// =========================
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
    const saved = localStorage.getItem("todos");
    if (saved) {
        todos = JSON.parse(saved);
    }
}

// =========================
// Create Todo Element
// =========================
function createTodoElement(todo) {
    const li = document.createElement("li");
    li.dataset.id = todo.id;

    if (todo.completed) {
        li.classList.add("completed");
    }

    li.innerHTML = `
        <span class="todo-text">${todo.text}</span>
        <button class="delete-btn">❌</button>
    `;

    return li;
}

// =========================
// Render Todos
// =========================
function renderTodos() {
    todoList.innerHTML = "";

    const filtered = todos.filter(todo => {
        if (currentFilter === "active") return !todo.completed;
        if (currentFilter === "completed") return todo.completed;
        return true;
    });

    filtered.forEach(todo => {
        todoList.appendChild(createTodoElement(todo));
    });

    updateStats();
}

// =========================
// Add Todo
// =========================
function addTodo(text) {
    if (!text.trim()) return;

    const todo = {
        id: Date.now().toString(),
        text,
        completed: false
    };

    todos.push(todo);
    saveTodos();
    renderTodos();
}

// =========================
// Toggle Todo
// =========================
function toggleTodo(id) {
    todos = todos.map(todo =>
        todo.id === id
            ? { ...todo, completed: !todo.completed }
            : todo
    );

    saveTodos();
    renderTodos();
}

// =========================
// Delete Todo
// =========================
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);

    saveTodos();
    renderTodos();
}

// =========================
// Update Stats
// =========================
function updateStats() {
    const remaining = todos.filter(todo => !todo.completed).length;
    itemsLeft.textContent = `${remaining} items left`;
}

// =========================
// Filter Todos
// =========================
function filterTodos(filter) {
    currentFilter = filter;

    filters.forEach(btn => {
        btn.classList.toggle("active", btn.dataset.filter === filter);
    });

    renderTodos();
}

// =========================
// Event Listeners
// =========================

// Add Todo
form.addEventListener("submit", function (event) {
    event.preventDefault();
    addTodo(input.value);
    input.value = "";
});

// Toggle / Delete (Delegation)
todoList.addEventListener("click", function (event) {
    const li = event.target.closest("li");
    if (!li) return;

    const id = li.dataset.id;

    if (event.target.matches(".delete-btn")) {
        deleteTodo(id);
    } else {
        toggleTodo(id);
    }
});

// Filters
filters.forEach(btn => {
    btn.addEventListener("click", () => {
        filterTodos(btn.dataset.filter);
    });
});

// Clear completed
clearCompletedBtn.addEventListener("click", () => {
    todos = todos.filter(todo => !todo.completed);
    saveTodos();
    renderTodos();
});

// =========================
// Initialize App
// =========================
loadTodos();
renderTodos();