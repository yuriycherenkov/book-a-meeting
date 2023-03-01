import { GridActionsCellItem, GridRenderCellParams, GridValueGetterParams } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import Stack from '@mui/material/Stack';
import { RoomChip } from '../RoomChip';
import { AvatarChip } from '../AvatarChip';
import { Invitation, MeetingData, User } from '@/types/entities';
import { StatusChip } from '../StatusChip';
import { InvitationStatus } from '@prisma/client';
import { StatusIcon } from '../StatusChip/StatusChip';
import { del, put } from '@/servise/fetch';

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
    <Stack alignItems="flex-start" spacing="5px" sx={{ width: '100%' }}>
      {invitations.map((invitation) => (
        <Stack
          key={invitation.id}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: '100%' }}
        >
          <AvatarChip {...invitation.participant} />
          <StatusIcon status={invitation.status} />
        </Stack>
      ))}
    </Stack>
  );
};

export const getStatus = (userId: number) => (params: GridValueGetterParams) => {
  const invitations = params.row.invitations as Invitation[];
  const myInvitation = invitations.find((invitation) => invitation.userId === userId);

  return myInvitation?.status;
};

export const renderStatus = (params: GridRenderCellParams<InvitationStatus, any, any>) => {
  const status = params.value;

  if (!status) return '-';
  return <StatusChip status={status} />;
};

type handlerParams = {
  invitationId: number;
  meetingId: number;
};

export const handleAcceptMeeting = ({ invitationId, meetingId }: handlerParams) => {
  put(`/api/meetings/${meetingId}`, { invitationId, status: InvitationStatus.ACCEPTED });
};
export const handleMaybeMeeting = ({ invitationId, meetingId }: handlerParams) => {
  put(`/api/meetings/${meetingId}`, { invitationId, status: InvitationStatus.MAYBE });
};
export const handleRejectMeeting = ({ invitationId, meetingId }: handlerParams) => {
  put(`/api/meetings/${meetingId}`, { invitationId, status: InvitationStatus.REJECTED });
};
export const handleCancelMeeting = (meetingId: number) => {
  del(`/api/meetings/${meetingId}`);
};

export const getActions = (userId: number) => (params: GridValueGetterParams<any, MeetingData>) => {
  const meetingId = params.row.id;
  const myInvitation = params.row.invitations.find((invitation) => invitation.userId === userId);
  const invitationId = myInvitation?.id;

  const myMeetingActions = [
    <GridActionsCellItem
      key="cancel"
      icon={<DeleteIcon />}
      label="Cancel"
      onClick={() => handleCancelMeeting(meetingId)}
    />,
  ];

  const participantMeetingActions = [
    <GridActionsCellItem
      key="accept"
      icon={<CheckCircleOutlinedIcon color="success" />}
      label="Accept"
      showInMenu
      onClick={() => invitationId && handleAcceptMeeting({ invitationId, meetingId })}
    />,
    <GridActionsCellItem
      key="maybe"
      icon={<HelpOutlineOutlinedIcon color="warning" />}
      label="Maybe"
      showInMenu
      onClick={() => invitationId && handleMaybeMeeting({ invitationId, meetingId })}
    />,
    <GridActionsCellItem
      key="reject"
      icon={<CancelOutlinedIcon color="error" />}
      label="Reject"
      showInMenu
      onClick={() => invitationId && handleRejectMeeting({ invitationId, meetingId })}
    />,
  ];
  return userId === params.row.organizerId ? myMeetingActions : participantMeetingActions;
};
