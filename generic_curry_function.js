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

function addThreeNumbers(a, b, c) {
  return a + b + c;
}

function calculateTotal(price, taxRate, discount) {
  return price + price * (taxRate / 100) - discount;
}

const curriedAdd = curry(addThreeNumbers);
const curriedCalculateTotal = curry(calculateTotal);

//FIRST CURRIED FUNCTION START
const complete = curriedAdd(1)(2)(3); // Output: 6
const missingOne = curriedAdd(1, 2); // [Function (anonymous)], bc it will miss the last parameter

console.log(complete);
console.log(missingOne); // [Function (anonymous)], bc it will miss the last parameter c
console.log(missingOne(3)); // Missing one with the last parameter
//FIRST CURRIED FUNCTION END

//SECOND CURRIED FUNCTION START
const apply10PercentTax = (price) => curriedCalculateTotal(price, 10);
console.log(apply10PercentTax(100)(20));

//FIRST CURRIED FUNCTION END
