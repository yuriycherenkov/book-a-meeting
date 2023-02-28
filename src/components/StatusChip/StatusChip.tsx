import Chip, { ChipProps } from '@mui/material/Chip';
import InfoIcon from '@mui/icons-material/Info';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

import { InvitationStatus } from '@prisma/client';

interface RoomsChipProps extends ChipProps {
  status: InvitationStatus;
}

interface StatusIconProps {
  status: InvitationStatus;
}

const IconMapper = {
  PENDING: InfoIcon,
  ACCEPTED: CheckCircleOutlinedIcon,
  MAYBE: HelpOutlineOutlinedIcon,
  REJECTED: CancelOutlinedIcon,
};

const colorMapper = {
  PENDING: 'info',
  ACCEPTED: 'success',
  MAYBE: 'warning',
  REJECTED: 'error',
} as const;

const StatusChip: React.FC<RoomsChipProps> = ({ status }) => {
  const IconComponent = IconMapper[status];
  return <Chip icon={<IconComponent />} color={colorMapper[status]} variant="outlined" label={status} />;
};

const StatusIcon: React.FC<StatusIconProps> = ({ status }) => {
  const IconComponent = IconMapper[status];
  return <IconComponent color={colorMapper[status]} titleAccess={status} />;
};

export { StatusIcon };
export default StatusChip;
