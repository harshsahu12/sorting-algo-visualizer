import { colors } from "../sortingVisualizer/colors";

let count = 0;

export const mergeSort = (tempArr, animationSpeed) => {
  const arr = tempArr.map((item) => item.val);
  count = 0;
  const sortedArray = mergeSortAnimation(
    arr,
    0,
    arr.length - 1,
    animationSpeed
  );
  return { sortedArray, count };
};

const mergeSortAnimation = (arr, low, high, animationSpeed) => {
  if (low > high) {
    return [];
  }

  if (low === high) {
    let aux = [];
    aux.push(arr[low]);
    return aux;
  }

  let mid = Math.floor((high + low) / 2);

  const right = mergeSortAnimation(arr, low, mid, animationSpeed);
  const left = mergeSortAnimation(arr, mid + 1, high, animationSpeed);

  const aux = [];
  let k = low;
  const arrayBars = document.getElementsByClassName("arrayBar");

  let li = 0, ri = 0; 
  while (li < left.length && ri < right.length) {
    let counter = count;
    let barIdx = k;

    if (left[li] < right[ri]) {
      aux.push(left[li]);
      let i = li;
      setTimeout(() => {
        arrayBars[barIdx].style.backgroundColor = colors.lightgreen;
        arrayBars[barIdx].style.height = `${left[i]}px`;
      }, counter * animationSpeed);

      setTimeout(() => {
        arrayBars[barIdx].style.backgroundColor = colors.darkgreen;
      }, (counter + 1) * animationSpeed);

      setTimeout(() => {
        arrayBars[barIdx].style.backgroundColor = colors.lightgreen;
      }, (counter + 1.5) * animationSpeed);
      li++;
    } else {
      aux.push(right[ri]);
      let i = ri;

      setTimeout(() => {
        arrayBars[barIdx].style.backgroundColor = colors.lightgreen;
        arrayBars[barIdx].style.height = `${right[i]}px`;
      }, counter * animationSpeed);

      setTimeout(() => {
        arrayBars[barIdx].style.backgroundColor = colors.darkgreen;
      }, (counter + 1) * animationSpeed);

      setTimeout(() => {
        arrayBars[barIdx].style.backgroundColor = colors.lightgreen;
      }, (counter + 1.5) * animationSpeed);
      ri++;
    }
    k++;
    count++;
  }

  if (li === left.length) {
    while (ri < right.length) {
      aux.push(right[ri]);
      let barIdx = k;
      let i = ri;
      let counter = count;

      setTimeout(() => {
        arrayBars[barIdx].style.backgroundColor = colors.lightgreen;
        arrayBars[barIdx].style.height = `${right[i]}px`;
      }, counter * animationSpeed);

      setTimeout(() => {
        arrayBars[barIdx].style.backgroundColor = colors.darkgreen;
      }, (counter + 1) * animationSpeed);

      setTimeout(() => {
        arrayBars[barIdx].style.backgroundColor = colors.lightgreen;
      }, (counter + 1.5) * animationSpeed);
      ri++;
      count++;
      k++;
    }
  } else if (ri === right.length) {
    while (li < left.length) {
      aux.push(left[li]);
      let barIdx = k;
      let i = li;
      let counter = count;

      setTimeout(() => {
        arrayBars[barIdx].style.backgroundColor = colors.lightgreen;
        arrayBars[barIdx].style.height = `${left[i]}px`;
      }, counter * animationSpeed);

      setTimeout(() => {
        arrayBars[barIdx].style.backgroundColor = colors.darkgreen;
      }, (counter + 1) * animationSpeed);

      setTimeout(() => {
        arrayBars[barIdx].style.backgroundColor = colors.lightgreen;
      }, (counter + 1.5) * animationSpeed);
      li++;
      k++;
      count++;
    }
  }
  return aux;
};
