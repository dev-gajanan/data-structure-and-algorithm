const str = "aabcccabba";
const s = "aabcccabba";

let left = str.slice(0, str.length/2);
let right = str.slice(str.length/2, str.length);


//console.log(left, right);
let final = "";
for(let i = right.length-1; i > 0; i--) {
    //console.log(right[i], left[i]);
    // if(right[i] !== left[i]) {
    //     console.log(right[i], left[i]);
    //     final += right+left;
    // }
    // right = final;
}
const newStr = right + left;

//console.log(final);


// Initialize two pointers
let i = 0, j = s.length - 1;
 
// Traverse the string S
for(; i < j && s[i] == s[j];)
{
     
    // Current char on left pointer
    let d = s[i];

    // Shift i towards right
    while (i <= j && s[i] == d)
        i++;

    // Shift j towards left
    while (i <= j && s[j] == d)
        j--;
}

// Return the minimum possible
// length of string
console.log(j - i + 1);
