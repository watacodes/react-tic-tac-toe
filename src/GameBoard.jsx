import Grid from "./Grid.jsx";

function GameBoard({ onHandle, xSelected, ySelected }) {
  return (
    <main className="game-board">
      <div className="row">
        <Grid
          onHandle={onHandle}
          value={0}
          xSelected={xSelected}
          ySelected={ySelected}
        />
        <Grid
          onHandle={onHandle}
          value={1}
          xSelected={xSelected}
          ySelected={ySelected}
        />
        <Grid
          onHandle={onHandle}
          value={2}
          xSelected={xSelected}
          ySelected={ySelected}
        />
      </div>
      <div className="row">
        <Grid
          onHandle={onHandle}
          value={3}
          xSelected={xSelected}
          ySelected={ySelected}
        />
        <Grid
          onHandle={onHandle}
          value={4}
          xSelected={xSelected}
          ySelected={ySelected}
        />
        <Grid
          onHandle={onHandle}
          value={5}
          xSelected={xSelected}
          ySelected={ySelected}
        />
      </div>
      <div className="row">
        <Grid
          onHandle={onHandle}
          value={6}
          xSelected={xSelected}
          ySelected={ySelected}
        />
        <Grid
          onHandle={onHandle}
          value={7}
          xSelected={xSelected}
          ySelected={ySelected}
        />
        <Grid
          onHandle={onHandle}
          value={8}
          xSelected={xSelected}
          ySelected={ySelected}
        />
      </div>
    </main>
  );
}

export default GameBoard;
