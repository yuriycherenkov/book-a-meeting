import { Paper, Typography } from '@mui/material';
import CreateMeetingForm from '@/components/CreateMeetingForm/CreateMeetingForm';

export default function MeetingsPage() {
  return (
    <Paper sx={{ mt: 2, p: 2 }}>
      <Typography variant="h1" sx={{ fontSize: 42 }}>
        Create new meeting
      </Typography>
      <CreateMeetingForm />
    </Paper>
  );
}
