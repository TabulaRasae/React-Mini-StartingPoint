/*
===============================
✅ React Grid Project Checklist
===============================

User Stories: 

[ ] add rows to the grid
[ ] add columns to the grid
[ ] remove rows from the grid
[ ] remove columns from the grid
[ ] select a color from a dropdown menu of colors
[ ] click on a single cell, changing its color to the currently selected color
[ ] fill all uncolored cells with the currently selected color
[ ] fill all cells with the currently selected color
[ ] clear all cells/restore all cells to their original/initial color
[ ] click and hold (mouseover) from a single cell (start) to a different cell (end) such that all affected/hovered-over cells from start to end change to the currently selected color

*/

import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const App = () => {
  const [rows, setRows] = useState([]);
  let addRow = () => {
    setRows([
      ...rows,
      {
        id: rows.length + 1,
      },
    ]);
  };

  return (
    <div className="div-buttons">
      <h1 className="title">Grid Maker</h1>
      <Table rows={rows} />

      <div className="controls">
        <AddButton addRow={addRow} />
        <AddColumn />
        <RemoveRow />
        <RemoveColumn />
        <ColorChoice />
        <FillGrid />
        <ClearGrid />
        <FillEmptyCells />
      </div>
    </div>
  );
};

const AddButton = (addRow) => {
  return <button onClick={addRow}>Add Row</button>;
};

const AddColumn = () => {
  return <button>Add Column</button>;
};

const RemoveRow = () => {
  return <button>Remove Row</button>;
};

const RemoveColumn = () => {
  return <button>Remove Column</button>;
};

const ColorChoice = () => {
  return (
    <select>
      <option value="red">Red</option>
      <option value="blue">Blue</option>
    </select>
  );
};

const Table = (props) => {
  const { rows } = props;
  return (
    <table className="table">
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

const FillGrid = () => {
  return <button>Fill Grid</button>;
};
const ClearGrid = () => {
  return <button>Clear Grid</button>;
};
const FillEmptyCells = () => {
  return <button>Fill Empty Cells</button>;
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
