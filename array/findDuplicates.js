
function findDuplicates(arr, size) {
    let ans = 0;
    for(let i = 0; i < size; i++) {
        ans = ans ^ arr[i];
    }

    for(let i = 1; i < size; i++) {
        ans = ans ^ i;
    }

    return ans;
}

function main() {

    const arr = [1, 2, 3, 4, 3];

    const ans = findDuplicates(arr, arr.length);
    console.log("The duplicate element of the given array is:", ans);

}

main();