import { reverseString, sum } from "./math";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test('reverses string "abc" to equal "cba"', () => {
  expect(reverseString("abc")).toBe("cba");
});
