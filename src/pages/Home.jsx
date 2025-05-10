import React from 'react';
import Container from '../component/Container';
import { IoSearchOutline } from "react-icons/io5";
import Banner from '../component/Banner';

const Home = () => {
  return (
    <div
      className="h-[600px] bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url('/image/banner.jpg')` }}
    >
      <Container>
        <div className="h-14 flex items-center bg-[#00000027] text-white bg-opacity-60 rounded-md">
          <div className="w-2/12 bg-pink-700 text-3xl flex justify-center rounded-r-4xl">
            <h2>LOGO</h2>
          </div>

          <div className="w-8/12 flex justify-center relative">
            <input 
              type="text" 
              placeholder="Enter your District" 
              className="w-70 h-[30px] text-black text-base text-center rounded-lg pr-10 border-2" 
            />
            <IoSearchOutline className="absolute right-80 top-1/2 transform -translate-y-1/2 text-xl text-black" />
          </div>

          <div className="w-2/12 flex justify-center">
            <button className="bg-black py-[5px] px-[30px] text-xl rounded-lg">Login</button>
          </div>
        </div>
        <Banner/>
      </Container>
    </div>
  );
};

export default Home;
