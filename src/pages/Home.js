// // import React, { useState } from "react";
// // import Grid from "../components/grid/Grid";
// // import Palette from "../components/palette/Palette";
// // import GridChangeInput from "../components/grid-change-input/GridChangeInput";
// // import SquareGenerator from "../components/SquareGenerator";
// // import ImageUpload from "../components/image-upload/ImageUpload";
// // import Canvas from "../components/canvas/Canvas";

// // const Home = () => {
// //   const [imageSrc, setImageSrc] = useState("");
// //   const [gridSize, setGridSize] = useState({ rows: 0, cols: 0 });
// //   const [squares, setSquares] = useState([]);
// //   const [selectedColor, setSelectedColor] = useState("white");

// //   const changeColor = (index) => {
// //     const newSquares = squares.map((square, i) => {
// //       if (i === index) {
// //         return { ...square, color: selectedColor };
// //       }
// //       return square;
// //     });
// //     setSquares(newSquares);
// //   };

// //   const onColorClick = (color) => {
// //     console.log('Selected color:', color)
// //     setSelectedColor(color);
// //   };

// //   const onGridChange = (rows, cols) => {
// //     setGridSize({ rows, cols });
// //     setSquares(SquareGenerator(rows, cols));
// //   };

// //   const onSquareClick = (index) => {
// //     console.log("Clicked square index:", index);
// //     changeColor(index);
// //   };

// //   return (
// //     <div>
// //       <ImageUpload onImageUpload={setImageSrc} />
// //       <GridChangeInput gridSize={gridSize} onGridChange={onGridChange} />
// //       {gridSize.rows > 0 && gridSize.cols > 0 && (
// //         <>
// //           <Palette colors={["white", "red", "blue", "green"]} onColorClick={onColorClick} />
// //          {/* <Grid squares={squares} onSquareClick={onSquareClick} rows={gridSize.rows} cols={gridSize.cols} /> */}
// //         </>
// //       )}
// //       {imageSrc && gridSize.rows > 0 && gridSize.cols > 0 && (
// //         <Canvas imageSrc={imageSrc} rows={gridSize.rows} cols={gridSize.cols} onSquareClick={onSquareClick} selectedColor={selectedColor}/>
// //       )}
// //     </div>
// //   );
// // };

// // export default Home;
// // import React, { useState } from "react";
// // import Grid from "../components/grid/Grid";
// // import Palette from "../components/palette/Palette";
// // import GridChangeInput from "../components/grid-change-input/GridChangeInput";
// // import SquareGenerator from "../components/SquareGenerator";
// // import ImageUpload from "../components/image-upload/ImageUpload";
// // import Canvas from "../components/canvas/Canvas";

// // const Home = ({handleImageUpload}) => {
// //   const [imageSrc, setImageSrc] = useState("");
// //   const [gridSize, setGridSize] = useState({ rows: 0, cols: 0 });
// //   const [squares, setSquares] = useState([]);
// //   const [selectedColor, setSelectedColor] = useState("white");
// //   const [hasImage, setHasImage] = useState(false)

// //   const changeColor = (index) => {
// //     const newSquares = squares.map((square, i) => {
// //       if (i === index) {
// //         return { ...square, color: selectedColor };
// //       }
// //       return square;
// //     });
// //     setSquares(newSquares);
// //   };

// //   const onColorClick = (color) => {
// //     console.log('Selected color:', color)
// //     setSelectedColor(color);
// //   };

// //   const onGridChange = (rows, cols) => {
// //     setGridSize({ rows, cols });
// //     setSquares(SquareGenerator(rows, cols));
// //   };

// //   const onSquareClick = (index) => {
// //     console.log("Clicked square index:", index);
// //     changeColor(index);
// //   };

// //   const onImageUpload = (imageSrc) => {
// //     setImageSrc(imageSrc)
// //     setHasImage(true);
// //   };

