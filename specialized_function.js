const factormultiply = (factor) => (number) => factor * number;

const specializedDoubleFunction = factormultiply(2);
const specializedTripleFunction = factormultiply(3);

console.log("Double of 15, is: " + specializedDoubleFunction(15));
console.log("Triple of 15, is: " + specializedTripleFunction(15));
