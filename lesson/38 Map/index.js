// Map = object that holds key-value pairs of any data type

const store = new Map([
  ["t-shirt", 20],
  ["jeans", 30],
  ["socks", 10],
  ["underwear", 50],
]);

store.set("hat", 40) // add element
// store.delete("jeans")


store.forEach((value, key) => console.log(`${key} $${value}`));
console.log(store.has("jeans"));


// let shoppingCart = 0;

// shoppingCart += store.get("t-shirt");
// shoppingCart += store.get("underwear");
// console.log(shoppingCart);
console.log(store.size);
