import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CreateMeetingForm from '@/components/CreateMeetingForm/CreateMeetingForm';

export default function MeetingsPage() {
  return (
    <Paper sx={{ mt: 2, p: 2 }}>
      <Typography component="h1" variant="h5">
        Create new meeting
      </Typography>
      <CreateMeetingForm />
    </Paper>
  );
}
