function merge(left, right) {
	let c = 0;
	let j = 0;
	let k = 0;
	let mergedArr = [];
	while (c !== left.length || j !== right.length) {
		if (c == left.length) {
			mergedArr.push(right[j++]);
		} else if (j == right.length) {
			mergedArr.push(left[c++]);
		} else if (left[c] < right[j]) {
			mergedArr.push(left[c++]);
		} else if (right[j] < left[c]) {
			mergedArr.push(right[j++]);
		}
	}
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
*/

let sortArr2 = [4, 5, 6, 8, 2, 1, 3, 9, 0, 7];

console.log("\n\n");
console.log(sortArr);
console.log(mergeSort(sortArr));
console.log("\n\n");
console.log(sortArr2);
console.log(mergeSort(sortArr2));
