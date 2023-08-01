const weakMap = new WeakMap();
export { weakMap };

export function queryAPI(obj) {
  if (!weakMap.has(obj)) {
    weakMap.set(obj, 0);
  }

  const count = weakMap.get(obj);

  weakMap.set(obj, count + 1);

  if (weakMap.get(obj) >= 5) {
    throw new Error('Endpoint load is high');
  }
}
