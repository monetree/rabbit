import React from "react";
import blogarrow from "../../assets/images/blogarrow.svg";
import human from "../../assets/images/human.svg";

const Card = ({ author, name, img, time }) => {
  return (
    <div className="bg-white rounded-xl flex max-h-[140px]">
      <div className="w-1/2 max-w-[170px] relative">
        <img
          src={img}
          className="rounded-xl w-full h-full object-cover absolute"
          alt=""
        />
        <div className="absolute z-10 text-xxs text-white p-2 py-1 m-2 bg-[#00000065] rounded-md">
          {time}
        </div>
      </div>
      <div className="p-4 space-y-2 w-1/2 flex flex-col justify-between">
        <div>
          <div className="flex items-center text-xs text-darkGreen">
            <img src={human} className="h-3" alt="" />
            <div className="pl-2 pt-1">{author}</div>
          </div>
          <div className="font-bold text-black pt-3 text-sm">{name}</div>
        </div>
        <div className="flex items-center text-xs text-darkGreen font-medium uppercase">
          <div className="pt-1">Read more</div>
          <img src={blogarrow} className="h-2 pl-2" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
