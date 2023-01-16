function receivesAFunction(callback) {
    callback()
}


//The key unlock for me was that for the first error, your function has to return another function that has a name. 
//The key for the second error is that your functions needs to return a function that is anonymous.

function returnsANamedFunction() {
    return function namedFn() {
      console.log("named function");
    };
  }

  function returnsAnAnonymousFunction() {
    return function () {
        console.log('Unnamed function.')
    }
}


