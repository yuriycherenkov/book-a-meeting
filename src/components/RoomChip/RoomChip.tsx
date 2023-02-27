import Chip from '@mui/material/Chip';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

interface RoomsChipProps {
  fieldValue: string;
  location: string;
  roomId: number;
}

const RoomChip: React.FC<RoomsChipProps> = ({ fieldValue, location, roomId }) => {
  return (
    <Chip
      icon={<MeetingRoomIcon />}
      color={Number(fieldValue) === roomId ? 'primary' : 'default'}
      label={`${roomId} ${location}`}
    />
  );
};

export default RoomChip;
