import { colors } from "../sortingVisualizer/colors";

export const bubbleSort = (tempArr, animationSpeed) => {
	const arr = tempArr.map(item => item.val);
	let count = 0;

	const arrayBars = document.getElementsByClassName('arrayBar');

	for (let i = 0; i < arr.length - 1; i++) {
		let swapped = false;
		for (let j = 0; j < arr.length - i - 1; j++) {
			// colors it up to active
			setTimeout(() => {
				arrayBars[j].style.backgroundColor = colors.green;
				arrayBars[j + 1].style.backgroundColor = colors.green;
			}, count++ * animationSpeed);

			if (arr[j] > arr[j + 1]) {
				// swap the heights
				setTimeout(() => {
					arrayBars[j].style.backgroundColor = colors.darkgreen;
					arrayBars[j + 1].style.backgroundColor = colors.darkgreen;

					let temp = arrayBars[j].style.height;
					arrayBars[j].style.height = arrayBars[j + 1].style.height;
					arrayBars[j + 1].style.height = temp;
				}, count++ * animationSpeed);

				count += 1;
				swapped = true;

				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
			// color back to normal
			setTimeout(() => {
				arrayBars[j].style.backgroundColor = colors.lightgreen;
				arrayBars[j + 1].style.backgroundColor = colors.lightgreen;
			}, count++ * animationSpeed);
		}
		setTimeout(() => {
			arrayBars[arr.length - i - 1].style.backgroundColor =
				colors.green;
			if (swapped === false) {
				for (let x = 0; x < i; x++) {
					arrayBars[x].style.backgroundColor = colors.green;
				}
			}
		}, count * animationSpeed);
		if (swapped === false) break;
	}

	return { arr, count };
};
