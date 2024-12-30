export default function Result({ result }) {
  return (
    <>
      {result === "draw" ? <h1>It was {result}!</h1> : <h1>{result} won!</h1>}
    </>
  );
}
