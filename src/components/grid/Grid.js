import Square from '../square/Square'

const Grid = ({ squares, onSquareClick }) => (
     <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gridGap: '5px' }}>
       {squares.map((square, index) => (
         <Square
           key={index}
           color={square.color}
           number={square.number}
           onClick={() => onSquareClick(index)}
         />
       ))}
     </div>
   );

   export default Grid
