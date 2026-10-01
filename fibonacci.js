const fibonacci = (n) => {

    // Base case

    if (Number.isNaN(n) === true || Number.isInteger(n) === false) { return "Try integer number." };

    if (n === 1) { return [0] } else if (n === 2) { return [0, 1] };

    // —————————————————————————

    const previousArr = fibonacci (n - 1);
    const sumOfTwo = previousArr.at(-1) + previousArr.at(-2);
    previousArr.push(sumOfTwo);

    return previousArr;

};

console.log(fibonacci(8));