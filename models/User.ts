import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    number: String,
    mail: String,
    name: String,
    surname: String
})

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;