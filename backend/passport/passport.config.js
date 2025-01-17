import passport from "passport";
import bycrypt from "bcryptjs"; // This is used for hashing the password.

import User from "../models/user.model.js";
import {GraphQLLocalStrategy} from "graphql-passport";


export const configurePassport = async() =>{
    passport.serializeUser((user, done) =>{
        console.log("Serializing User");
        done(null, user.id);        
    });// What this function does is that whenever any login or signup request is made, the password is hashed and stored in the database.bascially serializing the user.
    passport.deserializeUser(async (id, done) =>{
        console.log("Desearializing User");
        try{
          const user = await User.findById(id);
          done(null, user);
        }catch(err){
            done(err);
        }
    });
    passport.use(
        new GraphQLLocalStrategy(async (username, password, done) => {
            try{
                const user = await User.findOne({username});
                if(!user){
                    throw new Error("Invalid Username or password");
                }
                const validPassword = await bycrypt.compare(password, user.password);
                if(!validPassword){
                    throw new Error("Invalid Username or password");
                }
                return done(null, user);
            }catch (err){
                return done(err);
            }
        })
    );
};


