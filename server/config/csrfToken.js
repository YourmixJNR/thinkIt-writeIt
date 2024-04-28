import { doubleCsrf } from "csrf-csrf";

const { generateToken, doubleCsrfProtection } = doubleCsrf({
  getSecret: () => "Secret",
  cookieName: "__Secure-psifi.x-csrf-token",
  cookieOptions: {
    secure : false,
  },
  size: 64,
  getTokenFromRequest: (req) => req.headers["x-csrf-token"],
});

export { generateToken, doubleCsrfProtection };
