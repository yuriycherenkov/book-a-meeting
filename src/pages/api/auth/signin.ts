// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { onError } from '@/utils/onError';
import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

const getUser = async (req: NextApiRequest, res: NextApiResponse) => {
  // const response = await getUserPrisma();

  res.status(200).json({});
};

const handler = nc<NextApiRequest, NextApiResponse>({ onError }).get(getUser);

export default handler;
