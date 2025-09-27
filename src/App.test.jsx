import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import App from "./App";

// Mocking toast to prevent errors during tests
vi.mock("sonner", () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
  Toaster: () => <div data-testid="toaster"></div>,
}));

describe("App Component", () => {
  it("renders the Sudoku grid and controls", () => {
    render(<App />);
    expect(screen.getByText("SUDOKU SOLVER")).toBeInTheDocument();
    const inputs = screen.getAllByRole("textbox");
    expect(inputs.length).toBe(81);
    expect(screen.getByText("Solve Grid")).toBeInTheDocument();
  });

  it('clears the grid when "Clear Grid" is clicked', () => {
    render(<App />);
    const inputs = screen.getAllByRole("textbox");
    fireEvent.change(inputs[0], { target: { value: "5" } });
    expect(inputs[0].value).toBe("5");

    const solveButton = screen.getByText("Solve Grid");
    fireEvent.click(solveButton);

    // After solving, the button changes to "Clear Grid"
    const clearButton = screen.getByText("Clear Grid");
    fireEvent.click(clearButton);

    expect(inputs[0].value).toBe("");
  });

  it("fills the grid when a user enters a number", () => {
    render(<App />);
    const inputs = screen.getAllByRole("textbox");
    fireEvent.change(inputs[5], { target: { value: "9" } });
    expect(inputs[5].value).toBe("9");
  });

  it('shows an error for an unsolvable puzzle', () => {
    render(<App />);
    const inputs = screen.getAllByRole("textbox");
    // Create a conflict
    fireEvent.change(inputs[0], { target: { value: '1' } });
    fireEvent.change(inputs[1], { target: { value: '1' } });

    const solveButton = screen.getByText("Solve Grid");
    fireEvent.click(solveButton);

    expect(vi.mocked(vi.mocked(window.sonner)).toast.error).toHaveBeenCalledWith("conflicting number at row 1 and col 2");
  });
});