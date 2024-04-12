export async function middleware(request) {
    const currentUser = request.cookies.get('token')?.value

    if (!currentUser) {
        return Response.redirect(new URL('/login', request.url))
    }
}

export const config = {
    matcher: "/user/:path*",
}