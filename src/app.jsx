/*
===============================
✅ React Grid Project Checklist
===============================

🔧 SETUP
[✅] Fork the Starting Point repo (one person).
[✅] Add all group members as collaborators.
[✅] Ensure every member commits and pushes to the forked repo.
[✅] Install React Developer Tools in Chrome:
    https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
[ ] Deploy project to GitHub Pages:
    https://codeburst.io/deploy-react-to-github-pages-to-create-an-amazing-website-42d8b09cd4d

📦 COMPONENT STRUCTURE
[✅] Create App.jsx
      - Manages state: grid, selectedColor
      - Contains methods: addRow(), addColumn(), setColor(), etc.
      - Renders dropdown & <Table />
[ ] Create components:
      - Table.jsx → parent of TableRow.jsx
      - TableRow.jsx → parent of TableCell.jsx
      - TableCell.jsx → receives color, click handler

🧩 MVP FEATURES (Required)
[✅]] User can add rows to the grid
[✅]] User can add columns to the grid
[✅]] User can select a color from a dropdown menu
[✅]] User can click a single cell to change its color

🌟 STRETCH FEATURES (Optional)
[✅]] User can remove rows from the grid
[✅]] User can remove columns from the grid
[✅]] User can fill all uncolored cells with the selected color
[✅]] User can fill ALL cells with the selected color
[✅]] User can clear all cells to initial color
[✅]] User can click & drag (mouseover) to color multiple cells

🧠 REMINDERS
- Keep each component in its own file and use `export default`
- Pass event handlers as props from parent to child
- Use state and props instead of direct DOM manipulation
- Use Chrome React Dev Tools to inspect component state/props

===============================
*/



import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";


const COLORS = ["red", "blue", "green", "yellow", "purple", "orange", "white"];

const App = () => {

  const [grid, setGrid] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const numRows = grid.length;
  const numCols = grid[0]?.length || 0;


  const addRow = () => {
    setGrid([...grid, Array(numCols).fill("")]);
  };


  const addColumn = () => {
    setGrid(grid.map(row => [...row, ""]));
  };

  
  const removeRow = () => {
    if (numRows > 1) setGrid(grid.slice(0, -1));
  };

 
  const removeColumn = () => {
    if (numCols > 1) setGrid(grid.map(row => row.slice(0, -1)));
  };

  
  const setCellColor = (rowIdx, colIdx) => {
    setGrid(grid =>
      grid.map((row, r) =>
        row.map((cell, c) =>
          r === rowIdx && c === colIdx ? selectedColor : cell
        )
      )
    );
  };

  
  const fillGrid = () => {
    setGrid(grid.map(row => row.map(() => selectedColor)));
  };

  
  const clearGrid = () => {
    setGrid(grid.map(row => row.map(() => "")));
  };

  
  const fillEmptyCells = () => {
    setGrid(grid.map(row =>
      row.map(cell => (cell === "" ? selectedColor : cell))
    ));
  };

  return (
    <div className="app">
      <h1 className="title">Grid Maker</h1>
      <div className="controls">
        <AddButton onClick={addRow} />
        <AddColumn onClick={addColumn} />
        <RemoveRow onClick={removeRow} />
        <RemoveColumn onClick={removeColumn} />
        <ColorChoice
          colors={COLORS}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <FillGrid onClick={fillGrid} />
        <ClearGrid onClick={clearGrid} />
        <FillEmptyCells onClick={fillEmptyCells} />
      </div>
      <Table grid={grid} setCellColor={setCellColor} />
    </div>
  );
};

const AddButton = ({ onClick }) => (
  <button onClick={onClick}>Add Row</button>
);

const AddColumn = ({ onClick }) => (
  <button onClick={onClick}>Add Column</button>
);

const RemoveRow = ({ onClick }) => (
  <button onClick={onClick}>Remove Row</button>
);

const RemoveColumn = ({ onClick }) => (
  <button onClick={onClick}>Remove Column</button>
);

const ColorChoice = ({ colors, selectedColor, setSelectedColor }) => (
  <select
    value={selectedColor}
    onChange={e => setSelectedColor(e.target.value)}
  >
    {colors.map(color => (
      <option key={color} value={color}>
        {color.charAt(0).toUpperCase() + color.slice(1)}
      </option>
    ))}
  </select>
);

const Table = ({ grid, setCellColor }) => (
  <table className="table">
    <tbody>
      {grid.map((row, rIdx) => (
        <tr key={rIdx}>
          {row.map((cell, cIdx) => (
            <td
              key={cIdx}
              style={{ backgroundColor: cell || "#fff", cursor: "pointer" }}
              onClick={() => setCellColor(rIdx, cIdx)}
            />
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

const FillGrid = ({ onClick }) => (
  <button onClick={onClick}>Fill Grid</button>
);

const ClearGrid = ({ onClick }) => (
  <button onClick={onClick}>Clear Grid</button>
);

const FillEmptyCells = ({ onClick }) => (
  <button onClick={onClick}>Fill Empty Cells</button>
);

const root = createRoot(document.getElementById("root"));
root.render(<App />);
