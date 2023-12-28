// File for solution
/* Problem - Given an integer x, return true if x is a palindrome, and false otherwise.*/

/* Steps 
     - Make x(121) into String
     - Split, Reverse then Join back together as string
     - Use an if statement to check if 
*/

// Variables to test
let x = 121;

var isPalindrome = function (x) {
  let xStr = x.toString();
  console.log(xStr);
  let xStrReversed = xStr.split("").reverse().join("");
  console.log(xStrReversed);
  if (xStr === xStrReversed) {
    return true;
  } else {
    return false;
  }
};

isPalindrome();

/* Failed Attempt
- Create an array of x (!didn't work as expected!)
- Reverse x array (!didn't work as expected!)
- Check if x and reverse are same (!didn't work as expected!)
 var isPalindrome = function (x) {
   // Turn x into array
   let xArr = Array.from(String(x), Number);
   console.log(xArr);
   // Turn array in into reversed array
   let xArrReverse = parseInt(xArr.reverse().join(""));
   console.log(xArrReverse);
   if (xArr === xArrReverse) {
     return true;
   } else {
     return false;
   }
 }; */
