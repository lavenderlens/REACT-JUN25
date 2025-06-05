/**
 *
 * in normal HTML forms,
 * - information is sent using a server-side script
 * - typically written in PHP
 * - or using mailto: links
 * when the form is sent, the web page reloads.
 * This is an anti-pattern in React!
 * React forms are, essentially, handled completely within React.
 * and do not require info to be sent over the network
 * but simply sent to another place in react
 * exceptions to this:
 * - pushing to databases using CRUD operations
 * but even then, the database logic should happen
 * in a different component to the form
 * easier to develop and test, maintain
 * this is exactly what we will do in our case study:
 * define a form component
 * thats ends data to a parent
 * which sends it via POST to a remote API
 * the react form itself only sends the data to the parent
 *
 * so in order to manage forms in React:
 * they should be TWO-WAY BOUND
 * info going IN needs to be passed to React components
 * info coming OUT needs to be rendered by the form component concerned
 * so info IN needs to be declared as form component state
 * info OUT needs to be copied from that state
 * changes to the form control (HTML5 input type text, number, date, color etc) should
 * BOTH change state AND re-render the updated state
 * any state changes occurring in the DOM AFTER react has rendered, react does not know about
 *
 * main types of form control in React
 * element <input> does not need a type value - type="text" is the default
 * ypu can give fields an ID for CSS purposes only
 * you need a value field for two way binding
 * values displayed in the input field need to come OUT of component state
 * you need an event handler that fires after every keystroke
 * as every keystroke is an update to state
 * we use onChange for this
 *
 * a button within form tags is default type="submit"
 * the HTML5 submit behaviour reloads the page (the anti-pattern in react)
 * we can fix this in two ways:
 * call preventDefault() in the handler
 * or change type attribute of button (preferred by me)
 *
 * suppose we have two fields one for username and one for password:
 */
import "./LoginForm.css";
import { useState } from "react";
export function LoginForm({ onLogin }) {
  // form logic hooks and functions here
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit() {
    // e.preventDefault();
    // don't need this if button type="button"
    // console.log({ username, password });
    onLogin({ username, password });
    reset();
  }
  function reset() {
    setUsername("");
    setPassword("");
  }
  return (
    <>
      <h2>Login Form</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          //   onChange={(e) => setUsername(e.target.value + "**")}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          id="username"
          autoFocus
        />
        {/* {console.log(username)} TESTING*/}
        <label htmlFor="password">Password:</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          id="password"
          autoFocus
        />
        <button id="submit" onClick={handleSubmit} type="button">
          Submit
        </button>
        <button id="reset" onClick={reset} type="button">
          reset
        </button>
        {/* button type submit (default) or input type submit reload page */}
        {/* <input type="submit" /> */}
      </form>
    </>
  );
}
