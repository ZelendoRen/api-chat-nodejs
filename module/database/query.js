let conn        = require('../../module/database/connection.js');
let exception   = require('../../module/exception/exception.js');
let func        = require('../../module/func/func.js');

let client      = conn.connection();

//Registration
module.exports.registration = async (req,res) => {
  let { name } = req.body;
  let checkName = await client.query('SELECT count(nickname) FROM users WHERE nickname ='+"'"+name+"'");
  if(checkName.rows[0].count == 0) {
    let token = func.genToken();
    let checkToken = await client.query('SELECT count(token) FROM Users WHERE token =' + token);
    if(checkToken.rows[0].count == 0) {
      await client.query('INSERT into Users(token,nickname) values(' + token +','+"'"+ name +"'" +')');
      res.json({token:token});
     return ;
    }
 }
  else {
    res.json({message:exception.error('01')})
    return;
  }
}

//Send Message
module.exports.sendMessage = async (req,res) => {
  let {token, message} = req.body;
  let checkToken = await client.query('SELECT count(token) FROM Users WHERE token =' + token);
  let clock = func.getTime();
  if(checkToken.rows[0].count != 0) {
    await client.query('INSERT into listofmessages(token,message,date,time) values('+ token +",'"+ message + "',"+ clock.date +","+ clock.time +')');
    res.json(true);
    return;
  }
  res.json({message: exception.error('02')});
  return;
}

//Update
module.exports.updateMessage = async (req,res) => {
  let id      = req.query.id;
  let token   = req.query.token;
  let message = req.query.message;
  let checkToken = await client.query('SELECT count(token) FROM Users WHERE token =' + token);
  let countMess = await client.query('SELECT id FROM listOfMessages ORDER BY id Desc Limit 1');
  if (checkToken.rows[0].count != 0 ) {
    if(id <= countMess.rows[0].id){
      checkMessageId = await client.query('SELECT count(token) FROM listOfMessages WHERE token =' + token + ' and id =' + id);
      if(checkMessageId.rows[0].count != 0) {
          let changeMessage = await client.query('UPDATE listOfMessages  SET message =' + "'" + message + "'" + ' WHERE token =' + token + ' and id ='+ id);
          res.json(true);
          return;
        }
        res.json({message: exception.error('03')});
        return;
      }
    res.json({message:exception.error('04')})
    return;
  }
  res.json({message: exception.error('02')});
  return;
}

//Get messages
module.exports.getMessages = async (req, res) => {
  let token = req.query.token;
  let limit = req.query.limit;
  if (limit=='undefined' || limit==null || limit=="")
  {
    limit=0;
  }
  let checkToken = await client.query('SELECT count(token) FROM Users WHERE token =' + token);
  if(checkToken.rows[0].count!=0){
    if(limit==0){
      let getList = await client.query('SELECt id, u.nickname,message, time FROM listofmessages lm JOIN users u ON u.token = lm.token GROUP BY id, u.nickname ORDER BY id');
      res.json(getList.rows);
      return;
    }
    else{
      let getList = await await client.query('SELECt id, u.nickname,message, time FROM listofmessages lm JOIN users u ON u.token = lm.token GROUP BY id, u.nickname ORDER BY id DESC Limit '+ limit);
      res.json(getList.rows);
      return;
    }
  }
  else {
    res.json({message: exception.error('02')});
    return;
  }
}
