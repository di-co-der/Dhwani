const User = require("../models/UserModel");
// register user
const registerUser = async (req,res)=>{
    const {name,email,password,phone,profile} = req.body;
  
    try {
      const user = await User.signup(name, email, password,phone,profile);
  
      // create a jwt token
    //   const token = createToken(user._id);
  
    //   res.status(200).json({email, token});
      res.status(200).json({email});
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }
  
  // login user
  const loginUser = async (req,res)=>{
    const {email,password,profile} = req.body;
   
    try {
      const user = await User.login(email,password,profile);
  
      // create a jwt token
    //   const token = createToken(user._id);
    //   res.status(200).json({email,token});
      res.status(200).json({email});
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }

module.exports = {
    registerUser,
    loginUser
}