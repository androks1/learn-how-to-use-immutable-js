import {
  groupTodosByCompleted,
  addTodo,
  getCompletedTodos,
  markAllTodosAsComplete,
  getTodoTexts,
  Todo
} from "./index.js";
import { expect } from "chai";
import { Map } from "immutable";
import { each, range } from "lodash";

describe("Iterating over an Immutable.js Map()", () => {
  it("should convert all todos into a map() of titles", () => {
    let todos = Map();

    each(range(10), index => {
      todos = addTodo(todos, new Todo("Todo" + index, "I'm a todo!", false));
    });

    const todoTexts = getTodoTexts(todos);

    expect(todoTexts.first()).to.equal("I'm a todo!");
  });

  it("should filter todos", () => {
    let todos = Map();

    each(range(10), index => {
      todos = addTodo(
        todos,
        new Todo("Todo" + index, "I'm a todo!", index % 2 == 0)
      );
    });

    const filteredTodos = getCompletedTodos(todos);

    expect(filteredTodos.size).to.equal(5);
  });

  it("should mark all todos completed", () => {
    let todos = Map();

    each(range(10), index => {
      todos = addTodo(todos, new Todo("Todo" + index, "I'm a todo!", false));
    });

    // This has the chance for side effects
    markAllTodosAsComplete(todos);

    each(todos.toArray(), todo => {
      expect(todo.completed).to.be.true;
    });
  });

  it("should group todos by completed boolean", () => {
    let todos = Map();

    each(range(10), index => {
      todos = addTodo(
        todos,
        new Todo("Todo" + index, "I'm a todo!", index % 2 == 0)
      );
    });

    const groupedTodos = groupTodosByCompleted(todos);

    expect(groupedTodos.get(true).size).to.equal(5);
    expect(groupedTodos.get(false).size).to.equal(5);
  });
});
