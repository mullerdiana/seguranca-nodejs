const { Router } = require("express");
const UsuarioController = require("../controllers/usuarioController");
const autenticado = require("../middleaware/autenticado");

const router = Router();
// router.use(autenticado)

router
  .post("/usuarios", UsuarioController.cadastrar) // rota pública
  .get("/usuarios", autenticado, UsuarioController.buscarTodosUsuarios) // rota protegida
  .get("/usuarios/id/:id", autenticado, UsuarioController.buscarUsuarioPorId) // rota protegida
  .put("/usuarios/id/:id", autenticado, UsuarioController.editarUsuario) // rota protegida
  .delete("/usuarios/id/:id", autenticado, UsuarioController.deletarUsuario); // rota protegida

module.exports = router;
