/*

*/

class ArrayPopper {
    constructor(arr) {
        this.arr = arr;
        this.atBeginning = true;
    }

    togglePopper() {
        this.atBeginning = !this.atBeginning;
        return this.atBeginning ? this.arr.pop() : this.arr.shift();
    }
}

const ap = new ArrayPopper([1, 2, 3, 4, 5]);

console.log(ap.togglePopper());//1
console.log(ap.togglePopper());//5
console.log(ap.togglePopper());//2
console.log(ap.togglePopper());//4
console.log(ap.togglePopper());//3
console.log(ap.togglePopper());//undefined

const strap = new ArrayPopper(['hi', 'there', 'from', 'JS']);

console.log(strap.togglePopper());//hi
console.log(strap.arr);
console.log(strap.togglePopper());//JS
console.log(strap.arr);
console.log(strap.togglePopper());//there
console.log(strap.arr);
console.log(strap.togglePopper());//from
console.log(strap.arr);//[]
console.log(strap.togglePopper());//undefined