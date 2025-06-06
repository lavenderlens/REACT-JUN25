export function Grandchild(props) {
  return (
    <>
      <h5>I am the Grandchild</h5>
      <p>{props.grandchildprop}</p>
      {console.log("GC props", props)}
    </>
  );
}
