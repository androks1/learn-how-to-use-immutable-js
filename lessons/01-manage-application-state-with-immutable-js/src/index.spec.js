import { mutateValue, updateState } from './index.js'
import { List, } from 'immutable'

test('should see side effects when mutating original array', () => {
  const state = ["todo1", "todo2"]
  const mutatedState = state // pass in a reference

  mutateValue(mutatedState, 0, "newTodo")
  expect(state[0]).not.toBe("todo1"); // Uh oh, we weren't expecting this!

});

test('should avoid side effects when mutating original array', () => {
  const immutableState = List(["todo1", "todo2"]);
  const immutableState2 = immutableState;

  updateState(immutableState2, 0, "newTodo")
  expect(immutableState.get(0)).toBe("todo1");
});