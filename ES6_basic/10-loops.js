export default function appendToEachArrayValue(array, appendString) {
  let new_array = [];
  for (let idx of array) {
    let value = array[idx];
    new_array.push(appendString + value)
  }

  return new_array;
}
