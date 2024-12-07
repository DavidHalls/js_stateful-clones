'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here
  const result = [];
  const copyOfState = Object.assign({}, state);

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        for (const key in action.extraData) {
          copyOfState[key] = action.extraData[key];
        }
        break;
      case 'removeProperties':
        for (const drop of action.keysToRemove) {
          delete copyOfState[drop];
        }
        break;
      case 'clear':
        for (const key in copyOfState) {
          delete copyOfState[key];
        }
        break;
      default:
    }
    result.push({ ...copyOfState });
  }

  return result;
}

// const state = {
//   foo: 'bar',
//   bar: 'foo',
// };

// const stateHistory = transformStateWithClones(state, [
//   {
//     type: 'addProperties',
//     extraData: { name: 'Jim', hello: 'world' },
//   },
//   {
//     type: 'removeProperties',
//     keysToRemove: ['bar', 'hello'],
//   },
//   {
//     type: 'addProperties',
//     extraData: { another: 'one' },
//   },
//   // {
//   //   type: 'clear'
//   // }
// ]);

// console.log(stateHistory);
// [
//   { foo: 'bar', bar: 'foo', name: 'Jim', hello: 'world' },
//   { foo: 'bar', name: 'Jim' },
//   { foo: 'bar', name: 'Jim', another: 'one' },
// ]

module.exports = transformStateWithClones;
