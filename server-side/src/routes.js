const express = require("express");
const routes = express.Router();
const UserController = require("./controllers/UserController");
const CharacterController = require("./controllers/CharacterController");
const ComicsController = require("./controllers/ComicsController");

/* rotas de criar atualizar e listar usuarios */
routes.post("/user", UserController.create);
routes.put("/user", UserController.update);
routes.get("/user", UserController.index);

/* rotas de adicionar e excluir personagens dos favoritos */
routes.post("/character", CharacterController.create);
routes.delete("/character", CharacterController.delete);
routes.get("/character", CharacterController.index);

/* rotas de adicionar e excluir historias em quadrinhos dos favoritos */
routes.post("/character", ComicsController.create);
routes.delete("/character", ComicsController.delete);
routes.delete("/character", ComicsController.delete);

module.exports = routes;
