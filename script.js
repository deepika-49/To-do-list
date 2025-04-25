const todoList = document.getElementById('todo-list');
const newTodoInput = document.getElementById('new-todo');
const addTodoButton = document.getElementById('add-todo');

// Function to create a new list item
function createTodoItem(text) {
  const listItem = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', function() {
    this.parentNode.classList.toggle('completed');
  });
  listItem.appendChild(checkbox);

  const label = document.createElement('label');
  label.innerText = text;
  listItem.appendChild(label);

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.addEventListener('click', function() {
    this.parentNode.remove();
  });
  listItem.appendChild(deleteButton);

  return listItem;
}

// Event listener for adding a new task
addTodoButton.addEventListener('click', function() {
  const newTodoText = newTodoInput.value.trim();
  if (newTodoText) {
    const newTodoItem = createTodoItem(newTodoText);
    todoList.appendChild(newTodoItem);
    newTodoInput.value = ''; // Clear the input field
  }
});

