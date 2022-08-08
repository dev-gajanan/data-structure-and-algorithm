
function insertAtPositoion(arr, pos, ele) {

    for(let  i = arr.length - 1; i >= 0; i--) {
        if(i >= pos) {
            arr[i+1] = arr[i];

            if(i === pos) {
                arr[i] = ele;
            }
        }
    } 

}

function main() {

    const arr = [2, 4, 10, 20, 50, 98];
    const newEl = 30;
    const pos = 2;

    //Print the array before insertion
    console.log(arr);

    insertAtPositoion(arr, pos, newEl);

    //Print the array after insertion
    console.log(arr);

    return 0;
}

main();