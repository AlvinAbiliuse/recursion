function fibonacci(count, n1 = 0, n2 = 1) {
	if (count == 0) return "";
	return n1 + ", " + fibonacci(count - 1, n2, n1 + n2);
}

console.log(fibonacci(8));
