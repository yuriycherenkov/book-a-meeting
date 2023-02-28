import { GridRenderCellParams, GridValueGetterParams } from '@mui/x-data-grid';
import { RoomChip } from '../RoomChip';
import { AvatarChip } from '../AvatarChip';
import { Invitation, User } from '@/types/entities';
import { StatusChip } from '../StatusChip';
import { InvitationStatus } from '@prisma/client';
import { Stack } from '@mui/material';

export const renderOrganizer = (params: GridRenderCellParams<User, any, any>) => {
  if (!params.value) {
    return '';
  }

  return <AvatarChip {...params.value} />;
};

export const renderRoom = (params: GridRenderCellParams<{ number: number; location: string }, any, any>) => {
  if (!params.value) {
    return '';
  }
  const { number, location } = params.value;
  return <RoomChip location={location} number={number} />;
};

export const getDate = (params: GridValueGetterParams) => {
  return params.row.startDate;
};

export const renderDate = (params: GridRenderCellParams<Date, any, any>) => {
  const date = params.value || '';
  return new Intl.DateTimeFormat('en', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(date));
};

export const renderTime = (params: GridRenderCellParams<string, any, any>) => {
  const date = params.value || '';
  return new Intl.DateTimeFormat('en', { timeStyle: 'short' }).format(new Date(date));
};

export const renderParticipant = (params: GridRenderCellParams<Invitation[], any, any>) => {
  const invitations = params.value || [];

  if (!invitations.length) return '-';
  return (
    <Stack alignItems="flex-start" spacing="2px">
      {invitations.map((invitation) => (
        <AvatarChip key={invitation.id} {...invitation.participant} />
      ))}
    </Stack>
  );
};

export const getStatus = (params: GridValueGetterParams) => {
  const currentUserId = 2; // TODO get current sessionId
  const invitations = params.row.invitations as Invitation[];
  const myInvitation = invitations.find((invitation) => invitation.userId === currentUserId);

  return myInvitation?.status;
};

export const renderStatus = (params: GridRenderCellParams<InvitationStatus, any, any>) => {
  const status = params.value;

  if (!status) return '-';
  return <StatusChip status={status} />;
};
