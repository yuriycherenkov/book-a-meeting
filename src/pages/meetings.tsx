import { Avatar, Box, Typography } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';

export default function MeetingsPage() {
  return (
    <Box
      sx={{
        marginTop: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <GroupsIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
    </Box>
  );
}
