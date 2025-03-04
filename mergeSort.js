function merge(left, right) {
	let c = 0;
	let j = 0;
	let k = left.length + right.length;
	let mergedArr = [];
	for (let i = 0; i < k; i++) {
		if (left.lenght === 0) {
			mergedArr.push(...right);
		} else if (right.length === 0) {
			mergedArr.push(...left);
		} else if (left[0] < right[0]) {
			mergedArr.push(left.shift());
		} else if (right[0] < left[0]) {
			mergedArr.push(right.shift());
		}
	}
	mergedArr.push(...left);
	mergedArr.push(...right);

	/*
	while (c !== left.length && j !== right.length) {
		console.log(c, j);
		console.log(left, right);
		if (left[c] < right[j]) {
			mergedArr.push(left[c++]);
		} else if (right[j] < left[c]) {
			mergedArr.push(right[j++]);
		}
	}
	if (c == left.length) {
		mergedArr.push(right[j++]);
	} else if (j == right.length) {
		mergedArr.push(left[c++]);
	}
	*/
	return mergedArr;
}

function mergeSort(arr) {
	if (arr.length === 1) return arr;
	let halfway = Math.floor(arr.length / 2);

	let lh = mergeSort(arr.slice(0, halfway));
	let rh = mergeSort(arr.slice(halfway, arr.length));
	return merge(lh, rh);
}

/* let sortArr = [
	1, 142, 153, 15, 95, 4, 421, 124, 65, 86, 45, 7436, 53, 87, 24, 423, 754, 87,
	1,
]

let sortArr2 = [4, 5, 6, 8, 2, 1, 3, 9, 0, 7];
*/

let sortArr = [3, 2, 1, 13, 8, 5, 0, 1];

let sortArr2 = [105, 79, 100, 110];
/*
let m1 = merge([4, 5, 6, 8, 2], [1, 3, 9, 0, 7]);
let m2 = merge([105, 79], [100, 110]);
let m1Second = merge(
	m1.slice(0, Math.floor(m1.length / 2)),
	m1.slice(Math.floor(m1.length / 2), m1.length)
);
let m2Second = merge(
	m2.slice(0, Math.floor(m2.length / 2)),
	m2.slice(Math.floor(m2.length / 2), m2.length)
);

console.log(m1);
console.log(m1Second);
console.log(m2);
console.log(m2Second);

*/
console.log("\n\n");
console.log(sortArr);
console.log(mergeSort(sortArr));
console.log("\n\n");
console.log(sortArr2);
console.log(mergeSort(sortArr2));
