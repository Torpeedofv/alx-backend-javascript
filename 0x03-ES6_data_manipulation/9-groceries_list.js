export default function groceriesList() {
  const map = new Map();
  const groceries = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];

  for (const [key, value] of groceries) {
    map.set(key, value);
  }

  return map;
}
