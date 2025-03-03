function merge(left, right) {}

function bubbleSort(arr, arr2 = []) {
	if ((arr.length = 1)) return arr;
	let halfway = Math.floor(arr.length / 2);

	let lh = bubbleSort(arr.slice(0, halfway));
	let rh = bubbleSort(arr.slice(halfway, arr.length));
}

let sortArr = [
	1, 142, 153, 15, 95, 4, 421, 124, 65, 86, 45, 7436, 53, 87, 24, 423, 754, 87,
	1,
];

let sortArr2 = [1, 5, 6, 8, 2, 4, 3, 9, 0, 7];

/*
console.log("\n\n");
console.log(sortArr);
console.log(bubbleSort(sortArr));
console.log("\n\n");
console.log(sortArr2);
console.log(bubbleSort(sortArr2));
*/
