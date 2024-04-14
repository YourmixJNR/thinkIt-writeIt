import { doubleCsrf } from "csrf-csrf";

const { generateToken, doubleCsrfProtection } = doubleCsrf({
  getSecret: () => "Secret",
  cookieName: "_csrf",
  size: 64,
  getTokenFromRequest: (req) => req.headers["_csrf"],
});

export { generateToken, doubleCsrfProtection };
