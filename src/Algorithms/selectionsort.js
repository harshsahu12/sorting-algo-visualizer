import { colors } from "../sortingVisualizer/colors";
import { swap } from "./swap";

export const selectionSort = (tempArr, animationSpeed) => {
    const arr = tempArr.map(item => item.val);
	const arrayBars = document.getElementsByClassName('arrayBar');

	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		// initially minidx is set to i
		let minIdx = i;

		// change the color of the minIdx to red to identify
		setTimeout(() => {
			arrayBars[minIdx].style.backgroundColor = colors.darkgreen;
		}, count * animationSpeed);
		count++;

		// traverse for the next smallest item
		for (let j = i + 1; j < arr.length; j++) {
			// current item color to orange
			setTimeout(() => {
				arrayBars[j].style.backgroundColor = colors.green;
			}, (count + 2) * animationSpeed);

			let oldMinIdx;
			if (arr[j] < arr[minIdx]) {
				oldMinIdx = minIdx;
				minIdx = j;

				// change the old minIdx to default color
				setTimeout(() => {
					arrayBars[oldMinIdx].style.backgroundColor = colors.lightgreen;
				}, (count + 3) * animationSpeed);
			}
			// changing the current item to default color
			setTimeout(() => {
				arrayBars[j].style.backgroundColor = colors.lightgreen;
			}, (count + 3) * animationSpeed);
			count++;
		}

		swap(i, minIdx, arr);

		// swap the heights and color the sorted item green
		setTimeout(() => {
			let temp = arrayBars[i].style.height;
			arrayBars[i].style.height = arrayBars[minIdx].style.height;
			arrayBars[minIdx].style.height = temp;
			arrayBars[i].style.backgroundColor = colors.green;
		}, (count + 3) * animationSpeed);
		count++;
	}
	return { arr, count };
}