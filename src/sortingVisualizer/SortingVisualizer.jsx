import { useState } from 'react';
import './visualizer.css'
import { colors } from './colors';

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [arrayLength, setArrayLength] = useState(70);
  const [able, setAble] = useState(true);
  return (
    <div className='sorting_visualizer'>
      <header>
        <h1>Sorting Visualizer <img src="assets/sort.png" alt="" /></h1>
        <div className='slider_container'>
          <label>Length of Array</label>
          <input
            className='input_range able'
            type='range'
            min='7'
            max='150'
          />
        </div>
        <div className='slider_container'>
          <label>Speed</label>
          <input
            className='input_range able'
            type='range'
            min='350'
            max='499'
          />
        </div>
        <div className='select_box able'>
          <label htmlFor='algo'>select algorithm</label>
          <select
            name='algo'
            id='select'
          >
            <option value='bubblesort'>bubble sort</option>
            <option value='mergesort'>merge sort</option>
            <option value='insertionsort'>insertion sort</option>
            <option value='selectionsort'>selection sort</option>
            <option value='quicksort'>quick sort</option>
            <option value='heapsort'>heap sort</option>
          </select>
        </div>
      </header>
      <div className='array_container'>
        {array.map(item => {
          return (
            <div
              className='arrayBar'
              style={{
                height: `${item.val}px`,
                backgroundColor: colors.green,
              }}
              key={item.idx}
            >
              {arrayLength < 29 && able && <span>{item.val}</span>}
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default SortingVisualizer