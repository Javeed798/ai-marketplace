import {styles} from "@/utils/styles";
import SellerCard from "@/components/Sellers/SellerCard";

type Props = {};
const BestSellers = (props: Props) => {
   return (
	   <div className={"mb-10"}>
			<h1 className={`${styles.heading} font-Monserrat mb-5 p-2`}>Best Sellers
			</h1>
		  <div className={"flex flex-wrap"}>
			 <SellerCard />
			 <SellerCard />
			 <SellerCard />
			 <SellerCard />
		  </div>
	   </div>
   );
};
export default BestSellers;
