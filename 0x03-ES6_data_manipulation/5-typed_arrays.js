export default function createInt8TypedArray(length = 0, position = 0, value = 0) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer, 0, length);

  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  view.setInt8(position, value);
  return view;
}
