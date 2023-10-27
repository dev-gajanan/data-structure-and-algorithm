function main() {
    let arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
    let size = arr.length;
    if(size == 0 || size == 1) {
        console.log(arr);
    } else {
        let temp = [];
        let j = 0;
        for(let  i = 0; i < size; i++) {
            if(arr[i] != arr[i+1]) {
                temp[j++] = arr[i];
            }
        }

        for(let i =0; i < j; i++) {
            arr[i] = temp[i];
        }
        
        for (let i = 0; i < j; i++) {
           console.log(arr[i] + " ");
        }
    }
}

main();