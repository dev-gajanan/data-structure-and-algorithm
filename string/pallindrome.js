const input = "racecar";

function checkPalindrome(input) {
  const revstr = input.split("").reverse().join();
  return input === revstr;
}

console.log(checkPalindrome(input));
