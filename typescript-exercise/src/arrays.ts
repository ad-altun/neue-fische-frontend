const numbers: number[] = [1,2,3,4,5,6];

console.log("The array of numbers is " + numbers + "\n ");

console.log("The double of numbers: ")
const doubledNumbers: number[] = numbers.map(num => console.log(num *2));

const words: String[] = ["Hello", "world", "java", "function", "javascript", "car", "etc"];

const longWords: String[] = words.filter(w => w.length > 5);
console.log(longWords);