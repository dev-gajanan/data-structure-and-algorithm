const findLongestWord = (string) => {
  const stringAr = string.split(" ");
  let longWord = "";
  for (const word of stringAr) {
    if (word.length > longWord.length) {
      longWord = word;
    }
  }
  return longWord;
};

const main = () => {
  const input = "A quick brown fox jumps over the lazy dog";
  const ans = findLongestWord(input);
  console.log(ans);
};
main();
