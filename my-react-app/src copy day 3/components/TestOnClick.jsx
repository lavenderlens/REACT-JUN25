export function TestOnClick() {
  return (
    <>
      <button onClick={(e) => console.log("I was clicked", e)}>Click Me</button>
    </>
  );
}
