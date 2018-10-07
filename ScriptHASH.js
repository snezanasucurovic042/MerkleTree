// JavaScript source code
console.log('tabela11');
// crypto part of program
var crypto = require('crypto');
console.log('require crypto');
var hash = crypto.createHash('sha256');
//alert('create hash');
var code = 'proba';

code = hash.update(code);
code = hash.digest('hex');

console.log('hash is ' + code);
