let a = {
    one: 1,
    two: 2
}

function sum() {
    return this.one + this.two;
}

console.log(sum.call(a));