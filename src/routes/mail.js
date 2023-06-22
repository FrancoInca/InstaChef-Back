const {Router} = require("express");
const mailRouter = Router();
const handleMail = require("../handlers/mailerHandler");

mailRouter.post("/", handleMail)

module.exports = mailRouter