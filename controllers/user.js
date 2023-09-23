const User = require("../model/user,js");

async function handleUserSignUp(req,res){
    const {name, email, password} = req.body;

    await User.create({
        name,
        email,
        password
    });

    return res.send("account created🎉")
}

async function handleUserLogIn(req,res){
    const {email, password} = req.body;

    const user = await User.findOne({email,password});

    if (!user){
        return res.send({error : "Invalid email or password"});
    }

    return res.send("user loggedin🎉")
}

module.exports = {handleUserSignUp,handleUserLogIn};