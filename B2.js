let array = [1,2,3,4,5];
let a = +prompt("Nhap phan tu muon tim kiem");
let bool = true;
for(let i=0;i<array.length;i++){
    if(array[i] == a){
        console.log(`Phan tu ban muon tim nam o vi tri thu ${i}`);
        bool = true;
    }
}
if(bool != true){
    console.log("Khong co phan tu muon tim kiem");
}