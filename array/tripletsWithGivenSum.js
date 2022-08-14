function tripletWithGivenSum(arr, s) {

    const ans = [];

    for(i = 0; i < arr.length; i++) {
        for(j = i + 1;  j < arr.length; j++) {
            for(k = j + 1; k < arr.length; k++) {

                if(arr[i] + arr[j] + arr[k] === s) {
                    const temp = [];
                    temp.push(arr[i]);
                    temp.push(arr[j]);
                    temp.push(arr[k]);
                    ans.push(temp);
                }

            }
        }
    }

    return ans.sort();

}


function main() {

    const arr = [1, 2, 3, 4, 5, 6];
    const sum = 12;
    const case1 = tripletWithGivenSum(arr, sum);
    console.log("Case 1", case1);

    return 0;
}


main();