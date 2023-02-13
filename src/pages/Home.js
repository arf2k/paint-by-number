// import Grid from "../components/grid/Grid"
// import Palette from "../components/palette/Palette";
// import Controls from "../components/controls/Controls";
// import React, { useState, useEffect } from 'react';
// import Square from "../components/square/Square"
// import SquareGenerator from "../components/SquareGenerator";


// const Home = () => {
//      const [squares, setSquares] = useState(SquareGenerator());


//   const [selectedColor, setSelectedColor] = useState('white');

//   const changeColor = (index) => {
//     const newSquares = [...squares];
//     newSquares[index].color = selectedColor;
//     setSquares(newSquares);
//   };

//   const onColorClick = (color) => {
//     setSelectedColor(color);
//   };

//   return (
//     <div>
//            <Palette colors={['white', 'red', 'blue', 'green']} onColorClick={setSelectedColor} />
//       <Grid squares={squares} onSquareClick={changeColor} />
//     </div>
//   );
// };

// export default Home;
import React, { useState, useEffect } from "react";
import Square from "../components/square/Square";
import Palette from "../components/palette/Palette";
import Grid from "../components/grid/Grid";
import GridChangeInput from "../components/grid-change-input/GridChangeInput";
import SquareGenerator from "../components/SquareGenerator";
import ImageUpload from "../components/image-upload/ImageUpload";


const Home = () => {
  const [squares, setSquares] = useState(SquareGenerator());
  const [selectedColor, setSelectedColor] = useState("white");

  const changeColor = (index) => {
    const newSquares = [...squares];
    newSquares[index].color = selectedColor;
    setSquares(newSquares);
  };

  const handleGridChange = (rows, cols) => {
    setSquares(SquareGenerator(rows, cols));
  };

  return (
    <div>
      <GridChangeInput onGridChange={handleGridChange} />
      <ImageUpload/>
      <Palette colors={["white", "red", "blue", "green"]} onColorClick={setSelectedColor} />
      <Grid squares={squares} onSquareClick={changeColor} />
    </div>
  );
};

export default Home;
