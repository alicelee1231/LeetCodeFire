/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let result = "";

  // Helper function to expand around the center and check palindrome
  const expandAroundCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right);
  }

  for (let i = 0; i < s.length; i++) {
    // Check for odd-length palindromes
    const oddPalindrome = expandAroundCenter(i, i);
    if (oddPalindrome.length > result.length) {
      result = oddPalindrome;
    }

    // Check for even-length palindromes
    const evenPalindrome = expandAroundCenter(i, i + 1);
    if (evenPalindrome.length > result.length) {
      result = evenPalindrome;
    }
  }

  return result;
};
