import { expressjwt } from "express-jwt";

export const requireSignIn = expressjwt({
  getToken: (req, res) =>
    req.headers.authorization?.split(" ")[1] || req.cookies.token,
  secret: () => process.env.JWT_SECRET,
  algorithms: ["HS256"],
});
