const Turn = ({ currentPlayer }) => {
  return (
    <div className="turn">
      Turn: <hr />
      {currentPlayer === "X" ? <p>Player 1</p> : <p>Player 2</p>}
    </div>
  );
};
export default Turn;
