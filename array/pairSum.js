//Pair Sum Problem
/*
Given an array and a value, find out the pair elements, whose sum is equal to value;
Note: 
1- Pair should be in sorted order
2- Resultant array should be sorted based on the first element of the pair

*/
function pairSum(arr, sum) {
    const ans = [];

    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {

            if(arr[i] + arr[j] == sum) {
                let temp = [];
                temp.push(Math.min(arr[i], arr[j]));
                temp.push(Math.max(arr[i], arr[j]));

                ans.push(temp);
            }
        }
    }

    return ans.sort((a, b) => a[0] - b[0]);
}

function main() {
    
    const arr = [1, 2, 3, 4, 5];
    const sum = 5;
    const case1 = pairSum(arr, sum);
    console.log("Case 1", case1);

    const arr1 = [2, -3, 3, 3, -2];
    const sum1 = 0;
    const case2 = pairSum(arr1, sum1);
    console.log("Case 2", case2);

    return 0;
}

main();