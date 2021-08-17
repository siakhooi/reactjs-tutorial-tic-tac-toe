import calculateWinner from "../CalculateWinner";

it("CalculateWinner/win/X", () => {
  const squares = ['X', 'X', 'X', 'O', 'X', 'O', 'X', 'O', 'O']
  expect(calculateWinner(squares)).toBe('X')
});
it("CalculateWinner/win/O", () => {
  const squares = ['O', null, null, null, 'O', null, null, null, 'O']
  expect(calculateWinner(squares)).toBe('O')
});
it("CalculateWinner/null", () => {
  const squares = ['X', null, null, 'O', null, null, null, null, null]
  expect(calculateWinner(squares)).toBe(null)
});
