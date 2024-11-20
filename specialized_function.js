const factormultiply = (factor, number) => factor * number;

const specializedDoubleFunction = (number) => factormultiply(2, number);
const specializedTripleFunction = (number) => factormultiply(3, number);

console.log("Double of 15, is: " + specializedDoubleFunction(15));
console.log("Triple of 15, is: " + specializedTripleFunction(15));
