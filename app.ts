const num1 = document.getElementById('num1')! as HTMLInputElement;
const num2 = document.getElementById('num2')! as HTMLInputElement;

const add = (num1: number | string , num2: number | string) => { 
	return typeof num1 === 'number' && typeof num2 === 'number' ?  num1 + num2 : num1.toString() + num2.toString()
}

console.log(add(1, 3))
console.log(add('moe', 'larry'))
