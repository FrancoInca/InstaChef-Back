const { sendProduct, DeliveredProduct } = require("../controllers/mailerControllers");
const handleMail = async (req, res) => {
    const { email, products, type } = req.body;
    try {
        let response
        if (type === "send") response = sendProduct({email, products})
        else response = DeliveredProduct({email})
        if (!response) throw new Error("Ha ocurrido un error")
        return res.status(200).send("Ok")
    }catch(error){
        return res.status(400).send(error.message)
    }
}
module.exports = handleMail