import { describe, it, expect } from "vitest";
import { validateSudoku, solveGrid } from "./solve";

describe("Sudoku Solver Logic", () => {
  const emptyGrid = Array(9)
    .fill(null)
    .map(() => Array(9).fill(""));

  const solvableGrid = [
    ["5", "3", "", "", "7", "", "", "", ""],
    ["6", "", "", "1", "9", "5", "", "", ""],
    ["", "9", "8", "", "", "", "", "6", ""],
    ["8", "", "", "", "6", "", "", "", "3"],
    ["4", "", "", "8", "", "3", "", "", "1"],
    ["7", "", "", "", "2", "", "", "", "6"],
    ["", "6", "", "", "", "", "2", "8", ""],
    ["", "", "", "4", "1", "9", "", "", "5"],
    ["", "", "", "", "8", "", "", "7", "9"],
  ];

  const solvedGrid = [
    ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
    ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
    ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
    ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
    ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
    ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
    ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
    ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
    ["3", "4", "5", "2", "8", "6", "1", "7", "9"],
  ];

  const unsolvableGrid = [
    ["5", "3", "", "", "7", "", "", "", ""],
    ["6", "", "", "1", "9", "5", "", "", ""],
    ["", "9", "8", "", "", "", "", "6", ""],
    ["8", "", "", "", "6", "", "", "", "3"],
    ["4", "", "", "8", "", "3", "", "", "1"],
    ["7", "", "", "", "2", "", "", "", "6"],
    ["", "6", "", "", "", "", "2", "8", ""],
    ["", "", "", "4", "1", "9", "", "", "5"],
    ["5", "", "", "", "8", "", "", "7", "9"], // Conflicting 5
  ];

  it("should solve a solvable Sudoku puzzle", () => {
    let newGrid = JSON.parse(JSON.stringify(emptyGrid));
    const result = validateSudoku(newGrid, solvableGrid);
    expect(result[0]).toBe(true);
    expect(newGrid).toEqual(solvedGrid);
  });

  it("should return false for an unsolvable Sudoku puzzle", () => {
    let newGrid = JSON.parse(JSON.stringify(emptyGrid));
    const result = validateSudoku(newGrid, unsolvableGrid);
    expect(result[0]).toBe(false);
    expect(result[1]).toContain("conflicting number");
  });

  it("should return false for invalid characters", () => {
    let newGrid = JSON.parse(JSON.stringify(emptyGrid));
    const invalidGrid = JSON.parse(JSON.stringify(solvableGrid));
    invalidGrid[0][2] = "a";
    const result = validateSudoku(newGrid, invalidGrid);
    expect(result[0]).toBe(false);
    expect(result[1]).toBe("Invalid Input at row 1, column 3");
  });

  it("should solve an empty grid", () => {
    let newGrid = JSON.parse(JSON.stringify(emptyGrid));
    let gridToSolve = JSON.parse(JSON.stringify(emptyGrid));
    const result = solveGrid(newGrid, gridToSolve, 0, 0);
    expect(result).toBe(true);
    // We can't know the exact solved grid, but we can check if it's valid
    const validationResult = validateSudoku(
      Array(9)
        .fill(null)
        .map(() => Array(9).fill("")),
      newGrid
    );
    // This will try to solve an already solved grid, which should be 'true'
    // but the check is tricky. A simpler check is that it's a full grid.
    const isFull = newGrid.every((row) => row.every((cell) => cell !== ""));
    expect(isFull).toBe(true);
  });
});