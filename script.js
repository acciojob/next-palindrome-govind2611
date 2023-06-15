function nextPalindrome(num) {
  num = parseInt(num) + 1; // Increment the number to start checking the next one

  while (true) {
    if (isPalindrome(num)) {
      return num;
    }
    num++;
  }
}

function isPalindrome(num) {
  // Convert the number to a string
  const str = num.toString();

  // Check if the string is equal to its reverse
  return str === str.split("").reverse().join("");
}

const input = prompt("Enter a palindrome number");
alert(nextPalindrome(input));
