// import React, { useState, useRef, useEffect } from "react";

// const ImageUpload = ({ onImageUpload }) => {
// const [imageSrc, setImageSrc] = useState("");
// const canvasRef = useRef(null);

// const handleImageUpload = (e) => {
// const reader = new FileReader();
// reader.onload = (event) => {
// setImageSrc(event.target.result);
// onImageUpload(event.target.result);
// };
// reader.readAsDataURL(e.target.files[0]);
// };

// useEffect(() => {
// if (!imageSrc) return;


// const canvas = canvasRef.current;
// const ctx = canvas.getContext("2d");
// const img = new Image();
// img.src = imageSrc;
// img.onload = () => {
//   const aspectRatio = img.width / img.height;
//   canvas.width = 500;
//   canvas.height = canvas.width / aspectRatio;
//   ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
// };
// }, [imageSrc]);

// return (
// <div>
// <input type="file" onChange={handleImageUpload} />
// <canvas ref={canvasRef} />
// </div>
// );
// };

// export default ImageUpload;

import React, { useState } from "react";
import Canvas from "../canvas/Canvas";

const ImageUpload = ({ onImageUpload }) => {
const [imageSrc, setImageSrc] = useState("");

const handleImageUpload = (e) => {
const reader = new FileReader();
reader.onload = (event) => {
setImageSrc(event.target.result);
onImageUpload(event.target.result);
};
reader.readAsDataURL(e.target.files[0]);
};

return (
<div>
<input type="file" onChange={handleImageUpload} />
{imageSrc && <Canvas imageSrc={imageSrc} />}
</div>
);
};

export default ImageUpload;






