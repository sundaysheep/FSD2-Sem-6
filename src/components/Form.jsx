import { 
  TextField, 
  Button, 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Checkbox, 
  FormControlLabel, 
  Radio, 
  RadioGroup, 
  FormControl, 
  FormLabel 
} from '@mui/material';
import { useState } from 'react';

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('female');
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const validate = () => {
    let temp = {};
    if (!email.includes('@')) temp.email = 'Invalid email';
    if (password.length < 6) temp.password = 'Min 6 characters';
    if (!agree) temp.agree = 'You must agree to the terms';

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData({ email, password, gender, agree: agree ? 'Yes' : 'No' });
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', pt: 8 }}>
      <Container maxWidth="sm">
        <Typography variant="h5" gutterBottom align="center">
          Registration Form
        </Typography>

        <form onSubmit={handleSubmit}>
          {/* Text Fields */}
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

          {/* Radio Buttons */}
          <FormControl component="fieldset" sx={{ mt: 2, display: 'block' }}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              row
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>

          {/* Checkbox */}
          <Box sx={{ mt: 1 }}>
            <FormControlLabel
              control={
                <Checkbox 
                  checked={agree} 
                  onChange={(e) => setAgree(e.target.checked)} 
                />
              }
              label="I agree to the terms and conditions"
            />
            {errors.agree && (
              <Typography color="error" variant="caption" display="block">
                {errors.agree}
              </Typography>
            )}
          </Box>

          {/* Submit Button */}
          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{ mt: 3 }}
          >
            Submit
          </Button>
        </form>

        {/* Result Table */}
        {submittedData && (
          <Paper elevation={3} sx={{ mt: 4, p: 2 }}>
            <Typography variant="h6" gutterBottom>Submitted Details</Typography>
            <Typography><strong>Email:</strong> {submittedData.email}</Typography>
            <Typography><strong>Password:</strong> {submittedData.password}</Typography>
            <Typography><strong>Gender:</strong> {submittedData.gender}</Typography>
            <Typography><strong>Agreed:</strong> {submittedData.agree}</Typography>
          </Paper>
        )}
      </Container>
    </Box>
  );
}

export default Form;