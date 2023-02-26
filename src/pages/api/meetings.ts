import prisma from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { onError } from '../../utils/onError';
import { getServerSession } from 'next-auth/next';
import { authOptions } from './auth/[...nextauth]';

const getMeetingsPrisma = async (userId: string) =>
  await prisma.meeting.findMany({ where: { organizerId: Number(userId) } });

const getMeetings = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);
  console.log('Session: ', session);

  const response = await getMeetingsPrisma('1');

  res.status(200).json(response);
};

const handler = nc<NextApiRequest, NextApiResponse>({ onError }).get(getMeetings);

export default handler;
