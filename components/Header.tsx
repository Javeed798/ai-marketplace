"use client";

import Link from "next/link";
import React, {useState} from "react";
import Navigation from "./Navigation"
import {AiOutlineSearch} from "react-icons/ai";
import {CgProfile} from "react-icons/cg";
import {FaBars} from "react-icons/fa6";

type Props = {
   activeItem: number
};

const Header = ({activeItem}: Props) => {
   const [active, setActive] = useState(false);
   const [open, setOpen] = useState(false);

   if (typeof window !== "undefined") {
	  window.addEventListener("scroll", () => {
		 if (window.scrollY > 90) {
			setActive(true);
		 } else {
			setActive(false);
		 }
	  });
   }

   const handelClose = (e: React.MouseEvent) => {
	  const target = e.target as HTMLElement;
	  if (target.id === "screen") {
		 setOpen(!open)
	  }
   }

   return (
	   <div
		   className={`w-full p-5 border-b min-h-[60px] border-b-[#ffffff32] transition-opacity ${
			   active ? "fixed top-0 left-0 bg-[#000] z-[9999]" : ""
		   }`}
	   >
		  <div className="hidden md:w-[90%] mx-auto md:flex items-center justify-between">
			 <div>
				<Link href={"/"}>
				   <h1 className="font-Inter text-3xl cursor-pointer">
					  <span className="text-[#64ff4c]">Nim</span>buPani
				   </h1>
				</Link>
			 </div>

			 <div className="flex">
				<Navigation activeItem={activeItem}/>
			 </div>
			 <div className="flex ml-10">
				<AiOutlineSearch className={"text-[25px] mr-5 cursor-pointer"}/>
				{/*  Todo Authentication */}
				<Link href={"/sign-in"}>
				   <CgProfile className={"text-[25px] cursor-pointer"}/>
				</Link>
			 </div>

		  </div>
		  {/*  TOdo model */}

		  {/*  for mobile screen */}
		  <div className={"w-full md:hidden flex items-center justify-between"}>
			 <div>
				<Link href={"/"}>
				   <h1 className="font-Inter text-3xl cursor-pointer">
					  <span className="text-[#64ff4c]">Nim</span>buPani
				   </h1>
				</Link>
			 </div>
			 <FaBars className={"text-2xl cursor-pointer"} onClick={() => setOpen(!open)}/>

			 {
				 open && (
					 <div id={"screen"} onClick={handelClose}
						  className={"w-[30px] bg-unset fixed md:hidden h-screen top-0 left-0 z-[99999]"}>
						<div className="fixed bg-black h-screen top-0 right-0 w-[60%] z-[9999]">
						   <div className="mt-20 p-5">
							  <Navigation activeItem={activeItem}/>
							  {/*  Todo user info */}
						   </div>
						</div>
					 </div>
				 )
			 }
		  </div>
	   </div>
   );
};

export default Header;
