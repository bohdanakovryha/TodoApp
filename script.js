const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  alert('New TODO button clicked!')
}

// Початкові дані зі списком справ
let todos = [
  { id: 1, text: "Вивчити HTML", completed: true },
  { id: 2, text: "Вивчити CSS", completed: true },
  { id: 3, text: "Вивчити JavaScript", completed: false }
];

// Функція для додавання нової справи
function newTodo() {
  const text = prompt("Введіть нову справу:");
  if (text) {
    const newTodo = {
      id: todos.length + 1,
      text: text,
      completed: false
    };
    todos.push(newTodo);
    render();
    updateCounter();
  }
}

// Функція для відображення справ на сторінці
function render() {
  const todoList = todos.map(todo => renderTodo(todo)).join('');
  list.innerHTML = todoList;
}

// Функція для відображення однієї справи
function renderTodo(todo) {
  return `
    <li class="list-group-item">
      <input type="checkbox" class="form-check-input me-2" id="${todo.id}" ${todo.completed ? 'checked' : ''} onChange="checkTodo(${todo.id})">
      <label for="${todo.id}" ${todo.completed ? 'class="text-success text-decoration-line-through"' : ''}>${todo.text}</label>
      <button class="btn btn-danger btn-sm float-end" onClick="deleteTodo(${todo.id})">delete</button>
    </li>
  `;
}

// Функція для видалення справи
function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  render();
  updateCounter();
}

// Функція для позначення справи як виконаної
function checkTodo(id) {
  const todo = todos.find(todo => todo.id === id);
  todo.completed = !todo.completed;
  render();
  updateCounter();
}

// Функція для оновлення лічильників
function updateCounter() {
  itemCountSpan.textContent = todos.length;
  const uncheckedCount = todos.filter(todo => !todo.completed).length;
  uncheckedCountSpan.textContent = uncheckedCount;
}

// Початкове відображення списку справ та лічильників
render();
updateCounter();
