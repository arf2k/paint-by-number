import React, { useRef, useEffect } from "react";



const Canvas = ({ imageSrc, rows, cols }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!imageSrc || !rows || !cols) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      canvas.width = 500;
      canvas.height = canvas.width / (img.width / img.height);

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const squareWidth = canvas.width / cols;
      const squareHeight = canvas.height / rows;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          ctx.strokeRect(
            col * squareWidth,
            row * squareHeight,
            squareWidth,
            squareHeight
          );
        }
      }
    };
  }, [imageSrc, rows, cols]);

  return <canvas ref={canvasRef} />;
};

export default Canvas;
