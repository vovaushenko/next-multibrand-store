import 'next-auth';
import { Role } from './types/authTypes';

declare module 'next-auth' {
  interface User {
    role?: Role;
  }

  interface Session {
    user: User;
  }
}
