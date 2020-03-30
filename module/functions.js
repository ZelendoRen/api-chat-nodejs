module.exports.genToken = () => {
  let token = Math.floor(Math.random()*(999999-100000)+100000);
  return token;
}

module.exports.getTime = () => {
  let currentDate = new Date();
  let date = (`'${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDay()}'`);
  let min = currentDate.getUTCMinutes() ;
  if(currentDate.getMinutes()<10){
      min = '0' + min;
  }
  let time = ( `'${currentDate.getHours()} :${min}'` );
  return {
    "date":date,
    "time":time
  };
}
