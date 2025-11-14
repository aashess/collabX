import { prisma } from "@/lib/db";
export async function userCreate(data: any ) {

        const profilePicture = data.users[0].profilePicture;
        const userId = data.users[0].userName;
        const userName = data.users[0].name;
        const location = data.users[0].location;
        const IsVerified = data.users[0].isVerfied;
        const followers = data.users[0].followers;
        const following = data.users[0].following;
        const coverPicture = data.users[0].coverPicture;

        try {
            const userCreated = await prisma.user.create({
                data: {
                    userId : userId,
                    profilePicture: profilePicture,
                    userName: userName,
                    location: location,
                    IsVerified: IsVerified,
                    followers: followers,
                    following: following,
                    coverPicture: coverPicture
                }
            })

        } catch (error) {
              return { status: 401, message: "User not Created!" };
        }
        return {status: 200, message: "User Created!"};

        
}