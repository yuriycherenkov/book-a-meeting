import React from "react";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import GroupsIcon from "@mui/icons-material/Groups";
import { useAuth } from "@/context/AuthContext";
import { Box, Button } from "@mui/material";
import { AuthUserNav } from "./AuthUserNav";
import { Identity } from "./Identity";

const AppBar: React.FC = () => {
  const userInfo = useAuth();

  return (
    <MuiAppBar position="static">
      <Toolbar>
        <GroupsIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
          Book a meeting
        </Typography>
        {userInfo && (
          <>
            <AuthUserNav />
            <Identity {...userInfo} />
          </>
        )}
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
