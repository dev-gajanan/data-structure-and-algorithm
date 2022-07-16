const arr = [5, 1, 3, 2, 6];


const binary = function(x) {
    return x.toString(2);
}

//console.log(arr.map(binary));

const output = arr.map((x) => {
    return x.toString(2);
})

console.log(output);