// 1. The h1 element
const h1 = document.querySelector("h1");

// 2. All elements with class "content"
const allContent = document.querySelectorAll(".content");
// OR: document.getElementsByClassName("content")

// 3. The form with id "contact-form"
const form = document.getElementById("contact-form");
// OR: document.querySelector("#contact-form")

// 4. The email input
const emailInput = document.querySelector('input[type="email"]');
// OR (if it has an id): document.getElementById("email")

// 5. All list items in the nav
const navItems = document.querySelectorAll("nav li");

// 6. The first .nav-link
const firstNavLink = document.querySelector(".nav-link");

// 7. The last paragraph
const lastParagraph = document.querySelector("p:last-of-type");

//9.2
const header = document.querySelector("header");
const nav = header.querySelector("nav");

const fNavLink = document.querySelector(".nav-link");
const parentLink = fNavLink.parentElement;

const article = document.querySelector('article');
const nextSibling = article.nextElementSibling;

const ul = document.querySelector("ul");
const list = ul.children;

const footer = document.querySelector("footer");
const body = footer.parentElement;

//9.3
//exercise 1
console.log(h1.textContent) //reading text including hidden ones
console.log(h1.innerText) //reading only visible text
h1.textContent = "New Title"; //modifying content

//exercise 2
console.log(article.innerHTML);
// Commented out to prevent destructive operations during demo
// article.innerHTML = `
// <h2> Updated Article</h2>
// <p>This is the New Content</p>
// `;

//safer
const userInput = "<script>alert('hack!')</script>";
// article.textContent = userInput; // Commented out for demo

//exercise 3
const link = document.querySelector(".nav-link")

console.log(link.getAttribute("href"));
console.log(link.href);

link.setAttribute("href", "https://example.com");
link.href = "https://example.com"; //same result

//check attribute
console.log(link.hasAttribute("target"));

//remove attribute
link.removeAttribute("target");

//data attributes
//<element data-id="123" data-category="tech>
const element = document.querySelector("[data-id]");
console.log(element.dataset.id); // "123"
console.log(element.dataset.category);// "tech"
element.dataset.newAttr = "value";    // Creates data-new-attr

const container = document.querySelector(".container");

// Inline styles
container.style.backgroundColor = "#f0f0f0";
container.style.padding = "30px";
container.style.borderRadius = "8px";

// Multiple styles (use classes instead when possible!)
Object.assign(container.style, {
    backgroundColor: "#333",
    color: "white",
    padding: "20px"
});

//9.4
// Create new element
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph!";
newParagraph.className = "content highlight";

// Add to the page - Demonstrated but commented to preserve original content
// article.appendChild(newParagraph);  // Add at end

// Insert before another element
const firstParagraph = article.querySelector("p");
// article.insertBefore(newParagraph, firstParagraph);  // Add before first p

// Modern insertion methods - Examples shown but commented
// article.prepend(newParagraph);         // First child
// article.append(newParagraph);          // Last child
// firstParagraph.before(newParagraph);   // Before sibling
// firstParagraph.after(newParagraph);    // After sibling


// Remove an element
const footer1 = document.querySelector("footer");
// footer1.remove(); // Commented out to keep footer visible

// Remove child - Demonstrated but commented
const nav1 = document.querySelector("nav");
const lastLink = nav1.querySelector("li:last-child");
// lastLink.parentElement.removeChild(lastLink); // Commented out

// Clear all children - COMMENTED OUT (DESTRUCTIVE)
// article.innerHTML = "";  // Simple but rebuilds DOM
// OR
// while (article.firstChild) {
//     article.removeChild(article.firstChild);
// }


const navItem = document.querySelector(".nav-link").parentElement;
const clone = navItem.cloneNode(true);  // true = deep clone
clone.querySelector("a").textContent = "New Link";
document.querySelector(".nav-list").appendChild(clone);


function addNavItem(text, href) {
    // Create li with a.nav-link inside
    // Add to the nav list
    const ul = document.querySelector(".nav-list");

    const li = document.createElement("li");
    const a = document.createElement("a");

    a.textContent = text;
    a.href = href;
    a.className = "nav-link";

    li.appendChild(a);
    ul.appendChild(li);

}

addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");


//Task 10.1
const button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);

// Adding event listeners
button.addEventListener("click", function() {
    console.log("Button clicked!");
});

// Arrow function
button.addEventListener("click", () => {
    console.log("Clicked again!");
});

// Named function (can be removed later)
function handleClick() {
    console.log("Handled!");
}
button.addEventListener("click", handleClick);

