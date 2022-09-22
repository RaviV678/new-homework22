import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
// import styles from './Nav.module.css';
// import { margin } from '@mui/system';
import userSchema from "./Valdil";
import * as yup from "yup";



const theme = createTheme();

export default function SignUp() {

const [name ,setName]=React.useState({firstName:'',lastName:'',email:'',password:'',confirmpassword:''})

const handleInput=(e)=>{
  setName(e.target.value)
  const {name , value}= e.target
  setName(...name,(name:value))
  console.log("Data's",name)
}

  const handleSubmit = (event) => {
    event.preventDefault();
    setName(name)
    console.log("Da1",name)
    
  };

  return (
    <ThemeProvider theme={theme}>
    
    <IconButton>
          <CloseIcon/>
    </IconButton>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
       
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        

          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          
            <LockOutlinedIcon />
          </Avatar>
         
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  
                  onChange={handleInput}
                  id="firstName"
                  label="First Name"
                  fullWidth
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  onChange={handleInput}
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  
                  onChange={handleInput}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  onChange={handleInput}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
              required
              fullWidth
              name="confirmpassword"
              
              onChange={handleInput}
              label="Confirm password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box> 
        </Box>
      </Container>
    </ThemeProvider>
  );
}