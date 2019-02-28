import { addTodoToMap, addTodoToList, Todo } from "./index.js";
import { expect } from "chai";
import { Map, List } from "immutable";
import each from "lodash";

describe("Differences between the Immutable.js Map() and List()", () => {
  it("should find same todo in List() and Map()", () => {
    const todo = new Todo("Todo 1");

    let todosMap = Map();
    todosMap = addTodoToMap(todosMap, todo);

    let todosList = List();
    todosList = addTodoToList(todosList, todo);

    expect(todosMap.get(todo.id)).to.equal(todo);
    expect(todosList.get(0)).to.equal(todo);
  });

  it("should create List() from series of values", () => {
    const todoItems = ["Milk", "Eggs", "Detergent", "Bread", "Steak"];
    const list = List.of("Milk", "Eggs", "Detergent", "Bread", "Steak");

    var count = 0;
    each(todoItems, item => {
      expect(list.get(count)).to.equal(item);
      count++;
    });
  });

  it("should create List() from array using the rest operator", () => {
    const todoItems = ["Milk", "Eggs", "Detergent", "Bread", "Steak"];
    const list = List.of(...todoItems);

    var count = 0;
    each(todoItems, item => {
      expect(list.get(count)).to.equal(item);
      count++;
    });
  });

  it("should remove last element from List()", () => {
    const todoItems = ["Milk", "Eggs", "Detergent", "Bread", "Steak"];
    let list = List.of(...todoItems);

    list = list.pop(); // Just like Array

    var count = 0;
    each(todoItems, item => {
      if (count < 4) expect(list.get(count)).to.equal(item);
      else expect(list.get(count)).to.not.equal(item);

      count++;
    });
  });
});
