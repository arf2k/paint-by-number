const SquareGenerator = (rows, cols) => {
  const generateSquares = () => {
    let squares = [];
    for (let i = 1; i <= rows * cols; i++) {
      squares.push({ color: "white", number: i });
    }
    return squares;
  };

  return generateSquares(rows, cols);
};

export default SquareGenerator;
