function merge(left, right) {
	let c = 0;
	let j = 0;
	let k = 0;
	let mergedArr = [];
	while (left.length !== 0 || right.length !== 0) {
		if (left[0] < right[0]) {
			mergeArr.push(left.shift());
		} else {
			mergeArr.push(right.shift());
		}
		if (left.length !== 0) {
			mergeArr.push(left.shift());
		} else if (right.length !== 0) {
			mergeArr.push(right.shift());
		}
	}
	return mergedArr;
}

function bubbleSort(arr, arr2 = []) {
	if ((arr.length = 1)) return arr;
	let halfway = Math.floor(arr.length / 2);

	let lh = arr.slice(0, halfway);
	let rh = arr.slice(halfway, arr.length);
	return merge(lh, rh);
}

let sortArr = [
	1, 142, 153, 15, 95, 4, 421, 124, 65, 86, 45, 7436, 53, 87, 24, 423, 754, 87,
	1,
];

let sortArr2 = [1, 5, 6, 8, 2, 4, 3, 9, 0, 7];

console.log("\n\n");
console.log(sortArr);
console.log(bubbleSort(sortArr));
console.log("\n\n");
console.log(sortArr2);
console.log(bubbleSort(sortArr2));
