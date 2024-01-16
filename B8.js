let array = [];
for(let i = 0; i < 4; i++){
    let a = +prompt(`Nhập phần tử thứ ${i}`);
    array.push(a);
}
let count = 0;
for(let i = 0; i < 4; i++){
    count = 0;
   for(let j=i+1; j < 4; j++){
        if(array[i]==array[j]){
            count++;
        }
        if(count==1){
            console.log(array[i]);
        }
   }
}
