import Button from '@mui/material/Button';
import { Formik } from 'formik';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Participants from './Participants';
import { MeetingState } from './MeetingState';
import { post } from '@/servise/fetch';

const INITIAL_VALUES = {
  title: '',
  agenda: '',
  roomId: null,
  startDate: null,
  endDate: null,
  participants: [],
};

const CreateMeetingForm: React.FC = () => {
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={(values) => {
        console.log(JSON.stringify(values, null, 2));
        post('/api/meetings', values);
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
              id="meeting-agenda"
              label="Meeting agenda"
              name="agenda"
              onChange={handleChange}
              value={values.agenda}
              margin="normal"
              fullWidth
            />
            <MeetingState />
            <Participants />
            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
              Create
            </Button>
          </Stack>
        </Box>
      )}
    </Formik>
  );
};

export default CreateMeetingForm;
