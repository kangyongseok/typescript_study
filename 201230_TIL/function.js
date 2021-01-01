function sum(a, b) {
    return a + b;
}
sum(1, 2);
// sum(1, 2, 3);
// sum(10);
function sum2(a, b) {
    return a + b;
}
console.log(sum2(1, 2));
// sum2(1, 2, 3);
console.log(sum2(10));
function sum3(a) {
    var nums = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nums[_i - 1] = arguments[_i];
    }
    var result = 0;
    for (var key in nums) {
        result += nums[key];
    }
    return a + result;
}
console.log(sum3(1, 2, 3, 4, 5, 6));
