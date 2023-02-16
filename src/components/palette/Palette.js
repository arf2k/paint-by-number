// const Palette = ({ colors, onColorClick }) => (
//      <div>
//        {colors.map((color, index) => (
//          <div
//            key={index}
//            style={{ backgroundColor: color, width: 50, height: 50 }}
//            onClick={() => onColorClick(color)}
//          />
//        ))}
//      </div>
//    );

//    export default Palette

const Palette = ({ colors, onColorClick }) => {
  return (
    <div style={{ display: "flex" }}>
      {colors.map((color) => (
        <div
          key={color}
          style={{
            backgroundColor: color,
            width: "30px",
            height: "30px",
            marginRight: "5px",
          }}
          onClick={() => onColorClick(color)}
        />
      ))}
    </div>
  );
};
export default Palette