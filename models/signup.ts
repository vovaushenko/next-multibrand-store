import mongoose, { Date as MongooseDate, Document, Schema } from 'mongoose';

export interface ISignup extends Document {
  email: string;
  continent: string;
  country: string;
  countryCode: string;
  city: string;
  region: string;
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

  continent: {
    type: String,
    required: [true, 'Please provide continent'],
  },
  country: {
    type: String,
    required: [true, 'Please provide country'],
  },
  city: {
    type: String,
    required: [true, 'Please provide city'],
  },
  region: {
    type: String,
    required: [true, 'Please provide region'],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Signup || mongoose.model('Signup', signupSchema);
