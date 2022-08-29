function binarySearch(arr, size, key) {
    let start = 0;
    let end = size - 1;
    let mid = parseInt(start + (end - start) / 2);

    while(start <= end) {
        if(key == arr[mid]) {
            return mid;
        }

        if(key  > arr[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
        mid = parseInt(start + (end - start) / 2);
    }

}

function  main() {

    const arr = [5, 6, 7, 8, 9, 10];
    const key = 8;

    const ans = binarySearch(arr, arr.length, key);
    console.log(key, 'is found at position ', ans);


    return 0;
}

main();