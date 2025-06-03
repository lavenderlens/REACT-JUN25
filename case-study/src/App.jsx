import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      image: "assortment-in-heart-shaped-box.jpg",
      description: "Chocolate cream assortment",
      price: 19.99,
    },
    {
      id: 2,
      image: "chocolate-brownie.jpg",
      description: "Chocolate brownie",
      price: 3.99,
    },
    {
      id: 3,
      image: "chocolate-candies.jpg",
      description: "Chocolate candy assortment",
      price: 9.99,
    },
    {
      id: 4,
      image: "dark-chocolate-pieces.jpg",
      description: "Dark chocolate pieces",
      price: 6.99,
    },
  ];
  return (
    <>
      <h1 className="text-4xl">Chocolate Box</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi neque
        ab tempore reprehenderit ut suscipit laborum dolores labore, molestiae
        iste, corporis, eum magni assumenda autem fugit quibusdam. Aliquam, sit
        vitae.
      </p>
      {products.map((product) => (
        <>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </>
      ))}
    </>
  );
}

export default App;
