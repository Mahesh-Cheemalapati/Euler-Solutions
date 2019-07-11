let arr1 = [2,3,4,5,2,3,7,6,3,8,3];
let arr2 = [2,5,8];
let arr3 = [];
// remove elements from arr1 which are present in arr2

function ManilupateArr(arr){

arr2.forEach((item)=>{
  for(let i = 0; i< arr1.length; i++){
    if(item === arr1[i]){
      arr1.splice(i, 1);
    }
  }
});

console.log(arr1);
} 
ManilupateArr(arr2);