// // return (
// //   <div>
// //     {!hasImage && (
// //       <div>
// //         <GridChangeInput gridSize={gridSize} onGridChange={onGridChange} />
// //         <Palette colors={["white", "red", "blue", "green"]} onColorClick={onColorClick} />
// //         <Grid squares={squares} onSquareClick={onSquareClick} rows={gridSize.rows} cols={gridSize.cols} />
// //         <ImageUpload onImageUpload={onImageUpload} />
// //       </div>
// //     )}
// //     {hasImage && (
// //       <div>
// //         {imageSrc && gridSize.rows > 0 && gridSize.cols > 0 && (
// //           <Canvas imageSrc={imageSrc} rows={gridSize.rows} cols={gridSize.cols} onSquareClick={onSquareClick} selectedColor={selectedColor} />
// //         )}
// //         <Palette colors={["white", "red", "blue", "green"]} onColorClick={onColorClick} />
// //       </div>
// //     )}
// //   </div>
// // );
// //         }


// // export default Home;
// import React, { useState } from "react";
// import Grid from "../components/grid/Grid";
// import Palette from "../components/palette/Palette";
// import GridChangeInput from "../components/grid-change-input/GridChangeInput";
// import SquareGenerator from "../components/SquareGenerator";
// import ImageUpload from "../components/image-upload/ImageUpload";
// import Canvas from "../components/canvas/Canvas";

// const Home = () => {
//   const [imageSrc, setImageSrc] = useState("");
//   const [gridSize, setGridSize] = useState({ rows: 0, cols: 0 });
//   const [squares, setSquares] = useState([]);
//   const [selectedColor, setSelectedColor] = useState("white");
//   const [hasImage, setHasImage] = useState(false);

//   const changeColor = (index) => {
//     const newSquares = squares.map((square, i) => {
//       if (i === index) {
//         return { ...square, color: selectedColor };
//       }
//       return square;
//     });
//     setSquares(newSquares);
//   };

//   const onColorClick = (color) => {
//     console.log("Selected color:", color);
//     setSelectedColor(color);
//   };

//   const onGridChange = (rows, cols) => {
//     setGridSize({ rows, cols });
//     setSquares(SquareGenerator(rows, cols));
//   };

//   const onSquareClick = (index) => {
//     console.log("Clicked square index:", index);
//     changeColor(index);
//   };

//   const onImageUpload = (imageSrc) => {
//     setImageSrc(imageSrc);
//     setHasImage(true);
//   };

//   return (
//     <div>
//     <ImageUpload onImageUpload={onImageUpload} />
//     <GridChangeInput gridSize={gridSize} onGridChange={onGridChange} />
//     {gridSize.rows > 0 && gridSize.cols > 0 && (
//       <>
//         <Palette colors={["white", "red", "blue", "green"]} onColorClick={onColorClick} />
//        {/* <Grid squares={squares} onSquareClick={onSquareClick} rows={gridSize.rows} cols={gridSize.cols} /> */}
//       </>
//     )}
//     {imageSrc && gridSize.rows > 0 && gridSize.cols > 0 && (
//       <Canvas imageSrc={imageSrc} rows={gridSize.rows} cols={gridSize.cols} onSquareClick={onSquareClick} selectedColor={selectedColor}/>
//     )}
//   </div>
    
//   );
// };

// export default Home;

import React, { useState } from "react";
import Grid from "../components/grid/Grid";
import Palette from "../components/palette/Palette";
import GridChangeInput from "../components/grid-change-input/GridChangeInput";
import SquareGenerator from "../components/SquareGenerator";
import ImageUpload from "../components/image-upload/ImageUpload";
import Canvas from "../components/canvas/Canvas";
import { StyledCanvasFrame, StyledCanvasWrapper } from "../components/canvas/CanvasStyles";

// // // const Home = () => {
// // //   const [imageSrc, setImageSrc] = useState("");
// // //   const [gridSize, setGridSize] = useState({ rows: 6, cols: 6 });
// // //   const [squares, setSquares] = useState([]);
// // //   const [selectedColor, setSelectedColor] = useState("white");

// // // //   const changeColor = (index) => {
// // // //     const newSquares = squares.map((square, i) => {
// // // //       console.log(newSquares)
// // // //       if (i === index) {
// // // //         return { ...square, color: selectedColor };
// // // //       }
// // // //       return square;
// // // //     });
// // // //     setSquares(newSquares);
// // // //  console.log(selectedColor)

// // // //   };

// // // const changeColor = (index) => {
// // //   setSquares((prevSquares) => {
// // //     return prevSquares.map((square, i) => {
// // //       if (i === index) {
// // //         return { ...square, color: selectedColor };
// // //       }
// // //       return square;
// // //     });
// // //   });
// // // };


