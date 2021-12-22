const findGaps = require('../function.js');

test('In [4, 1, -1, 2, 5] first missing natural number is 3', () => {
  expect(findGaps([4, 1, -1, 2, 5], true)).toStrictEqual([3]);
});

test('In [] first missing natural number is empty', () => {
  expect(findGaps([], true)).toStrictEqual([]);
});

test('In [-1, -2] first missing natural number is empty', () => {
  expect(findGaps([-1, -2], true)).toStrictEqual([]);
});

test('In [4, 1, 0, 2, 3, 6] first missing natural number is 5', () => {
  expect(findGaps([4, 1, 0, 2, 3, 6], true)).toStrictEqual([5]);
});

//-----

test('In [4, 1, -1, 2, 5] missing natural numbers are [3]', () => {
  expect(findGaps([4, 1, -1, 2, 5])).toStrictEqual([3]);
});

test('In [] missing natural numbers empty', () => {
  expect(findGaps([])).toStrictEqual([]);
});

test('In [-1, -2] missing natural numbers empty', () => {
  expect(findGaps([-1, -2])).toStrictEqual([]);
});

test('In [4, 1, -1, 2, 6] missing natural numbers are [3,5]', () => {
  expect(findGaps([4, 1, -1, 2, 6])).toStrictEqual([3,5]);
});
