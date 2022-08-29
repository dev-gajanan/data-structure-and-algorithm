//Pick Index in a Mountain Array
function peakIndexInMountainArray(arr, size) {
    let s = 0, e = size - 1;
    let mid = parseInt(s + (e - s) / 2);
    while(s < e) {
        if(arr[mid] < arr[mid + 1]) {
            s = mid + 1;
        } else {
            e = mid;
        }

        mid = parseInt(s + (e - s) / 2);
    }

    return s;
}

function main() {
    const arr = [0, 10, 5, 2];
    const ans = peakIndexInMountainArray(arr, arr.length);
    console.log("Pick Index of array is", ans);
}

main();