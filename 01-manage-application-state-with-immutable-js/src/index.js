import { set } from 'immutable'
// An evil rogue function!
export function mutateValue(iterable, pos, value) {
    iterable[pos] = value;
}

export function updateState(immutable, pos, value) {
    return immutable.set(pos, value);
}


export default {mutateValue, updateState}

// // An evil rogue function!
// function mutateValue(iterable, pos, value) {
//   iterable[pos] = value;
// }

// function updateState(immutable, pos, value) {
//   return immutable.set(pos, value);
// }
