const LocalStrategy=require("passport-local").Strategy;
const user = require("../models/user");
const bcrypt = require('bcrypt');

function init(passport) {
    passport.use(new LocalStrategy({usernameField:"email"}, async(email, password, done)=>
    {
        //login

        const userdata=await user.findOne({email:email});

        if(!userdata)
        {
            return done(null, false, {message:"No user with this email"});
        }

        bcrypt.compare(password, userdata.password).then(match=>
            {
                if(match)
                {
                    return done(null, userdata, {message:"Logged in sucessfull"});
                }

                return done(null, false, {message:"Wrong Password"});
            }).catch(err=>
            {
                return done(null, false, {message:"Something went wrong !"});
            })

    }))

    passport.serializeUser((userdata, done)=>
    {
        done(null, userdata._id);
    })

    passport.deserializeUser((id, done)=>
    {
        user.findById(id, (err, userdata)=>
        {
            done(err, userdata);
        });
    })
}

module.exports=init;