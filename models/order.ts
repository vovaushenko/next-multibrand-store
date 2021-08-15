import mongoose, { Date as MongooseDate, Document, Schema } from 'mongoose';
import { Purchase, UserShippingInfo } from '../types';
import { IUser } from './user';

interface PaymentInfo {
  paymentID: string;
  status: string;
}

export interface IOrder extends Document {
  user: IUser;
  orderTotal: number;
  purchase: Purchase[];
  shippingInfo: UserShippingInfo;
  paymentInfo: PaymentInfo;
  paidAt: MongooseDate;
  createdAt: MongooseDate;
  deliveryStatus: string;
}

const orderSchema: Schema<IOrder> = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  orderTotal: {
    type: Number,
    required: true,
  },
  purchase: [
    {
      productID: {
        type: String,
      },
      brand: {
        type: String,
      },
      model: {
        type: String,
      },
      size: {
        type: String,
      },
      img: {
        type: String,
      },
      price: {
        type: Number,
      },
    },
  ],
  shippingInfo: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zipCode: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  paymentInfo: {
    paymentID: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },

  paidAt: {
    type: Date,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  deliveryStatus: {
    type: String,
    default: 'Not delivered',
  },
});

export default mongoose.models.Order || mongoose.model('Order', orderSchema);
