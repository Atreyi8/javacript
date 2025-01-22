// you are given a string S and a 2-d array of characters of size n*n named GRID,
// each field in the grid is either empty, denoted by a dot,
// or contains an UPPERCASE english letter.
// Each particular letter may appear, atmost twice in the grid.
// Your task is to reconstruct string S by visiting fields of the grid, you start the reconstruction with an EMPTY string.
// You can choose the field in which you want to start. in 1 move, you can change rhe current field to an adjacent one(up, down, left, right).
// If you visit a field, containing a letter, you may append this letter to the end of the reconstructed string. appending a letter is not counted as a move.
// each field can be visited and each letter can be used multiple times during the reconstruction process. what is the minimum number of moves ,
// needed to reconstruct string S. Write a funciton SOLUTION(S,grid); that give a string S and an array grid returns the minimum number of moves needed to reconstruct S.

// If its not possible to reconstruct S, then return -1. Examples - given S = "ABCA" and GRID = [".A.C",".B..","....","...A"]
// function should return 6 for the above example. The optimal movement during the reconstruction process is as follows: 1.
// start on the field containing "A" in the first row.
// 2. Go to the adjacent field with "B" in one move
// 3. go to the field containing "C" in three moves.
// 4. Return to the starting field with "A" in two moves. This way the string "ABCA" is reconstructed in six moves.
// example 2- Given S = " KLLRMS" and GRID = ["K....","S...L","....R","LX...","XM..S"] the funciton should return 13
// optimal movememt during the reconstruction process is
// 1 . Start on the field containign K 2. Go to the filed with L on the right side of the grid in 5 moves.
// Note that while being on this field 2 consecutive letters L can be appended to your string.
// 3. Gather letters R and then M in 6 moves. Go to the closest field containign letter L in 2 moves
// The length of STRING S is within range 1-10. The string S is made of only UPPERCASE letters between A-Z.
// N is an integer withing range 1-20. All strings in grid are made only of uppercase letters and or '.' characters.
// Each letter may appear at most twice in the grid

function reconstructString(goal, grid) {
  let ctp = new Map();

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let val = grid[i][j];
      if (val === ".") {
        continue;
      }
      if (!ctp.has(val)) {
        ctp.set(val, []);
      }
      ctp.get(val).push([i, j]);
    }
  }
  console.log(ctp);

  for (let v of goal) {
    if (!ctp.has(v)) {
      return -1;
    }
  }

  function dist(p1, p2) {
    let dx = Math.abs(p1[0] - p2[0]);
    let dy = Math.abs(p1[1] - p2[1]);
    return dx + dy;
  }

  function dfs(pos, i) {
    if (i === goal.length - 1) {
      return 0;
    }

    let ans = Infinity;
    let char = goal[i];
    let nextChar = goal[i + 1];
    if (char === nextChar) {
      return dfs(pos, i + 1);
    }
    for (let nextPos of ctp.get(nextChar)) {
      let d = dist(pos, nextPos);
      ans = Math.min(ans, d + dfs(nextPos, i + 1));
    }

    return ans;
  }

  let ans = Infinity;
  console.log("@@@", goal[0], ctp.get(goal[0]));
  for (let startPos of ctp.get(goal[0])) {
    console.log("startPos", startPos);
    ans = Math.min(ans, dfs(startPos, 0));
  }
  return ans;
}

// TESTING
let goal1 = "ABCA";
let grid1 = [".A.C", ".B..", "....", "...A"];
let x = reconstructString(goal1, grid1);
console.log(x);

let goal2 = "KLLRML";
let grid2 = ["K....", "S...L", "....R", "LX...", "XM..S"];
let y = reconstructString(goal2, grid2);
console.log(y);
