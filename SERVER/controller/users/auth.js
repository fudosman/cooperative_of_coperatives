const User = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// the User registration function
exports.register = async (req,res)=>{
  const {email,password,name} = req.body;
  const salt = await bcrypt.genSalt(10);
  hashedpassword = await bcrypt.hash(password,salt);
  const user = new User({
    name: name,
    email: email,
    password: hashedpassword
  });

  try{
    const savedUser = await user.save();
    res.status(201).send({
      message: "User created successfully!",
      user: savedUser
    });
  }catch(err){
    res.status(400).send(err);
  }
};

// the User login function
exports.login = async (req,res)=>{

  const {email,password} = req.body;
  try{
    const user = await User.findOne({email: email});
    if(!user){
      return res.status(401).send({error: 'User not found'});
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
      return res.status(401).send({error: 'Invalid password'});
    }
    if(isMatch,user){
      // create a jwt token
      const token = jwt.sign({_id: user._id},process.env.TOKEN_SECRET);
      res.header('auth-token',token);
      res.status(200).send({message: 'User logged in successfully',token: token});
    }
  }
  catch(err){
    res.status(500).send(err);
  }
};