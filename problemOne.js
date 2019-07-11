console.log('sum of multiples of 3 and 5');
function multiplesOf(range){
    let multiple = [];
    let sum = 0;
    for (let i=1; i<range; i++){
        if(i%3===0 || i%5===0){
            multiple.push(i);
        }
    }
    for (let i=0; i<=multiple.length-1; i++){
        sum = sum + multiple[i];
    }
    console.log(multiple);
    console.log(sum);
}
multiplesOf(10000);