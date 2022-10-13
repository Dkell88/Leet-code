/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// var twoSum = function (nums, target) {
//   let output = [-1, -1];
//   nums.find((e, i, a) => {
//     for (let j = 0; j < a.length; j++) {
//       if (a[j] + e === target) {
//         output = [j, i];
//         return;
//       }
//     }
//     if (output[0] !== -1) return;
//   });
//   return output;
// };

// let nums = [2, 7, 11, 15];
// console.log(twoSum(nums, 9));
// nums = [3, 2, 4];
// console.log(twoSum(nums, 6));
// nums = [3, 3];
// console.log(twoSum(nums, 6));

var twoSum = function (nums, target) {
  let output = [-1, -1];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        output = [i, j];
        return output;
      }
    }
  }
  return output;
};

let nums = [2, 7, 11, 15];
console.log(twoSum(nums, 9));
// nums = [3, 2, 4];
// console.log(twoSum(nums, 6));
// nums = [3, 3];
// console.log(twoSum(nums, 6));
