import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { Box, TextField } from '@mui/material';
import { signIn, useSession } from 'next-auth/react';

const LoginForm: React.FC<{ csrfToken?: string }> = ({ csrfToken }) => {
  const { data: session, status, ...rest } = useSession();
  console.log('status ', status, session, rest);

  const { handleSubmit, handleChange, values, isSubmitting } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      // console.log(JSON.stringify(values, null, 2));

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
      />
      {!session && (
        <Button disabled={isSubmitting} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          {isSubmitting ? 'Submitting...' : 'Sign in'}
        </Button>
      )}
    </Box>
  );
};

export default LoginForm;
