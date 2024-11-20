const addLong = (a) => {
  return (b) => {
    return a + b;
  };
};

const addShort = (a) => (b) => a + b;

console.log(addShort(5)(8));
console.log(addLong(5)(8));
