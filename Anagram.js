// problem statement to check two string is anagram or not
// hello -> llheo //true
// gajanan -> nagajnn //false

// Condition

// check length for both Strings 
// if same then count letter  
// if both String have same letter count then they are anagram else not 
// String 'hello'
// {h:1, e: 1, l:2, o: 1}

class Anagram {

    _str1; _str2;

    constructor() { }

    isAnagram(str1, str2) {
        this._str1 = str1;
        this._str2 = str2;
        if(this._str1.length !== this._str2.length) {
            return false
        }

        let counter = {}
        for(let letter of this._str1) {
            counter[letter] = (counter[letter] || 0) + 1
        }

        for(let items of this._str2) {
            if(!counter[items]) {
                return false
            }
            counter[items] -= 1
        }
        return true
    }

}

const anagramObj = new Anagram();
const checkAnagram = anagramObj.isAnagram('hello', 'llheo');
console.log(checkAnagram) 

//Linear time complexcity -> o(n)