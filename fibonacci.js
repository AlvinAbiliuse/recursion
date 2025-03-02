function fib(n) {
	let count = n;
	let n1 = 0;
	let n2 = 1;
	let arr = [];
	while (count !== 0) {
		count--;
		arr.push(n1);
		console.log(n1, n2);
		let c2 = n2;
		let c1 = n1;
		n1 = n2;
		n2 = c1 + c2;
	}
	console.log(arr.join(", "));
}

function fibRec(c, n1 = 0, n2 = 1) {
	if (c == 0) return "";
	return (c == 1 ? n1 : `${n1}, `) + fibRec(c - 1, n2, n1 + n2);
}

console.log(fib(8));
