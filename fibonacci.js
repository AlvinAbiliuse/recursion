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
	return arr;
	/* comma seperated string version:
	return arr.join(", ")
	*/
}

function fibRec(c, n1 = 0, n2 = 1) {
	if (c == 0) return "";
	return [n1, ...fibRec(c - 1, n2, n1 + n2)];
	/* comma seperate string version: 
	return c == 1 ? n1 : `${n1}, ` + fibRec(c - 1, n2, n2 + n1);
	*/
}

console.log("\nFibonacci\n");
console.log("\nIterative Version:\n");
let iterativeTime = new Date().getTime();
console.log(fib(20));
console.log(
	"\nElapsed Time (seconds): ",
	(new Date().getTime() - iterativeTime) / 1000
);
console.log("\n\nRecursive Version:\n");
let recursiveTime = new Date().getTime();
console.log(fibRec(20));
console.log(
	"\nElapsed Time (seconds): ",
	(new Date().getTime() - recursiveTime) / 1000
);
console.log("\n");

export { fib, fibRec };
