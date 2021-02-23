// Функция проводит бинарный поиск по отсортированному массиву и возвращает индекс загаданного числа
function binarySearch(list, item) {
	let low = 0;
	let high = list.length - 1;

	while (low <= high) {
		let mid = Math.floor((low + high) / 2);
		let guess = list[mid];
		if (guess === item) {
			return mid;
		}
		if (guess > item) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}
	return null;
}

const myList = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];

console.log(binarySearch(myList, 11));