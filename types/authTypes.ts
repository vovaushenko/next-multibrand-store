import { NextApiRequest } from 'next';

export interface NextApiResponseWithAuth extends NextApiRequest {
  user: User;
}

export type Role = 'admin' | 'user';

export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  avatar?: { public_id: string; url: string };
  role?: Role;
}
