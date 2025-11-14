// tries to fetch data from the twitter api using num. user_id!

import { prisma } from "@/lib/db";
import { userCreate } from "./userCreate";

// import {PrismaClient} from '@prisma/client'

const api_key = process.env.X_API_KEY;

export async function apiCall(account_id: string) {
  const url = `https://api.twitterapi.io/twitter/user/batch_info_by_ids?userIds=${account_id}`;
  const options = {
    method: "GET",
    headers: { "X-API-Key": api_key },
    body: undefined,
  };

  try {
    //@ts-ignore
    const response = await fetch(url, options);   //fetch user
    if (!response.ok) {
      return;
    }
    const data = await response.json();
    console.log(data);

    const userName = data?.users[0]?.userName;
    console.log(userName);

    const userExist = await checkData(userName);

    if (!userExist) {
      // save db
      console.log("---USER doesn't exist in db. Creating User.");
      try {
        const userCreated = await userCreate(data);
        if (userCreated.status == 200) {
          console.log("Congrats User Created Successfully.");
        }
      } catch (error) {
        console.error("Can't able to Create User.");
      }
    } else {
      return { message: "User already Exist." };
    }
  } catch (error) {
    console.error(error);
  }
}

async function checkData(userName: string) {
  console.log(userName);

  const userExist = await prisma.user.findFirst({
    where: {
      userId: userName,
    },
  });
  if (!userExist) {
    console.log("User doesn't exist in db.");
    return false;
  }
  return true;
}
