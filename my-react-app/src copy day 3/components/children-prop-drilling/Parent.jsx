import { Child } from "./Child";

export function Parent(props) {
  return (
    <>
      <h3>I am the Parent</h3>
      <p>{props.parentprop}</p>
      <Child
        childprop={props.childprop}
        // comment out this line and prop disappears in render:
        grandchildprop={props.grandchildprop}
        // by prop drilling we mean that
        // UNconcerned components MUST explicitly pass props
        // taht end of line components wish to receive
      />
      {console.log("PR props", props)}
    </>
  );
}
