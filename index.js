require('dotenv').config;
const server = require('./src/app.js');
const { sequalize } = require('./src/db.js');
const { PORT } = process.env;

server.listen(PORT, () => {
  console.log('Server is listening at ' + PORT);
});
