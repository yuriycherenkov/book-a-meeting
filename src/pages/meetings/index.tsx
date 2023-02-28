import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { MeetingsTable } from '@/components/MeetingTable';

export default function MeetingsPage() {
  return (
    <Paper sx={{ mt: 2, p: 2 }}>
      <Typography component="h1" variant="h5">
        My meetings
      </Typography>
      <MeetingsTable />
    </Paper>
  );
}
