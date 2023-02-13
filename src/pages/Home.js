// import React, { useState } from "react";
// import Grid from "../components/grid/Grid";
// import Palette from "../components/palette/Palette";
// import GridChangeInput from "../components/grid-change-input/GridChangeInput";
// import SquareGenerator from "../components/SquareGenerator";
// import ImageUpload from "../components/image-upload/ImageUpload";

// const Home = () => {
//   const [imageSrc, setImageSrc] = useState("");
//   const [gridSize, setGridSize] = useState({ rows: 6, cols: 6 });
//   const [squares, setSquares] = useState(SquareGenerator(gridSize.rows, gridSize.cols));
//   const [selectedColor, setSelectedColor] = useState("white");

//   const changeColor = (index) => {
//     const newSquares = [...squares];
//     newSquares[index].color = selectedColor;
//     setSquares(newSquares);
//   };

//   const onColorClick = (color) => {
//     setSelectedColor(color);
//   };

//   const onGridChange = (newGridSize) => {
//     setGridSize(newGridSize);
//     setSquares(SquareGenerator(newGridSize.rows, newGridSize.cols));
//   };

//   return (
//     <div>
//       <ImageUpload onImageUpload={setImageSrc} />
//       <GridChangeInput gridSize={gridSize} onGridChange={onGridChange} />
//       <Palette colors={["white", "red", "blue", "green"]} onColorClick={onColorClick} />
//       <Grid squares={squares} onSquareClick={changeColor} />
//     </div>
//   );
// };

// export default Home;
import React, { useState } from "react";
import Grid from "../components/grid/Grid";
import Palette from "../components/palette/Palette";
import GridChangeInput from "../components/grid-change-input/GridChangeInput";
import SquareGenerator from "../components/SquareGenerator";
import ImageUpload from "../components/image-upload/ImageUpload";

const Home = () => {
  const [imageSrc, setImageSrc] = useState("");
  const [gridSize, setGridSize] = useState({ rows: 0, cols: 0 });
  const [squares, setSquares] = useState([]);
  const [selectedColor, setSelectedColor] = useState("white");

  const changeColor = (index) => {
    const newSquares = [...squares];
    newSquares[index].color = selectedColor;
    setSquares(newSquares);
  };

  const onColorClick = (color) => {
    setSelectedColor(color);
  };

  const onGridChange = (rows, cols) => {
    setGridSize({ rows, cols });
    setSquares(SquareGenerator(rows, cols));
  };

  return (
    <div>
      <ImageUpload onImageUpload={setImageSrc} />
      <GridChangeInput gridSize={gridSize} onGridChange={onGridChange} />
      {gridSize.rows > 0 && gridSize.cols > 0 && (
        <>
          <Palette colors={["white", "red", "blue", "green"]} onColorClick={onColorClick} />
          <Grid squares={squares} onSquareClick={changeColor}rows={gridSize.rows} cols={gridSize.cols} />
        </>
      )}
    </div>
  );
};

export default Home;
