import React, { useState } from "react";

const GridChangeInput = ({ onGridChange }) => {
  const [rows, setRows] = useState(6);
  const [cols, setCols] = useState(6);

  const handleRowsChange = (e) => {
    setRows(e.target.value);
  };

  const handleColsChange = (e) => {
    setCols(e.target.value);
  };

  return (
    <div>
      <label>
        Rows:
        <input type="number" value={rows} onChange={handleRowsChange} />
      </label>
      <label>
        Cols:
        <input type="number" value={cols} onChange={handleColsChange} />
      </label>
      <button onClick={() => onGridChange(rows, cols)}>Change Grid</button>
    </div>
  );
};

export default GridChangeInput;
