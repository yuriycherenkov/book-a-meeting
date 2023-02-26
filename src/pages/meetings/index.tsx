import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { MeetingsTable } from '@/components/MeetingTable';
// import { useEffect } from 'react';
// import { get } from '@/servise/fetch';

export default function MeetingsPage() {
  // useEffect(() => {
  //   get('/api/meetings').then((res) => {
  //     console.log('res: ', res);
  //   });
  // }, []);

  return (
    <Paper sx={{ mt: 2, p: 2, height: 500 }}>
      <Typography component="h1" variant="h5">
        My meetings
      </Typography>
      <MeetingsTable />
    </Paper>
  );
}
