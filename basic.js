var add = function (num1, num2) {
    return num1 + num2;
};
var one = 3;
var two = 11;
var result = add(one, two);
console.log(result);
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'moe',
    age: 30,
    home: ['usa', 'ta'],
    role: Role.ADMIN
};
