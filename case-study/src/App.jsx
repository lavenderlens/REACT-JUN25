import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { NewProductForm } from "./components/NewProductForm";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [remoteData, setRemoteData] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/c/c033-e057-4013-b1e7")
      .then((response) => setRemoteData(response.data.products));
  }, []);
  useEffect(() => {
    console.log(remoteData);
  }, [remoteData]);

  function handleAddNewProduct(newProduct) {
    axios
      .post("https://dummyjson.com/c/9bdc-c1c3-41fa-97fa", newProduct)
      .then(setRemoteData([newProduct, ...remoteData]))
      .catch(() => console.log("something went wrong"));
  }
  return (
    <>
      <Header />
      <BrowserRouter>
        <nav>
          <Link to="/" className="nav-link">
            <li className="nav-li">Home</li>
          </Link>
          <Link to="/add" className="nav-link">
            <li className="nav-li">Add</li>
          </Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                remoteData={remoteData}
                basket={basket}
                setBasket={setBasket}
              />
            }
          />
          <Route
            path="/add"
            element={<NewProductForm onAddNewProduct={handleAddNewProduct} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
