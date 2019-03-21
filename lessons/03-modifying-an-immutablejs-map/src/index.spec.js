import {
  addTodo,
  removeTodo,
  updateTodo,
  mergeTodos,
  clearAll,
  Todo
} from "./index.js";
import { expect } from "chai";
import { Map } from "immutable";
import { each, range } from "lodash";

describe("Modifying an Immutable.js Map()", () => {
  it("should add todo to state", () => {
    const todo = new Todo("Todo 1", "I'm a todo!", false);

    let todos = Map();
    todos = addTodo(todos, todo);
    expect(todos.get(todo.id)).to.equal(todo);
  });

  it("should remove todo from state", () => {
    const todo = new Todo("Todo 1", "I'm a todo!", false);

    let todos = Map();
    todos = removeTodo(todos, todo);
    expect(todos.get(todo.id)).to.be.undefined;
  });

  it("should update todo", () => {
    const todo = new Todo("Todo 1", "I'm a todo!", false);

    let todos = Map();
    todos = addTodo(todos, todo);

    todo.title = "New Title";

    todos = updateTodo(todos, todo);
    expect(todos.get(todo.id).title).to.equal("New Title");
  });

  it("should remove all todos", () => {
    var todos = Map();

    each(range(10), index => {
      todos = addTodo(todos, new Todo("Todo " + index, "I'm a todo!", false));
    });

    expect(todos.size).to.equal(10);

    todos = clearAll(todos);
    expect(todos.size).to.equal(0);
  });

  it("should merge todos", () => {
    var todos = Map();
    var todos2 = Map();

    each(range(10), index => {
      todos = addTodo(todos, new Todo("Todo " + index, "I'm a todo!", false));
    });

    each(range(10), index => {
      todos2 = addTodo(todos2, new Todo("Todo " + index, "I'm a todo!", false));
    });

    todos = mergeTodos(todos, todos2);
    expect(todos.size).to.equal(20);
  });
});
