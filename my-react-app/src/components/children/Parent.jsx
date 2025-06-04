export function Parent(props) {
  return (
    <>
      <h2>I am the Parent</h2>
      {props.children}
    </>
  );
}
