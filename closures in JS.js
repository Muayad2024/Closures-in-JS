function outerFunction(x) {
    let y = 10;
    function innerFunction(){
        console.log(x + y);    //x is refer to outer function 
    }
    return innerFunction;
}

let closure = outerFunction(5);
console.log(closure()); // 15
//=================================================================

function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

let counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
//==================================================================

function multiply(x) {
    return function (y) {
        return x * y;
    };
}

let double = multiply(2);
console.log(double(5)); // 10
//==================================================================
//In this code the function (inner function) is take the count value as 
// a reference not as a value like number values, so if the value of outer
//  function change it will change in the inner function.
function createIncrementer() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}

let increment = createIncrementer();
increment(); // 1
increment(); // 2
//=================================================================