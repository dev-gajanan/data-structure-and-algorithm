//write a function to reverse the string
//input =  "my name is sarat"
//output1 = "taras si eman ym";
//output2 = "ym eman si taras";

const reverseWordOFString = (str) => {
  const ans = [];

  const strAr = str.split(" "); //make string to array of word
  for (let i = 0; i < strAr.length; i++) {
    //now reverse each word of string array
    const tmp = [];
    for (let j = strAr[i].length - 1; j >= 0; j--) {
      tmp.push(strAr[i][j]);
    }
    ans.push(tmp.join(""));
  }

  return ans.join(" ");
};

const reverseString = (str) => {
  const ans = [];
  for (let i = str.length; i >= 0; i--) {
    ans.push(str[i]);
  }

  return ans.join("");
};

const main = () => {
  const str = "my name is sarat";
  const revStr = reverseString(str);
  console.log("Reverse of", str, "is", revStr);
  const reverseEashWord = reverseWordOFString(str);
  console.log("Reverse each word of", str, "is", reverseEashWord);
};

main();
