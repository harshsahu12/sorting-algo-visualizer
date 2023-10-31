import { colors } from "../sortingVisualizer/colors";
import { swap } from "./swap";

export const insertionSort = (tempArr, speed) => {
    let count = 0;

	const arrayBars = document.getElementsByClassName('arrayBar');
	const arr = tempArr.map(item => item.val);

	for (let i = 1; i < arr.length; i++) {
		// color current comparing value
		setTimeout(() => {
			arrayBars[i].style.backgroundColor = colors.lightgreen;
			arrayBars[i - 1].style.backgroundColor = colors.lightgreen;
		}, count++ * speed);

		let j = i;
		while (j > 0 && arr[j] < arr[j - 1]) {
			let k = j; 

			setTimeout(() => {
				if (k !== i)
					arrayBars[k].style.backgroundColor = colors.green;
				arrayBars[k - 1].style.backgroundColor = colors.green;

				let temp = arrayBars[k].style.height;
				arrayBars[k].style.height = arrayBars[k - 1].style.height;
				arrayBars[k - 1].style.height = temp;
			}, count++ * speed);

			swap(j, j - 1, arr);

			setTimeout(() => {
				if (k !== i) arrayBars[k].style.backgroundColor = colors.lightgreen;
				arrayBars[k - 1].style.backgroundColor = colors.lightgreen;
			}, count++ * speed);
			j--;
		}
		// set the color to normal color
		setTimeout(() => {
			arrayBars[i].style.backgroundColor = colors.lightgreen;
			arrayBars[i - 1].style.backgroundColor = colors.lightgreen;
		}, count * speed);
	}
	return { arr, count };
}