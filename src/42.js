function sum(numbers) {
    if (!numbers || numbers.length === 0) {
        throw new Error("The array is empty");
    }

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

function multiply(numbers) {
    if (!numbers || numbers.length === 0) {
        throw new Error("The array is empty");
    }

    let result = 1;
    for (let i = 0; i < numbers.length; i++) {
        result *= numbers[i];
    }
    return result;
}
