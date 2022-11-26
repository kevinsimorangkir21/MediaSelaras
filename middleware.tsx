import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export const config = {
  matcher: "/((?!_next/static|favicon.ico).*)",
};

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.includes("/dashboard")) {
    const _res = await fetch("https://api.medselaras.com/api/verifytoken", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${request.cookies.get("token")}`,
      },
    });
    if(_res.status == 200 || _res.status == 201) return NextResponse.next()
    else {
      return NextResponse.redirect(new URL('/login', request.url).href)
    }
  }

  return NextResponse.next();
}