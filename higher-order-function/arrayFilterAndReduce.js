const arr = [5, 1, 3, 2, 6];

function isOdd(x) {
    return x % 2;
}

function isEven(x) {
    return x % 2 === 0;
}


const output = arr.filter(isEven);
console.log(output);


//Array reduce
// Find the sum or max number from array in that case we can use reduce function

const output1 = arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);

console.log(output1);