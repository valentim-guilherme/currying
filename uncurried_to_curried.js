// Uncurried function:
function greet(greeting, name) {
  return `${greeting}, ${name}!`;
}

// Task: Create a curried version.
const greetCurried = (greeting) => (name) => `${greeting}, ${name}`;

// Example usage:
const sayHello = greetCurried("Hello");
console.log(sayHello("Alice")); // Output: "Hello, Alice!"
