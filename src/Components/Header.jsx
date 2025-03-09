import React, { useState } from "react";
import { HiOutlineBars3BottomLeft , HiMiniXMark} from "react-icons/hi2";
import MenuOverLay from "./MenuOverLay";


function Header() {
    const[toggle, setToggle]=useState(false);
  const menuList = [
    { id: 1, title: "HOME" },
    { id: 2, title: "ABOUT" },
    { id: 3, title: "SERVICE" },
    { id: 4, title: "PORTFOLIO" },
    { id: 5, title: "CONTACT" },
  ];

  return (
    <div className="flex justify-between items-center px-2.5">
    <div>
    <h2 className="text-[24px] font-bold text-white ">HANEEN <span className="text-red-500" >SWEEDAN</span></h2>
    </div>
    <ul className="hidden md:flex gap-4">
        {menuList.map((item)=>(
          <li className="text-white hover:border-[1px] border-red-500 rounded-full text-[15px] px-3 py-1 cursor-pointer" >{item.title}</li>
        ))}
    <h2 className="text-white hover:border-[1px] hover:bg-gradient-to-r from-red-500 to-red-800 border-red-500 rounded-full text-[15px] px-3 py-1 cursor-pointer" >HERE ME</h2>
    </ul>

    <div className="md:hidden block" >
        
    {!toggle ?<HiOutlineBars3BottomLeft onClick={()=>setToggle(!toggle)}  className="text-white text-[22px]" />
    :<HiMiniXMark onClick={()=>setToggle(!toggle)} className="text-white text-[22px]" />}
    {toggle ? <MenuOverLay menuList={menuList} />: null }
    </div>
    </div>
  );
}

export default Header;
