import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CreateMeetingForm from '@/components/CreateMeetingForm/CreateMeetingForm';
import { Box, Stack } from '@mui/material';
import Image from 'next/image';
import meetingPng from 'public/meeting.png';

export default function MeetingsPage() {
  return (
    <Stack direction="row">
      <Box>
        <Image src={meetingPng} alt="" />
      </Box>
      <Paper sx={{ mt: 2, p: 2, minWidth: 700 }}>
        <Typography component="h1" variant="h5">
          Create new meeting
        </Typography>
        <CreateMeetingForm />
      </Paper>
    </Stack>
  );
}
