function receivesAFunction(callback) {
  callback();
}
receivesAFunction(() => {
  console.log("Callback function defined");
});

function returnsANamedFunction() {
  // Return a named function
  return function newFunction() {
    console.log("This is a named function");
  };
}
function returnsAnAnonymousFunction() {
  // Return an anonymous function
  return function () {
    console.log("This is an anonymous function");
  };
}
