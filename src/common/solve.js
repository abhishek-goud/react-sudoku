let newGrid = Array(9)
  .fill(null)
  .map(() => Array(9).fill(""));

export const validateSudoku = (newGrid, grid) => {
  for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
    for (let cellIndex = 0; cellIndex < 9; cellIndex++) {
      const cell = grid[rowIndex][cellIndex];
      if (cell !== "" && (cell.charCodeAt(0) < 49 || cell.charCodeAt(0) > 57)) {
        return [
          false,
          `Invalid Input at row ${rowIndex + 1}, column ${cellIndex + 1}`,
        ];
      }
      if (cell !== "") {
        // Temporarily empty the cell for validation
        grid[rowIndex][cellIndex] = "";
        const validInput = isValid(grid, rowIndex, cellIndex, cell);
        grid[rowIndex][cellIndex] = cell; // Restore the original value

        if (!validInput[0]) return validInput;
      }
    }
  }

  if (solveGrid(newGrid, grid, 0, 0)) {
    return [true, "solved"];
  } else {
    return [false, "no solution exists"];
  }
};

const isValid = (grid, row, col, num) => {
  if (num === "") return [true, "valid input"];
  
  // Column check
  for (let i = 0; i < 9; i++) {
    if (grid[i][col] === num) {
      return [false, `conflicting number at row ${i + 1} and col ${col + 1}`];
    }
  }

  // Row check
  for (let j = 0; j < 9; j++) {
    if (grid[row][j] === num) {
      return [false, `conflicting number at row ${row + 1} and col ${j + 1}`];
    }
  }

  // 3x3 subgrid check
  let sRow = Math.floor(row / 3) * 3;
  let sCol = Math.floor(col / 3) * 3;
  for (let i = sRow; i < sRow + 3; i++) {
    for (let j = sCol; j < sCol + 3; j++) {
      if (grid[i][j] === num) {
        return [false, `conflicting number at row ${i + 1} and col ${j + 1}`];
      }
    }
  }
  
  return [true, "valid input"];
};

export const solveGrid = (newGrid, grid, row, col) => {
  if (row === 9) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        newGrid[i][j] = grid[i][j];
      }
    }
    return true;
  } else {
    if (grid[row][col] !== "") {
      if (col !== 8) {
        return solveGrid(newGrid, grid, row, col + 1);
      } else {
        return solveGrid(newGrid, grid, row + 1, 0);
      }
    } else {
      for (let ch = 1; ch <= 9; ch++) {
        const verify = isValid(grid, row, col, ch + "");
        if (verify[0]) {
          grid[row][col] = ch + "";
          if (col !== 8) {
            if (solveGrid(newGrid, grid, row, col + 1)) return true;
          } else {
            if (solveGrid(newGrid, grid, row + 1, 0)) return true;
          }
          grid[row][col] = ""; // backtracking
        }
      }
    }
  }
  return false;
};

// // Example grid
// const grid = [
//   ["1", "", "", "", "", "", "", "", ""],
//   ["", "", "", "", "", "", "", "", ""],
//   ["", "", "", "", "", "", "", "", ""],
//   ["", "", "", "2", "", "", "", "", ""],
//   ["", "", "", "", "", "", "", "", ""],
//   ["", "", "", "", "", "", "", "", ""],
//   ["", "", "", "", "", "", "", "", ""],
//   ["", "", "", "", "", "", "", "", ""],
//   ["", "", "", "", "", "", "", "3", ""],
// ];

// const result = validateSudoku(newGrid, grid);
// console.log(result);
// console.log(newGrid);


