export function Grandparent(props) {
  return (
    <>
      <h2>I am the Grandparent</h2>
      {props.children}
    </>
  );
}
