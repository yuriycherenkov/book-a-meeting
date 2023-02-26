import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import { useField } from 'formik';

interface Rooms {
  id: number;
  number: number;
  capacity: number;
  location: string;
}

const MeetingRoom: React.FC<{ rooms: Rooms[] }> = ({ rooms }) => {
  const [field] = useField('roomId');

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
