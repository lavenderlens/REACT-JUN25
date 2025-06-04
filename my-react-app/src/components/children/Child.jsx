export function Child(props) {
  return (
    <>
      <h2>I am the Child</h2>
      {props.children}
    </>
  );
}
