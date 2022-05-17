// Checking Sum-Zero Problem
// Input -> [-5, -4, -3, -2, 0, 2, 4, 6, 8]
// Output -> [-4, 4]

class SumZeroPair {
    _array; _sum = 0;
    constructor() { }

    getSumZeroPair(array) {
        this._array = array;
        let left = 0;
        let right = this._array.length-1;
        while(left < right) {
            this._sum = this._array[left] + this._array[right];
            if(this._sum === 0) {
                return [this._array[left], this._array[right]];
            } else if(this._sum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }
}

const sumZeroPairObj = new SumZeroPair();
const sumZeroPairArr = sumZeroPairObj.getSumZeroPair([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(sumZeroPairArr);

// Linear time complexcity o(n)