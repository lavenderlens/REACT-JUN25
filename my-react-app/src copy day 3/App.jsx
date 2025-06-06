import "./App.css";
import { LoginForm } from "./components/LoginForm";
import { useState } from "react";
import { LoginWelcome } from "./components/LoginWelcome";
function App() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  function handleLogin(newCredentials) {
    setCredentials(newCredentials);
  }
  return (
    <>
      <LoginForm onLogin={handleLogin} />
      {console.log(credentials)}
      <LoginWelcome userinfo={credentials} />
      {/* information is now shared between THREE components */}
      {/* it originates in the form as form state */}
      {/* a function is passed down as props from the parent */}
      {/* form state is passed up via the function into the parent */}
      {/* and then is passed down as props into a different component */}
    </>
  );
}

export default App;
