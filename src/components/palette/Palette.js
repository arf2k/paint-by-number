const Palette = ({ colors, onColorClick }) => (
     <div>
       {colors.map((color, index) => (
         <div
           key={index}
           style={{ backgroundColor: color, width: 50, height: 50 }}
           onClick={() => onColorClick(color)}
         />
       ))}
     </div>
   );

   export default Palette