import { NextResponse } from "next/server";

export async function middleware(request) {
    const currentUser = request.cookies.get('token')?.value;

    const publicRoutes = ['/', '/auth/register', '/auth/login'];
    const protectedRoutes = ['/user'];

    if (currentUser && publicRoutes.includes(request.nextUrl.pathname)) {

        return Response.redirect(new URL('/user', request.url));
    }

    if (!currentUser && protectedRoutes.includes(request.nextUrl.pathname)) {

        return Response.redirect(new URL('/auth/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/:path*"]
};
