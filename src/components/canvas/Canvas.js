import React, { useRef, useEffect } from "react";

const Canvas = ({ imageSrc }) => {
const canvasRef = useRef(null);

useEffect(() => {
if (!imageSrc) return;

css
Copy code
const canvas = canvasRef.current;
const ctx = canvas.getContext("2d");
const img = new Image();
img.src = imageSrc;
img.onload = () => {
  const aspectRatio = img.width / img.height;
  canvas.width = 500;
  canvas.height = canvas.width / aspectRatio;
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};
}, [imageSrc]);

return (
<canvas ref={canvasRef} />
);
};

export default Canvas;