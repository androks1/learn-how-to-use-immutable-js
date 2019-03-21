export class Todo {
  constructor(title = "", text = "", completed = false) {
    this.id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    this.title = title;
    this.text = text;
    this.completed = completed;
  }
}

export function addTodo(todos, todo) {
  return todos.set(todo.id, todo);
}

export function removeTodo(todos, todo) {
  return todos.delete(todo.id, todo);
}

export function updateTodo(todos, todo) {
  return todos.update(todo.id, todo => todo);
}

export function mergeTodos(todos, todos2) {
  return todos.merge(todos2);
}

export function clearAll(todos) {
  return todos.clear();
}

export default { addTodo, removeTodo, updateTodo, mergeTodos, clearAll, Todo };
