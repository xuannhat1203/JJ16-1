let n =+prompt("Nhap so phan tu trong mang ");
let array= [];
for (let i = 0; i < n; i++) {
    let a=+prompt(`Nhap phan tu thu ${i}`);
    array[a]=1;
}
for (let i = 1; i <100; i++) {
    if (array[i]!=1) {
        console.log(i);
        break;
    }
}