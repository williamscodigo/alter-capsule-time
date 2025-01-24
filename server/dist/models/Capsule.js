import { Schema, model } from 'mongoose';
const capsuleSchema = new Schema({
    capsuleMessage: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 800,
        trim: true,
    },
    capsuleAuthor: {
        type: String,
        required: true,
        trim: true,
    },
    share: {
        type: Boolean,
        required: true,
    },
    unlockDate: {
        type: Date,
        required: true,
    },
}, {
    timestamps: true,
    toJSON: { getters: true },
    toObject: { getters: true },
});
const Capsule = model('Capsule', capsuleSchema);
export default Capsule;
