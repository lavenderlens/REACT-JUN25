import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [remoteData, setRemoteData] = useState([]);
  // const products = [
  //   {
  //     id: 1,
  //     image: "assortment-in-heart-shaped-box.jpg",
  //     description: "Chocolate cream assortment",
  //     price: 19.99,
  //   },
  //   {
  //     id: 2,
  //     image: "chocolate-brownie.jpg",
  //     description: "Chocolate brownie",
  //     price: 3.99,
  //   },
  //   {
  //     id: 3,
  //     image: "chocolate-candies.jpg",
  //     description: "Chocolate candy assortment",
  //     price: 9.99,
  //   },
  //   {
  //     id: 4,
  //     image: "dark-chocolate-pieces.jpg",
  //     description: "Dark chocolate pieces",
  //     price: 6.99,
  //   },
  // ];
  // fetch("https://dummyjson.com/c/c033-e057-4013-b1e7").then((response) =>
  //   console.log(response)
  // );//logs whole response object - very ahrd to drill down for data
  // fetch("https://dummyjson.com/c/c033-e057-4013-b1e7").then((response) =>
  //   console.log(response.json())
  // );//logs a promise object
  // fetch("https://dummyjson.com/c/c033-e057-4013-b1e7")
  //   .then((response) => response.json())
  //   .then((response) => console.log(response)); //logs our data
  //using axios
  // axios
  //   .get("https://dummyjson.com/c/c033-e057-4013-b1e7")
  //   .then((response) => console.log(response.data.products)); //logs our data

  // fetching data from a remote API is a side effect - happens after react
  // so we should wrap the axios call in a useEffect
  // useEffect(() => {
  //   axios
  //     .get("https://dummyjson.com/c/c033-e057-4013-b1e7")
  //     .then((response) => console.log(response.data.products)); //logs our data
  // }, []); //fetches ONCE, when component loads

  // how to get data into the elements?
  // a lot of new React devs try this:
  // let data;
  // useEffect(() => {
  //   axios
  //     .get("https://dummyjson.com/c/c033-e057-4013-b1e7")
  //     .then((response) => (data = response.data.products)); //logs our data
  // }, []); //fetches ONCE, when component loads
  // console.log(data); //undefined
  //ALL synchronous code will get executed before ANY async (ie, the axios call)

  //INSTEAD declare state to hold the data
  //pass state setter function into aynsc chain
  //useState setter is ALSO async
  //both the axios call and the setter will be placed on the event loop
  //both will be excuted in order
  //then the rsult will be held in state for the component to use
  // OR pass down as props into other components
  useEffect(() => {
    axios
      .get("https://dummyjson.com/c/c033-e057-4013-b1e7")
      .then((response) => setRemoteData(response.data.products)); //logs our data
  }, []); //fetches ONCE, when component loads
  useEffect(() => {
    console.log(remoteData);
  }, [remoteData]);
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
