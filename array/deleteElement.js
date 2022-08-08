function deleteElement(arr, pos) {
    for(let i = pos; i < arr.length; i++) {
        arr[i] = arr[i+1]; //Replace i+1th element with ith element
    }
    arr.length = arr.length - 1; //fixing length-1 so laast element get deleted
}


function main() {

    const arr = [10, 20, 30, 40, 50];
    const pos = 2;

    console.log("Before Deleting element:",arr);
    deleteElement(arr, pos);
    console.log("After Deleting element:",arr);

    return 0;
}

main();