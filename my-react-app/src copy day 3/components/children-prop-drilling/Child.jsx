// export function Child() {
// props MUST be passed through unconcerned components
// in order for end-of-line components to read them
// called "prop drilling"
import { Grandchild } from "./Grandchild";
export function Child(props) {
  return (
    <>
      <h4>I am the Child</h4>
      <p>{props.childprop}</p>
      <Grandchild grandchildprop={props.grandchildprop} />
      {console.log("CH props", props)}
    </>
  );
}
