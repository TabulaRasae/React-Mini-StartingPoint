
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
[ ] Create App.jsx
      - Manages state: grid, selectedColor
      - Contains methods: addRow(), addColumn(), setColor(), etc.
      - Renders dropdown & <Table />
[ ] Create components:
      - Table.jsx → parent of TableRow.jsx
      - TableRow.jsx → parent of TableCell.jsx
      - TableCell.jsx → receives color, click handler

🧩 MVP FEATURES (Required)
[ ] User can add rows to the grid
[ ] User can add columns to the grid
[ ] User can select a color from a dropdown menu
[ ] User can click a single cell to change its color

🌟 STRETCH FEATURES (Optional)
[ ] User can remove rows from the grid
[ ] User can remove columns from the grid
[ ] User can fill all uncolored cells with the selected color
[ ] User can fill ALL cells with the selected color
[ ] User can clear all cells to initial color
[ ] User can click & drag (mouseover) to color multiple cells

🧠 REMINDERS
- Keep each component in its own file and use `export default`
- Pass event handlers as props from parent to child
- Use state and props instead of direct DOM manipulation
- Use Chrome React Dev Tools to inspect component state/props

===============================
*/



import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const App = () => {
  return (
    <div className="app">
      <h1 className="title">Grid Maker</h1>
      <AddButton />
      <AddColumn />
      <RemoveRow />
      <RemoveColumn />
      <ColorChoice />


    </div>
  );
};

const AddButton = () => {
  return (
   <button id="add-row">Add Row</button> 
  );
};

const AddColumn = () => {
  return (
    <button id="add=column">Add Column</button>
  );
};

const RemoveRow = () => {
  return (
    <button id="remove-row">Remove Row</button>
  );
};

const RemoveColumn = () => {
  return (
    <button id="remove-column">Remove Column</button>
  );
};

const ColorChoice = () => {
  return (
    <select id="color-select">
          <option value="red">Red</option>
          <option value="blue">Blue</option>
        </select>
  );
};




const root = createRoot(document.getElementById("root"));
root.render(<App />);
