const { Router } =  require("express");
const usersRouter = Router();
const {
  handleUsersAll,
  handleDeleteUser,
  handleUserById,
  handleUserCreate,
  handleUpdateUser
} = require("../handlers/usersHandler");

usersRouter.put("/", handleUserCreate);
usersRouter.get("/", handleUsersAll);
usersRouter.get("/:userId", handleUserById);
usersRouter.put("/", handleUpdateUser);
usersRouter.delete("/:userId", handleDeleteUser)

module.exports = usersRouter;