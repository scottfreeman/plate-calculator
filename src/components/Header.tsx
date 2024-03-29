import React, { useState } from 'react';
import Link from 'next/link';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

import { fonts } from '@/app/fonts';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className='mb-5'>
      <h1 className={`text-5xl leading-10 text-center uppercase ${fonts.header.className}`}>Plate Calculator</h1>
      <div className='absolute top-2 right-2'>
        <button onClick={toggleDrawer} aria-label='About Plate Calculator'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='w-9 h-9 fill-black stroke-white'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z'
            />
          </svg>
        </button>
      </div>
      <Drawer open={isOpen} onClose={toggleDrawer} direction='right'>
        <div className='bg-gray-900 border-l-4 border-red-600 h-full p-4 overflow-x-auto'>
          <div className={`${fonts.header.className} uppercase text-xl mt-2 mb-2`}>Hello!</div>
          <p className='mb-4'>The only difficult thing at the gym should be moving the weights, not adding them up.</p>
          <p className='mb-4'>
            Use the <strong>Plate Calculator</strong> to make loading your bar easy!
          </p>
          <div className={`${fonts.header.className} uppercase text-xl mt-8 mb-2`}>How to use</div>
          <p className='mb-4'>
            Enter the weight you want to load, and optionally select the weight of the bar and if you&apos;re using
            calibrated collars.
          </p>
          <p className='mb-4'>The weight you need to load on each side of the bar is then displayed.</p>
          <p className='mb-4'>Use the plus and minus buttons to change the weight in 2.5kg increments.</p>
          <div className={`${fonts.header.className} uppercase text-xl mt-8 mb-2`}>Add to your phone</div>
          <p className='mb-4'>
            If you&apos;re using an iPhone or an Android, you can install the <strong>Plate Calculator</strong> on your
            phone and access it easily, even without Internet access.
          </p>
          <p className='mb-4'>
            On an iPhone, tap the <em>Share</em> icon on the bottom of the screen, and tap <em>Add to Home Screen</em>.
          </p>
          <p className='mb-4'>
            On an Android, tap the <em>three dots</em> on the top right of the screen, and tap{' '}
            <em>Add to Home Screen</em>.
          </p>
          <div className={`${fonts.header.className} uppercase text-xl mt-8 mb-2`}>About</div>
          <p className='mb-4'>
            Created by Scott Freeman,
            <br />
            and free for all to use.
          </p>
          <p className='mb-20 md:mb-4'>
            Comments and feedback welcome! Please email{' '}
            <Link href='mailto:email@scottfreeman.net' className='underline text-blue-300'>
              email@scottfreeman.net
            </Link>
          </p>
          <div className='absolute top-2 right-2 bg-gray-900 border border-none rounded-full w-9 h-9'>
            <button onClick={toggleDrawer} aria-label='Close about Plate Calculator'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='w-9 h-9'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
