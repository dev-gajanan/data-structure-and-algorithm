
function sort012(arr, size) {

    let low = 0;
    let high = size - 1;
    let mid = 0;
    let temp = 0;

    while(mid <= high) {

        if(arr[mid] === 0) {
            // temp = arr[low];
            // arr[low] = arr[mid];
            // arr[mid] = temp;
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        }

        else if(arr[mid] === 1) {
            mid++;
        }

        else  {
            // temp = arr[high];
            // arr[high] = arr[mid];
            // arr[mid] = temp;
            [arr[high], arr[mid]] = [arr[mid], arr[high]];
            high--;
        }

    }

}

function printArray(arr, size) {
    for(let i  = 0; i < size; i++) {
        console.log(arr[i],  " ");
    }
}

function main() {
    const arr = [0, 1, 0, 2, 1, 0, 1, 0, 2];

    sort012(arr, arr.length);
    printArray(arr, arr.length);

    return 0;
}

main();