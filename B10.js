
let array = [];
let array2 = [];
let array3 = [];
let size1 = +prompt("Nhap so phan tu ban muon trong mang 1");
let size2 = +prompt("Nhap so phan tu ban muon trong mang 2");
let size3 = +prompt("Nhap so phan tu ban muon trong mang 3");
for (let i = 0; i < size1; i++) {
  let a = +prompt(`Nhập phần tử thứ ${i}`);
  array.push(a);
}
for (let i = 0; i < size2; i++) {
  let b = +prompt(`Nhập phần tử thứ ${i}`);
  array2.push(b);
}
for (let i = 0; i < size3; i++) {
  let c = +prompt(`Nhập phần tử thứ ${i}`);
  array3.push(c);
}
let array_all = array.concat(array2).concat(array3);
let size = array_all.length;
let count = 0;
for (let i = 0; i < size; i++) {
    count = 0;
    for(let j=i+1; j < size; j++){
         if(array_all[i]==array_all[j]){
             count++;
         }
    }
    if(count==1){
        console.log(array_all[i]);
    }
}