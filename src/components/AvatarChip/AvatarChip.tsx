import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import pmAvatar from 'public/pm-avatar.png';
import devAvatar from 'public/dev-avatar.png';
import qaAvatar from 'public/qa-avatar.png';
import baAvatar from 'public/ba-avatar.png';
import employeeAvatar from 'public/employee-avatar.png';
import Image from 'next/image';
import { User } from '@/types/entities';

const avatarMapper = {
  EMPLOYEE: employeeAvatar,
  DEV: devAvatar,
  QA: qaAvatar,
  BA: baAvatar,
  PM: pmAvatar,
};

const AvatarChip: React.FC<User> = (user) => {
  const { firstName, lastName, role } = user;
  return (
    <Chip
      avatar={
        <Avatar>
          <Image src={avatarMapper[role]} alt="" width={24} />
        </Avatar>
      }
      label={`${firstName} ${lastName} (${role})`}
      variant="outlined"
    />
  );
};

export default AvatarChip;
