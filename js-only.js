const button = document.querySelector('button');
const one = document.getElementById('num1')
const two = document.getElementById('num2')

const add = (num1, num2) => {
	return num1*1 + num2*1
}

button.addEventListener('click', function() {
	console.log(add(one + two))
})