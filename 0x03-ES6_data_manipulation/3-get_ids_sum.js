export default function getStudentIdSum(array = []) {
  return array.reduce((add, obj) => add + obj.id, 0);
}
