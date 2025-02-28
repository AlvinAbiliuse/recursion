function fib(c, n1 = 0, n2 = 1) {
	if (c == 0) return "";
	return (c == 1 ? n1 : `${n1}, `) + fib(c - 1, n2, n1 + n2);
}
console.log(fib(21));
