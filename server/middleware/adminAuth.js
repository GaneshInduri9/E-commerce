import jwt from "jsonwebtoken";

/**
 *Middleware to verify the admin authenticity triggered
 *when admin add's a product and removes a product
 *
 * @param {*} req contains the token created that is created when admin login's
 * @param {*} res json
 * @param {*} next callback to be triggred if authnticated usually addproduct, deleteproduct
 * @return {*}
 */
const adminAuthentication = (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.json({ success: false, message: "unauthrozed login" });
    }

    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({ success: false, message: "unauthrozed login" });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.json({ success: false, error });
  }
};

export default adminAuthentication;
