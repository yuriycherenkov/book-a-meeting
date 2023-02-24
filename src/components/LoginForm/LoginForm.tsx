import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { Box, TextField } from "@mui/material";

const LoginForm: React.FC = () => {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
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
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign in
      </Button>
    </Box>
  );
};

export default LoginForm;
