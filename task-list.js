console.log("task list loaded");
const taskList = document.createElement("ul");
document.body.appendChild(taskList);

function addItem (text, isCompleted = false) {
  if (!text.trim()) return;
    const li = document.createElement("li");
    li.innerHTML = `
    <span class="task-text">${text}</span>
<button class="delete-btn">❌</button>`;
    if (isCompleted) {
        li.classList.add("completed");
    }
    taskList.appendChild(li);

}

addItem("Task 1");
addItem("Task 2");
addItem("Task 3");
//one event listener
taskList.addEventListener("click", (event) =>{
    if (event.target.classList.contains("task-text")){
        event.target.parentElement.classList.toggle("completed");
    }
    if (event.target.classList.contains("delete-btn")){
        event.target.parentElement.remove();
    }
});

