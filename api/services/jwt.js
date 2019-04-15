//every JWT has a header, a payload, and a signature. all base64 encoded
var crypto = require('crypto');

exports.encode = function(payload, secret){
    algorithm = 'HS256';

    var header = { 
        typ: 'JWT', 
        alg:algorithm
    };

    var jwt = base64Encode(JSON.stringify(header)) + '.' + base64Encode(JSON.stringify(payload));

    return jwt +  '.' + sign(jwt,secret);
}

function sign(str, key){
    return crypto.createHmac('sha256', key).update(str).digest('base64');
}


function base64Encode(str){
    return new Buffer.from(str).toString('base64');
}