//Swap alternate function 
function swapAlternate(arr, size) {
    for(let i = 0; i < size; i += 2) {
        if(i+1 < size) {
            [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        }
    }
    console.log("Swap Alternate Elements");
    console.log(arr, " ");
}

//print array function
function printArray(arr, size) {
    for(let i = 0; i < size; i++) {
        console.log(arr[i], " ");
    }
}

//main function
function main() {

    const arr = [1, 2, 7, 8, 5];
    swapAlternate(arr, arr.length);
    printArray(arr, arr.length);

    return 0;
}

main();