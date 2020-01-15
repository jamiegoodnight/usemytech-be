const jwt = require("jsonwebtoken");

const kruptos = require("./kruptos").jwtKey;

module.exports = {
  restricted: (req, res, next) => {
    const token = req.get("Authorization");

    if (token) {
      jwt.verify(token, kruptos, (err, decoded) => {
        if (err) return res.status(401).json(err);

        req.decoded = decoded;

        next();
      });
    } else {
      return res.status(401).json({
        error: "No token provided, must be set on the Authorization Header"
      });
    }
  }
};

// module.exports = {
//   restricted
// };

// function restricted(req, res, next) {
//   const token = req.get("Authorization");

//   if (token) {
//     jwt.verify(token, kruptos, (err, decoded) => {
//       if (err) return res.status(401).json(err);

//       req.decoded = decoded;

//       next();
//     });
//   } else {
//     return res.status(401).json({
//       error: "No token provided, must be set on the Authorization Header"
//     });
//   }
// }