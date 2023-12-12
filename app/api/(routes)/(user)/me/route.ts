// todo : prisma

import {User, currentUser} from "@clerk/nextjs/server";

import {NextRequest,NextResponse} from "next/server";

export async function GET(req: NextRequest) {
   try {
		const user:User | null = await currentUser();
		if (!user) {
		   return new NextResponse("Please login to access this resource", {
			  status : 400
		   })
		}
		// todo : we need to check if user has any shop or not
	  return NextResponse.json({user});
   }catch (err) {
	  console.log(err)
	  return new NextResponse("Internal Server Error", {status: 500});
   }
}