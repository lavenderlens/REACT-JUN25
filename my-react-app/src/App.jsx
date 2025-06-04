import "./App.css";
import { Counter } from "./components/Counter";
import { SideEffect } from "./components/SideEffect";
import { TestOnClick } from "./components/TestOnClick";
// import { Grandparent } from "./components/children-prop-drilling/Grandparent";
// import { Grandparent } from "./components/children/Grandparent";
// import { Parent } from "./components/children/Parent";
// import { Child } from "./components/children/Child";
// import { Grandchild } from "./components/children/Grandchild";

function App() {
  return (
    <>
      <SideEffect />
      {/* <Counter /> */}
      {/* <TestOnClick /> */}
      {/* <section>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero,
            optio atque dolor ipsa et molestiae perferendis dolorum distinctio!
            Harum, facilis dolor quod neque commodi earum cupiditate? Minus
            laudantium reprehenderit quaerat.
          </p>
        </div>
      </section> */}
      {/* demo nested custom components using children prop */}
      {/* <Grandparent
        parentprop="prop for Parent"
        childprop="prop for Child"
        grandchildprop="prop for Grandchild"
      /> */}
      {/* <Grandparent>
        <Parent>
          <Child>
            <Grandchild grandchildprop="prop for Grandchild" />
          </Child>
        </Parent>
      </Grandparent> */}
    </>
  );
}

export default App;
