import mongoose, { Date as MongooseDate, Document, Schema } from 'mongoose';

export interface IReview extends Document {
  product: string;
  productID: string;
  clientName: string;
  clientEmail: string;
  rating: number;
  title: string;
  reviewContent: string;
  isReviewed: boolean;
  createdAt: MongooseDate;
}

const reviewSchema: Schema<IReview> = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Products',
  },
  productID: {
    type: String,
    required: true,
  },
  clientName: {
    type: String,
    required: true,
  },
  clientEmail: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  reviewContent: {
    type: String,
    required: true,
  },
  isReviewed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Review || mongoose.model('Review', reviewSchema);
