function fib(n) {
	let count = n;
	let n1 = 0;
	let n2 = 1;
	let arr = [];
	while (count !== 0) {
		count--;
		arr.push(n1);
		let current = n1;
		n1 = n2;
		n2 = current + n2;
	}
	return arr.join(", ");
}

function fibRec(c, n1 = 0, n2 = 1) {
	if (c == 0) return "";
	return (c == 1 ? n1 : `${n1}, `) + fibRec(c - 1, n2, n1 + n2);
}

console.log("\nFibonacci\n");
console.log("Iterative Version:");
console.log(fib(8));
console.log("\nRecursive Version:");
console.log(fibRec(8));
console.log("\n");
