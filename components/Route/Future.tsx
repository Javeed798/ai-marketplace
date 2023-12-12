import Image from "next/image";
import {Button} from "@nextui-org/button";
import {styles} from "@/utils/styles";

type Props = {};
const Future = (props: Props) => {
   return (
	   <div className={"w-full relative p-4 md:p-[unset] grid md:grid-cols-2 py-8"}>
		  <div className={"col-span-1"}>
			 <Image className={"md:w-[90%] md:ml-[-50px] 2xl:ml-[-90px]"}
					src={"https://pixner.net/aikeu/assets/images/banner/large-slider/three.png"} alt={"future"}
					width={800} height={500}/>
		  </div>
		  <div className={"col-span-1 w-full flex justify-center items-center"}>
			 <div className={"w-[60%]"}>
				<Button className={`${styles.button} mb-[30px] h-[37px] bg-[#22211f]`}>
				   Future
				</Button>
				<h5 className={`${styles.heading} mb-5 leading-[50px]`}>
				   Unleashing the Glorious Future of Ai Generated Images
				</h5>
				<p className={`${styles.paragraph} pb-5`}>
				   One of the most prominent techniques in AI image generation use of Generative Adversarial Networks
				</p>
			 </div>

		  </div>
	   </div>
   );
};
export default Future;
