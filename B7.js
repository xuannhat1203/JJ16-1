let array = [1, 5, 6, 3, 2, 1, 1, 5, 6, 7];
let a = +prompt("Nhap 1 so tong");
let size = array.length;
let sum = 0;
for (let i = 0; i < size; i++) {
  sum = 0;
  for (let j = i; j <= i + 2; j++) {
    sum += array[j];
  }
  if (sum == a) {
    for (let j = i; j < i + 3; j++) {
      console.log(array[j]);
    }
  }
}
