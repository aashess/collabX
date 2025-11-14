import { stackServerApp } from '@/stack/server';
import { NextRequest, NextResponse } from "next/server";
import { apiCall } from './apiCall';



export async function POST(req: NextRequest) {

      const { type, data } = await req.json();
    
      if (type == 'user.created') {
            const userId = data.id

            // check in db with user id
            
            console.log('Received user.created for :', userId);
            const user = await stackServerApp.getUser(userId);
            //@ts-ignore
            const accountId = user.oauthProviders[0].account_id;

             await apiCall(accountId);


            
            

      }
   
    return NextResponse.json("hello");
    
}