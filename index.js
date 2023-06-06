require('dotenv').config;
const server = require('./src/app.js');

const { PORT } = process.env;
const { conn } = require('./src/db.js');

conn.sync({ force: true }).then(() => {

  server.listen(PORT, () => {
    console.log('Server is listening at ' + PORT);
  });

});
