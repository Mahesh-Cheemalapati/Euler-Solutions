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
        if (result[i]%2 === 0){
            sum = sum + result[i];
            sumView.push(sum);
        }
    }

    console.log(sumView, sum);
    console.log(result);
}
FibonacciSequence(1,2,15);