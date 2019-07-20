console.log("Fibonacci Sequence");
function FibonacciSequence(firstNum, secondNum, range){
    var newNum;
    let sum = 0;
    let sumView = [];
    let result = [firstNum, secondNum];

    for(var i=0; i<range; i++){
        newNum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = newNum;
        result.push(newNum);
        if (newNum%2 === 0){
            sum = sum + newNum;
            sumView.push(sum);
        }
    }
    console.log("sum array:" , sumView);
    console.log(sum);
    console.log(result);
}
FibonacciSequence(1,2,15);