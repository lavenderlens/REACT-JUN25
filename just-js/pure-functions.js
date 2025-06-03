var myGlobal = 1;

function incrementGlobal() {
  return (myGlobal += 1);
}

console.log(incrementGlobal());
console.log(incrementGlobal());
console.log(incrementGlobal());
console.log(myGlobal); //4
// to call incrementGlobal again we now expect the value 5
myGlobal = 99;
console.log(incrementGlobal()); //100: nota pure function
// has a dependency on myGlobal

function incrementPure(num) {
  return (num += 1);
}
console.log(incrementPure(myGlobal)); //always 101
console.log(incrementPure(myGlobal));
console.log(incrementPure(myGlobal));
// if we change myGlobal at this point
// we ALSO get a change in result from incrementPure()
// BUT, the input to it has changed
// therefore, for any GIEVN INPUT
// we receive the same output:
// incrementPure is pure
// React.StrictMode wraps the whole app
// it executes every function TWICE
// results should be the same
