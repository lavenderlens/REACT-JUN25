import { useState, useEffect } from "react";

export function SideEffect() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []); // ⬅️ dependency array
  //controls how many times and when the side effect is fired
  //empty: ONCE, on component mount
  //with state in it, every time that state updates
  //no array: on every render

  // calling setInterval is a side-effect
  // why?
  // it will happen AFTER React has rendered or re-rendered the DOM
  // setInterval ALSO re-renders the DOM
  // but React has no knowledge of this

  /**
   * although it may be possible to render side effects in the body of a react component
   * we should not
   * rather, ANY side effect should be wrapped in a useEffect call
   * for instance
   * setting intervals and timeouts
   * fetching data from a remote API
   * reading/writing from/to localStorage
   * logging to the console (in production anyway)
   * in fact, EVERYTHING should ideally be wrapped in a useEffect
   * APART FROM:
   * - calling Hooks
   * - declaring functions
   */
  useEffect(() => {
    document.title = `${likes} LIKES`;
  }, [likes]); //changes on every state change to likes
  return (
    <>
      <h2>Side Effect</h2>
      <p>{time}</p>
      <button onClick={() => setLikes(likes + 1)}>Like</button>
    </>
  );
}
