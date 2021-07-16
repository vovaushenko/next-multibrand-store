import NextAuth, { Session } from 'next-auth';
import Providers from 'next-auth/providers';
import connectWithDB from '../../../config/connectWithDB';
import User from '../../../models/user';

// https://next-auth.js.org/getting-started/rest-api
// More on NEXT auth REST API

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials: { email: string; password: string }) {
        connectWithDB();

        const { email, password } = credentials;

        //* 1) Check if email and password are entered
        if (!email || !password) {
          throw new Error('Please enter email and password');
        }

        //* 2) Find User in DB
        const user = await User.findOne({ email }).select('+password');

        //! user does not exist
        if (!user) {
          throw new Error('Invalid Email or Password');
        }
        //* 3) Check if password is correct
        const isPasswordMatched = await user.comparePassword(password);

        //! invalid password/email
        if (!isPasswordMatched) {
          throw new Error('Invalid Email or Password');
        }

        return Promise.resolve(user);
      },
    }),
  ],
  callbacks: {
    jwt: async (token, user) => {
      user && (token.user = user);
      return Promise.resolve(token);
    },
    session: async (session: Session, token: Session) => {
      session.user = token.user;
      return Promise.resolve(session);
    },
  },
});
