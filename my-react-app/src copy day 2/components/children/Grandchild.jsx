export function Grandchild(props) {
  return (
    <>
      <h2>I am the Grandchild</h2>
      {props.children}
      <p>{props.grandchildprop}</p>
    </>
  );
}
