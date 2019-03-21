import { mutateValue, updateState } from './index.js'
import { expect } from 'chai'
import { List, } from 'immutable'

describe('Manage Application State with Immutable.js', () => {
  it('should see side effects when mutating original array', () => {

    const state = ["todo1", "todo2"]
    const mutatedState = state // pass in a reference

    mutateValue(mutatedState, 0, "newTodo")
    expect(state[0]).to.not.equal("todo1"); // Uh oh, we weren't expecting this!

  });

  it('should avoid side effects when mutating original array', () => {

    const immutableState = List(["todo1", "todo2"]);
    const immutableState2 = immutableState;

    updateState(immutableState2, 0, "newTodo")
    expect(immutableState.get(0)).to.equal("todo1");

  });
});

// mocha.setup('bdd');
// const expect = chai.expect;

// // An evil rogue function!
// function mutateValue(iterable, pos, value) {
//   iterable[pos] = value;
// }

// function updateState(immutable, pos, value) {
//   return immutable.set(pos, value);
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
