import React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { AuthUserNav } from './AuthUserNav';
import { Identity } from './Identity';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import logo from 'public/logo.png';

const AppBar: React.FC = () => {
  const { data: session } = useSession();

  return (
    <MuiAppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Image src={logo} alt="logo" width={30} />
        <Typography variant="h6" color="primary" noWrap sx={{ ml: 2 }}>
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
