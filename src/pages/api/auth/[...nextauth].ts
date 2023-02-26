import { NextApiHandler } from 'next';
import NextAuth, { NextAuthOptions } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '../../../lib/prisma';
import { checkPassword } from '@/lib/password';

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
        if (!credentials) return null;

        const existingUser = await prisma.user.findFirst({
          where: { email: credentials?.email },
        });

        if (!existingUser) {
          // const hash = await encodePassword(credentials.password);
          // await prisma.user.create({
          //   data: {
          //     email: credentials.email,
          //     password: hash,
          //   },
          // });
          return null;
        }
        const { password, id, ...userData } = existingUser;
        const isPasswordCorrect = await checkPassword(credentials.password, password);

        if (isPasswordCorrect) {
          return {
            ...userData,
            id: id.toString(),
            csrfToken: credentials?.csrfToken,
          };
        }

        return null;
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

      // @ts-ignore
      if (session?.user) session.user!.id = token.sub;

      console.log('session => ', session.user, 'token => ', token);
      return session;
    },
  },
  pages: {
    signIn: '/signin',
  },
};

export default authHandler;
