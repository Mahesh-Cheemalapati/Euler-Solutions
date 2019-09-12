## Euler Solutions
> If you have ever checked out [Euler Archives](https://projecteuler.net/archives) to practice some coding  
> Here are some solutions to the problems, 
> the solutions are written in *Javascript*

- ***Multiples of 3 and 5***
```
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
```

- ***Even Fibonacci Series***

```
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
```
- ***Largest Prime Factor***

```
//prime factorization 
var num = 600851475143;
var primeArr = [];
var isPrime;

//find divisors starting with 2

for(i = 2; i <= num; i++){
  if (num % i==0) {

    //check if divisor is prime
    for(var j = 2; j <= i/2; j++) {
      if(i % j == 0) {
        isPrime = false;
      } else {
        isPrime = true;
      }
    }

    //if the divisor is prime

    if (isPrime == true) {
      //divide integer by prime factor & factor store in array primeArray
      num /= i
      primeArr.push(i);
    }
  }
}
console.log(primeArr); // printing prime factor
console.log(Math.max(...primeArr)); //printing the largest prime factor
```

> Will update more solutions soon
