import {Avatar, Card} from "@nextui-org/react";
import {styles} from "@/utils/styles";
import Ratings from "@/utils/Ratings";

type Props = {};
const SellerCard = (props: Props) => {
   return (
		  <Card
			  className={"py-4 cursor-pointer m-3 bg-[#100d21] w-full md:w-[31%] 2xl:w-[23%] flex flex-col items-center text-white border border-[#ffffff18]"}>
			 <Avatar className={"w-[80px] h-[80px]"} src={"https://i.pravatar.cc/150?u=a04258114e29026302d"}/>
			 <span className={`${styles.label} py-2 text-xl`}>
				@Javeed
			 </span>
			 <div className={"flex items-center"}>
				<span className={`${styles.label} pr-2`}>
				   4/5
				</span>
				<Ratings rating={4}/>
			 </div>
			 <span className={`${styles.label} py-2`}>
				Total Sales : 111
			 </span>
		  </Card>
   );
};
export default SellerCard;
