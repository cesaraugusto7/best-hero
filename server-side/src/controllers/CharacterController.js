const connection = require("../database/connection.js");

class CharacterController {
  /* Metodo responsavel por adicionar personagens em quadrinhos. */
  async create(req, res) {
    const { id } = req.body;
    const trx = connection.transaction();
    await trx("character")
      .insert({ id })
      .then(trx.commit)
      .then(() => {
        res.status(201).send({ sucess: "Personagem adicionado aos favoritos!" });
      })
      .catch((error) => {
        res.status(500).send({ error: "Erro ao adicionar personagem aos favoritos! Tente novamente mais tarde.", errorServer: error });
      }, trx.rollback);
  }
  async index(req, resp) {
    const idCharacter = req.params.id;
    const user = await connection("character").select("*");
    return resp.json(user);
  }
  /* Metodo responsavel por deletar personagens */
  async delete(req, res) {
    const idCharacter = req.params.id;
    const trx = connection.transaction();
    await trx("character")
      .where("id", idCharacter)
      .del()
      .then(trx.commit)
      .then(() => {
        res.status(201).send({ sucess: "Personagem removido dos favoritos" });
      })
      .catch((error) => {
        res.status(500).send({ error: "Erro ao remover personagem dos favoritos! Tente novamente mais tarde.", errorServer: error });
      }, trx.rollback);
  }
}
module.exports = new CharacterController();
