import prisma from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { onError } from '../../utils/onError';

const getRoomsPrisma = () => prisma.room.findMany();

const getRooms = async (req: NextApiRequest, res: NextApiResponse) => {
  const { startDate, endDate } = req.query as { startDate: string; endDate: string };
  const response = await getRoomsPrisma();

  const startDateFormat = new Date(startDate);
  const endDateFormat = new Date(endDate);

  res.status(200).json(response);
};

const handler = nc<NextApiRequest, NextApiResponse>({ onError }).get(getRooms);

export default handler;
