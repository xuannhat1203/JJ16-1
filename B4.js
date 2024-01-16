let a = +prompt("Nhap so a");
let b = +prompt("Nhap so b");
let array = [];
for(let i = 1; i<=b;i++){
    if(i%a==0){
        array.push(i);
    }
}
for(let j = 1; j <= a; j++){
    if(j%b==0){
        array.push(j);
    }
}
for(let i=0;i<array.length;i++){
    console.log(array[i]);
}