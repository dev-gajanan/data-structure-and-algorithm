const arr = ["A", "B", "A", "C", "D", "B", "A"];

function finfNumberOfEle(arr) {
  let newEle = {};
  for (let i = 0; i < arr.length; i++) {
    if (newEle[arr[i]]) {
      newEle[arr[i]]++;
    } else {
      newEle[arr[i]] = 1;
    }
  }
  return newEle;
}

console.log(finfNumberOfEle(arr));
