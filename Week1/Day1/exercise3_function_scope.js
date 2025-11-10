// Exercise 3 - Block vs Function Scope

function testScope() {
	var a = 10;
	let b = 20;
	const c = 50;
}

testScope();

console.log(typeof a); // undefined
console.log(typeof b); // undefined
console.log(typeof c); // undefined
