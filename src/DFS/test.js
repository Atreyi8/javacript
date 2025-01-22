// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, grid) {
  // Implement your solution here
  const n = grid.length;

  // Helper function to find the coordinates of a character in the grid
  function findChar(char) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === char) {
          return [i, j];
        }
      }
    }
    return null;
  }

  // Helper function to calculate the minimum number of moves between two points
  function minMoves(start, end) {
    const [x1, y1] = start;
    const [x2, y2] = end;
    return Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2));
  }

  // Initialize variables
  let moves = 0;
  let currentPos = [0, 0];

  // Iterate through each character in S
  for (let i = 0; i < S.length; i++) {
    const char = S[i];
    const nextPos = findChar(char);

    // If the character is not found, return -1
    if (!nextPos) return -1;

    // Calculate the moves required to reach the next character
    moves += minMoves(currentPos, nextPos);

    // Update current position
    currentPos = nextPos;
  }

  return moves;
}
