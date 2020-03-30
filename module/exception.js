module.exports.error = function (err) {
  let errString = null;
  switch (err) {
    case '01':
      errString = 'Error 01: This name already used';
      break;
    case '02':
      errString = 'Error 02: Bad token';
      break;
    case '03':
      errString = 'Error 03: You don`t have permissoin to this action';
      break;
    case '04':
      errString = 'Error 04: Message with this id don`t exist. Check message id and try again';
      break;
    default:
      errString = 'Unknown Error';
      break;
  }
  return errString;
}
