import { users } from "../dummyData/data.js";
import User from "../models/user.model.js";
import bycrypt from "bcryptjs";

const userResolver = {
   Mutation: {
      signUp: async(_,{input}, context) =>{
         try{
            const {username, name, password, gender} = input;
            if(!username || !name || !password || !gender){
               throw new Error("Please fill in all the fields");
            }
            const existingUser = await User.findOne({ username });
            if(existingUser){
               throw new Error("Username already exists");
            }
            const salt = await bycrypt.genSalt(10);
            const hashedPassword = await bycrypt.hash(password, salt);

            const boyProfilePicture = `https://avatar.iran.liara.run/public/boy?username=${username}`;
            const girlProfilePicture = `https://avatar.iran.liara.run/public/girl?username=${username}`;

            const newUser = new User({
               username,
               name,
               password: hashedPassword,
               gender,
               profilePicture: gender === "male" ? boyProfilePicture : girlProfilePicture,
            });
            await newUser.save();
            await context.login(newUser);
            return newUser;
         } catch(err){
            console.error(" Error in sign up: ", err);
            throw new Error(err.message || "Internal server error.");
         }
      },
      login: async(_, {input}, context) => {
         try{
            const {username, password} = input;
            if (!username || !password) throw new Error("All fields are required");
            const { user } = await context.authenticate("graphql-local", { username, password });
            
            await context.login(user);
            return user;
         }catch(err){
            console.error("Error in login: ", err);
            throw new Error(err.message || "Internal server error.");
         }
      },
      logout: async(_, __, context) => {
         try {
            await context.logout();
            context.req.session.destroy((err) => {
               if(err) throw err;
            });
            context.res.clearCookie("connect.sid");

            return { message : "Logged out successfully"};
         } catch (err) {
            console.error("Error in logout: ", err);
            throw new Error(err.message || "Internal server error.");
         }
      }
   },
   Query:{
      authUser: async(_, __, context) => {
         try {
            const user =  await context.getUser();
            return user;    
         } catch (err) {
            console.error("Error in authUser: ", err);
            throw new Error("Internal server error.");
         }
      },
      user: async(_, {userId}) => {
         try {
            const user = await User.findById(userId);
            return user
         } catch (err) {
            console.error("Error in user query ", err);
            throw new Error(err.message || "Error in getting user.");
         }
      }
   },
   // TODO  => Add User/Trasaction relationship
};

export default userResolver;
// 1:27:07
