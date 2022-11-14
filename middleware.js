import { NextResponse } from "next/server";

export default function middleware(req){
    let verify = req.cookies.get("user");
    let url = req.url

    if(verify && url.includes('/login')){
        return NextResponse.redirect(new URL("/", url))
    }
}