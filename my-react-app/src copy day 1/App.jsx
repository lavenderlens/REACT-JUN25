import "./App.css";
import { Parent } from "./components/children/Parent";
import { Child } from "./components/children/Child";
import { Header1, Header2 } from "./components/Headers";
import { Paragraph } from "./components/Paragraph";
import { Grandchild } from "./components/children/Grandchild";
import { Grandparent } from "./components/children/Grandparent";

function App() {
  var isLoggedIn = false;
  // var user = <p>My Dashboard</p>;
  // var guest = (
  //   <>
  //     <p>Welcome</p>
  //     <button>Login</button>
  //   </>
  // );
  // var result;
  // if (isLoggedIn) {
  //   result = user;
  // } else {
  //   result = guest;
  // }
  const data = [
    { name: "Alan", trainer: "true", delegate: "false" },
    { name: "Miranda", trainer: "false", delegate: "true" },
  ];
  return (
    <>
      <section>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero,
            optio atque dolor ipsa et molestiae perferendis dolorum distinctio!
            Harum, facilis dolor quod neque commodi earum cupiditate? Minus
            laudantium reprehenderit quaerat.
          </p>
        </div>
      </section>
      {/* demo nested custom components using children prop */}
      {/* <Parent>
        <Child childprop="I am a prop of Child">
          <Grandchild grandchildprop="I am a prop of Grandchild" />
        </Child>
      </Parent> */}
      <Grandparent
        parentprop="prop for Parent"
        childprop="prop for Child"
        grandchildprop="prop for Grandchild"
      />
      {/* <h1>My React App</h1> */}
      {/* <Header1 message="My React App" /> */}
      {/* <Header2 message="Created using Vite" /> */}
      {/* <h2>Created using Vite</h2> */}
      {/* <p>lorem ipsum fancy text</p> */}
      {/* if(false) */}
      {/* <Paragraph message="lorem ipsum fancy text" /> */}
      {/* {result} */}
      {/* conditionally render result directly in JSX */}
      {/* way 1: nothing, or something */}
      {/* {isLoggedIn && user} */}
      {/* way 2: something or something else */}
      {/* way 2: ? condition if true: condition if false */}
      {/* {isLoggedIn ? user : guest} */}
      {/* we can also define JSX elements directly in the render */}
      {/* React does not display boolean values in the render either */}
      {/* {isLoggedIn ? (
        <p>My Dashboard</p>
      ) : (
        <>
          <p>Welcome</p>
          <button>Login</button>
        </>
      )} */}
      {/* {data.map((el) => (
        // <h2>{el.name}</h2>
        <>
          <Header2 message={el.name} />
          <Paragraph message={`Is delegate? ${el.delegate}`} />
          <Paragraph message={`Is trainer? ${el.trainer}`} />
        </>
      ))} */}
    </>
  );
}

export default App;
/**
 * we may not use conditionals or loops in the render of a component
 * we may use them in the body
 * we resort to short circuit or ternary operators for conditional rendering
 * and Array.map() and Array.filter() for iterative rendering
 */
