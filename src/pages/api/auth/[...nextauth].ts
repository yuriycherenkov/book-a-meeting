import { NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '../../../lib/prisma';

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);

const options = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'email',
          type: 'text',
          placeholder: 'postgres',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        console.log('credentials ', credentials);

        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        console.log(email, password);

        const existingUser = await prisma.user.findFirst({
          where: { email },
        });

        console.log('existingUser ', existingUser);

        // handle if doesn't exist
        return existingUser;
        // if (!isValid) {
        //   throw new Error('Wrong credentials. Try again.')
        // }

        // return user
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
};

export default authHandler;
