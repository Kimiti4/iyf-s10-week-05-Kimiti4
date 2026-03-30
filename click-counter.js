console.log("click counter loaded")
let count = 0;

//ui
const container1 = document.createElement("div");
const display = document.createElement("h2");
const incBttn = document.createElement("button");
const decBttn = document.createElement("button");
const resetBttn = document.createElement("button");

display.textContent = count;
incBttn.textContent = "➕";
decBttn.textContent = "➖";
resetBttn.textContent = "Reset";

container1.append(display, incBttn, decBttn, resetBttn);
document.body.appendChild(container1);

//logic
decBttn.addEventListener("click", () =>{
    if (count > 0) {
        count --;
        display.textContent = count;
    }
});

incBttn.addEventListener("click", ()=> {
    count ++;
    display.textContent = count;
    
});

resetBttn.addEventListener("click" , () => {
    count = 0;
    display.textContent = count;
});

container1.style.position = "fixed";
container1.style.bottom = "20px";
container1.style.right = "20px";
container1.style.padding = "10px";
container1.style.background = "#fff";
container1.style.border = "1px solid #000";

document.addEventListener("keydown", (event) => {
    // Ctrl + S
    if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        alert("Saved!");
    }

    // Escape → clear form
    if (event.key === "Escape") {
        document.querySelectorAll("input").forEach(input => input.value = "");
    }

    // Ctrl + Enter → submit form
    if (event.ctrlKey && event.key === "Enter") {
        document.getElementById("contact-form").requestSubmit();
    }
});