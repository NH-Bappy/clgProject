import React from 'react';


const Card = (props) => {
const {src,className,alt,title} = props;

  return (
    <div className="w-fit">
      <div className="relative inline-block">
        <img src={src} alt={alt} className="w-[400px] h-[250px] block border-[2px]  border-gray-500 rounded-[13px] shadow-[4px_7px_7px_0_#00000042] cursor-pointer transition duration-400 hover:grayscale hover:scale-[1.03]" />
        <h3 className="absolute bottom-2 left-2 text-white text-3xl border-b-2  ">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Card;
