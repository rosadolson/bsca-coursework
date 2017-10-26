const basicOp = (x, y, op) => {
    if(op === '+'){
        return (x + y) 
    } else if(op === '-'){
        return (x - y)
    } else if(op === '*'){
        return (x * y)
    } else if(op === '/'){
        return (x / y)
    } else {
        return "That doesn't look like math...."
    }
}

console.log(basicOp(1, 1, '+'));
console.log(basicOp(2, 1, '-'));
console.log(basicOp(2, 2, '*'));
console.log(basicOp(6, 2, '/'));
console.log(basicOp(1, 1, 'hmmm'));