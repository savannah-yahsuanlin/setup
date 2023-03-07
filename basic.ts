const add = (num1: number, num2: number) => {
	return num1 + num2;
}

const one = 3
const two = 11

const result = add(one, two)
console.log(result)



enum Role {ADMIN, READ_ONLY, AUTHOR}

const person = {
	name: 'moe', 
	age: 30,
	home: ['usa', 'ta'],
	role: Role.ADMIN
}