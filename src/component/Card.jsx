import React from 'react';
import dhaka from '../image/dhaka.jpg';

const Card = () => {
  return (
    <div className="w-fit">
      <div className="relative inline-block">
        <img src={dhaka} alt="Dhaka" width={400} className="block border-[2px] border-[#ff3d0036] rounded-[13px] shadow-[4px_7px_7px_0_#00000042] cursor-pointer transition duration-400 hover:grayscale hover:scale-[1.03]" />
        <h3 className="absolute bottom-2 left-2 text-white text-3xl border-b-2  ">
          Dhaka
        </h3>
      </div>
    </div>
  );
};

export default Card;
