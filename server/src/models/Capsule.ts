import { Schema, model, Document } from 'mongoose';


interface ICapsule extends Document {
  capsuleMessage: string;
  capsuleAuthor: string;
  share: boolean;
  unlockDate: Date;
  createdAt: Date;
 
}


const capsuleSchema = new Schema<ICapsule>(
  {
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
  
  },
  {
    timestamps: true,
    toJSON: { getters: true },
    toObject: { getters: true },
  }
);

const Capsule = model<ICapsule>('Capsule', capsuleSchema);

export default Capsule;
