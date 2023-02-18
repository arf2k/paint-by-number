// const Palette = ({ colors, onColorClick }) => {
//   return (
//     <div style={{ display: "flex" }}>
//       {colors.map((color) => (
//         <div
//           key={color}
//           style={{
//             backgroundColor: color,
//             width: "30px",
//             height: "30px",
//             marginRight: "5px",
//           }}
//           onClick={() => onColorClick(color)}
//         />
//       ))}
//     </div>
//   );
// };
// export default Palette


import React from 'react';
import { PaletteContainer, ColorSquare } from "./PaletteStyles"

const Palette = ({ colors, onColorClick }) => (
  <PaletteContainer>
    {colors.map((color, index) => (
      <ColorSquare
        key={index}
        color={color}
        onClick={() => onColorClick(color)}
      />
    ))}
  </PaletteContainer>
);

export default Palette;
