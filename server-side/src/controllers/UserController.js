const connection = require("../database/connection.js");
const crypto = require("crypto");

class UserController {
  /* Metodo responsavel por criar um novo usuário */
  async create(req, res) {
    const { name, birthday, phone, bestHero, email, password } = req.body;

    const hashPassword = crypto.createHash("md5").update(password).digest("hex");
    const newBirthday = new Date(birthday);
    const created_at = new Date();
    const update_at = new Date();
    const data = {
      id: 1,
      name: name.toUpperCase(),
      phone: phone,
      birthday: newBirthday,
      best_hero: bestHero,
      email: email,
      password: hashPassword,
      created_at: created_at,
      update_at: update_at,
    };
    console.log(data);
    /*  cria uma transação para que caso ocorra qualquer erro durante o processo de de create, seja possivel fazer rollback  */
    const trx = await connection.transaction();
    trx("user")
      .insert(data)
      .then(trx.commit)
      .then(() => {
        res.status(201).send({ sucess: "Usuário salvo com sucesso!" });
      })
      .catch((error) => {
        res.status(500).send({ error: "Erro ao criar conta! Tente novamente mais tarde.", errorServer: error });
      }, trx.rollback);
  }
  /* Metodo responsavel por fazer update */
  async update(req, resp) {
    const { name, birthday, phone, bestHero, email } = req.body;
    const userId = req.headers.authorizarion.split(".")[1];
    const update_at = connection.fn.now();
    /*  cria uma transação para que caso ocorra qualquer erro durante o processo de de update, seja possivel fazer rollback  */
    const trx = await connection.transaction();
    trx("user")
      .where("id", userId)
      .update({
        name: name.toUpperCase(),
        birthday: birthday,
        phone: phone,
        email: email,
        best_hero: bestHero,
        update_at,
      })
      .then(trx.commit)
      .then(() => {
        res.status(201).send({ sucess: "Usuário atualizado com sucesso!" });
      })
      .catch((error) => {
        res.status(500).send({ error: "Erro ao atualizar dados do usuário! Tente novamente mais tarde.", errorServer: error });
      }, trx.rollback);
  }
  /* Metodo responsavel por listar os dados de um usuario */
  async index(req, resp) {
    const user = await connection("user").where("id", req.headers.authorizarion.split(".")[1]).select("*");
    return resp.json(user);
  }
}
module.exports = new UserController();
