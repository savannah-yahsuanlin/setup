var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var add = function (num1, num2, outputConversion) {
    return typeof num1 === 'number' && typeof num2 === 'number' || outputConversion === 'as-number' ? +num1 + +num2 : num1.toString() + num2.toString();
};
console.log(add(1, 3, 'as-number'));
console.log(add('1', '3', 'as-number'));
console.log(add('moe', 'larry', 'as-text'));
