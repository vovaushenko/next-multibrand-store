import mongoose, { Date as MongooseDate, Document, Schema } from 'mongoose';

export interface ISignup extends Document {
  email: string;
  country: string;
  createdAt: MongooseDate;
}

const signupSchema: Schema<ISignup> = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please provide email'],
    minLength: 3,
    maxLength: 50,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide valid email',
    ],
    unique: true,
  },

  country: {
    type: String,
    required: [true, 'Please provide country'],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Signup || mongoose.model('Signup', signupSchema);
