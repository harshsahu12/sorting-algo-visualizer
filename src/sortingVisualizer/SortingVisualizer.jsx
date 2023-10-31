import { useEffect, useState } from 'react';
import './visualizer.css'
import { colors } from './colors';
import { bubbleSort } from '../Algorithms/bubblesort';
import { mergeSort } from '../Algorithms/mergesort';
import { heapSort } from '../Algorithms/heapsort';
import { selectionSort } from '../Algorithms/selectionsort';
import { insertionSort } from '../Algorithms/insertionsort';
import { quickSort } from '../Algorithms/quicksort';


const generateRandomNumber = (i, j) => {
  return Math.floor(i + Math.random() * (j - i));
}
const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [arrayLength, setArrayLength] = useState(70);
  const [speed, setSpeed] = useState(10);
  const [algo, setAlgo] = useState('mergesort');
  const [able, setAble] = useState(true);

  useEffect(() => {
    if (able) populateArray(arrayLength);
  }, [arrayLength, algo]);

  useEffect(() => {
    const items = document.getElementsByClassName('able');

    if (!able) {
      for (let i = 0; i < items.length; i++) {
        items[i].style.pointerEvents = 'none';
        items[i].disabled = true;
      }
    } else {
      for (let i = 0; i < items.length; i++) {
        items[i].style.pointerEvents = 'auto';
        items[i].disabled = false;
      }
    }
  }, [able]);

  const populateArray = size => {
    const tempArr = [];
    for (let i = 0; i < size; i++) {
      const item = {
        idx: i,
        val: generateRandomNumber(25, 500),
      };
      tempArr.push(item);
      if (document.getElementsByClassName('arrayBar')[i] != null) {
        document.getElementsByClassName('arrayBar')[i].style.backgroundColor =
          colors.lightgreen;
      }
    }
    if (able) setArray(tempArr);
  };

  const colorEveryElement = (arr, counter) => {
    setTimeout(() => {
      const sortedArray = [];
      for (let i = 0; i < arr.length; i++) {
        document.getElementsByClassName('arrayBar')[i].style.backgroundColor =
          colors.green;

        sortedArray.push({
          idx: i,
          val: arr[i],
        });
      }
      setArray(sortedArray);
      setAble(true);
    }, counter * speed);
  };

  // BUBBLE SORT
  const bubbleSortAnimate = () => {
    setAble(false);
    const { arr, count } = bubbleSort(array, speed);
    colorEveryElement(arr, count + 1);
  };


  // MERGE SORT
  const mergeSortAnimate = () => {
    setAble(false);
    const { sortedArray, count } = mergeSort(array, speed);
    colorEveryElement(sortedArray, count + 5);
  }

  // SELECTION SORT
  const selectionSortAnimate = () => {
    setAble(false);
    const { arr, count } = selectionSort(array, speed);
    colorEveryElement(arr, count + 1);
  }

  // INSERTION SORT
  const insertionSortAnimate = () => {
    setAble(false);
    const { arr, count } = insertionSort(array, speed);
    colorEveryElement(arr, count + 1);
  }

  // QUICK SORT
  const quicksortAnimate = () => {
    setAble(false);
    const { arr, count } = quickSort(array, speed);
    colorEveryElement(arr, count + 1);
  }

  // HEAP SORT
  const heapsortAnimate = () => {
    setAble(false);
    const { arr, count } = heapSort(array, speed);
    colorEveryElement(arr, count + 1);
  }

  const startSorting = (algo) => {
    switch (algo) {
      case 'bubblesort':
        bubbleSortAnimate();
        break;

      case 'mergesort':
        mergeSortAnimate();
        break;

      case 'selectionsort':
        selectionSortAnimate();
        break;

      case 'insertionsort':
        insertionSortAnimate();
        break;
      case 'quicksort':
        quicksortAnimate();
        break;
      case 'heapsort':
        heapsortAnimate();
        break;
      default:
        mergeSortAnimate();
        break;
    }
  }
  return (
    <div className='sorting_visualizer'>
      <div className='array_container'>
        {array.map(item => (
          <div
            className='arrayBar'
            style={{
              height: `${item.val}px`,
              backgroundColor: colors.lightgreen,
            }}
            key={item.idx}
          >
            {arrayLength < 29 && able && <span>{item.val}</span>}
          </div>
        ))}
      </div>
      <header>
        <h1>Sorting Algorithm Visualizer <img src="assets/sort.png" alt="" /></h1>
        <div className='slider_container'>
          <label>Length of Array</label>
          <input
            className='input_range able'
            type='range'
            min='7'
            max='150'
            value={arrayLength}
            onChange={e => setArrayLength(e.target.value)}
          />
        </div>
        <div className='slider_container'>
          <label>Speed</label>
          <input
            className='input_range able'
            type='range'
            min='350'
            max='499'
            value={500 - speed}
            onChange={e => setSpeed(500 - e.target.value)}
          />
        </div>
        <div className='select_box able'>
          <label htmlFor='algo'>select algorithm</label>
          <select
            name='algo'
            id='select'
            value={algo}
            onChange={e => setAlgo(e.target.value)}
          >
            <option value='bubblesort'>bubble sort</option>
            <option value='mergesort'>merge sort</option>
            <option value='insertionsort'>insertion sort</option>
            <option value='selectionsort'>selection sort</option>
            <option value='quicksort'>quick sort</option>
            <option value='heapsort'>heap sort</option>
          </select>
        </div>
        <span className='button able' onClick={() => startSorting(algo)}>
          <img src="assets/play.png" alt="" />
        </span>

        <span
          onClick={() => populateArray(arrayLength)}
          className='new-arr-btn button able'
        >
          <img src="assets/refresh.png" alt="" />
        </span>
      </header>
    </div>
  )
}

export default SortingVisualizer