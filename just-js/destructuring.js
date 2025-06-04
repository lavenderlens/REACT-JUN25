// object destructuring

//ES5 or older
const props = { name: "Alan", age: 58, tax: true };

var name = props.name;
var age = props.age;
var tax = props.tax;

//ES6 + (ECMAScript 2015 or newer)
var { name, age, tax } = props;
// when we pass props into a React function component
// we may be only interested in one

var { name } = props;

//OR, as a function parameter

function myComponent({ name }) {
  return <>{name}</>;
}

// replaces
function myComponent(props) {
  return <>{props.name}</>;
}

// array destructuring
const names = ["Alan", "Miranda", "Bob", "Michelle"];

//Es5

var alan = names[0];
var miranda = names[1];

//ES6
var [alan, miranda, [...rest]] = names;

//in React we use array destructuring for the useState hook
const stateArray = [
  { name: "Alan" },
  function (newname) {
    return (stateArray[0].name = newname);
  },
];

var [state, setState] = stateArray;
