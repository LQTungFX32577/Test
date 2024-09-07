const Home = require('../Modals/home');
const Users = require('../Modals/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup =  async(req,res) => {
    try{
        const user = req.body.user;
        const pass = await bcrypt.hash(req.body.pass, 12);
        const User = new Users({
            name: user,
            password: pass   
        })
        User.save();
        res.render('signin')
    }
    catch(err){
        console.log(err);
    }
}
exports.signin =  async(req,res) => {
    try{
        const user = req.body.user;
        Users.findOne({name: user })
        .then(result => {
            const token = jwt.sign({
                id: result._id,
                name: result.name,
                password: result.password
            },
            "supersecret",
            { expiresIn: '1h' }
            )
            const pass = bcrypt.compare(req.body.pass, result.password)
            if(pass && user === result.name){
                res.render('loginsucess', {
                    token: token
                })
            }
            else{
                res.status(401).send('invalid')
            }
        })
    }
    catch(err){
        console.log(err);
    }
}

