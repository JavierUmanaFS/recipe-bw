const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

module.exports = {
  validCredentials,
  secureCredentials,
  compareValues,
  createToken,


};

function validCredentials(user){
  return Boolean(user.username && user.password && typeof user.password === "string");
}

function secureCredentials(credentials){
  const rounds = process.env.BCRYPT_ROUNDS || 5;
  const hash = bcryptjs.hashSync(credentials.password, rounds);
  credentials.password = hash; 
}

function compareValues(inputValue, findByValue){
  return bcryptjs.compareSync(inputValue, findByValue)
}

function createToken(user){
  const payload = {
    user_id: user.id,
    username: user.name,
  };

  const secret = process.env.TOKEN_SECRET || "secret";

  const options = {
    expiresIn: "1d",
  };

  return jwt.sign(payload, secret, options);
}
