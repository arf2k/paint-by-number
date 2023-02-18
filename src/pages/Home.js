import React, {useState} from "react"
import ImageUpload from "../components/image-upload/ImageUpload"
import SquareGenerator from "../components/SquareGenerator"
import GridChangeInput from "../components/grid-change-input/GridChangeInput";
import Palette from "../components/palette/Palette";
import Canvas from "../components/canvas/Canvas";

const Home = () => {
  const [imageSrc, setImageSrc] = useState("");
  const [gridSize, setGridSize] = useState({ rows: 6, cols: 6 });
  const [squares, setSquares] = useState([]);
  const [selectedColor, setSelectedColor] = useState("white");

  const onColorClick = (color) => {
    setSelectedColor(color);
  };

  const onGridChange = (rows, cols) => {
    setGridSize({ rows, cols });
    setSquares(SquareGenerator(rows, cols));
  };

  const onSquareClick = (index) => {
    setSquares((prevSquares) => {
      return prevSquares.map((square, i) => {
        if (i === index) {
          return { ...square, color: selectedColor };
        }
        return square;
      });
    });
  };

  const onImageUpload = (imageSrc) => {
    console.log('Image uploaded:', imageSrc);
    setImageSrc(imageSrc);
    setSquares(SquareGenerator(gridSize.rows, gridSize.cols));
  };

  return (
    <div>
      <ImageUpload onImageUpload={onImageUpload} />
      <GridChangeInput gridSize={gridSize} onGridChange={onGridChange} />
      <Palette colors={["white", "red", "blue", "green"]} onColorClick={onColorClick} />
      {imageSrc && gridSize.rows > 0 && gridSize.cols > 0 && (
        <Canvas
          imageSrc={imageSrc}
          rows={gridSize.rows}
          cols={gridSize.cols}
          onSquareClick={onSquareClick}
          selectedColor={selectedColor}
          squares={squares}
        />
      )}
    </div>
  );
};

export default Home;
