import createObjTodos from "./index.js";
import { expect } from "chai";
import { Map } from "immutable";

describe("Creating an Immutable Object Graph with Immutable.js Map()", () => {
  it("should create Map() with matching keys", () => {
    const data = {
      todo1: {
        title: "Todo 1",
        value: "Make it happen"
      },
      todo2: {
        title: "Todo 2",
        value: "Make it happen"
      }
    };

    let map = Map(data);
    expect(map.get("todo1").title).to.equal("Todo 1");
  });

  it("should create Map() with keys from array tuples", () => {
    let map = Map([["todo1", { title: "Todo 1" }]]); // Note the array within array
    expect(map.get("todo1").title).to.equal("Todo 1");
  });

  it("should create Map() with matching size to number of keys", () => {
    let map = Map(createObjTodos(3));
    expect(map.size).to.equal(3);
  });
});

// mocha.setup('bdd');
// const expect = chai.expect;

// function createObjTodos(numTodos) {

// var obj = {}
// _.each(_.range(numTodos), (index) => {
//    const todoSequence = String(index + 1);
//     obj['todo' + todoSequence] = {
//      title: 'Todo ' + todoSequence,
//       value: `Make ${todoSequence} happen`
//  };
// });

// return obj;

// }

// describe('Manage Application State with Immutable.js', () => {

//   it('should see side effects when mutating original array', () => {

//     const state = ["todo1", "todo2"]
//     const mutatedState = state // pass in a reference

//     mutateValue(mutatedState, 0, "newTodo")
//     expect(state[0]).to.not.equal("todo1"); // Uh oh, we weren't expecting this!

//   });

//   it('should avoid side effects when mutating original array', () => {

//     const immutableState = Immutable.List(["todo1", "todo2"]);
//     const immutableState2 = immutableState;

//     updateState(immutableState2, 0, "newTodo")
//     expect(immutableState.get(0)).to.equal("todo1");

//   });

// });

// mocha.run();

// describe("Creating an Immutable Object Graph with Immutable.js Map()", () => {
//  it("should create Map() with matching keys", () => {
//    const data = {
//      todo1: {
//        title: "Todo 1",
//        value: "Make it happen"
//      },
//      todo2: {
//        title: "Todo 2",
//        value: "Make it happen"
//      }
//    };
//
//    let map = Immutable.Map(data);
//    expect(map.get("todo1").title).to.equal("Todo 1");
//  });
//
//  it("should create Map() with keys from array tuples", () => {
//    Map([["todo1", { title: "Todo 1" }]]); // Note the array within array
//    expect(Map.get("todo1").title).to.equal("Todo 1");
//  });

//  it("should create Map() with matching size to number of keys", () => {
//    Map(createObjTodos(3));
//    expect(Map.size).to.equal(3);
//  });
// });

// mocha.run();
