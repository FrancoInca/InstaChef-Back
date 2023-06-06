
const server = require('./src/app.js');
const { sequalize } = require('./src/db.js');


server.listen(3001, () => {
  console.log('Server is listening at 3001');
});
