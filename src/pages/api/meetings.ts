import prisma from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { onError } from '../../utils/onError';
import { getServerSession } from 'next-auth/next';
import { authOptions } from './auth/[...nextauth]';
import { InvitationStatus } from '@prisma/client';
import { MeetingFormData } from '@/types/entities';

const getMeetingsPrisma = (organizerId: number) =>
  prisma.meeting.findMany({
    include: { organizer: true, room: true, invitations: true },
    where: { organizerId },
  });

const createMeetingPrisma = (meetingInfo: MeetingFormData & { organizerId: number }) => {
  const { participants, roomId, ...rest } = meetingInfo;
  return prisma.meeting.create({
    data: {
      ...rest,
      roomId: Number(roomId),
      invitations: {
        create: participants.map((id) => ({
          userId: Number(id),
          status: InvitationStatus.PENDING,
        })),
      },
    },
  });
};

// GET /api/meetings
const getMeetings = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);
  const organizerId = Number(session?.user?.id);

  const response = await getMeetingsPrisma(organizerId);

  res.status(200).json(response);
};

// POST /api/meetings
const createMeeting = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  const meetingInfo = { ...req.body, organizerId: Number(session?.user?.id) };
  console.log('meetingInfo: ', meetingInfo);

  const result = await createMeetingPrisma(meetingInfo);
  res.status(200).json(result);
};

const handler = nc<NextApiRequest, NextApiResponse>({ onError }).get(getMeetings).post(createMeeting);

export default handler;
