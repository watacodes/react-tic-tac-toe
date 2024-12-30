export default function Grid({ value, onHandle, xSelected, ySelected }) {
  return (
    <>
      <button className="grid" onClick={() => onHandle(value)}>
        {xSelected.includes(value) && "X"}
        {ySelected.includes(value) && "Y"}
      </button>
    </>
  );
}
