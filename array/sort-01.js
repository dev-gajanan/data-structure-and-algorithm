function sort01(arr, size) {
    let left = 0;
    let right = size - 1;

    while(left < right) {
        while(arr[left] === 0 && left < right) {
            left++;
        }

        while(arr[right] === 1 && left < right) {
            right--;
        }

        // if arr[left] === 1 && arr[right] === 0
        //swap(arr[left], arr[right])
        if(left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }  
    }

}

function printArray(arr, size) {
    for(let i = 0; i < size; i++) {
        console.log(arr[i], " ");
    }
}

function main() {

    const arr = [1, 1, 0, 0, 0, 0, 1, 0];

    sort01(arr, arr.length);

    printArray(arr, arr.length);

    return 0;
}

main();