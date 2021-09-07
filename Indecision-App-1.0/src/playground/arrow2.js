const multiplier = {
    numbers : [1,2,3,4,5,6,7],
    multiplier : 5,
    multipliaction() {
     return this.numbers.map((ele) => ele*this.multiplier)
    }
}

console.log(multiplier.multipliaction())