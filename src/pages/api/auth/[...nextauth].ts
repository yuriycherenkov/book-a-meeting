import { NextApiHandler } from 'next';
import NextAuth, { NextAuthOptions } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '../../../lib/prisma';

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, authOptions);

export const authOptions: NextAuthOptions = {
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
        csrfToken: { type: 'text' },
      },
      async authorize(credentials) {
        console.log('credentials => ', credentials);

        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        console.log('user cred -> ', email, password);

        const existingUser = await prisma.user.findFirst({
          where: { email },
        });

        console.log('existingUser ', existingUser);

        // if (!existingUser) {
        //   return null;
        // }

        return {
          id: email,
          email,
          password,
          csrfToken: credentials?.csrfToken,
        };
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async session({ session, token }) {
      // session.address = token.sub
      // session.user.name = token.sub
      // session.user.image = "https://www.fillmurray.com/128/128"

      console.log('session => ', session, 'token => ', token);
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
};

export default authHandler;
