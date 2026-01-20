import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';  
import { Routes, Route, Link } from 'react-router-dom';
import { react,useState } from 'react';
function ButtonSmallLink({buttonText, linkTo}) {
  return (
    <Button size="small" variant='outlined'><Link to={linkTo}>{buttonText}</Link></Button>
  ) 
}

function ButtonLarge({buttonText}) {
    return (
      <Button size="large" variant='outlined'>{buttonText}</Button>
    )

}

function TextFieldBasic({labelText,width = '100%'}) {
    return (
        <TextField id="textfield-basic" variant="outlined" label={labelText} sx={{ width: width }} />
    )
}

function FormControlRole({width='100px'}) {

    const [role, setRole] = useState('');

    const handleChange = (event) =>{
      setRole(event.target.value);
    }

    return (
      <FormControl>
      <InputLabel id="demo-simple-select-label">Role</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={role}
        label="Role"
        onChange={handleChange}
        sx={{width:width}}
      >
        <MenuItem value={10}>Student</MenuItem>
        <MenuItem value={20}>Teacher</MenuItem>
        <MenuItem value={30}>Admin</MenuItem>
      </Select>
    </FormControl>
    )
}

export {ButtonSmallLink, ButtonLarge, TextFieldBasic, FormControlRole};