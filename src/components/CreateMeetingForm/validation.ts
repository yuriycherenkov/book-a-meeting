import * as Yup from 'yup';
export const validateStartDate = (startDate: Date | any, schema: Yup.DateSchema) => {
  return startDate && schema.min(startDate, 'End Date must be after Start Date');
};

export const validationSchema = Yup.object({
  title: Yup.string().required('Please enter title'),
  agenda: Yup.string().optional(),
  meetingDate: Yup.date().required('Please enter meeting date'),
  startDate: Yup.date().required('Please enter start date'),
  endDate: Yup.date().required('Please enter end date').when('startDate', validateStartDate),
});
