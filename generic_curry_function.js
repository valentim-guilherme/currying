function addThreeNumbers(a, b, c) {
  return a + b + c;
}

function curry(fn) {
  return function curried(...params) {
    if (params.length >= fn.length) {
      return fn(...params);
    }

    return function (...nextParams) {
      //recursive functionn to cumulate params, aaaah fucking Haskell times
      return curried(...params, ...nextParams);
    };
  };
}

const curriedAdd = curry(addThreeNumbers);

const complete = curriedAdd(1)(2)(3); // Output: 6
const missingOne = curriedAdd(1, 2); // [Function (anonymous)], bc it will miss the last parameter

console.log(complete);
console.log(missingOne); // [Function (anonymous)], bc it will miss the last parameter c
console.log(missingOne(3)); // Missing one with the last parameter
