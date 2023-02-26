import prisma from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { onError } from '../../../utils/onError';

type RoomsQueryParams = {
  startDate: string;
  endDate: string;
};

const getRoomsPrisma = ({ startDate, endDate }: RoomsQueryParams) =>
  prisma.room.findMany({
    // include: { meetings: true },
    where: {
      OR: [
        {
          meetings: {
            none: {},
          },
        },
        {
          meetings: {
            every: {
              OR: [
                {
                  endDate: {
                    lte: startDate,
                  },
                },
                {
                  startDate: {
                    gte: endDate,
                  },
                },
              ],
            },
          },
        },
      ],
    },
  });

// GET /api/rooms/available
const getAvailableRooms = async (req: NextApiRequest, res: NextApiResponse) => {
  const { startDate, endDate } = req.query as RoomsQueryParams;

  const response = await getRoomsPrisma({ startDate, endDate });

  res.status(200).json(response);
};

const handler = nc<NextApiRequest, NextApiResponse>({ onError }).get(getAvailableRooms);

export default handler;
