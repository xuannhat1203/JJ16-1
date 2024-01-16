let array = [1,2,3,4,5];
let array2 = [];
for(let i=array.length-1;i>=0;i--){
    array2.push(array[i]);
}
for(let j=0;j<array2.length;j++){
    console.log(array2[j]);
}