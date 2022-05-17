function countDuplicates(array) {
    const uniqueAr = new Set();
    const duplicateAr = new Set();
    for (const value of array) {
      if (uniqueAr.has(value)) {
        duplicateAr.add(value);
        uniqueAr.delete(value);
      } else {
        uniqueAr.add(value);
      }
    }
    return duplicateAr.size;
}
const result = countDuplicates([8,1,3,1,4,5,6,3,2]);
console.log(result);