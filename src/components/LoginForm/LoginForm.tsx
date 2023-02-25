import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { Box, TextField } from '@mui/material';
import { signOut, useSession } from 'next-auth/react';
import axios from 'axios';

const userDataSend = (data: { username: string; password: string }) => axios.post('/api/auth/signin', data);

const LoginForm: React.FC = () => {
  const { data: session, status } = useSession();
  console.log('status ', status, session);

  const { handleSubmit, handleChange, values, isSubmitting } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      userDataSend(values);
    },
  });

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        id="username"
        label="Username"
        name="username"
        onChange={handleChange}
        value={values.username}
        margin="normal"
        required
        fullWidth
        autoComplete="username"
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
      {session && (
        <Button
          onClick={() => signOut()}
          disabled={isSubmitting}
          type="button"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign out
        </Button>
      )}
    </Box>
  );
};

export default LoginForm;
