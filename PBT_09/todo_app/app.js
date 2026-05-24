const form = document.querySelector("#todoForm");
const input = document.querySelector("#todoInput");
const list = document.querySelector("#todoList");
const countText = document.querySelector("#countText");
const filterButtons = document.querySelectorAll(".filter-btn");
const clearCompletedBtn = document.querySelector("#clearCompleted");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentFilter = "all";

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function updateCount() {
    const activeCount = todos.filter(todo => !todo.completed).length;
    countText.textContent = `${activeCount} items left`;
}

function getFilteredTodos() {
    if (currentFilter === "active") {
        return todos.filter(todo => !todo.completed);
    }

    if (currentFilter === "completed") {
        return todos.filter(todo => todo.completed);
    }

    return todos;
}

function renderTodos() {
    list.textContent = "";

    const filteredTodos = getFilteredTodos();

    filteredTodos.forEach(todo => {
        const li = document.createElement("li");
        li.className = "todo-item";
        li.dataset.id = todo.id;

        if (todo.completed) {
            li.classList.add("completed");
        }

        const span = document.createElement("span");
        span.className = "todo-text";
        span.textContent = todo.text;

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "❌";

        li.appendChild(span);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });

    updateCount();
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const text = input.value.trim();

    if (text === "") {
        alert("Vui lòng nhập todo!");
        return;
    }

    const newTodo = {
        id: Date.now(),
        text: text,
        completed: false
    };

    todos.push(newTodo);
    input.value = "";
    input.focus();

    saveTodos();
    renderTodos();
});

list.addEventListener("click", (e) => {
    const li = e.target.closest(".todo-item");

    if (!li) return;

    const id = Number(li.dataset.id);

    if (e.target.classList.contains("delete-btn")) {
        todos = todos.filter(todo => todo.id !== id);
    }

    if (e.target.classList.contains("todo-text")) {
        todos = todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                };
            }

            return todo;
        });
    }

    saveTodos();
    renderTodos();
});

list.addEventListener("dblclick", (e) => {
    if (!e.target.classList.contains("todo-text")) return;

    const li = e.target.closest(".todo-item");
    const id = Number(li.dataset.id);
    const todo = todos.find(todo => todo.id === id);

    const editInput = document.createElement("input");
    editInput.className = "edit-input";
    editInput.value = todo.text;

    li.replaceChild(editInput, e.target);
    editInput.focus();

    editInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            const newText = editInput.value.trim();

            if (newText !== "") {
                todo.text = newText;
                saveTodos();
                renderTodos();
            }
        }
    });
});

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        currentFilter = button.dataset.filter;
        renderTodos();
    });
});

clearCompletedBtn.addEventListener("click", () => {
    todos = todos.filter(todo => !todo.completed);
    saveTodos();
    renderTodos();
});

renderTodos();