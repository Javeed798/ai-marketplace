import {User} from "@clerk/nextjs/server";
import {Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/react";
import {styles} from "@/utils/styles";
import Link from "next/link";
import {TbSwitchVertical} from "react-icons/tb";
import {AiOutlineLogout} from "react-icons/ai";
import {useClerk} from "@clerk/nextjs";
import {useRouter} from "next/navigation";

type Props = {
   user: User | null,
   setOpen: (open: boolean) => void
   handleProfile: () => void
   isSellerExists: boolean
};
const DropDown = ({user, setOpen, handleProfile, isSellerExists}: Props) => {
   const {signOut} = useClerk();
   const router = useRouter();

   const handleLogout = async () => {
	  await signOut();
	  router.push("/sign-in");
   }

   return (
	   <Dropdown placeholder={"bottom-start"}>
		  <DropdownTrigger>
			 <Avatar src={user?.imageUrl} className={"w-[30px] h-[30px] cursor-pointer"}/>
		  </DropdownTrigger>
		  <DropdownMenu aria-label={"Profile Actions"} variant={"flat"}>
			 <DropdownItem onClick={() => {
				handleProfile();
				setOpen(false)
			 }}>
				<div className="flex w-full items-center">
				   <Avatar src={user?.imageUrl} className={"w-[30px] h-[30px] cursor-pointer"}/>
				   <span className={`${styles.label} text-black text-[16px] p-2`}>My Profile</span>
				</div>
			 </DropdownItem>
			 <DropdownItem className={`${!isSellerExists && "hidden"}`}>
				<Link className={`flex w-full items-center`} href={"/my-shop"}>
				   <span className={`${styles.label} text-black text-[16px] p-2`}>
					  Switching to Seller
				   </span>
				   <TbSwitchVertical className={"text-2xl ml-2 text-black"}/>
				</Link>
			 </DropdownItem>

			 <DropdownItem
				 onClick={handleLogout}
			 >
				<div className={"w-full flex items-center"}>
				   <AiOutlineLogout className={"text-2xl ml-2 text-black"}/>
				   <span className={`${styles.label} text-black text-[16px] p-2`}>
				Log out
				</span>
				</div>
			 </DropdownItem>

		  </DropdownMenu>
	   </Dropdown>
   );
};
export default DropDown;
