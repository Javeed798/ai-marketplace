import {
   Avatar,
   Card, Divider,
} from "@nextui-org/react";
import {styles} from "@/utils/styles";
import Image from "next/image";
import Ratings from "@/utils/Ratings";
import Link from "next/link";
import {Button} from "@nextui-org/button";

type Props = {};
const PromptCard = (props: Props) => {
   return (
	   <Card radius={"lg"} className={"w-full md:w-[31%] 2xl:w-[23%] p-4 bg-[#130f23] m-3"}>
			<div className="relative">
			   <Image
				   src={"https://pixner.net/aikeu/assets/images/banner/large-slider/two.png"} alt={"prompts"}
			   		width={300}
				   height={300}
			   />
			   <div className={"absolute bottom-2 left-2"}>
					<div className="w-max bg-black hover:bg-[#16252] duration-300 transition-opacity hover:text-black text-white p-[10px] items-center flex rounded-xl">
					   <Image
						   src="https://pixner.net/aikeu/assets/images/category/chat.png"
						   width={25}
						   height={25}
						   alt="chat-gpt"
					   />
					   <span className={`${styles.label}  pl-2`}>Chat Gpt</span>
					</div>
			   </div>

			</div>
		  <div className={"flex w-full justify-between py-2"}>
				<h3 className={`${styles.label} text-[18px] text-white`}>
				   Animal Prompts
				</h3>
				<p className={`${styles.paragraph}`}>
				   $ 25.00
				</p>
		  </div>
		  <Divider className={"bg-[#ffffff18] my-3"} />
		  <div className={"w-full flex items-center justify-between"}>
			 <div className={"flex items-center"}>
				<Avatar src={"https://i.pravatar.cc/150?u=a04258114e29026302d"} />
				<span className={`${styles.label} text-sm pl-3`}>
				   @Javeed
				</span>
			 </div>
			 <Ratings rating={3.5} />
		  </div>
		  <br/>
		  <Link className={"w-full"} href={"/shop/124"}>
			 <Button className={"mb-3 w-full bg-transparent border border-[#16c252] text-white hover:bg-[#16c252] hover:text-black duration-300 transition-opacity font-Inter font-[600]"}>
				Get Prompts
			 </Button>
		  </Link>
	   </Card>
   );
};
export default PromptCard;
