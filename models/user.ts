import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import mongoose, { Document, Schema } from 'mongoose';
import validator from 'validator';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  avatar: { public_id: string; url: string };
  role: string;
  createdAt: string;
  resetPasswordToken: string;
  resetPasswordExpire: string | number;
}

const userSchema: Schema<IUser> = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add your Name'],
    maxLength: [50, 'Your name should not exceed 50 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please add your Email'],
    unique: true,
    validate: [validator.isEmail, 'Please enter a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Please add your Password'],
    minLength: [6, 'Your password should be longer than 6 characters'],
    select: false,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: 'user',
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  resetPasswordToken: String,

  resetPasswordExpire: Date,
});

// Encrypting password before saving a user
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// Compare User password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Generate Password Reset Token
userSchema.methods.getResetPasswordToken = function () {
  // Generate a password reset token
  const resetToken = crypto.randomBytes(20).toString('hex');
  // Hash the password
  this.resetPasswordToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
  // Set token's expiry time - 30 minutes
  const currentTimeStamp = Date.now;
  this.resetPasswordExpire = Number(currentTimeStamp) + 30 * 60 * 1000;

  return resetToken;
};

export default mongoose.models.User ||
  mongoose.model<IUser>('User', userSchema);
