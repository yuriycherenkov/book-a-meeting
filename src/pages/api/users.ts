import prisma from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import nc from 'next-connect';
import { onError } from '../../utils/onError';
import { authOptions } from './auth/[...nextauth]';

const getUsersPrisma = (organizerId: number) =>
  prisma.user.findMany({
    where: {
      NOT: {
        id: organizerId,
      },
    },
  });

// GET /api/users
const getUsers = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);
  const organizerId = Number(session?.user?.id);

  const response = await getUsersPrisma(organizerId);

  res.status(200).json(response);
};

const handler = nc<NextApiRequest, NextApiResponse>({ onError }).get(getUsers);

export default handler;
