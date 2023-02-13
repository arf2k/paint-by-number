import React, { useState } from 'react';

const Square = ({ color, number, onClick }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        width: 100,
        height: 100,
      }}
      onClick={onClick}
    >
      {number}
    </div>
  );
};

export default Square