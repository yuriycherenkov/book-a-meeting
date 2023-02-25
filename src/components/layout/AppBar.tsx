import React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GroupsIcon from '@mui/icons-material/Groups';
import { AuthUserNav } from './AuthUserNav';
import { Identity } from './Identity';
import { useSession } from 'next-auth/react';

const AppBar: React.FC = () => {
  const { data: session } = useSession();

  return (
    <MuiAppBar position="static">
      <Toolbar>
        <GroupsIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
          Book a meeting
        </Typography>
        {!!session?.user?.email && (
          <>
            <AuthUserNav />
            <Identity user={session.user.email} />
          </>
        )}
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
