import './style.css'
import './bling.js'



function app() {
  let state = {id: 0, todos: []}
  let ui = {}
  console.log(ui)
  return mk('div', {id: 'app'}, [
    mk('h1', null, ['Altschool Todo App']),
    (ui.form = mk('form', {id: 'form'}, [
      (ui.input = mk('input', {type: 'text', id: 'todo-input', placeholder: 'What needs to be done?'})),
      mk('button', {type: 'submit', onclick: add}, ['Add Todo'])
    ])),
    (ui.todos = mk('ul', {id: 'todos'}))
  ])

  function createTodo(todo) {
    let item, text, remove;

    item = mk('li', {className: 'todo-item'}, [
      (text = mk('span',{},[todo.text])),
      (remove = mk('button', {className: 'delete.btn', onclick: removeTodo}, ['remove']))
    ]);
    return item

  }

  function add(event) {
    event.preventDefault();

    const text = ui.input.value;

    if (!text) return;

    const todo = {text, completed: false, id: Date.now()};
    console.log(todo);

    ui.input.value = '';

    state.todos.push(todo);
    // console.log(state.todos)

    ui.todos.prepend(createTodo(todo))
  }

  function removeTodo(event) {
    const todo = event.target.closest('.todo-item');
    todo.remove();
  }
 
}

function render() {
  document.body.prepend(app())
}

render()
