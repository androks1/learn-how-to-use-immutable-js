import { generateTodos } from "./index.js";
import { expect } from "chai";
import { List, Map } from "immutable";

describe("Lightning Fast Equality checks with Hash Codes", () => {
  it("should take separate lists with the same items and see equal hash codes", () => {
    var todos = generateTodos();

    let todos1 = List.of(...todos);
    let todos2 = List.of(...todos);

    expect(todos1).to.not.equal(todos2);
    expect(todos1.hashCode()).to.equal(todos2.hashCode());
  });
});
