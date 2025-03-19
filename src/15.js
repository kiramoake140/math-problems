const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

const getRandomFloat = (min, max) => {
    return min + Math.random() * (max - min);
}

const getRandomNumber = (min, max) => {
    if (min < max) {
        return getRandomInt(max - min + 1) + min;
    } else {
        return getRandomFloat(min, max);
    }
}
