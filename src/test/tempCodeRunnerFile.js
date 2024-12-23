export function findAge(birthOfYear) {
    return Date().split(' ')[3] - birthOfYear
}

console.log(findAge(2001));