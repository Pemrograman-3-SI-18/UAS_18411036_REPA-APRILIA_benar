const mongoose = require('mongoose');

const  userSchema = mongoose.Schema({

    userName: {
        type: String
    },
    namaLengkap: {
        type: String
    },
    Email: {
        type: String
    },
    notlp: {
        type: String
    },
    role: {
        type: Number
    },
    Password: {
        type: String
    }

})
module.exports = mongoose.model('users', userSchema)