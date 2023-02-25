import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { Box, TextField } from '@mui/material';
import { signIn } from 'next-auth/react';
import { validationSchema } from './validation';

const LoginForm: React.FC<{ csrfToken?: string }> = ({ csrfToken }) => {
  const { handleSubmit, handleChange, values, isSubmitting, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      signIn('credentials', {
        // redirect: false,
        email: values.email,
        password: values.password,
      });
    },
  });

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <input type="hidden" name="csrfToken" defaultValue={csrfToken} />
      <TextField
        id="email"
        label="Email"
        name="email"
        onChange={handleChange}
        value={values.email}
        margin="normal"
        required
        fullWidth
        autoComplete="email"
        autoFocus
        error={Boolean(errors.email)}
        helperText={errors.email}
      />
      <TextField
        id="password"
        type="password"
        label="Password"
        name="password"
        onChange={handleChange}
        value={values.password}
        margin="normal"
        required
        fullWidth
        autoComplete="current-password"
        error={Boolean(errors.password)}
        helperText={errors.password}
      />

      <Button disabled={isSubmitting} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        {isSubmitting ? 'Submitting...' : 'Sign in'}
      </Button>
    </Box>
  );
};

export default LoginForm;
