// words = ["eat", "tea", "tan", "ate", "nat", "bat"]
//output [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

const groupAnagrams = (words) => {
  const groups = {};
  for (const word of words) {
    const sortedWord = word.split("").sort().join("");
    if (!groups[sortedWord]) {
      groups[sortedWord] = [];
    }
    groups[sortedWord].push(word);
  }
  return Object.values(groups);
};

const main = () => {
  const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
  const result = groupAnagrams(words);
  console.log(result);
};

main();
