import { useState, useEffect } from "react";
import { Basket } from "./Basket";
export function Home({ remoteData, basket, setBasket }) {
  // const [basket, setBasket] = useState([]);
  // lift basket state UP to App
  // this prevents basket resetting on Home component unmount/mount
  const [basketTotal, setBasketTotal] = useState(0);
  const [showBasket, setShowBasket] = useState(false);
  useEffect(() => {
    let total = 0;
    basket.map((product) => (total += product.price));
    setBasketTotal(total);
  }, [basket]);
  const sectionStyles =
    "max-w-xs place-items-center border border-black rounded-lg p-6 my-4 w-80";
  const buttonStyles = "p-2 font-bold mt-4";
  const priceStyles = "font-bold text-2xl";
  const descriptionStyles = "my-4";

  return (
    <>
      <main>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>
          Eligendi neque ab tempore reprehenderit ut suscipit laborum dolores
          labore, molestiae iste
        </p>{" "}
        <p>
          corporis, eum magni assumenda autem fugit quibusdam. Aliquam, sit
          vitae.
        </p>
        {basket.length > 0 && (
          <div>
            <p className="basket-total">
              Basket total: €{basketTotal.toFixed(2)}
            </p>
            {/* <span onClick={() => console.log("view basket clicked")}> */}
            <span onClick={() => setShowBasket(!showBasket)}>
              &nbsp;&nbsp;&nbsp;&nbsp;🛒View basket
            </span>
          </div>
        )}
        {/* conditionally render the basket */}
        {showBasket && <Basket products={basket} />}
        {remoteData.map((product) => (
          <section key={product.id} className={sectionStyles}>
            <img
              src={`products/${product.image}`}
              alt={`Studio picture of ${product.description}`}
            />
            <p className={descriptionStyles}>{product.description}</p>
            <p className={priceStyles}>{`€${product.price}`}</p>
            <button
              onClick={() =>
                // console.log(product.description + "added to basket")
                setBasket([product, ...basket])
              }
              className={buttonStyles}
            >
              Add to basket
            </button>
          </section>
        ))}
      </main>
    </>
  );
}
