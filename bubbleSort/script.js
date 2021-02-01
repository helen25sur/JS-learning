let numbers = [5, 18, 2, 15, 4, 7, 20];
const bubbleSort = arr => {
	for (let i = 0, iEnd = arr.length - 1; i < iEnd; i++) {
		let wasSwap = false;

		for (let j = 0, jEnd = iEnd - i; j < jEnd; j++) {
			if (arr[j] > arr[j + 1]) {
				let swap = arr[j];

				arr[j] = arr[j + 1];
				arr[j + 1] = swap;
				wasSwap = true;
			}
		}
		if (!wasSwap) {
			break;
		}
	}
	console.log(arr);
	return arr;
};

bubbleSort(numbers);
