import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UsersModel = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
 
})

const users = mongoose.model('User', UsersModel);
export default users;
//module.exports = mongoose.model('company', Co