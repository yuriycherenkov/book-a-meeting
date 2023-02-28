import prisma from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { onError } from '../../../utils/onError';
import { InvitationStatus } from '@prisma/client';

const updateMeetingStatusPrisma = ({
  meetingId,
  invitationId,
  status,
}: {
  meetingId: number;
  invitationId: number;
  status: InvitationStatus;
}) => {
  return prisma.meeting.update({
    where: { id: meetingId },
    data: {
      invitations: {
        update: {
          where: {
            id: invitationId,
          },
          data: {
            status,
          },
        },
      },
    },
  });
};

const deleteMeetingPrisma = (meetingId: number) => {
  const deleteInvitations = prisma.invitation.deleteMany({
    where: {
      meetingId,
    },
  });
  const deleteMeeting = prisma.meeting.delete({
    where: { id: meetingId },
  });

  return prisma.$transaction([deleteInvitations, deleteMeeting]);
};

// PUT /api/meeting/:meetingId
const updateMeeting = async (req: NextApiRequest, res: NextApiResponse) => {
  const meetingId = Number(req.query.meetingId);
  const { invitationId, status } = req.body;

  await updateMeetingStatusPrisma({ meetingId, invitationId: Number(invitationId), status });
  res.status(200).json({});
};

// DEL /api/meetings/:meetingId
const deleteMeeting = async (req: NextApiRequest, res: NextApiResponse) => {
  const meetingId = Number(req.query.meetingId);

  await deleteMeetingPrisma(meetingId);
  res.status(200).json({});
};

const handler = nc<NextApiRequest, NextApiResponse>({ onError }).put(updateMeeting).delete(deleteMeeting);

export default handler;
