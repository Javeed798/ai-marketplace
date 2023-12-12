'use client';

import {styles} from "@/utils/styles";
import {Input, Textarea} from "@nextui-org/react";
import {useUser} from "@clerk/nextjs";
import React, {useState} from "react";
import {Button} from "@nextui-org/button";
import toast from "react-hot-toast";

type Props = {};
const Page = (props: Props) => {

   const {user} = useUser();
   const [loading, setLoading] = useState(false);
   const [shopData, setShopData] = useState({
	  name: "",
	  description: "",
	  shopProductType: "",
	  avatar: ""
   });

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
	  e.preventDefault();
	  if (user) {
		 const data ={
			name : shopData.name,
			description : shopData.description,
			shopProductType : shopData.shopProductType,
			avatar : user?.imageUrl || "",
			userId : user?.id,
		 }
		 // send one post request
	  }
   }

   return (
	   <div className={"w-full h-screen flex flex-col justify-center"}>
		  <div>
			 <h1 className={`${styles.heading} text-center font-Monserrat`}>Start to selling with us</h1>
			 <form
				 onSubmit={handleSubmit}
				 className={"2xl:w-[40%] xl:w-[50%] md:w-[70%] w-[90%] m-auto"}>
				<div className="w-full my-5">
				   <label className={`${styles.label} mb-2 block`}>
					  Shop Name
				   </label>
				   <Input isRequired
						  type={"text"}
						  value={shopData.name}
						  onChange={(e) =>
							  setShopData({
								 ...shopData,
								 name: e.target.value
							  })}
						  variant={"bordered"}
						  size={"sm"}
						  label={"NimbuPani"}
				   />

				</div>

				<div className={"w-full my-5"}>
				   <label className={`${styles.label} mb-2 block`}>
					  Shop Description [Max 120 Letters]
				   </label>

				   <Input
					   isRequired
					   type="text"
					   label={"NimbuPani description"}
					   size={"sm"}
					   variant={"bordered"}
					   value={shopData.description}
					   onChange={(e) =>
						   setShopData({
							  ...shopData,
							  description: e.target.value
						   })}
					   maxLength={120}
				   />
				</div>
				<div className={"w-full my-5"}>
				   <label className={`${styles.label} mb-2 block`}>
					  What do you wanna sell with us
				   </label>
				   <Textarea
					   variant={"bordered"}
					   value={shopData.shopProductType}
					   onChange={(e) =>
						   setShopData({
							  ...shopData,
							  shopProductType: e.target.value
						   })}
					   required
					   placeholder={"ChatGPT, midJourney, "}
					   className={"col-span-12 md:col-span-6 md:mb-0"}
				   />
				   <br/>
				</div>

				<Button
					type="submit"
					disabled={loading}
					disableAnimation={loading}
					className={`w-full mb-3 bg-transparent h-[45px] border border-[#16c252] text-[#16c252] hover:bg-[#16c252] hover:text-black  duration-300 transition-opacity font-Inter font-[600]`}>
				   Create Shop
				</Button>
			 </form>
		  </div>
	   </div>
   );
};
export default Page;
