let array = [1, 2, 3, -1, -2];
let size = array.length;
for (let i = 0; i < size; i++) {
    if (array[i] < 0) {
      array.unshift(array[i]);
    }
  }
for (let j = 0; j < size; j++) {
  console.log(array[j]);
}