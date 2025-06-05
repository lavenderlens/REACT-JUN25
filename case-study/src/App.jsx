import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { NewProductForm } from "./components/NewProductForm";
function App() {
  const [remoteData, setRemoteData] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/c/c033-e057-4013-b1e7")
      .then((response) => setRemoteData(response.data.products)); //logs our data
  }, []); //fetches ONCE, when component loads
  useEffect(() => {
    console.log(remoteData);
  }, [remoteData]);

  // post request does NOT have to be wrapped in a useEffect
  // it is not a side effect, but is throroughly predictable
  // you might get a failure message from the API
  // in which case you can handle it in a catch block
  // within your async chain
  function handleAddNewProduct(newProduct) {
    axios
      .post("https://dummyjson.com/c/9bdc-c1c3-41fa-97fa")
      .then(setRemoteData([newProduct, ...remoteData]))
      .catch(() => console.log("something went wrong"));
  }
  const sectionStyles =
    "max-w-xs place-items-center border border-black rounded-lg p-6 my-4 w-80";
  const buttonStyles = "p-2 font-bold mt-4";
  const priceStyles = "font-bold text-2xl";
  const descriptionStyles = "my-4";
  return (
    <>
      <h1 className="text-4xl">Chocolate Box</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi neque
        ab tempore reprehenderit ut suscipit laborum dolores labore, molestiae
        iste, corporis, eum magni assumenda autem fugit quibusdam. Aliquam, sit
        vitae.
      </p>
      <main>
        <NewProductForm onAddNewProduct={handleAddNewProduct} />
      </main>
      <main>
        {remoteData.map((product) => (
          <section key={product.id} className={sectionStyles}>
            <img
              src={`products/${product.image}`}
              alt={`Studio picture of ${product.description}`}
            />
            <p className={descriptionStyles}>{product.description}</p>
            <p className={priceStyles}>{`€${product.price}`}</p>
            <button className={buttonStyles}>Add to basket</button>
          </section>
        ))}
      </main>
    </>
  );
}

export default App;
