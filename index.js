function receivesAFunction(callbackFunction) {
  callbackFunction();
}
function returnsANamedFunction() {
  return function NamedFunction() {
    console.log("The named function was returned");
  };
}
function returnsAnAnonymousFunction() {
  return function () {
    console.log("The anonymous function was returned");
  };
}
