import "./App.css";
import { LoginForm } from "./components/LoginForm";
import { useState } from "react";
import { LoginWelcome } from "./components/LoginWelcome";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { Counter } from "./components/Counter";
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
      <BrowserRouter>
        <h1>Welcome</h1>
        <nav>
          <Link className="nav-link" to="/">
            <li className="nav-li">Home</li>
          </Link>
        </nav>
        <nav>
          <Link className="nav-link" to="/form">
            <li className="nav-li">Form</li>
          </Link>
        </nav>
        <nav>
          <Link className="nav-link" to="/counter">
            <li className="nav-li">Counter</li>
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<LoginForm />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
