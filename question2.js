// var addTwoNumbers = function (l1, l2) {
//   let sum = Number(l1.reverse().join("")) + Number(l2.reverse().join(""));
//   let output = String(sum)
//     .split("")
//     .map((n) => {
//       return Number(n);
//     });
//   return output.reverse();
// };

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function (l1, l2) {
  let node = null;
  const carry = arguments[2];
  if (l1 || l2) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    const next1 = l1 ? l1.next : null;
    const next2 = l2 ? l2.next : null;
    const val = carry ? val1 + val2 + 1 : val1 + val2;
    node = new ListNode(val % 10);
    node.next = addTwoNumbers(next1, next2, val >= 10);
  } else if (carry) {
    node = new ListNode(1);
    node.next = null;
  }
  return node;
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