// // //   const onColorClick = (color) => {
// // //     setSelectedColor(color);
// // //   };

// // //   const onGridChange = (rows, cols) => {
// // //     setGridSize({ rows, cols });
// // //     setSquares(SquareGenerator(rows, cols));
// // //   };

// // //   // const onSquareClick = (index) => {
// // //   //   console.log("Clicked square index:", index);
// // //   //   changeColor(index);
// // //   // };

// // //   const onSquareClick = (index) => {
// // //     setSquares((prevSquares) => {
// // //       return prevSquares.map((square, i) => {
// // //         if (i === index) {
// // //           return { ...square, color: selectedColor };
// // //         }
// // //         return square;
// // //       });
// // //     });
// // //   };
  

// // //   const onImageUpload = (imageSrc) => {
// // //     console.log('Image uploaded:', imageSrc);
// // //     setImageSrc(imageSrc);
// // //   };

// // //   // return (
// // //   //   <div>
// // //   //     <ImageUpload onImageUpload={onImageUpload} />
// // //   //     <GridChangeInput gridSize={gridSize} onGridChange={onGridChange} />
// // //   //     {gridSize.rows > 0 && gridSize.cols > 0 && (
// // //   //       <>
// // //   //         <Palette colors={["white", "red", "blue", "green"]} onColorClick={onColorClick} />
// // //   //        {/* <Grid squares={squares} onSquareClick={onSquareClick} rows={gridSize.rows} cols={gridSize.cols} /> */}
// // //   //       </>
// // //   //     )}
// // //   //     {imageSrc && gridSize.rows > 0 && gridSize.cols > 0 && (
// // //   //       <Canvas imageSrc={imageSrc} rows={gridSize.rows} cols={gridSize.cols} onSquareClick={onSquareClick} selectedColor={selectedColor}/>
// // //   //     )}
// // //   //   </div>
// // //   // );
// // //   return (
// // //     <div>
// // //       <ImageUpload onImageUpload={onImageUpload} />
// // //         <GridChangeInput gridSize={gridSize} onGridChange={onGridChange} />
// // //         <Palette colors={["white", "red", "blue", "green", "black", "purple", "orange", "pink"]} onColorClick={onColorClick}/>
// // //       {imageSrc && gridSize.rows > 0 && gridSize.cols > 0 && (
    
// // //         <Canvas
// // //           imageSrc={imageSrc}
// // //           rows={gridSize.rows}
// // //           cols={gridSize.cols}
// // //           onSquareClick={onSquareClick}
// // //           selectedColor={selectedColor}
// // //           changeColor={changeColor}
// // //         />
    
// // //       )}
// // //     </div>
// // //   );
  
// // // };

// // // export default Home;



// const Home = () => {
//   const [imageSrc, setImageSrc] = useState("");
//   const [gridSize, setGridSize] = useState({ rows: 6, cols: 6 });
//   const [squares, setSquares] = useState([]);
//   const [selectedColor, setSelectedColor] = useState("white");

//   const onColorClick = (color) => {
//     setSelectedColor(color);
//   };

//   const onGridChange = (rows, cols) => {
//     setGridSize({ rows, cols });
//     setSquares(SquareGenerator(rows, cols));
//   };

//   const onSquareClick = (index) => {
//     setSquares((prevSquares) => {
//       return prevSquares.map((square, i) => {
//         if (i === index) {
//           return { ...square, color: selectedColor };
//         }
//         return square;
//       });
//     });
//   };

//   const onImageUpload = (imageSrc) => {
//     console.log('Image uploaded:', imageSrc);
//     setImageSrc(imageSrc);
//   };

//   return (
//     <div>
//       <ImageUpload onImageUpload={onImageUpload} />
//       <GridChangeInput gridSize={gridSize} onGridChange={onGridChange} />
//       <Palette colors={["white", "red", "blue", "green"]} onColorClick={onColorClick} />
//       {imageSrc && gridSize.rows > 0 && gridSize.cols > 0 && (
//         <Canvas
//           imageSrc={imageSrc}
//           rows={gridSize.rows}
//           cols={gridSize.cols}
//           onSquareClick={onSquareClick}
//           selectedColor={selectedColor}
//           squares={squares}
//         />
//       )}
//     </div>
//   );
// };

// export default Home;

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
