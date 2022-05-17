// consider a scenario we have radius of 4 circle and need to calculayte the area, circumference and diameter of these 4 circle

const radius = [3, 1, 2, 4];

const area = (radius) => {
    return Math.PI * radius * radius;
}

const circumference = (radius) => {
    return 2 * Math.PI * radius;
}

const diameter = (radius) => {
    return 2 * radius;
}

//Polyfil for map (Higher order function)

Array.prototype.calculate = function(func) {

    const output = [];
    for(let i = 0; i < this.length; i++) {
        output.push(func(this[i]));
    }
    return output;
    
}

console.log(radius.map(area));
console.log(radius.calculate(area));