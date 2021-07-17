import 'next-auth';
import { Role } from './types/authTypes';

declare module 'next-auth' {
  interface User {
    _id: string;
    name: string;
    email: string;
    password: string;
    avatar: { public_id: string; url: string };
    role: Role;
  }

  interface Session {
    user: User;
  }
}
