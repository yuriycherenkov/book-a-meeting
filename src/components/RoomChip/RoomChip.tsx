import Chip, { ChipProps } from '@mui/material/Chip';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

interface RoomsChipProps extends ChipProps {
  location: string;
  number: number;
}

const RoomChip: React.FC<RoomsChipProps> = ({ location, number, color }) => {
  return <Chip icon={<MeetingRoomIcon />} color={color} label={`${number} ${location}`} />;
};

export default RoomChip;
