import mongoose from 'mongoose';
import Counter from './counter-schema.js';
const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: String,
    userId: { type: Number, unique: true }
});


userSchema.pre('save', async function (next) {
    const doc = this;

    
    const counter = await Counter.findOneAndUpdate(
        { model: 'user' },
        { $inc: { count: 1 } },
        { new: true, upsert: true }
    );

    doc.userId = counter.count;

    next();
});

const User = mongoose.model('User', userSchema);

export default User;
