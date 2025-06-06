import { Parent } from "./Parent";

export function Grandparent(props) {
  return (
    <>
      <h2>I am the Grandparent</h2>
      <Parent
        parentprop={props.parentprop}
        childprop={props.childprop}
        grandchildprop={props.grandchildprop}
        // same here, prop for end of line component
        // must be explicitly passed
      />
      {console.log("GP props", props)}
    </>
  );
}
