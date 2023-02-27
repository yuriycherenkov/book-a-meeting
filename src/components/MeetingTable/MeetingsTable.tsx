import { get } from '@/servise/fetch';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useQuery } from 'react-query';
import { COLUMNS } from './tableConfig';

const mockerRows = [
  {
    id: 1,
    title: 'Team standup',
    description: null,
    organizerId: 1,
    organizer: {
      id: 1,
      email: 'testuser@gmail.com',
      firstName: 'Yurii',
      lastName: 'Cherenkov',
    },
    roomId: 1,
    room: {
      id: 1,
      number: 101,
      capacity: 5,
      location: 'Main office',
    },
    date: '03/29/2023',
    startTime: '11:00',
    endTime: '11:30',
    participants: [
      {
        id: 1,
        email: 'testuser@gmail.com',
        firstName: 'Yurii',
        lastNAme: 'Cherenkov',
      },
    ],
  },
];

const useGetMeetings = () => useQuery('get-meetings', () => get('/api/meetings'));

const MeetingsTable = () => {
  const { data } = useGetMeetings();

  console.log(' data ', data);

  return (
    <Box sx={{ height: 400 }}>
      <DataGrid columns={COLUMNS} rows={mockerRows} />
    </Box>
  );
};

export default MeetingsTable;
