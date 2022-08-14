
function sort012(arr, size) {

    let i, ctr0 = 0, ctr1 = 0, ctr2 = 0;

    //count the number of 0, 1, 2 in the array
    for(i = 0; i < size; i++) {
        switch(arr[i]) {
            case 0: 
                ctr0++;
                break;
            case 1:
                ctr1++;
                break;
            case 2:
                ctr2++;
                break;
        }
    }

    //update the array
    i = 0;
    while(ctr0 > 0) {
        arr[i++] = 0;
        ctr0--;
    }
    while(ctr1 > 0) {
        arr[i++] = 1;
        ctr1--;
    }
    while(ctr2 > 0) {
        arr[i++] = 2;
        ctr2--;
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