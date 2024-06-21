const database = require("../models");
const { hash } = require("bcryptjs");

class UsuarioService {
   async cadastrar(dto) {
    const usuario = await database.usuarios.findOne({
      where: {
        email: dto.email,
      },
    });

    if (usuario) {
      throw new Error("Usuario já cadastrado");
    }
    try {
      const passwordHash = await hash(dto.password, 8);

      const novoUsuario = await database.usuarios.create({
        nome: dto.nome,
        email: dto.email,
        password: passwordHash,
      });

      return novoUsuario;
    } catch (error) {
      throw new Error("Erro ao cadastrar usuario");
    }
  }
}

module.exports = UsuarioService;
