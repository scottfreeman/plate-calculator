import React, { Dispatch, SetStateAction } from 'react';

import { fonts } from '@/app/fonts';

type Props = {
  weight: string;
  barWeight: number;
  setWeight: Dispatch<SetStateAction<string>>;
};

const Input = ({ weight, barWeight, setWeight }: Props) => {
  return (
    <div className='flex flex-col mb-5'>
      <div className={`uppercase text-left text-xl ml-14 ${fonts.header.className}`}>Weight</div>
      <div className='flex items-center'>
        <span
          className='text-3xl cursor-pointer bg-red-700 w-10 h-10 rounded-full text-center align-middle mr-4 select-none'
          onClick={() => {
            let newWeight = weight !== '' ? parseFloat(weight) : barWeight;
            if (newWeight) {
              newWeight = 2.5 * Math.ceil(newWeight / 2.5) - 2.5;
              if (newWeight >= barWeight) setWeight(newWeight.toString());
              if (newWeight < barWeight) setWeight(barWeight.toString());
            }
          }}
        >
          &ndash;
        </span>
        <div
          className='bg-gray-800 text-white border-2 border-red-600 rounded cursor-text'
          onClick={() => document.getElementById('input')?.focus()}
        >
          <input
            id='input'
            type='number'
            value={weight}
            onChange={(e) => {
              const weight = e.currentTarget.value;
              if (parseFloat(weight) < 9999 || weight == '') setWeight(weight);
            }}
            className={`bg-gray-800 text-white p-4 text-xl active:border-0 outline-0 w-32 text-right pr-0 ${fonts.header.className}`}
          />
          <span className={`p-4 pl-2 uppercase text-sm ${fonts.header.className}`}>kg</span>
        </div>
        <span
          className='text-3xl cursor-pointer bg-red-700 w-10 h-10 rounded-full text-center align-middle ml-4 select-none'
          onClick={() => {
            let newWeight = weight !== '' ? parseFloat(weight) : barWeight;
            if (!isNaN(newWeight)) {
              newWeight = 2.5 * Math.ceil(newWeight / 2.5) + 2.5;
              if (newWeight < 9999) setWeight(newWeight.toString());
            }
          }}
        >
          +
        </span>
      </div>
    </div>
  );
};

export default Input;
