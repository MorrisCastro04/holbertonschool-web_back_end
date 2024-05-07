export default function appendToEachArrayValue(array, appendString) {
<<<<<<< HEAD
  const newArray = [];
  for (const idx of array) {
    const value = array[idx];
    newArray.push(appendString + value);
  }

  return newArray;
=======
  let new_array = [];
  for (let idx of array) {
    let value = array[idx];
    new_array.push(appendString + value)
  }

  return new_array;
>>>>>>> d3044a124c5b8900671fb58e66b1341fb481b573
}
