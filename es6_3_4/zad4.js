const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

const average = (...args) => {
    return args.reduce((sum, number) => sum += number) / args.length;
};

console.log(average(...grades));