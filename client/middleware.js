import { NextResponse } from 'next/server'

export async function middleware(request) {

    const currentUser = request.cookies.get('token')?.value

    const protectedPaths = ['/login', '/register', '/'];

    if (!currentUser) {
        return Response.redirect(new URL('/login', request.url))
    }

    if (protectedPaths.includes(request.nextUrl.pathname)) {
     
        if (currentUser) {
            return Response.redirect(new URL('/user', request.url))
        }
    }
}

export const config = {
    matcher: ["/", "/user/:path*"]
}