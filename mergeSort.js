function merge(left, right) {
	let total = left.length + right.length;
	let mergedArr = [];
	for (let i = 0; i < total; i++) {
		if (left[0] <= right[0]) {
			mergedArr.push(left.shift());
		} else if (right[0] < left[0]) {
			mergedArr.push(right.shift());
		}
	}
	mergedArr.push(...left);
	mergedArr.push(...right);

	return mergedArr;
}

function mergeSort(arr) {
	if (arr.length === 1) return arr;
	let halfway = Math.floor(arr.length / 2);

	let lh = mergeSort(arr.slice(0, halfway));
	let rh = mergeSort(arr.slice(halfway, arr.length));
	return merge(lh, rh);
}
let sortArr = [
	1, 142, 153, 15, 95, 4, 421, 124, 65, 86, 45, 7436, 53, 87, 24, 423, 754, 87,
	1,
];

let sortArr2 = [4, 5, 6, 8, 2, 1, 3, 9, 0, 7];

/* 
let sortArr = [3, 2, 1, 13, 8, 5, 0, 1];

let sortArr2 = [105, 79, 100, 110];

*/

let startTime, endTime;
console.log("\n\nMerge Sort");
console.log("\n\n");
console.log("Unsorted: ");
console.log(sortArr);
console.log("\nSorted: ");
startTime = new Date();
console.log(mergeSort(sortArr));
endTime = new Date();
console.log(`\nTime Elapsed: ${endTime.getTime() - startTime.getTime()} ms`);
console.log("\n\n");
console.log("Unsorted: ");
console.log(sortArr2);
console.log("\nSorted: ");
startTime = new Date();
console.log(mergeSort(sortArr2));
endTime = new Date();
console.log(`\nTime Elapsed: ${endTime.getTime() - startTime.getTime()} ms`);
console.log("\n\n");

export { mergeSort };
