const mongoose = require('mongoose')
const validator = require('validator')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlenght: 3
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new error('Invalid Email Id');
            }
        }
    },
    phone: {
            type: Number,
            required: true,
            min: 10
    },
    message: {
            type: String,
            required: true,
            minlenght: 3
    },
    date : {
        type: Date,
        default: Date.now(),
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;


