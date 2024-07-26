//input = [1, [2, 3], [4, [5, [6]]]];
//output = [1, 2, 3, 4, 5, 6]

const flattenArray = (nestedAr) => {
  //Approach 1
  //return (flatAr = nestedAr.flat(Infinity));

  //Approach 2
  return nestedAr.reduce(
    (acc, ele) =>
      Array.isArray(ele) ? acc.concat(flattenArray(ele)) : acc.concat(ele),
    []
  );
};

const main = () => {
  const input = [1, [2, 3], [4, [5, [6]]]];
  console.log(flattenArray(input));
};

main();
