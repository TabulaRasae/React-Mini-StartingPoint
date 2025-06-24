/*
============================
React Grid Project Checklist
============================

User Stories: 

[ done ] add rows to the grid
[ done ] add columns to the grid
[ done ] remove rows from the grid
[ done ] remove columns from the grid
[ done ] select a color from a dropdown menu of colors
[ done ] click on a single cell, changing its color to the currently selected color
[ done ] fill all uncolored cells with the currently selected color
[ done ] fill all cells with the currently selected color
[ done ] clear all cells/restore all cells to their original/initial color
[ done ] click and hold (mouseover) from a single cell (start) to a different cell (end) such that all affected/hovered-over cells from start to end change to the currently selected color
 
*/

import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const App = () => {
  // this line was stolen from the peer repo xd
  const [grid, setGrid] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [selectedColor, setSelectedColor] = useState("red");
  const [isMouseDown, setIsMouseDown] = useState(false);

  const numRows = grid.length;
  const numCols = grid.length > 0 ? grid[0].length : 0;
  const tableBuilder = [];

  const cloneGrid = () => {
    const copy = [];
    for (let i = 0; i < numRows; i++) {
      const rowCopy = [];
      for (let j = 0; j < numCols; j++) {
        rowCopy.push(grid[i][j]);
      }
      copy.push(rowCopy);
    }
    return copy;
  };

  const addRow = () => {
    const next = cloneGrid();
    const newRow = Array(numCols).fill("");
    next.push(newRow);
    setGrid(next);
  };

  const addColumn = () => {
    const next = cloneGrid();
    for (let i = 0; i < numRows; i++) next[i].push("");
    setGrid(next);
  };

  const removeRow = () => {
    if (numRows === 1) return;
    const next = cloneGrid();
    next.pop();
    setGrid(next);
  };

  const removeColumn = () => {
    if (numCols === 1) return;
    const next = cloneGrid();
    for (let i = 0; i < numRows; i++) next[i].pop();
    setGrid(next);
  };

  const paintCell = (i, j) => {
    const next = cloneGrid();
    next[i][j] = selectedColor;
    setGrid(next);
  };

  const fillGrid = () => {
    const next = [];
    for (let i = 0; i < numRows; i++) {
      const row = [];
      for (let j = 0; j < numCols; j++) row.push(selectedColor);
      next.push(row);
    }
    setGrid(next);
  };

  const clearGrid = () => {
    const next = [];
    for (let i = 0; i < numRows; i++) {
      const row = [];
      for (let j = 0; j < numCols; j++) row.push("");
      next.push(row);
    }
    setGrid(next);
  };

  const fillEmpty = () => {
    const next = cloneGrid();
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        if (next[i][j] === "") next[i][j] = selectedColor;
      }
    }
    setGrid(next);
  };

  for (let i = 0; i < numRows; i++) {
    const cells = [];
    for (let j = 0; j < numCols; j++) {
      cells.push(
        <td
          key={j}
          style={{ backgroundColor: grid[i][j] || "white" }}
          onMouseDown={() => {
            setIsMouseDown(true);
            paintCell(i, j);
          }}
          onMouseEnter={() => {
            if (isMouseDown) paintCell(i, j);
          }}
        />
      );
    }
    tableBuilder.push(<tr key={i}>{cells}</tr>);
  }

  return (
    <div className="app" onMouseUp={() => setIsMouseDown(false)}>
      <h1 className="title">Grid Maker</h1>

      <table className="grid">
        <tbody>{tableBuilder}</tbody>
      </table>

      <div className="controls">
        <button id="add-row" onClick={addRow}>
          {" "}
          Add Row
        </button>

        <button id="add-col" onClick={addColumn}>
          Add Column
        </button>

        <button id="remove-row" onClick={removeRow}>
          Remove Row
        </button>

        <button id="remove-col" onClick={removeColumn}>
          Remove Column
        </button>

        <select
          id="color-chooser"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        >
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="">(Eraser)</option>
        </select>

        <button id="fill-all" onClick={fillGrid}>
          Fill Grid
        </button>

        <button id="fill-empty" onClick={fillEmpty}>
          Fill Empty Cells
        </button>

        <button id="clear" onClick={clearGrid}>
          Clear Grid
        </button>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
