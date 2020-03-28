module.exports.error = function(err) {
  switch (err) {
    case '01':
      return 'Error 01: This name already used';
      break;
    case '02':
      return 'Error 02: Bad token';
      break;
    case '03':
      return 'Error 03: You don`t have permissoin to this action';
      break;
    case  '04':
      return 'Error 04: Message with this id don`t exist. Check message id and try again';
      break;
    default:
      return ('Unknown Error');
      break;c
  }
}
