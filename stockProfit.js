const stockProfit = [5, 7, 9, 13, 11, 6, 6, 3, 3];
const target = 12;

function getSumPair(array, target) {
    let s = new Set();
    let map1 = {}; let map2 = {};
    for (let i = 0; i < array.length; ++i) {
        let temp = target - array[i];
        if (s.has(temp)) {
            map1[array[i]] = map1[array[i]] || 0;
            map2[temp] = map2[temp] || 0;
        }
        s.add(array[i]);
    }
    return Object.keys(map1).length
}

const result = getSumPair(stockProfit, target);
console.log(result);