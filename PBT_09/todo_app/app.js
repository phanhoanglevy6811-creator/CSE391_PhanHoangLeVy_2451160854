const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");
const countText = document.querySelector("#count");
const clearCompletedBtn = document.querySelector("#clearCompleted");
const filterButtons = document.querySelectorAll(".filter-btn");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

let currentFilter = "all";


// ======================
// SAVE LOCAL STORAGE
// ======================

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}


// ======================
// UPDATE COUNT
// ======================

function updateCount() {

    const activeTodos = todos.filter(todo => !todo.completed);

    countText.textContent =
        `${activeTodos.length} items left`;
}


// ======================
// CREATE TODO ELEMENT
// ======================

function createTodoElement(todo) {

    const li = document.createElement("li");

    li.classList.add("todo-item");

    if (todo.completed) {
        li.classList.add("completed");
    }

    li.dataset.id = todo.id;


    // TEXT
    const span = document.createElement("span");

    span.classList.add("todo-text");

    span.textContent = todo.text;


    // DELETE BUTTON
    const deleteBtn = document.createElement("button");

    deleteBtn.classList.add("delete-btn");

    deleteBtn.textContent = "❌";


    li.appendChild(span);
    li.appendChild(deleteBtn);

    return li;
}


// ======================
// RENDER TODOS
// ======================

function renderTodos() {

    todoList.innerHTML = "";

    let filteredTodos = todos;

    if (currentFilter === "active") {

        filteredTodos = todos.filter(todo => !todo.completed);

    } else if (currentFilter === "completed") {

        filteredTodos = todos.filter(todo => todo.completed);
    }

    filteredTodos.forEach(todo => {

        const todoElement = createTodoElement(todo);

        todoList.appendChild(todoElement);
    });

    updateCount();

    saveTodos();
}


// ======================
// ADD TODO
// ======================

function addTodo(text) {

    const todo = {
        id: Date.now(),
        text: text,
        completed: false
    };

    todos.push(todo);

    renderTodos();
}


// ======================
// FORM SUBMIT
// ======================

todoForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const text = todoInput.value.trim();

    if (text === "") return;

    addTodo(text);

    todoInput.value = "";
});


// ======================
// EVENT DELEGATION
// ======================

todoList.addEventListener("click", function(e) {

    const li = e.target.closest(".todo-item");

    if (!li) return;

    const id = Number(li.dataset.id);


    // DELETE
    if (e.target.classList.contains("delete-btn")) {

        todos = todos.filter(todo => todo.id !== id);

        renderTodos();

        return;
    }


    // TOGGLE COMPLETED
    if (e.target.classList.contains("todo-text")) {

        const todo = todos.find(todo => todo.id === id);

        todo.completed = !todo.completed;

        renderTodos();
    }
});


// ======================
// EDIT TODO
// ======================

todoList.addEventListener("dblclick", function(e) {

    if (!e.target.classList.contains("todo-text")) return;

    const span = e.target;

    const li = span.closest(".todo-item");

    const id = Number(li.dataset.id);

    const todo = todos.find(todo => todo.id === id);


    // CREATE INPUT
    const input = document.createElement("input");

    input.type = "text";

    input.value = todo.text;

    input.classList.add("edit-input");


    li.replaceChild(input, span);

    input.focus();


    input.addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            const newText = input.value.trim();

            if (newText !== "") {

                todo.text = newText;

                renderTodos();
            }
        }
    });
});


// ======================
// FILTER BUTTONS
// ======================

filterButtons.forEach(button => {

    button.addEventListener("click", function() {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        currentFilter = this.dataset.filter;

        renderTodos();
    });
});


// ======================
// CLEAR COMPLETED
// ======================

clearCompletedBtn.addEventListener("click", function() {

    todos = todos.filter(todo => !todo.completed);

    renderTodos();
});


// ======================
// INITIAL RENDER
// ======================

renderTodos();