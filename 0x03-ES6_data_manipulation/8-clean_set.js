export default function cleanSet(set, startString) {
  const endString = [];
  if (startString === '' || typeof startString !== 'string') return '';
  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      endString.push(value.slice(startString.length));
    }
  }
  return endString.join('-');
}
