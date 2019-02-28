import { generateTodos, sortByNumberOfItems, insertAt, Todo } from "./index.js";
import { expect } from "chai";
import { List } from "immutable";
import isNull from "lodash";

describe("Maintaining Order in Immutable Objects", () => {
  // Here we use OrderedMap, which guarantees order, unlike regular Map
  // which is 'likely' ordered. Now we can rely on first(), last(), skipLast(), etc.

  it("should sort by number of items in descending order", () => {
    let todos = generateTodos().sort(sortByNumberOfItems);

    var lastTodo = null;

    let isDescending = todos.every(todo => {
      let isGreaterOrEqual =
        isNull(lastTodo) || lastTodo.items.size >= todo.items.size;
      lastTodo = todo;

      return isGreaterOrEqual;
    });

    expect(isDescending).to.be.true;
  });

  it("should sort by number of items in ascending order", () => {
    let todos = generateTodos()
      .sort(sortByNumberOfItems)
      .reverse();

    var lastTodo = null;

    let isAscending = todos.every(todo => {
      let isLessThanOrEqual =
        isNull(lastTodo) || lastTodo.items.size <= todo.items.size;
      lastTodo = todo;

      return isLessThanOrEqual;
    });

    expect(isAscending).to.be.true;
  });

  // List() on the other hand is ordered. That said, wouldn't it be nice to have
  // an insertAt feature like other Lists?

  it("should insert item at position using slice", () => {
    const todo1 = new Todo("Todo1");
    const todo2 = new Todo("Todo2");
    const todo3 = new Todo("Todo3");
    const todo4 = new Todo("Todo4");
    const todo5 = new Todo("Todo5");

    const todo6 = new Todo("Todo6");

    let todos = List.of(todo1, todo2, todo3, todo4, todo5);

    expect(todos.get(3).id).to.equal(todo4.id);

    todos = insertAt(todos, todo6, 3);

    expect(todos.get(3).id).to.equal(todo6.id);
  });
});