// Remove event listener
button.removeEventListener("click", handleClick);

function handler(e) {
    console.log("Event triggered:", e.type);
}
// Mouse events
element.addEventListener("click", handler);
element.addEventListener("dblclick", handler);
element.addEventListener("mouseenter", handler);
element.addEventListener("mouseleave", handler);
element.addEventListener("mousemove", handler);

const input = document.querySelector("input");
// Keyboard events
input.addEventListener("keydown", handler);
input.addEventListener("keyup", handler);
input.addEventListener("keypress", handler);  // Deprecated

// Form events
form.addEventListener("submit", handler);
input.addEventListener("focus", handler);
input.addEventListener("blur", handler);
input.addEventListener("input", handler);     // Real-time changes
input.addEventListener("change", handler);    // On blur after change

// Window events
window.addEventListener("load", handler);
window.addEventListener("resize", handler);
window.addEventListener("scroll", handler);


//10.2
document.addEventListener("click", function(event) {
    // The element that was clicked
    console.log("Target:", event.target);
    
    // The element the listener is attached to
    console.log("Current Target:", event.currentTarget);
    
    // Event type
    console.log("Type:", event.type);
    
    // Mouse position
    console.log("Position:", event.clientX, event.clientY);
    
    // Prevent default behavior
   // event.preventDefault();
    
    // Stop propagation (bubbling)
   // event.stopPropagation();
});

// Keyboard events
document.addEventListener("keydown", function(event) {
    console.log("Key:", event.key);       // "a", "Enter", "Escape"
    console.log("Code:", event.code);     // "KeyA", "Enter", "Escape"
    console.log("Shift:", event.shiftKey);
    console.log("Ctrl:", event.ctrlKey);
    console.log("Alt:", event.altKey);
});


//10.3


document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Grandparent clicked");
});

document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
    console.log("Child clicked");
});

// Click on Child - what order do the logs appear?
// Answer: Child → Parent → Grandparent (bubbling up)

// BAD: Adding listeners to each item
const items = document.querySelectorAll("li");
items.forEach(item => {
    item.addEventListener("click", handleClick);
});
// Problem: New items won't have the listener!

// GOOD: Delegate to parent
document.querySelector("ul.nav-list").addEventListener("click", function(event) {
    // Check if clicked element is an li
    const li = event.target.closest("li");
    if (li && li.parentElement === this) {
        console.log("List item clicked:", li.textContent.trim());
    }
    
    // Or check for a class
    if (event.target.classList.contains("item")) {
        console.log("Item class clicked");
    }
});

//10.4
const form1 = document.getElementById("contact-form");
const nameInput = document.getElementById("name");

// Real-time validation
nameInput.addEventListener("input", function(event) {
    const value = event.target.value;
    
    if (value.length < 2) {
        showError(nameInput, "Name must be at least 2 characters");
    } else {
        clearError(nameInput);
    }
});

emailInput.addEventListener("input", function(event) {
    const value = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(value)) {
        showError(emailInput, "Please enter a valid email");
    } else {
        clearError(emailInput);
    }
});

// Form submission
form1.addEventListener("submit", function(event) {
    event.preventDefault();  // Stop form from submitting
    
    // Get all form data
    const formData = new FormData(form1);
    const data = Object.fromEntries(formData);
    
    console.log("Form data:", data);
    
    // Validate all fields
    function isValid(data) {
        return data.name.length >= 2 && data.email.includes("@");
    }
    
    if (isValid(data)) {
        showSuccess("Form submitted successfully!");
        form1.reset();
    } else {
        alert("Please fix the errors in the form");
    }
});

function showError(input, message) {
    // Add error styling and message
    input.classList.add("error");
    input.style.border = "2px solid red";
    
    // Create or update error message element
    let errorMsg = input.nextElementSibling;
    if (!errorMsg || !errorMsg.classList.contains("error-message")) {
        errorMsg = document.createElement("div");
        errorMsg.className = "error-message";
        errorMsg.style.color = "red";
        errorMsg.style.fontSize = "12px";
        errorMsg.style.marginTop = "5px";
        input.parentNode.insertBefore(errorMsg, input.nextSibling);
    }
    errorMsg.textContent = message;
}

function clearError(input) {
    input.classList.remove("error");
    input.style.border = "";
    
    // Remove error message
    const errorMsg = input.nextElementSibling;
    if (errorMsg && errorMsg.classList.contains("error-message")) {
        errorMsg.remove();
    }
}