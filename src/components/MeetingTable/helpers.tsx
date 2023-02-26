import { GridRenderCellParams } from '@mui/x-data-grid';
import Chip from '@mui/material/Chip';
import PersonIcon from '@mui/icons-material/Person';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

export const renderOrganizer = (params: GridRenderCellParams<{ firstName: string; lastName: string }, any, any>) => {
  if (!params.value) {
    return '';
  }
  const { firstName, lastName } = params.value;
  const organizerLabel = `${firstName} ${lastName}`;
  return <Chip icon={<PersonIcon />} label={organizerLabel} color="primary" />;
};

export const renderRoom = (params: GridRenderCellParams<{ number: number; location: string }, any, any>) => {
  if (!params.value) {
    return '';
  }
  const { number, location } = params.value;
  const roomLabel = `${number} ${location}`;
  return <Chip icon={<MeetingRoomIcon />} label={roomLabel} />;
};
