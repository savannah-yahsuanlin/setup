var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var add = function (num1, num2, outputConversion) {
    return typeof num1 === 'number' && typeof num2 === 'number' || outputConversion === 'as-number' ? +num1 + +num2 : num1.toString() + num2.toString();
};
console.log(add(1, 3, 'as-number'));
console.log(add('1', '3', 'as-number'));
console.log(add('moe', 'larry', 'as-text'));
var plus = function (num1, num2) { return num1 + num2; };
var output = function (num) {
    console.log('output line17', num);
};
var aFunction;
aFunction = plus;
output(plus(10, 11));
console.log(aFunction(8, 8));
var handling = function (a, b, cb) {
    cb(a + b);
};
handling(1, 2, function (result) {
    console.log(result);
});
var enterValue;
var enterName;
enterValue = 2;
enterValue = 'moe';
if (typeof enterValue === 'string')
    enterName = enterValue;
var errorMessage = function (massage, code) {
    throw { massage: massage, code: code };
};
console.log(errorMessage('params invalid', 400));
