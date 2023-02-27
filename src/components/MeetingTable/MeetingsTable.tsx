import Box from '@mui/material/Box';
import { useSession } from 'next-auth/react';
import { DataGrid } from '@mui/x-data-grid';
import { useGetMeetings } from '@/hooks/useGetMeetings';
import { COLUMNS } from './tableConfig';

const MeetingsTable = () => {
  const { data: session } = useSession();

  const currentUserId = session?.user.id;

  console.log('Session: ', currentUserId);

  const { data = [] } = useGetMeetings();

  return (
    <Box sx={{ mt: 2 }}>
      <DataGrid autoHeight pageSize={10} columns={COLUMNS} rows={data} />
    </Box>
  );
};

export default MeetingsTable;
