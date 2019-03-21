import { each, range } from "lodash";
import { OrderedMap, List } from "immutable";

export class Todo {
  constructor(title = "", items = List(), completed = false) {
    this.id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    this.title = title;
    this.items = items;
    this.completed = completed;
  }
}

export function insertAt(todos, todo, index) {
  let firstHalf = todos.slice(0, index - 1).push(todo.id, todo);
  let secondHalf = todos.slice(index);
  return firstHalf.concat(secondHalf);
}

export function sortByNumberOfItems(todoA, todoB) {
  if (todoA.items.size > todoB.items.size) {
    return -1;
  } else if (todoA.items.size < todoB.items.size) {
    return 1;
  }

  return 0;
}

export function generateTodos() {
  var todos = OrderedMap();

  each(range(100), index => {
    var todo = new Todo(`Todo ${index}`);

    each(range(Math.floor(Math.random() * 100)), index => {
      todo.items = todo.items.push(`Item ${index}`);
    });

    todos = todos.set(todo.id, todo);
  });

  return todos;
}

export default { generateTodos, sortByNumberOfItems, insertAt, Todo };
