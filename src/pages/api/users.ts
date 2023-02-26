import prisma from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { onError } from '../../utils/onError';

const getUsersPrisma = () => prisma.user.findMany();

// GET /api/users
const getUsers = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await getUsersPrisma();

  res.status(200).json(response);
};

const handler = nc<NextApiRequest, NextApiResponse>({ onError }).get(getUsers);

export default handler;
