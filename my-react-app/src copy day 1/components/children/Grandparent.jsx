import { Parent } from "./Parent";

export function Grandparent(props) {
  return (
    <>
      <h2>I am the Grandparent</h2>
      <Parent parentprop={props.parentprop} childprop={props.childprop} />
    </>
  );
}
