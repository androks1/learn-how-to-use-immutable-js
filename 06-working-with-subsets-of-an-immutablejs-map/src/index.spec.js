import {
  stopAtMonkey,
  findMeMonkey,
  removeFirstFive,
  removeFirstEntry,
  removeLastEntry,
  retrieveFinalPair,
  addTodo,
  Todo
} from "./index.js";
import { expect } from "chai";
import { Map } from "immutable";
import { each, range } from "lodash";

describe("Working with Subsets of an Immutable.js Map()", () => {
  it("should retrieve last two entries using slice()", () => {
    let todos = Map();

    each(range(10), index => {
      todos = addTodo(todos, new Todo("Todo" + index, "I'm a todo!", false));
    });

    const lastTwoTodos = retrieveFinalPair(todos);

    expect(lastTwoTodos.size).to.equal(2);

    todos.takeLast(2).forEach(todo => {
      expect(lastTwoTodos.get(todo.id)).to.equal(todo);
    });
  });

  it("should remove last entry using negative slice()", () => {
    let todos = Map();

    each(range(10), index => {
      todos = addTodo(todos, new Todo("Todo" + index, "I'm a todo!", false));
    });

    const todosWithoutLast = removeLastEntry(todos);

    todos.butLast().forEach(todo => {
      expect(todosWithoutLast.get(todo.id)).to.equal(todo);
    });
  });

  it("should remove first entry using slice()", () => {
    let todos = Map();

    each(range(10), index => {
      todos = addTodo(todos, new Todo("Todo" + index, "I'm a todo!", false));
    });

    const todosWithoutFirst = removeFirstEntry(todos);

    todos.rest().forEach(todo => {
      expect(todosWithoutFirst.get(todo.id)).to.equal(todo);
    });
  });

  it("should return last 5 todos using skip()", () => {
    let todos = Map();

    each(range(10), index => {
      todos = addTodo(todos, new Todo("Todo" + index, "I'm a todo!", false));
    });

    const lastFive = removeFirstFive(todos);

    todos.takeLast(5).forEach(todo => {
      expect(lastFive.get(todo.id)).to.equal(todo);
    });
  });

  it('should return todos after reaching "monkey" using skipUntil()', () => {
    var texts = [
      "dog",
      "cat",
      "frog",
      "monkey",
      "octopus",
      "horse",
      "orangutan"
    ];
    let todos = Map();

    each(range(texts.length), index => {
      todos = addTodo(todos, new Todo("Todo" + index, texts[index], false));
    });

    const monkeyAndAfter = findMeMonkey(todos);

    todos.takeLast(4).forEach(todo => {
      expect(monkeyAndAfter.get(todo.id)).to.equal(todo);
    });
  });

  it('should return todos up to reaching "monkey" using skipWhile()', () => {
    var texts = [
      "dog",
      "cat",
      "frog",
      "monkey",
      "octopus",
      "horse",
      "orangutan"
    ];
    let todos = Map();

    each(range(texts.length), index => {
      todos = addTodo(todos, new Todo("Todo" + index, texts[index], false));
    });

    const upToMonkey = stopAtMonkey(todos);

    todos.take(4).forEach(todo => {
      expect(upToMonkey.get(todo.id)).to.equal(todo);
    });
  });
});
