let config      = require('../../config/database.json');
let pg          = require('pg');

module.exports.connection = function() {
  let connectionString = "pg://"+config.user+":"+config.password+"@"+config.host+"/"+config.db_name;
  let client = new pg.Client(connectionString);
  client.connect();
  return client;
}
