// Test file

// import { test, expect } from "@jest/globals";
const isPalindrome = require("./palindrome");

// True Test
test("is outcome true", () => {
  expect(isPalindrome(1212)).toBeTruthy();
});

// False Test
test("is outcome true", () => {
  expect(isPalindrome(12345)).toBeFalsy();
});
