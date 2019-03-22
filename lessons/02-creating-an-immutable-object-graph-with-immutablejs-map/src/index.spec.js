import createObjTodos from "./index.js"
import { Map } from "immutable"

describe("Creating an Immutable Object Graph with Immutable.js Map()", () => {
  test("should create Map() with matching keys", () => {
    const data = {
      todo1: {
        title: "Todo 1",
        value: "Make it happen"
      },
      todo2: {
        title: "Todo 2",
        value: "Make it happen"
      }
    }

    let map = Map(data)
    expect(map.get("todo1").title).toBe("Todo 1")
  })

  test("should create Map() with keys from array tuples", () => {
    let map = Map([["todo1", { title: "Todo 1" }]]) // Note the array within array
    expect(map.get("todo1").title).toBe("Todo 1")
  })

  test("should create Map() with matching size to number of keys", () => {
    let map = Map(createObjTodos(3))
    expect(map.size).toBe(3)
  })
})
