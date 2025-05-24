import React from 'react';
import Container from './Container';
import Card from './Card';

import dhaka from '../image/dhaka.jpg';
import chittagong from '../image/chittagong.jpg';
import rangpur from '../image/rangpur.jpg';
import sylhet from '../image/sylhet.jpg';
import barishal from '../image/barishal.jpg';
import khulna from '../image/khulna.webp';
import rajshahi from '../image/rajshahi.jpg';
import mymensingh from '../image/mymensingh.jpg';
import bazar from '../image/bazar.jpg';

const divisions = [
  { title: 'ঢাকা', src: dhaka },
  { title: 'চট্টগ্রাম', src: chittagong },
  { title: 'রংপুর', src: rangpur },
  { title: 'সিলেট', src: sylhet },
  { title: 'বরিশাল', src: barishal },
  { title: 'খুলনা', src: khulna },
  { title: 'রাজশাহী', src: rajshahi },
  { title: 'ময়মনসিংহ', src: mymensingh },
  { title: "কক্সবাজার ", src: bazar },
];

const Division = () => {
  return (
    <div className='py-20'>
      <Container>
        <div className="w-full bg-gray-50 rounded-xl shadow-md">
          <h2 className='text-4xl font-bold py-3 flex justify-center border-b-[0.5px] border-b-white'>
            বিভাগ
          </h2>
          <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
            {divisions.map((division, index) => (
              <Card
                key={index}
                title={division.title}
                src={division.src}
                alt={division.src}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Division;
