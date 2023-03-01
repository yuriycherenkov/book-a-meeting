import Button from '@mui/material/Button';
import { Formik } from 'formik';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Participants from './Participants';
import { MeetingState } from './MeetingState';
import { post } from '@/servise/fetch';
import { validationSchema } from './validation';

const INITIAL_VALUES = {
  title: '',
  agenda: '',
  roomId: null,
  meetingDate: null,
  startDate: new Date(),
  endDate: new Date(),
  participants: [],
};

const CreateMeetingForm: React.FC = () => {
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={validationSchema}
      onSubmit={({ meetingDate: _, ...values }) => {
        post('/api/meetings', values);
      }}
    >
      {({ handleSubmit, handleChange, values, errors, touched }) => (
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
              error={Boolean(errors.title && touched.title)}
              helperText={errors.title}
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
