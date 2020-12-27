interface PlusFunc {
    (num: number): string
}

const plusFunc: PlusFunc = (num: number) => {
    return `num: ${num}`;
}

console.log(plusFunc(10)) // 20