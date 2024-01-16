let array = [1,2,1,3,4,1,2,3];
let a = +prompt("Nhap phan tu ban muon tim kiem");
let count = 0;
let size = array.length;
for(let i=0;i<size;i++){
    if(array[i]==a){
        count++;
    }
}
console.log(`Phan tu ${a} xuat hien ${count} lan`);