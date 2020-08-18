require('dotenv').config();
const server = require('./api/server.js')

//stretch goal using seperate db for 
//display environment in console on launch
console.log(`DB_ENV = ${process.env.DB_ENV}`);

const PORT = process.env.PORT || 3300;
server.listen(PORT, () => {
  console.log(`\n=== Server listening on port ${PORT} ===\n`);
});
