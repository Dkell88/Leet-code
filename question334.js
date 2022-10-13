/*
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let firstNum = Number.MAX_VALUE;
  let secondNum = Number.MAX_VALUE;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= firstNum) firstNum = nums[i];
    else if (nums[i] <= secondNum) secondNum = nums[i];
    else return true;
  }
  return false;
};

// var increasingTriplet = function (nums) {
//   let output = nums.find(
//     (i) => nums[i] < nums[i + 1] && nums[i + 1] < nums[i + 2]
//   );
//   console.log(output);
//   if (output) return true;
//   return false;
// };

console.log(increasingTriplet([1, 2, 3, 4, 5]));
console.log(increasingTriplet([5, 4, 3, 2, 1]));
console.log(increasingTriplet([2, 1, 5, 0, 4, 6]));
console.log(increasingTriplet([20, 100, 10, 12, 5, 13]));
