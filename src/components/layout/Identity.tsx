import { Box, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

type IdentityProps = {
  firstName: string;
  lastName: string;
};

export const Identity: React.FC<IdentityProps> = ({ firstName, lastName }) => {
  const fullName = `${firstName} ${lastName}`;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <PersonIcon />
      <Typography>{fullName}</Typography>
    </Box>
  );
};
