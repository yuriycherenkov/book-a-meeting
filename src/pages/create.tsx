import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CreateMeetingForm from '@/components/CreateMeetingForm/CreateMeetingForm';
import { getSession } from 'next-auth/react';

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

export async function getServerSideProps(ctx: any) {
  const session = await getSession(ctx);

  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
