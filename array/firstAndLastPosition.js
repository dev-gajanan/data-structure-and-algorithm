
//First and Last Position of an Element In Sorted Array

function firstAndLastPOsition(arr, size, key) {
    const pair = {};

    pair.first = firstOcc(arr, size, key);
    pair.last = lastOcc(arr, size, key);

    return pair;
}

function lastOcc(arr, size, key) {
    let start = 0, end = size - 1;
    let mid = parseInt(start + (end - start) / 2);

    let ans = -1;
    
    while(start <= end) {
        if(arr[mid] == key) {
            ans = mid;
            start = start + 1;
        }

        else if(key > arr[mid]) {
            start = start + 1;
        }

        else {
            end = end - 1;
        }

        mid = parseInt(start + (end - start) / 2);

    }
    return ans;
}

function firstOcc(arr, size, key) {
    let start = 0, end = size - 1;
    let mid = parseInt(start + (end - start) / 2);

    let ans = -1;
    
    while(start <= end) {
        if(arr[mid] == key) {
            ans = mid;
            end = end - 1;
        }

        else if(key > arr[mid]) {
            start = start + 1;
        }

        else {
            end = end - 1;
        }

        mid = parseInt(start + (end - start) / 2);

    }
    return ans;
}


function main() {

    const even = [1, 2, 3, 3, 5];
    const key = 3;

    const ans = firstAndLastPOsition(even, even.length, key);
    console.log(ans);

    return 0;
}

main();

