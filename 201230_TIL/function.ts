function sum(a: number, b: number): number {
    return a + b;
}

sum(1, 2);
// sum(1, 2, 3);
// sum(10);

function sum2(a: number, b?: number): number {
    return a + b; // ??? 이건 안되는듯?
}

console.log(sum2(1, 2))
// sum2(1, 2, 3);
console.log(sum2(10))

function sum3(a: number, ...nums: number[]): number {
    let result = 0;
    for (let key in nums) {
        result += nums[key];
    }
    return a + result;
}

console.log(sum3(1, 2, 3, 4, 5, 6))