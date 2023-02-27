import Chip, { ChipProps } from '@mui/material/Chip';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import InfoIcon from '@mui/icons-material/Info';
import DoneIcon from '@mui/icons-material/Done';
import { InvitationStatus } from '@prisma/client';

interface RoomsChipProps extends ChipProps {
  status: InvitationStatus;
}

const iconMapper = {
  PENDING: <InfoIcon />,
  ACCEPTED: <DoneIcon />,
  REJECTED: <ReportProblemIcon />,
};

const colorMapper = {
  PENDING: 'info',
  ACCEPTED: 'success',
  REJECTED: 'error',
} as const;

const StatusChip: React.FC<RoomsChipProps> = ({ status }) => {
  return <Chip icon={iconMapper[status]} color={colorMapper[status]} variant="outlined" label={status} />;
};

export default StatusChip;
