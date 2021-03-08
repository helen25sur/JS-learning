function findSmallest(arr) {
	let smallest = arr[0];
	let smallestIndex = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < smallest) {
			smallest = arr[i];
			smallestIndex = i;

		}
	}
	return smallestIndex;
}

function selectionSort(arr) {
	const newArr = [];
	const arrLength = arr.length;
	for (let i = 0; i < arrLength; i++) {
		let smallest = findSmallest(arr);
		newArr.push(arr[smallest]);
		arr.splice(smallest, 1);
	}
	return newArr;
}

const arrForSort = [15, 0, 1, 90, 75, 102, 3, 10, 17];
console.log(arrForSort);
console.log(selectionSort(arrForSort));