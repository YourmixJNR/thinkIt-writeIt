import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export default async function middleware(req) {
  try {
    const isAuthenticated = await getToken({ req });

    const publicRoutes = ["/", "/auth/register", "/auth/login"];
    const protectedRoutes = ["/user"];

    if (publicRoutes.includes(req.nextUrl.pathname) && isAuthenticated) {
      return NextResponse.redirect(new URL('/user', req.url));
    }

    if (protectedRoutes.includes(req.nextUrl.pathname) && !isAuthenticated) {
      return NextResponse.redirect(new URL('/auth/login', req.url));
    }

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL('/error', req.url));
  }
}

export const config = {
  matcher: ["/:path*"],
};
