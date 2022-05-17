const input = [11, 7, 5, 10, 46, 23, 16, 8];
const sortIndex = 3;

function sortAsc(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    return arr;
}

function sortDesc(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}

function splice(arr, start, end) {
    const temp = [];
    for(let i = start; i < end; i++) {
        temp.push(arr[i]);
    }
    return temp;
}

function main() {
    const start = 0;
    const end = sortIndex;
    const size = input.length;
    const t = splice(input, start, end - start + 1);
    const t1 = splice(input, end + 1, size - 1);
    const firstAr = input.splice(start, end - start + 1);
    //const inputAr1 = input.splice(end + 1, size - 1);
    const sortedFirstAr = sortAsc(t);
    const sortedSecondAr = sortDesc(t1);
    // console.log(sortedFirstAr);
    // console.log(sortedSecondAr);
    const finalAr = sortedFirstAr.concat(sortedSecondAr);
    console.log(finalAr);

    console.log("t:", t);
}

main();