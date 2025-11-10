// Exercise 2 - Block vs Function Scope

if(true) {
    var a = 10;
    let b = 20;
    const c = 50;
}

console.log(typeof a);
console.log(typeof b); // undefined
console.log(typeof c); // undefined