require('dotenv').config;
const server = require('./src/app.js');

const { PORT } = process.env;
const { conn } = require('./src/db.js');
const { bulkProducts } = require('./src/functions/bulkProducts.js');

conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    bulkProducts();
    console.log('Server is listening at ' + PORT);
  });
});
