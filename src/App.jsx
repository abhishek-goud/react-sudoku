import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { validateSudoku } from "./common/solve";
import "./index.css";
import { Button } from "./components/ui/button";

const App = () => {
  const [grid, setGrid] = useState(
    Array(9)
      .fill(null)
      .map(() => Array(9).fill(""))
  );
  let [count, setCount] = useState(0);
  const [isSolve, setIsSolve] = useState(false);

  const handleChange = (rowIndex, cellIndex, value) => {
    const newGrid = [...grid];
    newGrid[rowIndex][cellIndex] = value;
    setGrid(newGrid);
  };

  const solve = (grid) => {
    console.log(grid);
    let newGrid = Array(9)
      .fill(null)
      .map(() => Array(9).fill(""));

    const verify = validateSudoku(newGrid, grid);
    const msg = verify[1];
    if (verify[0]) {
      console.log(newGrid);
      setGrid(newGrid);
      toast.success("solved successfully");
      setIsSolve(true);
    } else if (!verify[0]) {
      toast.error(msg);
    }
  };

  const handleClear = () => {
    setIsSolve(false);
    setGrid(
      Array(9)
        .fill(null)
        .map(() => Array(9).fill(""))
    );
    toast.success("Grid Cleared");
  };

  return (
    <>
      <div className="w-full bg-black text-white py-4">
        <div className="max-w-[460px] mx-auto text-center">
          <span className="text-3xl font-bold">SUDOKU SOLVER</span>
        </div>
      </div>

      {/* Text below the black strip */}
      <div className="w-full max-w-[460px] mx-auto my-4 text-center">
        <h2 className="text-xl font-bold">
          Fill out all the numbers you have.
        </h2>
        <p className="text-base">
          Make sure that they are in the correct position! Press "solve" once
          you are ready. The algorithm will then attempt to complete your
          Sudoku. To finish the game, missing numbers will be filled into the
          9x9 grid of squares which are subdivided into 3x3 boxes so that every
          row, every column, and every box contains all numbers from one to
          nine.
        </p>
      </div>

      <div
        className="w-full max-w-[460px] mx-auto my-4 grid"
        style={{ gridTemplateColumns: "repeat(9, 1fr)", gap: "2px" }}
      >
        {grid.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <input
                key={cellIndex}
                type="text"
                maxLength="1"
                value={cell}
                onChange={(e) =>
                  handleChange(rowIndex, cellIndex, e.target.value)
                }
                className={`
              w-[50px]
              h-[50px]
              text-center
              text-xl
              border-2
              border-gray-500
              rounded-md
              hover:border-sky-500
              hover:border-4
              focus:outline-none
              focus:border-sky-500
              focus:border-4
              transition-colors
              duration-200
              ease-in-out
              font-bold
              font-sans
              ${(rowIndex + 1) % 3 === 0 && rowIndex !== 8 ? "mb-4" : ""}
              ${(cellIndex + 1) % 3 === 0 && cellIndex !== 8 ? "mr-4" : ""}
            `}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
      <div className="w-full flex justify-center mt-4">
        {isSolve ? (
          <button
            onClick={handleClear}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200 ease-in-out"
          >
            Clear Grid
          </button>
        ) : (
          <button
            onClick={() => solve(grid)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 ease-in-out"
          >
            Solve Grid
          </button>
        )}
      </div>
      <Toaster className="text-green-400" richColors position="bottom-center" />
    </>
  );
};

export default App;
