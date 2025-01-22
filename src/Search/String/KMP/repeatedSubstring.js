// Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.
//Leetcode 459

// Example 1:

// Input: s = "abab"
// Output: true
// Explanation: It is the substring "ab" twice.
// Example 2:

// Input: s = "aba"
// Output: false
// Example 3:

// Input: s = "abcabcabcabc"
// Output: true
// Explanation: It is the substring "abc" four times or the substring "abcabc" twice.

//Trying to solve by KMP

function BuilsLps(needle) {
  let lps = [0];
  let j = 0;
  let i = 1;

  while (i < needle.length) {
    if (needle[i] === needle[j]) {
      lps[i] = j + 1;
      i += 1;
      j += 1;
    } else {
      if (j === 0) {
        lps[i] = 0;
        i += 1;
      } else {
        j = lps[j - 1];
      }
    }
  }
  return lps;
}

function repeatedSubstringPattern(s) {
  let lps = BuilsLps(s);
  console.log(lps);
  let n = s.length;
  let len = lps[n - 1];
  console.log(n, len);
  console.log(len > 0 && n % (n - len) === 0);
  return len > 0 && n % (n - len) === 0;
}

repeatedSubstringPattern("abcabcabcabc");
