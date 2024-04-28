import { doubleCsrf } from "csrf-csrf";

const { generateToken, doubleCsrfProtection } = doubleCsrf({
  getSecret: () => "Secret",
  cookieName: "__Host-psifi.x-csrf-token",
  size: 64,
  getTokenFromRequest: (req) => req.headers["x-csrf-token"],
});

export { generateToken, doubleCsrfProtection };
