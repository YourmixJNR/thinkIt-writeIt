// Define specific routes that require authentication
const protectedRoutes = ['/user', '/register'];

export function middleware(request) {
 const currentUser = request.cookies.get('currentUser')?.value;
 const pathname = request.nextUrl.pathname;

 // Check if the requested URL matches any of the protected routes
 const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));

 // If the user is authenticated and trying to access a protected route, redirect to the dashboard
 if (currentUser && isProtectedRoute) {
    return Response.redirect(new URL('/user', request.url));
 }

 // If the user is not authenticated and trying to access a protected route, redirect to the login page
 if (!currentUser && isProtectedRoute) {
    return Response.redirect(new URL('/login', request.url));
 }
}

// No need for a matcher in the config if you're handling specific routes explicitly
export const config = {};
