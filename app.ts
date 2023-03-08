const num1 = document.getElementById('num1')! as HTMLInputElement;
const num2 = document.getElementById('num2')! as HTMLInputElement;

type Combine = number | string
type Convert = 'as-number' | 'as-text'

const add = (num1: Combine, num2: Combine, outputConversion: Convert) => { 
	return typeof num1 === 'number' && typeof num2 === 'number' || outputConversion === 'as-number' ?  +num1 + +num2 : num1.toString() + num2.toString()
}

console.log(add(1, 3, 'as-number'))
console.log(add('1', '3', 'as-number'))
console.log(add('moe', 'larry', 'as-text'))
