import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET;

export const generateToken = (id) => {
  return jwt.sign({ _id: id }, secretKey, { expiresIn: "7d" });
};

export const generateEmailToken = (email) => {
  return jwt.sign({ email }, secretKey, { expiresIn: "1hr" });
};

export const verifyEmailToken = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return { email: decoded.email };
  } catch {
    return null;
  }
};
