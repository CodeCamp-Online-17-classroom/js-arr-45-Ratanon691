const arr = [-3, 2, 0, -7, 4, 6];

const result = arr.sort((a, b) => (a * a) - (b * b))
console.log(result) // [0, 2, -3, 4, 6, -7]
