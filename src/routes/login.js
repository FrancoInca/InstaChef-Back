const {Router} = require('express');
const loginRouter = Router();
const {signUp, login, verifyToken} = require('../controllers/loginControllers');



loginRouter.post("/signup", signUp);
loginRouter.post("/login", login);
loginRouter.get("/protected", verifyToken, (req, res) => {
 
    res.json({ mensaje: 'Acceso permitido' });
  });



module.exports= loginRouter;