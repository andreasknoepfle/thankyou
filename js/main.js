
function decrypt(encrypted, key) {
  var decrypted = CryptoJS.AES.decrypt(encrypted, key);
  return decrypted.toString(CryptoJS.enc.Utf8);
}

function encrypt(message, key) {
  return CryptoJS.AES.encrypt(message, key).toString();
}


var urlParams = new URLSearchParams(window.location.search);
var key = urlParams.get('key');

var matches = document.querySelectorAll("a[data-encrypted]");
matches.forEach(function(match) {
  if(key) {
    match.href = decrypt(match.dataset.encrypted, key);
  }
});
