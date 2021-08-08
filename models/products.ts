import mongoose, { Date as MongooseDate, Schema } from 'mongoose';

export interface IProduct extends Document {
  department: 'men' | 'women' | 'kid' | 'gear' | 'apparel';
  brand: string;
  model: string;
  price: number;
  styleCode: string;
  colors: string[];
  size: string[];
  description: string;
  isFeatured: boolean;
  createdAt: MongooseDate;
}

const productsSchema: Schema<IProduct> = new mongoose.Schema({
  department: {
    required: [
      true,
      'Please add product department (men, women, kid, gear, apparel)',
    ],
    type: String,
    enum: ['men', 'women', 'kid', 'gear', 'apparel'],
    default: 'men',
  },
  brand: {
    type: String,
    required: [true, 'Please add brand name'],
    maxLength: [15, 'Brand name should not exceed 50 characters'],
    trim: true,
  },
  model: {
    type: String,
    required: [true, 'Please add product model'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'Please add product price'],
  },
  styleCode: {
    type: String,
    required: [true, 'Please add product style code'],
    trim: true,
  },
  colors: [
    {
      type: String,
    },
  ],
  size: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: [true, 'Please add product description'],
    trim: true,
  },
  images: [
    {
      public_id: {
        type: String,
        required: [true],
      },
      url: {
        type: String,
        required: [true],
      },
    },
  ],

  isFeatured: {
    type: Boolean,
    default: false,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Products ||
  mongoose.model('Products', productsSchema);
