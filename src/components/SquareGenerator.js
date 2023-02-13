const SquareGenerator = () => {
     const generateSquares = (n) => {
       let squares = [];
       for (let i = 1; i <= n; i++) {
         squares.push({ color: 'white', number: i });
       }
       return squares;
     };
   
     return generateSquares(36);
   };

   export default SquareGenerator