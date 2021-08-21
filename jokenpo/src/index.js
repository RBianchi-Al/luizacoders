const options = require("./data/index");
const User = require('./controller/user');

let jogar = new User({options: options}).game();
jogar
