const {
    model,
    Schema
} = require('mongoose');

const user = new Schema({
    userid: String,
    name: String,
    password: String,
    fav: String,
})
module.exports = model("user", user);