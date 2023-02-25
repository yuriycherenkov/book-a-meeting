import { Box, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { signOut } from 'next-auth/react';

type IdentityProps = {
  user: string;
};

export const Identity: React.FC<IdentityProps> = ({ user }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <PersonIcon />
      <Typography>{user}</Typography>
      <button onClick={() => signOut()}>logout </button>
    </Box>
  );
};
