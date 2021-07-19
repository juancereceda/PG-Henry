const User = require("../models/User");


const checkEmailAndPassword= async (req, res, next)=>{

  const existingUsername = await User.findOne({username:req.body.username})
  const existingEmail = await User.findOne({email:req.body.email});
  // console.log(existingEmail);

 try { 
   if(existingUsername) return res.status(400).json({message:'the username already exists, change it'})

   if(!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(req.body.email)){
      return res.status(400).json({message:'the input email is incorrect'});
  }
  if(existingEmail){
    return res.status(400).json({message:'the input email already exits'});
  }
  
  if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/.test(req.body.password)){
    return res.status(400).json({message:'the password must has at least 10 caracters, one Uppercase Letter, one Lowercase letter and one @$!%*?&'});
  }
  
else{
    next()
    return;
  } 
} catch(err){
    console.log(error)
   }
}

module.exports = {
  checkEmailAndPassword
};
