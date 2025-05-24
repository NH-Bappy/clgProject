import React, { useState } from 'react';
import Container from '../component/Container';
import Banner from '../component/Banner';
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { FaHome } from "react-icons/fa";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = (e, value) => {
    e?.preventDefault();
    setIsSidebarOpen(value);
  };

  return (
    <div
      className="bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url('/image/banner.jpg')` }}
    >
      <Container>
        {isSidebarOpen && (
          <div className="fixed top-0 right-0 h-screen w-full z-[999] bg-white/20 backdrop-blur-[10px] shadow-[-10px_0_10px_rgba(0,0,0,0.2)]  flex flex-col">
            <ul>
              <li className="w-full py-6 px-4 text-3xl flex justify-end ">
                <button onClick={(e) => toggleSidebar(e, false)}><RxCross1  className='text-white hover:text-black'/></button>
              </li>
              <li className="w-full">
              <nav className="text-2xl text-white flex-col">
              <li className='py-4'><a href="#" className='hover:text-black '><FaHome /></a></li>
              <li className='py-3'><a href="#" className='hover:text-black'>বিভাগ</a></li>
              <li className='py-3'><a href="#" className='hover:text-black'>ভ্রমণ কাহিনী</a></li>
              <li className='py-3'><a href="#" className='hover:text-black'>তথ্য ভান্ডার</a></li>
              <li className='py-3'><a href="#" className='hover:text-black'>খাবার</a></li>
              <li className='py-3'><a href="#" className='hover:text-black'>যোগাযোগ</a></li>
            </nav>
              </li>
            </ul>
          </div>
        )}

        <header className="h-14 flex items-center bg-[#000000] text-white bg-opacity-60">
          <div className="w-2/12 bg-pink-700 text-3xl flex justify-center rounded-r-4xl">
            <h2>LOGO</h2>
          </div>

          <div className="flex-1 flex justify-around items-center gap-4 px-4 ">
            
          <div className="relative w-fit">
            <input
            type="text"
            placeholder="জেলার নাম লিখুন"
            className="xs:w-40 sm:w-72 h-[30px] text-white text-base text-center rounded-lg pr-10 border-2"
  />
  <IoSearchOutline className="absolute right-2  top-1/2 transform -translate-y-1/2 text-xl font-bold text-white" />
</div>

            
            <nav className="hidden sm:flex gap-6 items-center text-white text-xl ">

              <a href="#" className='hover:font-semibold'><FaHome /></a>
              <a href="#" className='hover:font-semibold'>বিভাগ</a>
              <a href="#" className='hover:font-semibold'>ভ্রমণ কাহিনী</a>
              <a href="#" className='hover:font-semibold'>তথ্য ভান্ডার</a>
              <a href="#" className='hover:font-semibold'>খাবার</a>
              <a href="#" className='hover:font-semibold'>যোগাযোগ</a>
            </nav>

            <HiOutlineBars3CenterLeft 
              onClick={(e) => toggleSidebar(e, true)} 
              className="text-4xl text-white sm:hidden ml-auto cursor-pointer" 
            />
          </div>
        </header>

        <Banner />
      </Container>
    </div>
  );
};

export default Home;
