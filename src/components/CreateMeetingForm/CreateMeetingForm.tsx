import Button from '@mui/material/Button';
import { Formik } from 'formik';
import { Box, TextField } from '@mui/material';
import MeetingTime from './MeetingTime';
import MeetingRoom from './MeetingRoom';
import { Stack } from '@mui/system';
import Attendee from './Attendee';

const INITIAL_VALUES = {
  title: '',
  description: '',
  room: null,
  date: null,
  startTime: null,
  endTime: null,
};

const CreateMeetingForm: React.FC = () => {
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={(values) => {
        console.log(JSON.stringify(values, null, 2));
      }}
    >
      {({ handleSubmit, handleChange, values }) => (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Stack spacing={2}>
            <TextField
              id="meeting-title"
              label="Meeting title"
              name="title"
              onChange={handleChange}
              value={values.title}
              margin="normal"
              required
              fullWidth
            />
            <TextField
              id="meeting-description"
              label="Meeting description"
              name="description"
              onChange={handleChange}
              value={values.description}
              margin="normal"
              fullWidth
            />
            <MeetingTime />
            <MeetingRoom />
            <Attendee />
            <Stack direction="row" justifyContent="space-between">
              <Button variant="outlined" sx={{ mt: 3, mb: 2 }}>
                Cancel
              </Button>
              <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                Create
              </Button>
            </Stack>
          </Stack>
        </Box>
      )}
    </Formik>
  );
};

export default CreateMeetingForm;
