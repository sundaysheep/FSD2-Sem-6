import { TextField, Button, Container, Typography, Box, Paper } from '@mui/material';
import { useState } from 'react';

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null); // NEW

  const validate = () => {
    let temp = {};
    if (!email.includes('@')) temp.email = 'Invalid email';
    if (password.length < 6) temp.password = 'Min 6 characters';

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData({ email, password }); // store instead of alert
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center', // horizontal center
        pt: 8, // padding top
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h5" gutterBottom align="center">
          Login Form
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={Boolean(errors.email)}
            helperText={errors.email}
          />

          <TextField
            fullWidth
            margin="normal"
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={Boolean(errors.password)}
            helperText={errors.password}
          />

          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </form>

        {/* Show submitted data */}
        {submittedData && (
          <Paper elevation={3} sx={{ mt: 4, p: 2 }}>
            <Typography variant="h6">Submitted Details</Typography>
            <Typography><strong>Email:</strong> {submittedData.email}</Typography>
            <Typography><strong>Password:</strong> {submittedData.password}</Typography>
          </Paper>
        )}
      </Container>
    </Box>
  );
}

export default Form;
