import { GridActionsCellItem, GridRenderCellParams, GridValueGetterParams } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import Stack from '@mui/material/Stack';
import { RoomChip } from '../RoomChip';
import { AvatarChip } from '../AvatarChip';
import { Invitation, User } from '@/types/entities';
import { StatusChip } from '../StatusChip';
import { InvitationStatus } from '@prisma/client';

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
        // status
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

export const handleAcceptMeeting = () => {
  console.log('Accept');
};
export const handleMaybeMeeting = () => {
  console.log('Maybe');
};
export const handleRejectMeeting = () => {
  console.log('Reject');
};
export const handleCancelMeeting = () => {
  console.log('Cancel');
};

export const getActions = (userId: number) => (params: GridValueGetterParams) => {
  // console.log('userId: ', userId);
  // console.log('params: ', params.row);
  const myMeetingActions = [
    <GridActionsCellItem key="cancel" icon={<DeleteIcon />} label="Cancel" onClick={() => handleCancelMeeting()} />,
  ];

  const participantMeetingActions = [
    <GridActionsCellItem
      key="accept"
      icon={<CheckCircleOutlinedIcon color="success" />}
      label="Accept"
      showInMenu
      onClick={() => handleAcceptMeeting()}
    />,
    <GridActionsCellItem
      key="maybe"
      icon={<HelpOutlineOutlinedIcon color="warning" />}
      label="Maybe"
      showInMenu
      onClick={() => handleMaybeMeeting()}
    />,
    <GridActionsCellItem
      key="reject"
      icon={<CancelOutlinedIcon color="error" />}
      label="Reject"
      showInMenu
      onClick={() => handleRejectMeeting()}
    />,
  ];
  return userId === params.row.organizerId ? myMeetingActions : participantMeetingActions;
};
