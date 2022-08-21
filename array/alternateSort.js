/*
Given an array of integers, print the array in such a way that the first element is first maximum and second element is first minimum and so on.

Test Case:

Input : arr[] = {7, 1, 2, 3, 4, 5, 6}
Output : 7 1 6 2 5 3 4

Input : arr[] = {1, 6, 9, 4, 3, 7, 8, 2}
Output : 9 1 8 2 7 3 6 4
*/

function alternateSort(arr, size) {

    const temp = [];
    //Sort the array
    arr.sort((a, b) => {
        return a - b;
    });

    let i = 0, j = size - 1;

    while(i < j) {
        temp.push(arr[j--]);
        temp.push(arr[i++]);
    }

    //If the total element is odd, then print the last middle element
    if(size % 2 != 0) {
        temp.push(arr[i]);
    } 

    console.log(temp);

}

function main() {

    const arr = [7, 1, 2, 3, 4, 5, 6];
    const size = arr.length;

    alternateSort(arr, size);

    return 0;
}

main();