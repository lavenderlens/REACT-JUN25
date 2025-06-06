import { useState } from "react";
import "./Counter.css";

export function Counter() {
  //define hooks in the function body
  //reference values in the JSX
  const [counter, setCounter] = useState(0);
  // rules of Hooks:
  // they must be declared at the top level of the function only - HERE
  // ie not in the JSX returned
  // NOT inside blocks (inc. loops, conditionals etc)
  // used in the same order they are declared
  // custom hooks should be named starting with "use" - for linting, error handling
  // with const keyword - cannot be reassigned
  function incrementCounter() {
    //   most devs new to React would attempt something like this:
    // counter = counter + 1;
    // console.log(counter);//TypeError: Assignment to constant variable.
    // we cannot set the state directly
    // we should always use the setter function
    // returned as the second element in the array
    setCounter(counter + 1);
    console.log(counter); // value here is stale value one step behind
    // whenever we change the value INTO state
    // we reference the new value out of state
    // helps to think of setCounter as an asychronous function
  }
  // mini-exercise:
  // implement a decrement counter and button and declare a click handler function for it
  // implement a reset counter function and button INLINE (no separate handler function)
  function decrementCounter() {
    setCounter(counter - 1);
  }
  return (
    <>
      <h2>Counter</h2>
      <button onClick={incrementCounter}>Increment counter</button>
      <button onClick={decrementCounter}>Decrement counter</button>
      <button onClick={() => setCounter(0)}>Reset counter</button>
      <p>{counter}</p>
    </>
  );
}
