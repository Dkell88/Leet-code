/*
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let arr = s.split("").map((e) => {
    return String(e);
  });
  let longest = 0;
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    temp = arr.findIndex((e, j) => {
      if (j > i) return e === arr[i];
    });
    if (temp !== -1 && temp - i > longest) longest = temp - i;
    console.log(`temp: ${temp}, i:${i}, longest: ${longest}`);
  }
  if (longest < 2) return s.length;
  return longest;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstring(""));
console.log(lengthOfLongestSubstring("au"));
console.log(lengthOfLongestSubstring("aab"));
// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
