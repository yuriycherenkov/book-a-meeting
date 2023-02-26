import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import { useField } from 'formik';
import Chip from '@mui/material/Chip';
import Alert from '@mui/material/Alert';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

interface Rooms {
  id: number;
  number: number;
  capacity: number;
  location: string;
}

const MeetingRoom: React.FC<{ rooms: Rooms[] | null }> = ({ rooms }) => {
  const [field] = useField('roomId');

  if (rooms === null) return <Alert severity="info">Please choose date and time to see available rooms</Alert>;
  if (rooms.length === 0)
    return (
      <Alert severity="info">
        We regret to inform you that at this time, all of our rooms are currently occupied and unavailable. We recommend
        checking back at a later time, as our availability may change throughout the day.
      </Alert>
    );

  return (
    <Box>
      <FormControl>
        <FormLabel id="available-rooms-label">Available rooms</FormLabel>
        <RadioGroup aria-labelledby="available-rooms-label" {...field} row>
          {rooms.map((room) => (
            <FormControlLabel
              sx={{ mt: 2 }}
              key={room.id}
              value={room.id}
              control={<Radio icon={<></>} checkedIcon={<></>} />}
              label={
                <Chip
                  icon={<MeetingRoomIcon />}
                  color={Number(field.value) === room.id ? 'primary' : 'default'}
                  label={`${room.number} ${room.location}`}
                />
              }
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default MeetingRoom;
