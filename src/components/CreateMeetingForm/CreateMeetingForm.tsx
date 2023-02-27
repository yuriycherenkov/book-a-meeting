import Button from '@mui/material/Button';
import { Formik } from 'formik';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Participants from './Participants';
import { MeetingState } from './MeetingState';

const INITIAL_VALUES = {
  title: '',
  description: '',
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
