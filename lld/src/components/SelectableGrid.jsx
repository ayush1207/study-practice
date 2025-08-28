import React from "react";
import { useState } from "react";

const SelectableGrid = ({ rows = 5, cols = 7 }) => {
  const [mouseDown, setMouseDown] = useState(false);
  const [selectedGrid, setSelectedGrid] = useState([]);

  const handleMouseDown = (i) => {
    setMouseDown(true);
    setSelectedGrid([i]);
  };

  const handleMouseEnter = (i) => {
    if (!mouseDown) {
      return;
    } else {
      const startBox = selectedGrid[0];

      const startrowData = Math.floor((startBox-1) / cols);
      const startcolData = (startBox-1) % cols;

      const endrowData = Math.floor((i-1) / cols);
      const endcolData =  (i-1) % cols;

      const minRow = Math.min(startrowData, endrowData);
      const maxRow = Math.max(startrowData, endrowData);
      const minCol = Math.min(startcolData, endcolData);
      const maxCol = Math.max(startcolData, endcolData);

      const selected = [];
      for (let row = minRow; row <= maxRow; row++) {
        for (let col = minCol; col <= maxCol; col++) {
          selected.push(row * cols + col + 1);
        }
      }
        setSelectedGrid(selected);
    }
  };

  const handleMouseUp = () => {
    if (mouseDown) {
      setMouseDown(false);
    }
  };

  // Generate grid items based on row and col
  // Each item can be selected or deselected
  // Use state to manage selected items if needed
  return (
    <div className="selectableGridContainer parentContainer">
      <div
        className="selectableGrid"
        style={{ "--col": cols, "--row": rows }}
        onMouseUp={handleMouseUp}
      >
        {new Array(rows * cols).fill(null).map((_, i) => (
          <div
            key={i}
            className={`gridItem ${selectedGrid.includes(i+1) ? "selected" : ""}`}
            onMouseDown={() => handleMouseDown(i+1)}
            onMouseEnter={() => handleMouseEnter(i+1)}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectableGrid;
