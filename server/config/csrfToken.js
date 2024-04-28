import { doubleCsrf } from "csrf-csrf";

const { generateToken, doubleCsrfProtection } = doubleCsrf({
  getSecret: () => ["secret", "production", "secure"],
  cookieName: "__Host-psifi.x-csrf-token",
  cookieOptions: {
    sameSite : "lax",
    path : "/",
    secure : true,
  },
  size: 64,
  getTokenFromRequest: (req) => req.headers["x-csrf-token"],
});

export { generateToken, doubleCsrfProtection };
