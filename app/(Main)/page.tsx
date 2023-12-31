'use client';

import React, {useEffect, useState} from "react";
import Header from "../../components/Layout/Header";
import Hero from "@/components/Route/Hero";
import About from "@/components/Route/About";
import Image from "next/image";
import {styles} from "@/utils/styles";
import PromptCard from "@/components/Prompts/PromptCard";
import BestSellers from "@/components/Shop/BestSellers";
import Future from "@/components/Route/Future";
import Partners from "@/components/Route/Partners";
import SellersBanner from "@/components/Shop/SellersBanner";
import {Divider} from "@nextui-org/react";
import Footer from "@/components/Layout/Footer";
import axios from "axios"
import Loader from "@/utils/Loader";

type Props = {
   activeItem: number
};

const Page = ({activeItem}: Props) => {
   const [isMounted, setIsMounted] = useState(false);
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(false);
   useEffect(() => {
	  if (!isMounted) {
		 setIsMounted(true)
	  }
   }, [isMounted]);

   useEffect(() => {
	  setLoading(true)
	  axios.get("/api/me").then((res) => {
		 setUser(res.data.user);
		 setLoading(false);
	  }).catch((err) => {
		 console.log(err)
		 setLoading(false);
	  })

   }, [])


   if (!isMounted) {
	  return null;
   }


   return (
	   <>
		  {
			 loading ? (
				 <Loader/>
			 ) : (
				 <div>
					<div className={"banner"}>
					   <Header activeItem={0} user={user}/>
					   <Hero/>
					</div>
					<Image
						src={"https://pixner.net/aikeu/assets/images/footer/shape-two.png"}
						width={120}
						height={120}
						alt=""
						className="absolute right-[-30px]"
					/>
					<br/>
					<div className={"w-[95%] md:w-[90%] xl:w-[80%] 2xl:w-[75%] m-auto"}>
					   <About/>
					   <div className={`${styles.heading} p-2 font-Monserrat`}>
						  Latest Prompts
						  <div className="flex flex-wrap">
							 <PromptCard/>
							 <PromptCard/>
							 <PromptCard/>
							 <PromptCard/>
							 <PromptCard/>
							 <PromptCard/>
							 <PromptCard/>
							 <PromptCard/>
						  </div>
						  <br/>
						  <BestSellers/>
						  <Future/>
						  <Partners/>
						  <SellersBanner/>
						  <br/>
						  <br/>
						  <Divider className={"bg-[#111111f18]"}/>
						  <Footer/>
					   </div>
					</div>
				 </div>
			 )
		  }
	   </>
   );
};

export default Page;
