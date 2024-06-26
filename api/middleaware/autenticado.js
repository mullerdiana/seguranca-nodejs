const { verify, decode } = require("jsonwebtoken");
const jsonSecret = require("../config/jsonSecret");

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).send("Access Token não informado");
  }

  // o token jwt vem com Bearer na frente, vamos ficar só com o nosso token de acesso
  const accessToken = token
  ;

  try {
    verify(accessToken, jsonSecret.secret);

    const { id, email } = decode(accessToken);

    req.usuarioId = id;
    req.usuarioEmail = email;

    return next();
  } catch (error) {
    console.log(accessToken)
    res.status(401).send("Usuário não autorizado");
  }
};
