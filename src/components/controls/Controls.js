const Controls = ({ onUndo, onRedo, onClear }) => (
     <div>
       <button onClick={onUndo}>Undo</button>
       <button onClick={onRedo}>Redo</button>
       <button onClick={onClear}>Clear</button>
     </div>
   );

   export default Controls