import * as React from 'react';
import { Stack, TextField, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useField } from 'formik';

const DatePickerField: React.FC<any> = ({ label, name }) => {
  const [field, , helpers] = useField(name);

  return (
    <DatePicker
      label={label}
      disablePast={true}
      renderInput={(params) => <TextField {...params} />}
      value={field.value}
      onChange={(newValue) => {
        helpers.setValue(newValue);
      }}
    />
  );
};

const TimePickerField: React.FC<any> = ({ label, name }) => {
  const [field, , helpers] = useField(name);
  return (
    <TimePicker
      label={label}
      value={field.value}
      onChange={(newValue) => {
        helpers.setValue(newValue);
      }}
      renderInput={(params) => <TextField {...params} />}
    />
  );
};

const MeetingTime: React.FC = () => {
  return (
    <Stack spacing={2}>
      <Typography>Select time</Typography>
      <DatePickerField label="Meeting date" name="date" />
      <Stack direction="row" justifyContent="space-between">
        <TimePickerField label="Start time" name="startTime" />
        <TimePickerField label="End time" name="endTime" />
      </Stack>
    </Stack>
  );
};

export default MeetingTime;
