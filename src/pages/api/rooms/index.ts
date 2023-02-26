import prisma from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { onError } from '../../../utils/onError';

const getRoomsPrisma = () => prisma.room.findMany();

// GET /api/rooms
const getRooms = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await getRoomsPrisma();

  res.status(200).json(response);
};

const handler = nc<NextApiRequest, NextApiResponse>({ onError }).get(getRooms);

export default handler;
