import { Child } from "./Child";

export function Parent(props) {
  return (
    <>
      <h2>I am the Parent</h2>
      <p>{props.parentprop}</p>
      <Child childprop={props.childprop} />
      {/* {props.children} */}
      {/* {console.log(props.children)} */}
    </>
  );
}
