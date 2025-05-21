import React, { useState } from 'react';
import Container from '../component/Container';
import { IoSearchOutline } from "react-icons/io5";
import Banner from '../component/Banner';
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";


const Home = () => {

const [Sidebar,setSidebar] = useState(false);


const showSidebar = (e) => {
  e?.preventDefault();
  setSidebar(true);
}


const hidebar = (e) => {
  e?.preventDefault();
  setSidebar(false)
}



  return (
    <div
      className="h-[600px] bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url('/image/banner.jpg')` }}
    >
      <Container>{Sidebar && (
        <div class=" fixed top-0 right-0 h-screen w-full z-[999] bg-white/20 backdrop-blur-[10px] shadow-[-10px_0_10px_rgba(0,0,0,0.2)] flex-col items-start justify-start">
        <ul className=''>
          <li className='w-full py-[25px] px-4 text-3xl flex justify-end' onClick={hidebar}><a href="#"><RxCross1/></a></li>
          <li className='w-full flex justify-center'><button className="text-xl">Login</button></li>
        </ul>
      </div>
      )}

        <div className="h-14 flex items-center bg-[#00000027] text-white bg-opacity-60 rounded-md">
          <div className="w-2/12 bg-pink-700 text-3xl flex justify-center rounded-r-4xl">
            <h2>LOGO</h2>
          </div>

          <div className="w-8/12 flex justify-center relative">
            <input 
              type="text" 
              placeholder="Enter your District" 
              className="xs:w-40 sm:w-72 h-[30px]  text-black text-base text-center rounded-lg pr-10 border-2" 
            />
            <IoSearchOutline className="absolute right-80 top-1/2 transform -translate-y-1/2 text-xl text-black" />
          </div>

          <div className="w-2/12 flex justify-center">
          <HiOutlineBars3CenterLeft  onClick={showSidebar} className='text-4xl text-pink-700 sm:hidden'/>
            <button className="xs:hidden sm:block  bg-black py-[5px] px-[30px] text-xl rounded-lg">Login</button>
          </div>
        </div>
        <Banner/>
      </Container>
    </div>
  );
};

export default Home;
