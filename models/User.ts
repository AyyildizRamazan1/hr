import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    number: String,
    mail: String,
    name: String,
    surname: String
})

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
