/*There is already Array.prototype.flat() in JavaScript (ES2019), which reduces the nesting of Array.

Could you manage to implement your own one?

Here is an example to illustrate

const arr = [1, [2], [3, [4]]];

flat(arr)
// [1, 2, 3, [4]]

flat(arr, 1)
// [1, 2, 3, [4]]

flat(arr, 2)
// [1, 2, 3, 4]
*/

/**
 * @param { Array } arr
 * @param { number } depth
 * Recursive solution
 */
/*
function flat(arr, depth = 1) {
  return arr.reduce((acc, item) => {
    if (Array.isArray(item) && depth > 0) {
      acc.push(...flat(item, depth - 1))
    } else {
      acc.push(item)
    }
    return acc
  }, [])
}
*/

/**
 * @param { Array } arr
 * @param { number } depth
 * Iterative solution
 */
function flat(arr, depth = 1) {
  const stack = arr.map((item) => [item, depth]);
  const res = [];

  while (stack.length > 0) {
    const [item, itemDepth] = stack.pop();
    if (Array.isArray(item) && itemDepth > 0) {
      stack.push(...item.map((i) => [i, itemDepth - 1]));
    } else {
      res.push(item);
    }
  }

  return res.reverse();
}
