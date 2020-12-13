const connection = require("../database/connection.js");

class ComicsController {
  /* Metodo responsavel por adicionar historias em quadrinhos. */
  async create(req, res) {
    const { id } = req.body;
    const trx = connection.transaction();
    await trx("comics")
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
    const idComics = req.params.id;
    const user = await connection("comics").select("*");
    return resp.json(user);
  }
  /* Metodo responsavel por deletar historias em quadrinhos. */
  async delete(req, res) {
    const idComics = req.params.id;
    const trx = connection.transaction();
    await trx("comics")
      .where("id", idCmics)
      .del()
      .then(trx.commit)
      .then(() => {
        res.status(201).send({ sucess: "História removida dos favoritos" });
      })
      .catch((error) => {
        res.status(500).send({ error: "Erro ao remover história dos favoritos! Tente novamente mais tarde.", errorServer: error });
      }, trx.rollback);
  }
}
module.exports = new ComicsController();
