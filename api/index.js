const server = require('../api/src/app');
const { conn } = require('../api/src/db.js');

conn.sync({ force: true}).then(() => { // true:borra la bd y la crea de nuevo
  console.log('Base de datos conectada!');
  server.listen(process.env.PORT || 3001, () => {
    console.log(`SERVER listening at port:3001`);
  });
});