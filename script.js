function nextPalindrome(num) {
  function isPalindrome(n) {
    return n.toString() === n.toString().split("").reverse().join("");
  }

  while (!isPalindrome(++num)) {}
  return num;
}
const input = prompt("Enter a palindrome number");
alert(nextPalindrome(input)); // 22