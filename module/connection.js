let config = require('../config/config.json');
let pg = require('pg');

module.exports.connection =  function() {
  let connectionString = "pg://"+config.database.user+":"+config.database.password+"@"+config.database.host+"/"+config.database.name;
  let client = new pg.Client(connectionString);
   client.connect();
  return  client;
}
