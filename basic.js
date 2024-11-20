function add(a) {
  return function (b) {
    return a + b;
  };
}

const add10 = add(10);
const add5 = add10(5);

console.log(add5); // 15
