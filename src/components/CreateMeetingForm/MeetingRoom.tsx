import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import { useField } from 'formik';

const rooms = [
  {
    id: 1,
    number: 101,
    capacity: 4,
    location: '1st floor',
  },
  {
    id: 2,
    number: 110,
    capacity: 12,
    location: '1st floor',
  },
  {
    id: 3,
    number: 114,
    capacity: 5,
    location: '1st floor',
  },
];

const MeetingRoom: React.FC = () => {
  const [field] = useField('room');

  return (
    <Box>
      <FormControl>
        <FormLabel id="available-rooms-label">Available rooms</FormLabel>
        <RadioGroup aria-labelledby="available-rooms-label" {...field}>
          {rooms.map((room) => (
            <FormControlLabel key={room.id} value={room.id} control={<Radio />} label={room.number} />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default MeetingRoom;
