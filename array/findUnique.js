// Problem Statement
// You have been given an integer array/list(ARR) of size N. Where N is equal to [2M + 1].
// Now, in the given array/list, 'M' numbers are present twice and one number is present only once.
// You need to find and return that number which is unique in the array/list.

//Time limit 1 sec

//Test cases
// 1 => no. of test case
// 7 => size of array (n)
// 2 3 1 6 3 6 2  => array elements

function findUnique(arr, size) {
    let ans = 0;
    for(let i = 0; i < size; i++) {
        ans = ans ^ arr[i];
    }

    return ans;
}

function main() {

    const arr = [2, 3, 1, 6, 3, 6, 2];

    const ans = findUnique(arr, arr.length);
    console.log("The unique element of the given array is:", ans);

}

main();