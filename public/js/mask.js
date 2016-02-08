$(document).ready(function(){
  $('.money').mask('000,000,000,000,000,000,000,000,000', {reverse: true});
  $('.phone').mask('000-000-0000');
  $('.number').mask('ZZZZZZZZZZ', {
    translation: {
      'Z': {
        pattern: /[0-9]/, optional: true
      }
    }
  });
  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }
});