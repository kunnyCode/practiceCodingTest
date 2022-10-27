// 실패!
// const fs = require("fs");
// const input = fs
//   .readFileSync("./dev/stdin/14502.txt")
//   .toString()
//   .trim()
//   .split("\n");

// const [N, M] = input.shift().split(" ").map(Number);
// const lab = input.map((el) => el.split(" ").map(Number));
// console.log(N, M, lab);

// let max = Number.MIN_SAFE_INTEGER;

// function spreadVirus(walls) {
//   let safeZoneNum = 0;
//   const tempLab = [...lab];
//   const queue = [];
//   const dx = [0, 0, 1, -1];
//   const dy = [1, -1, 0, 0];
//   for (const wall of walls) {
//     tempLab[wall[0]][wall[1]] = 1;
//   }

//   for (let i = 0; i < N; i++) {
//     for (let j = 0; j < M; j++) {
//       if (tempLab[i][j] === 2) {
//         queue.push([i, j]);

//         while (queue.length > 0) {
//           const [x, y] = queue.shift();
//           tempLab[x][y] = 3;
//           for (let k = 0; k < 4; k++) {
//             const nx = x + dx;
//             const ny = y + dy;
//             if (
//               nx >= 0 &&
//               ny >= 0 &&
//               nx < N &&
//               ny < M &&
//               tempLab[nx][ny] === 0
//             ) {
//               queue.push([nx, ny]);
//             }
//           }
//         }
//       }
//     }
//   }

//   for (const l of tempLab) {
//     if (l === 0) safeZoneNum++;
//   }

//   return safeZoneNum;
// }

// let walls = [];
// function findOptimumWalls(x, y) {
//   if (walls.length === 3) {
//     // 바이러스 퍼트려 얼마나 감염되는지 확인
//     // console.log(walls);
//     const safeZone = spreadVirus(walls);
//     // console.log(safeZone);
//     max = Math.max(max, safeZone);
//     return;
//   } else {
//     for (let i = x; i < N; i++) {
//       for (let j = y; j < M; j++) {
//         console.log(i, j);
//         if (lab[i][j] === 0) {
//           walls.push([i, j]);
//         }
//         if (y < M - 1) {
//           findOptimumWalls(i, j + 1);
//           walls.pop();
//         } else if (y === M - 1) {
//           findOptimumWalls(i + 1, 0);
//           walls.pop();
//         }
//       }
//     }
//   }
// }

// findOptimumWalls(0, 0);

// // console.log(lab);
