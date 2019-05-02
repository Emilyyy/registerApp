var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new mongoose.Schema({
    email: String,
    password: String
})




UserSchema.pre('save', function(next){
    var user = this;
    console.log('pre save')

    if(!user.isModified('password')) {
        console.log('!modified')
        return next();
    } 

    bcrypt.genSalt(10, function(err, salt){
        if(err) return next(err);
        console.log('genSalt')

        bcrypt.hash(user.password, salt, null, function(err, hash){
            if(err) return next(err);

            user.password = hash;
            next();
        })
    })
})

UserSchema.methods.comparePasswords = function(password, callback){
    bcrypt.compare(password, this.password, callback);
}

UserSchema.methods.toJSON = function(){
    var user = this.toObject();
    delete user.password;

    return user;
}


module.exports = mongoose.model('User', UserSchema);

