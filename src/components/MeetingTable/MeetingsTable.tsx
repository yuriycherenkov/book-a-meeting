import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useGetMeetings } from '@/hooks/useGetMeetings';
import { COLUMNS } from './tableConfig';

// const mockerRows = [
//   {
//     id: 1,
//     title: 'Team standup',
//     description: null,
//     organizerId: 1,
//     organizer: {
//       id: 1,
//       email: 'testuser@gmail.com',
//       firstName: 'Yurii',
//       lastName: 'Cherenkov',
//     },
//     roomId: 1,
//     room: {
//       id: 1,
//       number: 101,
//       capacity: 5,
//       location: 'Main office',
//     },
//     date: '03/29/2023',
//     startTime: '11:00',
//     endTime: '11:30',
//     participants: [
//       {
//         id: 1,
//         email: 'testuser@gmail.com',
//         firstName: 'Yurii',
//         lastNAme: 'Cherenkov',
//       },
//     ],
//   },
// ];

const MeetingsTable = () => {
  const { data = [] } = useGetMeetings();

  return (
    <Box sx={{ height: 400 }}>
      <DataGrid columns={COLUMNS} rows={data} />
    </Box>
  );
};

export default MeetingsTable;
