import React from 'react';
import { Stack, TextField, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import { useField, useFormikContext } from 'formik';

const TimePickerField: React.FC<any> = ({ label, name, ...props }) => {
  const [field, values, helpers] = useField(name);

  return (
    <StaticTimePicker
      label={label}
      value={field.value}
      onChange={(newValue) => {
        helpers.setValue(newValue);
      }}
      renderInput={(params) => (
        <TextField {...params} error={Boolean(values.error && values.touched)} helperText={values.error} />
      )}
      {...props}
    />
  );
};

const MeetingTime: React.FC = () => {
  const { setFieldValue } = useFormikContext<any>();
  const [meetingDate, setMeetingDate] = React.useState<null | Date>(null);
  const [, values, helpers] = useField('meetingDate');

  return (
    <Stack spacing={2}>
      <Typography>Select time</Typography>
      <DatePicker
        label="Meeting date"
        disablePast={true}
        renderInput={(params) => (
          <TextField {...params} error={Boolean(values.error && !values.value)} helperText={values.error} />
        )}
        value={meetingDate}
        onChange={(newValue) => {
          helpers.setValue(newValue);
          setMeetingDate(newValue);
          setFieldValue('startDate', newValue);
          setFieldValue('endDate', newValue);
        }}
      />
      {meetingDate && (
        <Stack direction="row" justifyContent="space-between">
          <TimePickerField label="Start time" name="startDate" />
          <TimePickerField label="End time" name="endDate" />
        </Stack>
      )}
    </Stack>
  );
};

export default MeetingTime;
