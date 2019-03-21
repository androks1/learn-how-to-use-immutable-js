import { expect } from "chai";
import { Map, fromJS, List } from "immutable";

describe("Using fromJS() to Convert Plain JavaScript Objects into Immutable Data", () => {
  it("should create deeply nested Map() from a plain javascript object", () => {
    const plainJSObject = {
      title: "Go to grocery",
      text: "I need milk and eggs",
      completed: false,
      category: { title: "House Duties", priority: 10 }
    };

    const immutableTodo = fromJS(plainJSObject);

    expect(Map.isMap(immutableTodo)).to.be.true;
    expect(immutableTodo.getIn(["category", "title"])).to.equal("House Duties");
  });

  it("should create deeply nested List() from a plain javascript array", () => {
    const plainJSArray = [
      "Go to grocery",
      "Buy milk and eggs",
      "Help kids with homework",
      ["Buy Lemons", "Make Lemonade"]
    ];

    const immutableTodoList = fromJS(plainJSArray);

    expect(List.isList(immutableTodoList)).to.be.true;
    expect(immutableTodoList.getIn([3, 1])).to.equal("Make Lemonade");
  });

  it("should use reviver to generate Map() instead of List() from a plain javascript array", () => {
    const plainJSArray = [
      "Go to grocery",
      "Buy milk and eggs",
      "Help kids with homework",
      ["Buy Lemons", "Make Lemonade"]
    ];

    const immutableTodo = fromJS(plainJSArray, (key, value) => {
      return value.toMap();
    });

    expect(Map.isMap(immutableTodo)).to.be.true;
    expect(immutableTodo.getIn([3, 1])).to.equal("Make Lemonade");
  });
});
