function fib(n) {
	let count = 0;
	let n1 = 0;
	let n2 = 1;
}

function fibRec(c, n1 = 0, n2 = 1) {
	if (c == 0) return "";
	return (c == 1 ? n1 : `${n1}, `) + fibRec(c - 1, n2, n1 + n2);
}

console.log(fibRec(21));
