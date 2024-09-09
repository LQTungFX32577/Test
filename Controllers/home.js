const Users = require('../Modals/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



exports.home = (req,res) => {
    const value = Number(req.query.num1) + Number(req.query.num2);
    res.render('home', {
        title: "hello tungle",
        value: value
    })
}
exports.signup = async(req,res) => {
    try{
        const name = req.body.user;
        const pass = req.body.password;
        const password = await bcrypt.hash(pass, 12)
        const user = new Users({
            name: name,
            password: password
        })
        user.save().then(result => {
            res.render('SignIn')
        })
    }
    catch(err) {
        console.log(err)
    }
}
exports.signIn = async(req,res) => {
    try{
        console.log(req.body)
        const name = req.body.user;
        const pass = req.body.password;
        const data = await Users.findOne({name: name})
        console.log(data.password)
        const valid = await bcrypt.compare(pass, data.password)
      if(valid && name === data.name) {
            res.render('login')
        }
        else{
            res.send('invalid')
        }
    }
    catch(err) {
        console.log(err)
    }
}