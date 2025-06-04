// export function Child() {
// props MUST be passed through unconcerned components
// in order for end-of-line components to read them
// called "prop drilling"
export function Child(props) {
  return (
    <>
      <h2>I am the Child</h2>
      <p>{props.childprop}</p>
      {/* {props.children} */}
      {/* {props.childprop} */}
    </>
  );
}
