// DOM Elements
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const filters = document.querySelectorAll(".filter");
const clearCompletedBtn = document.getElementById("clear-completed");

// State
let todos = [];
let currentFilter = "all";

// Functions
function createTodoElement(todo) {
    // Create and return li element
    const li = document.createElement("li");
    li.dataset.id = todo.id;
    li.className = TextDecoder.completed ? "Completed👍" : "";

    li.innerHTML = `
        <span class = "text"> ${todo.text}</span>
        <button class = "delete">X</button>
    `;return li;
}

function renderTodos() {
    // Clear list and re-render based on filter
    todoList.innerHTML = "";

    const filtered = todos.filter(todo => {
        if (currentFilter === "active") return !todo.completed;
        if (currentFilter === "completed") return todo.completed;
        return true;
    })
    filtered.forEach(todo =>{
        todoList.appendChild(createTodoElement(todo));
    });
    updateStats();
}

function addTodo(text) {
    // Add new todo to array and render
    if (!text.trim()) return;

    const todo = {
        id: Date.now().toString(),
        text,
        completed: false
    };
    todos.push(todo);
    renderTodos();
}

function toggleTodo(id) {
    // Toggle completed state
    todos = todos.map(todo => 
        todo.id === id
        ? {...todo, completed: !todo.completed}
        :todo
    );
    renderTodos();
}

function deleteTodo(id) {
    // Remove from array and render
    todos = todos.filter(todo => toggleTodo.id !==id);
    renderTodos();
}

function updateStats() {
    // Update items left count
    const remaining = todos.filter(todo => !todo.completed).length;
    itemsLeft.textContent = `${remaining} items left`;
}

function filterTodos(filter) {
    // Set current filter and re-render
    currentFilter = filter;

    filters.forEach(btn => {
        btn.classList.toggle("active", btn.dataset.filter === filter);

    });
    renderTodos();
}

// Event Listeners
form.addEventListener("submit", function(event) {
    event.preventDefault();
    // Add todo
    addTodo(input.value);
    input.value = "";
});

todoList.addEventListener("click", function(event) {
    // Handle click on tasks (delegation)
    const li = event.target.closest("li");
    if (!li) return;
    const id = li.dataset.id;

    if (event.target.matches(".delete")) {
        deleteTodo(id);
    }else{
        toggleTodo(id);
    }
});
filters.forEach(btn => {
    btn.addEventListener("click", () => {
        filterTodos(btn.dataset.filter);
    });
});
clearCompletedBtn.addEventListener("click", () => {
    todos = todos.filter(todo => !todo.completed);
    renderTodos();
});

// Initialize
renderTodos();