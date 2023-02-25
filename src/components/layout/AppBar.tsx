import React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GroupsIcon from '@mui/icons-material/Groups';
// import { useAuth } from '@/context/AuthContext';
import { AuthUserNav } from './AuthUserNav';
import { Identity } from './Identity';

const AppBar: React.FC = () => {
  // const userInfo = useAuth();
  const userInfo = {};

  return (
    <MuiAppBar position="static">
      <Toolbar>
        <GroupsIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
          Book a meeting
        </Typography>
        {!!Object.keys(userInfo).length && (
          <>
            <AuthUserNav />
            {/* <Identity {...userInfo} /> */}
          </>
        )}
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
