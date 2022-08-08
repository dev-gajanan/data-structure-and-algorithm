
function getSquare(n, i, j) {
    const mid = (i+j) / 2;
    const mul = mid * mid;

    if ((mul == n) || (Math.abs(mul - n) < 0.00001)) {
        return mid;
    } else if (mul < n) {
        return getSquare(n, mid, j);
    } else {
        return getSquare(n, i, mid);
    }
}

function getSquareRoot(n) {
    let i = 1;
    let status = false;
    while(!status) {
        if(i * i === n) {
            status = true;
            return i;
        } else if(i * i > n) {
            status = true;
            return getSquare(n, i - 1, i);
        }
        i++;
    }
}

function isPerfectSquare(n) {
    if(n >= 0) {
        const sqrt = getSquareRoot(n);
        return ((sqrt * sqrt) === n);
    }
    return false;
}

function main() {
    const num = 21;
    if(isPerfectSquare(num)) {
        console.log(true);
    } else {
        console.log(false);
    }
    return 0;
}


main();