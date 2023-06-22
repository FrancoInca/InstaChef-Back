const { Router } = require('express');
const usersRouter = Router();
const {
  handleUsersAll,
  handleDeleteUser,
  handleUserById,
  handleUserCreate,
  handleUpdateUser,
  handleVerifyUser,
  handleUserByToken,
  handleFavorites,
} = require('../handlers/usersHandler');

usersRouter.post('/', handleUserCreate);
usersRouter.get('/', handleUsersAll);
usersRouter.get('/:userId', handleUserById);
usersRouter.get('/verify/:token', handleVerifyUser);
usersRouter.put('/', handleUpdateUser);
usersRouter.put('/:userId/favorites', handleFavorites);
usersRouter.delete('/:userId', handleDeleteUser);
usersRouter.get('/token/:token', handleUserByToken);

module.exports = usersRouter;
