const findUnique = (arr1, arr2) => {
  const uniqueAr = new Map();

  arr1.forEach((item) => uniqueAr.set(item.id, item));
  arr2.forEach((item) => uniqueAr.set(item.id, item));

  return Array.from(uniqueAr.values());
};

const main = () => {
  const arr1 = [
    { id: 1, name: "Gajanan" },
    { id: 2, name: "Sarat" },
  ];

  const arr2 = [
    { id: 1, name: "Gajanan" },
    { id: 3, name: "Rahul" },
  ];

  const ans = findUnique(arr1, arr2);
  console.log(ans);
};

main();
