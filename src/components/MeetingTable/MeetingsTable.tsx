import Box from '@mui/material/Box';
import { useSession } from 'next-auth/react';
import { DataGrid } from '@mui/x-data-grid';
import { useGetMeetings } from '@/hooks/useGetMeetings';
import { getColumns } from './tableConfig';

const MeetingsTable = () => {
  const { data: session } = useSession();

  const currentUserId = Number(session?.user.id);

  const { data = [] } = useGetMeetings();

  return (
    <Box
      sx={{
        mt: 2,
        '& .meeting-table-cell': {
          padding: '5px 10px',
        },
      }}
    >
      <DataGrid
        autoHeight
        pageSize={10}
        columns={getColumns(currentUserId)}
        rows={data}
        getCellClassName={() => 'meeting-table-cell'}
        getRowHeight={() => 'auto'}
      />
    </Box>
  );
};

export default MeetingsTable;
