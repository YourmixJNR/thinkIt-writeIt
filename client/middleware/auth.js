// middleware/auth.js
export function withAuth(handler) {
    return async (req, res) => {
       const token = req.cookies.token;
   
       if (!token && !req.url.startsWith('/login')) {
         // Redirect to login if token is not present
         return res.redirect('/login');
       }
   
       // If token is present, proceed with the request
       return handler(req, res);
    };
   }
   