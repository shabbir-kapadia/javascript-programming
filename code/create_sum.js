/*
Create a sum(), which makes following possible

const sum1 = sum(1)
sum1(2) == 3 // true
sum1(3) == 4 // true
sum(1)(2)(3) == 6 // true
sum(5)(-1)(2) == 6 // true */

/**
 * @param {number} num
 */
function sum(num) {
  const fn = (num2) => sum(num + num2);
  fn.valueOf = () => num;
  return fn;
}
